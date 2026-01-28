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
  const submissions = await prisma.eventSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(submissions);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, action } = body;

    if (action === "approve") {
      // Get the submission
      const submission = await prisma.eventSubmission.findUnique({
        where: { id },
      });

      if (!submission) {
        return NextResponse.json(
          { error: "Submission not found" },
          { status: 404 }
        );
      }

      // Create the event
      await prisma.event.create({
        data: {
          name: submission.name,
          description: submission.description,
          host: submission.host,
          date: submission.date,
          venue: submission.venue,
          address: submission.address,
          neighborhood: submission.neighborhood,
          price: submission.price,
          ticketUrl: submission.ticketUrl,
          category: submission.category,
          imageUrl: submission.imageUrl,
          featured: false,
          approved: true,
          source: "submitted",
          slug: generateSlug(submission.name),
        },
      });

      // Update submission status
      await prisma.eventSubmission.update({
        where: { id },
        data: { status: "approved" },
      });

      return NextResponse.json({ success: true });
    } else if (action === "reject") {
      await prisma.eventSubmission.update({
        where: { id },
        data: { status: "rejected" },
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Failed to process submission:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
