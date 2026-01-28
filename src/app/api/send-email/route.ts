import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { generateDailyEmailHtml, sendBatchEmails, sendDailyEmail } from '@/lib/email';

// Simple auth check - in production use a proper secret
const API_SECRET = process.env.EMAIL_API_SECRET || 'artweek2026';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { secret, date, testEmail, subject: customSubject, previewText } = body;

    // Auth check
    if (secret !== API_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse the target date
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

    // Format date strings
    const dayOfWeek = targetDate.toLocaleDateString('en-US', { weekday: 'long' });
    const dateStr = targetDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

    // Generate email HTML
    const html = generateDailyEmailHtml({
      date: dateStr,
      dayOfWeek,
      events,
      previewText,
    });

    const subject = customSubject || `${dayOfWeek}'s Art Week Guide - ${events.length} Events Today`;

    // If test email, send only to that address
    if (testEmail) {
      const result = await sendDailyEmail([testEmail], subject, html);
      return NextResponse.json({
        success: true,
        message: `Test email sent to ${testEmail}`,
        eventCount: events.length,
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
        eventCount: events.length
      });
    }

    // Send to all subscribers
    const emails = subscribers.map(s => s.email);
    const results = await sendBatchEmails(emails, subject, html);

    return NextResponse.json({
      success: true,
      message: `Sent to ${emails.length} subscribers`,
      eventCount: events.length,
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
