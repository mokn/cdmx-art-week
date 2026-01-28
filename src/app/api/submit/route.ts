import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    const required = ['submitterEmail', 'name', 'description', 'host', 'date', 'venue', 'address', 'category']
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    const submission = await prisma.eventSubmission.create({
      data: {
        submitterEmail: data.submitterEmail,
        submitterName: data.submitterName || null,
        name: data.name,
        description: data.description,
        host: data.host,
        date: new Date(data.date),
        venue: data.venue,
        address: data.address,
        neighborhood: data.neighborhood || null,
        price: data.price || null,
        ticketUrl: data.ticketUrl || null,
        category: data.category,
        imageUrl: data.imageUrl || null,
      },
    })

    return NextResponse.json({ success: true, id: submission.id })
  } catch (error) {
    console.error('Submit error:', error)
    return NextResponse.json(
      { error: 'Failed to submit event' },
      { status: 500 }
    )
  }
}
