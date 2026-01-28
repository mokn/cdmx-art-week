import { prisma } from "@/lib/db";
import Link from "next/link";
import { Metadata } from "next";

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

// Group events by date
function groupEventsByDate(events: Awaited<ReturnType<typeof getEvents>>) {
  const grouped: Record<string, typeof events> = {};

  for (const event of events) {
    const dateKey = new Date(event.date).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    grouped[dateKey].push(event);
  }

  return grouped;
}

export default async function SchedulePage() {
  const events = await getEvents();
  const groupedEvents = groupEventsByDate(events);
  const dates = Object.keys(groupedEvents);

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "party":
        return "bg-purple-100 text-purple-700";
      case "exhibition":
        return "bg-blue-100 text-blue-700";
      case "gallery":
        return "bg-gray-100 text-gray-700";
      case "performance":
        return "bg-red-100 text-red-700";
      case "talk":
        return "bg-green-100 text-green-700";
      case "workshop":
        return "bg-yellow-100 text-yellow-700";
      case "fair":
        return "bg-indigo-100 text-indigo-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Full Schedule</h1>
        <p className="text-gray-600">
          All Art Week events, organized by day. {events.length} events total.
        </p>
      </div>

      {/* Quick nav for dates */}
      {dates.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {dates.map((date) => (
            <a
              key={date}
              href={`#${date.replace(/\s/g, "-").toLowerCase()}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition"
            >
              {date.split(",")[0]}
            </a>
          ))}
        </div>
      )}

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
        <div className="space-y-12">
          {dates.map((date) => (
            <section key={date} id={date.replace(/\s/g, "-").toLowerCase()}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 sticky top-16 bg-white py-2 border-b border-gray-200">
                {date}
              </h2>
              <div className="space-y-3">
                {groupedEvents[date].map((event) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.slug}`}
                    className={`block p-4 rounded-lg border hover:shadow-md transition ${
                      event.featured
                        ? "border-yellow-400 bg-yellow-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      {/* Time */}
                      <div className="sm:w-24 flex-shrink-0">
                        <span className="text-lg font-semibold text-gray-900">
                          {formatTime(event.date)}
                        </span>
                      </div>

                      {/* Event details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {event.featured && (
                            <span className="text-xs font-bold text-yellow-700 bg-yellow-200 px-2 py-0.5 rounded">
                              FEATURED
                            </span>
                          )}
                          <span className={`text-xs font-medium px-2 py-0.5 rounded ${getCategoryColor(event.category)}`}>
                            {event.category}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 truncate">
                          {event.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {event.host} • {event.venue}
                          {event.neighborhood && `, ${event.neighborhood}`}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="sm:w-20 flex-shrink-0 text-right">
                        <span className="font-medium text-gray-900">
                          {event.price || "Free"}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Legend */}
      <div className="mt-12 p-6 bg-gray-50 rounded-xl">
        <h3 className="font-semibold text-gray-900 mb-3">Event Types</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { cat: "gallery", label: "Gallery" },
            { cat: "exhibition", label: "Exhibition" },
            { cat: "party", label: "Party" },
            { cat: "performance", label: "Performance" },
            { cat: "talk", label: "Talk" },
            { cat: "workshop", label: "Workshop" },
            { cat: "fair", label: "Art Fair" },
          ].map(({ cat, label }) => (
            <span key={cat} className={`text-xs font-medium px-2 py-1 rounded ${getCategoryColor(cat)}`}>
              {label}
            </span>
          ))}
        </div>
      </div>

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
