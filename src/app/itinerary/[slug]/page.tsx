import { prisma } from "@/lib/db";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CopyToItinerary from "@/components/CopyToItinerary";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const itinerary = await prisma.itinerary.findUnique({
    where: { slug },
  });

  if (!itinerary) {
    return { title: "Itinerary Not Found" };
  }

  const eventCount = itinerary.eventIds.length;
  const title = itinerary.name || "Art Week Itinerary";

  return {
    title: `${title} | CDMX Art Week 2026`,
    description: `Check out this Art Week itinerary with ${eventCount} events in Mexico City.`,
    openGraph: {
      title: `${title} - ${eventCount} Events`,
      description: `Someone shared their CDMX Art Week 2026 itinerary with you. ${eventCount} events selected.`,
      url: `https://cdmxartweek.com/itinerary/${slug}`,
    },
  };
}

async function getItinerary(slug: string) {
  const itinerary = await prisma.itinerary.findUnique({
    where: { slug },
  });

  if (!itinerary) return null;

  // Increment view count
  await prisma.itinerary.update({
    where: { slug },
    data: { views: { increment: 1 } },
  });

  const events = await prisma.event.findMany({
    where: {
      id: { in: itinerary.eventIds },
      approved: true,
    },
    orderBy: { date: "asc" },
  });

  return { itinerary, events };
}

export default async function SharedItineraryPage({ params }: Props) {
  const { slug } = await params;
  const data = await getItinerary(slug);

  if (!data) {
    notFound();
  }

  const { itinerary, events } = data;

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Mexico_City",
    });
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      timeZone: "America/Mexico_City",
    });
  };

  // Group events by date
  const groupedEvents = events.reduce((acc, event) => {
    const dateKey = formatDate(event.date);
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

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
      case "fair":
        return "bg-indigo-100 text-indigo-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">Shared Itinerary</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {itinerary.name || "Art Week Itinerary"}
          </h1>
          <div className="flex justify-center gap-6 text-lg mb-6">
            <span>
              <span className="font-bold text-white">{events.length}</span>
              <span className="text-gray-400 ml-1">Events</span>
            </span>
            <span>
              <span className="font-bold text-white">{Object.keys(groupedEvents).length}</span>
              <span className="text-gray-400 ml-1">Days</span>
            </span>
          </div>
          <CopyToItinerary eventIds={itinerary.eventIds} />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {events.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-xl">
            <p className="text-gray-600 text-lg mb-4">This itinerary has no events.</p>
            <Link
              href="/schedule"
              className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              Browse Events
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedEvents).map(([date, dayEvents]) => (
              <div key={date}>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">
                  {date}
                </h2>
                <div className="space-y-3">
                  {dayEvents.map((event) => (
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
                            {event.host} &bull; {event.venue}
                            {event.neighborhood && `, ${event.neighborhood}`}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Planning your own Art Week?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/schedule"
              className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition"
            >
              Browse All Events
            </Link>
            <Link
              href="/parties"
              className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
            >
              View Parties
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
