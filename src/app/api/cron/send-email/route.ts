import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import {
  generateBurningManEmailHtml,
  generateDailyEmailHtml,
  sendBatchEmails
} from '@/lib/email';

// Verify the request is from Vercel Cron
function verifyCronRequest(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  if (authHeader === `Bearer ${process.env.CRON_SECRET}`) {
    return true;
  }
  // Also allow in development
  if (process.env.NODE_ENV === 'development') {
    return true;
  }
  return false;
}

export async function GET(request: NextRequest) {
  // Verify this is a legitimate cron request
  if (!verifyCronRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const today = new Date();
    const month = today.getMonth() + 1; // 1-indexed
    const day = today.getDate();

    let html: string;
    let subject: string;

    // Jan 31 - Burning Man email
    if (month === 1 && day === 31) {
      html = generateBurningManEmailHtml();
      subject = "What Burning Man Taught Me About Art Week";
    }
    // Feb 4-9 - Daily event emails
    else if (month === 2 && day >= 4 && day <= 9) {
      const startOfDay = new Date(today);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(today);
      endOfDay.setHours(23, 59, 59, 999);

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

      const dayOfWeek = today.toLocaleDateString('en-US', {
        weekday: 'long',
        timeZone: 'America/Mexico_City'
      });
      const dateStr = today.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        timeZone: 'America/Mexico_City'
      });

      html = generateDailyEmailHtml({
        date: dateStr,
        dayOfWeek,
        events,
      });

      subject = `${dayOfWeek}'s Art Week Guide - ${events.length} Events Today`;
    }
    // No email scheduled for today
    else {
      return NextResponse.json({
        success: true,
        message: 'No email scheduled for today',
        date: today.toISOString(),
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
      message: `Sent "${subject}" to ${emails.length} subscribers`,
      results,
    });

  } catch (error) {
    console.error('Cron email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: String(error) },
      { status: 500 }
    );
  }
}
