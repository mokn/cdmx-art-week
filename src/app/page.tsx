import { prisma } from "@/lib/db";
import Link from "next/link";
import { Metadata } from "next";
import EmailSignup from "@/components/EmailSignup";
import ScheduleFilter from "@/components/ScheduleFilter";
import AddToItinerary from "@/components/AddToItinerary";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "CDMX Art Week 2026 | Mexico City Art Events Guide",
  description: "Complete schedule of Art Week Mexico City 2026. Gallery openings, exhibitions, parties, performances, and cultural events across CDMX. February 2-9, 2026.",
  keywords: ["Art Week", "Mexico City", "CDMX", "Zona Maco", "art events", "gallery openings", "exhibitions", "2026"],
  openGraph: {
    title: "CDMX Art Week 2026 | Mexico City Art Events Guide",
    description: "Complete schedule of Art Week Mexico City 2026. Gallery openings, exhibitions, parties, and cultural events.",
    url: "https://cdmxartweek.com",
    siteName: "CDMX Art Week",
    locale: "en_US",
    type: "website",
  },
};

async function getEvents() {
  return prisma.event.findMany({
    where: { approved: true },
    orderBy: { date: "asc" },
  });
}

async function getFeaturedEvents() {
  const featured = await prisma.event.findMany({
    where: { approved: true, featured: true },
    orderBy: { date: "asc" },
  });

  // Ensure "A Night in the Floating World" is always included
  const floatingWorld = featured.find(e => e.name.includes("Floating World"));
  const others = featured.filter(e => !e.name.includes("Floating World"));

  if (floatingWorld) {
    return [floatingWorld, ...others.slice(0, 2)];
  }
  return featured.slice(0, 3);
}

export default async function Home() {
  const [events, featuredEvents] = await Promise.all([
    getEvents(),
    getFeaturedEvents(),
  ]);

  const formatFeaturedDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: "America/Mexico_City",
    });
  };

  return (
    <main>
      {/* Navigation Bar */}
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-1">
              <Link
                href="/guide"
                className="px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition"
              >
                Guides
              </Link>
              <Link
                href="/blog"
                className="px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition"
              >
                Blog
              </Link>
              <Link
                href="/itinerary"
                className="px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition"
              >
                My Itinerary
              </Link>
            </div>
            <Link
              href="/submit"
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition"
            >
              Submit Event
            </Link>
          </div>
        </div>
      </nav>

      {/* Compact Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-gray-400 uppercase tracking-widest text-xs mb-1">February 2-9, 2026</p>
              <h1 className="text-3xl md:text-4xl font-bold">CDMX Art Week</h1>
              <p className="text-gray-400 mt-1">{events.length} events across Mexico City</p>
            </div>
            <div className="flex-shrink-0">
              <EmailSignup />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Featured Events - Compact Row */}
        {featuredEvents.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Featured</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {featuredEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  className="group flex gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg hover:shadow-md transition"
                >
                  {event.imageUrl && (
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={event.imageUrl}
                        alt={event.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-blue-600 transition line-clamp-2">
                      {event.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{formatFeaturedDate(event.date)}</p>
                    <div className="mt-1">
                      <AddToItinerary eventId={event.id} size="sm" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Itinerary CTA - Subtle inline */}
        <div className="mb-6 p-3 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Build your itinerary:</span> Click the blue button on any event to save it
            </p>
          </div>
        </div>

        {/* Main Schedule */}
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
        <div className="mt-12 p-6 bg-gray-50 rounded-xl text-center">
          <p className="text-gray-600 mb-3">Hosting an event during Art Week?</p>
          <Link
            href="/submit"
            className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition"
          >
            Submit Your Event
          </Link>
        </div>
      </div>
    </main>
  );
}
