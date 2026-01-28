import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      )
    }

    // Check if already subscribed
    const existing = await prisma.emailSubscriber.findUnique({
      where: { email },
    })

    if (existing) {
      return NextResponse.json(
        { error: 'You\'re already subscribed!' },
        { status: 400 }
      )
    }

    await prisma.emailSubscriber.create({
      data: { email },
    })

    // Get total subscriber count
    const totalSubscribers = await prisma.emailSubscriber.count()

    // Send notification to admin
    try {
      await resend.emails.send({
        from: 'CDMX Art Week <michael@cdmxartweek.com>',
        to: 'michael@cdmxartweek.com',
        subject: `New subscriber: ${email}`,
        html: `
          <p>New email signup for CDMX Art Week!</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Total subscribers:</strong> ${totalSubscribers}</p>
        `,
      })
    } catch (e) {
      // Don't fail the subscription if notification fails
      console.error('Failed to send notification:', e)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
