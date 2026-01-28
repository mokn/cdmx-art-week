import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .substring(0, 50) + "-" + Date.now().toString(36);
}

export async function GET() {
  const events = await prisma.event.findMany({
    orderBy: { date: "asc" },
  });
  return NextResponse.json(events);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const event = await prisma.event.create({
      data: {
        name: body.name,
        description: body.description,
        host: body.host,
        date: new Date(body.date),
        endDate: body.endDate ? new Date(body.endDate) : null,
        venue: body.venue,
        address: body.address,
        neighborhood: body.neighborhood || null,
        price: body.price || null,
        ticketUrl: body.ticketUrl || null,
        category: body.category,
        imageUrl: body.imageUrl || null,
        featured: body.featured || false,
        approved: true,
        source: "manual",
        slug: generateSlug(body.name),
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.error("Failed to create event:", error);
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();

    const event = await prisma.event.update({
      where: { id: body.id },
      data: {
        featured: body.featured,
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.error("Failed to update event:", error);
    return NextResponse.json(
      { error: "Failed to update event" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();

    await prisma.event.delete({
      where: { id: body.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete event:", error);
    return NextResponse.json(
      { error: "Failed to delete event" },
      { status: 500 }
    );
  }
}
