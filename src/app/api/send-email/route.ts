import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { generateDailyEmailHtml, generateCountdownEmailHtml, generateBurningManEmailHtml, sendBatchEmails, sendDailyEmail } from '@/lib/email';

// Simple auth check - in production use a proper secret
const API_SECRET = process.env.EMAIL_API_SECRET || 'artweek2026';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { secret, date, testEmail, subject: customSubject, previewText, type } = body;

    // Auth check
    if (secret !== API_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let html: string;
    let subject: string;
    let eventCount = 0;

    // Handle burning-man email type (Email #1 - Jan 31)
    if (type === 'burning-man') {
      html = generateBurningManEmailHtml();
      subject = customSubject || "What Burning Man Taught Me About Art Week";

      // If test email, send only to that address
      if (testEmail) {
        const result = await sendDailyEmail([testEmail], subject, html);
        return NextResponse.json({
          success: true,
          message: `Test email sent to ${testEmail}`,
          result
        });
      }

      // Get all subscribers
      const subscribers = await prisma.emailSubscriber.findMany({
        select: { email: true },
      });

      if (subscribers.length === 0) {
        return NextResponse.json({
          success: true,
          message: 'No subscribers to send to',
        });
      }

      // Send to all subscribers
      const emails = subscribers.map(s => s.email);
      const results = await sendBatchEmails(emails, subject, html);

      return NextResponse.json({
        success: true,
        message: `Sent to ${emails.length} subscribers`,
        results
      });
    }

    // Handle countdown email type
    if (type === 'countdown') {
      const artWeekStart = new Date('2026-02-04');
      const today = new Date();
      const daysUntil = Math.ceil((artWeekStart.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

      // Get total counts
      const totalEvents = await prisma.event.count({ where: { approved: true } });
      const totalParties = await prisma.event.count({ where: { approved: true, category: 'party' } });

      eventCount = totalEvents;

      html = generateCountdownEmailHtml({
        daysUntil,
        totalEvents,
        totalParties,
        previewText,
      });

      subject = customSubject || `${daysUntil} Days Until Art Week - ${totalEvents} Events Await`;
    } else {
      // Daily email (default)
      const targetDate = date ? new Date(date) : new Date();
      const startOfDay = new Date(targetDate);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(targetDate);
      endOfDay.setHours(23, 59, 59, 999);

      // Get events for the day
      const events = await prisma.event.findMany({
        where: {
          approved: true,
          date: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
        orderBy: { date: 'asc' },
      });

      eventCount = events.length;

      // Format date strings
      const dayOfWeek = targetDate.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'America/Mexico_City' });
      const dateStr = targetDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', timeZone: 'America/Mexico_City' });

      html = generateDailyEmailHtml({
        date: dateStr,
        dayOfWeek,
        events,
        previewText,
      });

      subject = customSubject || `${dayOfWeek}'s Art Week Guide - ${events.length} Events Today`;
    }

    // If test email, send only to that address
    if (testEmail) {
      const result = await sendDailyEmail([testEmail], subject, html);
      return NextResponse.json({
        success: true,
        message: `Test email sent to ${testEmail}`,
        eventCount,
        result
      });
    }

    // Get all subscribers
    const subscribers = await prisma.emailSubscriber.findMany({
      select: { email: true },
    });

    if (subscribers.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No subscribers to send to',
        eventCount
      });
    }

    // Send to all subscribers
    const emails = subscribers.map(s => s.email);
    const results = await sendBatchEmails(emails, subject, html);

    return NextResponse.json({
      success: true,
      message: `Sent to ${emails.length} subscribers`,
      eventCount,
      results
    });

  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: String(error) },
      { status: 500 }
    );
  }
}
