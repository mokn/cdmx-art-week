import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { Resend } from "resend";

let resendClient: Resend | null = null;
function getResend(): Resend {
  if (!resendClient) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

export async function POST(request: Request) {
  try {
    const { eventIds, email, name, emoji } = await request.json();

    if (!eventIds || !Array.isArray(eventIds) || eventIds.length === 0) {
      return NextResponse.json({ error: "No events provided" }, { status: 400 });
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    if (!name || name.trim().length === 0) {
      return NextResponse.json({ error: "Name required" }, { status: 400 });
    }

    if (!emoji) {
      return NextResponse.json({ error: "Please pick an emoji" }, { status: 400 });
    }

    // Generate a unique slug
    const slug = nanoid(10);

    // Format the itinerary name
    const itineraryName = `${emoji} ${name.trim()}'s Itinerary`;

    // Create the itinerary
    const itinerary = await prisma.itinerary.create({
      data: {
        slug,
        email,
        name: itineraryName,
        eventIds,
      },
    });

    // Subscribe the email (ignore if already exists)
    let isNewSubscriber = false;
    try {
      await prisma.emailSubscriber.create({
        data: { email },
      });
      isNewSubscriber = true;
    } catch {
      // Email already exists
    }

    // Get events for the email
    const events = await prisma.event.findMany({
      where: { id: { in: eventIds } },
      orderBy: { date: "asc" },
      select: { name: true, date: true, venue: true },
    });

    const itineraryUrl = `https://cdmxartweek.com/itinerary/${slug}`;

    // Send welcome email with itinerary
    try {
      const eventList = events
        .map((e) => {
          const date = new Date(e.date).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            timeZone: "America/Mexico_City",
          });
          return `<li style="margin-bottom: 8px;"><strong>${e.name}</strong><br/><span style="color: #666;">${date} at ${e.venue}</span></li>`;
        })
        .join("");

      await getResend().emails.send({
        from: "CDMX Art Week <michael@cdmxartweek.com>",
        to: email,
        subject: `${emoji} Your Art Week Itinerary is Ready!`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="font-size: 24px; margin-bottom: 8px;">${itineraryName}</h1>
            <p style="color: #666; margin-bottom: 24px;">You've got ${events.length} events planned for Art Week 2026!</p>

            <a href="${itineraryUrl}" style="display: inline-block; background: #111; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin-bottom: 24px;">View Your Itinerary</a>

            <h2 style="font-size: 18px; margin-top: 32px; margin-bottom: 16px;">Your Events:</h2>
            <ul style="list-style: none; padding: 0;">
              ${eventList}
            </ul>

            <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />

            <p style="color: #666; font-size: 14px;">
              Share your itinerary with friends: <a href="${itineraryUrl}">${itineraryUrl}</a>
            </p>

            <p style="color: #999; font-size: 12px; margin-top: 24px;">
              You're now subscribed to CDMX Art Week updates. We'll send you the best events and parties during Art Week.
            </p>
          </div>
        `,
      });

      // Notify admin of new itinerary
      const totalSubscribers = await prisma.emailSubscriber.count();
      const totalItineraries = await prisma.itinerary.count();

      await getResend().emails.send({
        from: "CDMX Art Week <michael@cdmxartweek.com>",
        to: "michael@cdmxartweek.com",
        subject: `${emoji} New itinerary: ${name} (${events.length} events)`,
        html: `
          <p><strong>New itinerary created!</strong></p>
          <p>Name: ${itineraryName}</p>
          <p>Email: ${email} ${isNewSubscriber ? "(NEW SUBSCRIBER)" : "(existing)"}</p>
          <p>Events: ${events.length}</p>
          <p>Link: <a href="${itineraryUrl}">${itineraryUrl}</a></p>
          <hr/>
          <p>Total subscribers: ${totalSubscribers}</p>
          <p>Total itineraries: ${totalItineraries}</p>
        `,
      });
    } catch (e) {
      console.error("Failed to send email:", e);
      // Don't fail the save if email fails
    }

    return NextResponse.json({ slug: itinerary.slug });
  } catch (error) {
    console.error("Error saving itinerary:", error);
    return NextResponse.json({ error: "Failed to save itinerary" }, { status: 500 });
  }
}
