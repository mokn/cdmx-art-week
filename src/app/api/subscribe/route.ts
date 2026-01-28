import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

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

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
