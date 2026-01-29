import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { eventIds } = await request.json();

    if (!eventIds || !Array.isArray(eventIds)) {
      return NextResponse.json({ events: [] });
    }

    const events = await prisma.event.findMany({
      where: {
        id: { in: eventIds },
        approved: true,
      },
      select: {
        id: true,
        name: true,
        date: true,
        venue: true,
        category: true,
        slug: true,
      },
      orderBy: { date: "asc" },
    });

    return NextResponse.json({ events });
  } catch (error) {
    console.error("Error fetching itinerary events:", error);
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}
