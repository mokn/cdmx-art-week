import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email');

  if (!email) {
    return NextResponse.redirect(new URL('/unsubscribe?error=missing-email', request.url));
  }

  try {
    // Check if subscriber exists
    const subscriber = await prisma.emailSubscriber.findUnique({
      where: { email },
    });

    if (!subscriber) {
      return NextResponse.redirect(new URL('/unsubscribe?status=not-found', request.url));
    }

    // Delete subscriber
    await prisma.emailSubscriber.delete({
      where: { email },
    });

    return NextResponse.redirect(new URL('/unsubscribe?status=success', request.url));
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.redirect(new URL('/unsubscribe?error=failed', request.url));
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    const subscriber = await prisma.emailSubscriber.findUnique({
      where: { email },
    });

    if (!subscriber) {
      return NextResponse.json({ error: 'Email not found' }, { status: 404 });
    }

    await prisma.emailSubscriber.delete({
      where: { email },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.json({ error: 'Failed to unsubscribe' }, { status: 500 });
  }
}
