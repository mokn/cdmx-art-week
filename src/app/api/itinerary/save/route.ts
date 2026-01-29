import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

export async function POST(request: Request) {
  try {
    const { eventIds, email, name } = await request.json();

    if (!eventIds || !Array.isArray(eventIds) || eventIds.length === 0) {
      return NextResponse.json({ error: "No events provided" }, { status: 400 });
    }

    // Generate a unique slug
    const slug = nanoid(10);

    // Create the itinerary
    const itinerary = await prisma.itinerary.create({
      data: {
        slug,
        email: email || null,
        name: name || null,
        eventIds,
      },
    });

    // Also subscribe the email if provided
    if (email) {
      try {
        await prisma.emailSubscriber.create({
          data: { email },
        });
      } catch {
        // Email might already exist, that's fine
      }
    }

    return NextResponse.json({ slug: itinerary.slug });
  } catch (error) {
    console.error("Error saving itinerary:", error);
    return NextResponse.json({ error: "Failed to save itinerary" }, { status: 500 });
  }
}
