import { prisma } from "@/lib/db";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import EmailSignup from "@/components/EmailSignup";
import AddToItinerary from "@/components/AddToItinerary";

export const dynamic = "force-dynamic";

// Valid date slugs for Art Week 2026
const VALID_DATES: Record<string, { month: number; day: number; label: string }> = {
  "february-2": { month: 2, day: 2, label: "February 2" },
  "february-3": { month: 2, day: 3, label: "February 3" },
  "february-4": { month: 2, day: 4, label: "February 4" },
  "february-5": { month: 2, day: 5, label: "February 5" },
  "february-6": { month: 2, day: 6, label: "February 6" },
  "february-7": { month: 2, day: 7, label: "February 7" },
  "february-8": { month: 2, day: 8, label: "February 8" },
  "february-9": { month: 2, day: 9, label: "February 9" },
};

interface Props {
  params: Promise<{ date: string }>;
}

export async function generateStaticParams() {
  return Object.keys(VALID_DATES).map((date) => ({ date }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params;
  const dateInfo = VALID_DATES[date];

  if (!dateInfo) {
    return { title: "Not Found" };
  }

  const dayOfWeek = new Date(2026, dateInfo.month - 1, dateInfo.day).toLocaleDateString("en-US", { weekday: "long" });

  return {
    title: `${dayOfWeek}, ${dateInfo.label} Events | CDMX Art Week 2026`,
    description: `Complete schedule of Art Week Mexico City events on ${dayOfWeek}, ${dateInfo.label}, 2026. Gallery openings, exhibitions, parties, and performances.`,
    keywords: [`CDMX Art Week ${dateInfo.label}`, `Mexico City art events ${dayOfWeek}`, `Zona Maco ${dateInfo.label}`],
    openGraph: {
      title: `${dayOfWeek}, ${dateInfo.label} | CDMX Art Week 2026`,
      description: `All events happening on ${dayOfWeek}, ${dateInfo.label} during Art Week Mexico City.`,
      url: `https://cdmxartweek.com/schedule/${date}`,
    },
  };
}

async function getEventsForDate(month: number, day: number) {
  const startOfDay = new Date(2026, month - 1, day, 0, 0, 0);
  const endOfDay = new Date(2026, month - 1, day, 23, 59, 59);

  return prisma.event.findMany({
    where: {
      approved: true,
      date: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
    orderBy: { date: "asc" },
  });
}

export default async function DailySchedulePage({ params }: Props) {
  const { date } = await params;
  const dateInfo = VALID_DATES[date];

  if (!dateInfo) {
    notFound();
  }

  const events = await getEventsForDate(dateInfo.month, dateInfo.day);
  const dayOfWeek = new Date(2026, dateInfo.month - 1, dateInfo.day).toLocaleDateString("en-US", { weekday: "long" });

  const artEvents = events.filter((e) => e.category !== "party");
  const parties = events.filter((e) => e.category === "party");

  const formatTime = (d: Date) => {
    return new Date(d).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Mexico_City",
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

  // Get adjacent dates for navigation
  const dateKeys = Object.keys(VALID_DATES);
  const currentIndex = dateKeys.indexOf(date);
  const prevDate = currentIndex > 0 ? dateKeys[currentIndex - 1] : null;
  const nextDate = currentIndex < dateKeys.length - 1 ? dateKeys[currentIndex + 1] : null;

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">CDMX Art Week 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {dayOfWeek}, {dateInfo.label}
          </h1>
          <div className="flex justify-center gap-6 text-lg">
            <span>
              <span className="font-bold text-white">{events.length}</span>
              <span className="text-gray-400 ml-1">Events</span>
            </span>
            <span>
              <span className="font-bold text-white">{artEvents.length}</span>
              <span className="text-gray-400 ml-1">Art</span>
            </span>
            <span>
              <span className="font-bold text-purple-400">{parties.length}</span>
              <span className="text-gray-400 ml-1">Parties</span>
            </span>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center border-b">
        {prevDate ? (
          <Link
            href={`/schedule/${prevDate}`}
            className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
          >
            <span>&larr;</span> {VALID_DATES[prevDate].label}
          </Link>
        ) : (
          <span />
        )}
        <Link href="/schedule" className="text-blue-600 hover:text-blue-700 font-medium">
          Full Schedule
        </Link>
        {nextDate ? (
          <Link
            href={`/schedule/${nextDate}`}
            className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
          >
            {VALID_DATES[nextDate].label} <span>&rarr;</span>
          </Link>
        ) : (
          <span />
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {events.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-xl">
            <p className="text-gray-600 text-lg mb-4">No events scheduled for this day yet.</p>
            <Link
              href="/schedule"
              className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              View Full Schedule
            </Link>
          </div>
        ) : (
          <>
            {/* Art Events */}
            {artEvents.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Art Events
                  <span className="text-base font-normal text-gray-500 ml-2">
                    ({artEvents.length})
                  </span>
                </h2>
                <div className="space-y-3">
                  {artEvents.map((event) => (
                    <Link
                      key={event.id}
                      href={`/events/${event.slug}`}
                      className={`block p-4 rounded-lg border hover:shadow-md transition ${
                        event.featured
                          ? "border-yellow-400 bg-yellow-50"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {event.imageUrl && (
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 hidden sm:block">
                            <img
                              src={event.imageUrl}
                              alt={event.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg font-semibold text-gray-900">
                              {formatTime(event.date)}
                            </span>
                            {event.featured && (
                              <span className="text-xs font-bold text-yellow-700 bg-yellow-200 px-2 py-0.5 rounded">
                                FEATURED
                              </span>
                            )}
                            <span
                              className={`text-xs font-medium px-2 py-0.5 rounded ${getCategoryColor(
                                event.category
                              )}`}
                            >
                              {event.category}
                            </span>
                          </div>
                          <h3 className="font-semibold text-gray-900">{event.name}</h3>
                          <p className="text-sm text-gray-600">
                            {event.host} • {event.venue}
                            {event.neighborhood && `, ${event.neighborhood}`}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="font-medium text-gray-900">
                            {event.price || "Free"}
                          </span>
                          <AddToItinerary eventId={event.id} size="sm" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Email Signup - between sections */}
            <div className="my-8 p-4 bg-gray-900 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-white text-sm font-medium">Get daily picks in your inbox</p>
                <EmailSignup />
              </div>
            </div>

            {/* Parties */}
            {parties.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-2xl">🎉</span> Tonight&apos;s Parties
                  <span className="text-base font-normal text-gray-500">
                    ({parties.length})
                  </span>
                </h2>
                <div className="space-y-3">
                  {parties.map((party) => (
                    <Link
                      key={party.id}
                      href={`/events/${party.slug}`}
                      className={`block p-4 rounded-lg border hover:shadow-md transition ${
                        party.featured
                          ? "border-purple-400 bg-purple-100"
                          : "border-purple-200 bg-purple-50"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {party.imageUrl && (
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 hidden sm:block">
                            <img
                              src={party.imageUrl}
                              alt={party.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg font-semibold text-purple-600">
                              {formatTime(party.date)}
                            </span>
                            {party.featured && (
                              <span className="text-xs font-bold text-purple-700 bg-purple-200 px-2 py-0.5 rounded">
                                FEATURED
                              </span>
                            )}
                          </div>
                          <h3 className="font-semibold text-gray-900">{party.name}</h3>
                          <p className="text-sm text-gray-600">
                            {party.host} • {party.venue}
                            {party.neighborhood && `, ${party.neighborhood}`}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="font-medium text-gray-900">
                            {party.price || "TBA"}
                          </span>
                          <AddToItinerary eventId={party.id} size="sm" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Planning your Art Week?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/parties"
              className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
            >
              View All Parties
            </Link>
            <Link
              href="/schedule"
              className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition"
            >
              Full Schedule
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
