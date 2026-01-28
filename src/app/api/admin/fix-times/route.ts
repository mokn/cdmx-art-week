import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

// One-time fix: add 6 hours to all event times to convert from
// "stored as local time" to proper UTC (Mexico City is UTC-6)
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Simple auth
    if (body.secret !== "artweek2026") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const events = await prisma.event.findMany();

    const updates = await Promise.all(
      events.map(async (event) => {
        // Add 6 hours to convert local Mexico City time to UTC
        const correctedDate = new Date(event.date.getTime() + 6 * 60 * 60 * 1000);
        const correctedEndDate = event.endDate
          ? new Date(event.endDate.getTime() + 6 * 60 * 60 * 1000)
          : null;

        return prisma.event.update({
          where: { id: event.id },
          data: {
            date: correctedDate,
            endDate: correctedEndDate,
          },
        });
      })
    );

    return NextResponse.json({
      success: true,
      message: `Fixed times for ${updates.length} events`,
      sample: updates.slice(0, 3).map(e => ({ name: e.name, date: e.date })),
    });
  } catch (error) {
    console.error("Failed to fix times:", error);
    return NextResponse.json(
      { error: "Failed to fix times", details: String(error) },
      { status: 500 }
    );
  }
}
