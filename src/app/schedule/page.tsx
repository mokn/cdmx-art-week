import { prisma } from "@/lib/db";
import Link from "next/link";
import { Metadata } from "next";
import ScheduleFilter from "@/components/ScheduleFilter";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Full Schedule | CDMX Art Week 2026",
  description: "Complete day-by-day schedule of all Art Week Mexico City 2026 events. Gallery openings, exhibitions, parties, performances, and more.",
};

async function getEvents() {
  return prisma.event.findMany({
    where: { approved: true },
    orderBy: { date: "asc" },
  });
}

export default async function SchedulePage() {
  const events = await getEvents();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Full Schedule</h1>
        <p className="text-gray-600">
          All Art Week events, organized by day. Filter by art events or parties.
        </p>
      </div>

      {events.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-xl">
          <p className="text-gray-600 text-lg mb-4">No events scheduled yet.</p>
          <Link
            href="/submit"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Submit the first event
          </Link>
        </div>
      ) : (
        <ScheduleFilter events={events} />
      )}

      {/* Submit CTA */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">Don&apos;t see your event?</p>
        <Link
          href="/submit"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Submit Your Event
        </Link>
      </div>
    </main>
  );
}
