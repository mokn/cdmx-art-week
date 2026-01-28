import { prisma } from "@/lib/db";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

export const dynamic = "force-dynamic";

async function getEvents() {
  return prisma.event.findMany({
    where: { approved: true },
    orderBy: [
      { featured: "desc" },
      { date: "asc" },
    ],
  });
}

export default async function Home() {
  const events = await getEvents();

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">February 2026</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            CDMX Art Week
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Your complete guide to gallery openings, exhibitions, parties, and cultural events across Mexico City.
          </p>
          <EmailSignup />
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/schedule"
            className="px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition"
          >
            View Full Schedule
          </Link>
          <Link
            href="/submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            + Submit Your Event
          </Link>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
          <Link
            href="/schedule"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            View all →
          </Link>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-xl">
            <p className="text-gray-600 text-lg mb-4">Events coming soon!</p>
            <p className="text-gray-500">Be the first to list your event.</p>
            <Link
              href="/submit"
              className="inline-block mt-6 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              Submit an Event
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className={`group block bg-white rounded-xl border overflow-hidden hover:shadow-lg transition ${
                  event.featured ? "border-yellow-400 ring-2 ring-yellow-400" : "border-gray-200"
                }`}
              >
                {/* Image placeholder */}
                <div className={`h-48 bg-gradient-to-br ${
                  event.category === "party" ? "from-purple-500 to-pink-500" :
                  event.category === "exhibition" ? "from-blue-500 to-cyan-500" :
                  event.category === "gallery" ? "from-gray-700 to-gray-900" :
                  event.category === "performance" ? "from-red-500 to-orange-500" :
                  "from-gray-500 to-gray-700"
                } relative`}>
                  {event.featured && (
                    <span className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                      FEATURED
                    </span>
                  )}
                  {event.imageUrl && (
                    <img
                      src={event.imageUrl}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-gray-500 uppercase">
                      {event.category}
                    </span>
                    {event.neighborhood && (
                      <>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs text-gray-500">{event.neighborhood}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition mb-1">
                    {event.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{event.host}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{formatDate(event.date)}</span>
                    <span className="font-medium text-gray-900">{event.price || "Free"}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hosting an event?</h2>
          <p className="text-gray-600 mb-6">Get your event in front of thousands of art lovers visiting CDMX.</p>
          <Link
            href="/submit"
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium"
          >
            Submit Your Event
          </Link>
        </div>
      </section>
    </main>
  );
}
