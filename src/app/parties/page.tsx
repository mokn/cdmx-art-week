import { prisma } from "@/lib/db";
import Link from "next/link";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Art Week Parties & Nightlife | CDMX Art Week 2026",
  description: "Complete guide to parties and nightlife during Mexico City Art Week 2026. Mayan Warrior, Giegling, gallery openings, afterparties, and the best clubs in CDMX.",
  keywords: ["CDMX Art Week parties", "Mexico City art week nightlife", "Zona Maco parties", "Mayan Warrior Mexico City", "Giegling CDMX"],
  openGraph: {
    title: "Art Week Parties & Nightlife | CDMX Art Week 2026",
    description: "Complete guide to parties and nightlife during Mexico City Art Week 2026.",
    url: "https://cdmxartweek.com/parties",
  },
};

async function getParties() {
  return prisma.event.findMany({
    where: {
      approved: true,
      category: "party",
    },
    orderBy: { date: "asc" },
  });
}

export default async function PartiesPage() {
  const parties = await getParties();

  const groupByDate = (events: typeof parties) => {
    const grouped: Record<string, typeof events> = {};
    for (const event of events) {
      const dateKey = new Date(event.date).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        timeZone: "America/Mexico_City",
      });
      if (!grouped[dateKey]) grouped[dateKey] = [];
      grouped[dateKey].push(event);
    }
    return grouped;
  };

  const groupedParties = groupByDate(parties);
  const dates = Object.keys(groupedParties);

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Mexico_City",
    });
  };

  const featuredParties = parties.filter(p => p.featured);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-purple-300 uppercase tracking-widest text-sm mb-4">CDMX Art Week 2026</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Parties & Nightlife
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            From underground techno to exclusive gallery afterparties. {parties.length} events across Mexico City.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Featured Parties */}
        {featuredParties.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">⭐</span> Must-Attend Parties
            </h2>
            <div className="grid gap-4">
              {featuredParties.map((party) => (
                <Link
                  key={party.id}
                  href={`/events/${party.slug}`}
                  className="block p-6 rounded-xl border-2 border-purple-400 bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-lg transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {party.imageUrl && (
                      <div className="w-full md:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={party.imageUrl}
                          alt={party.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded mb-2 inline-block">
                        FEATURED
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{party.name}</h3>
                      <p className="text-gray-600 mb-2">{party.host}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                        <span>
                          {new Date(party.date).toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                            timeZone: "America/Mexico_City",
                          })}
                        </span>
                        <span>•</span>
                        <span>{formatTime(party.date)}</span>
                        <span>•</span>
                        <span>{party.venue}</span>
                        {party.price && (
                          <>
                            <span>•</span>
                            <span className="font-medium text-gray-900">{party.price}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Parties by Date */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Party Schedule</h2>

          {/* Date quick nav */}
          <div className="mb-8 flex flex-wrap gap-2">
            {dates.map((date) => (
              <a
                key={date}
                href={`#${date.replace(/\s/g, "-").toLowerCase()}`}
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition"
              >
                {date.split(",")[0]}
              </a>
            ))}
          </div>

          <div className="space-y-10">
            {dates.map((date) => (
              <div key={date} id={date.replace(/\s/g, "-").toLowerCase()}>
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-200">
                  {date}
                  <span className="text-base font-normal text-gray-500 ml-2">
                    ({groupedParties[date].length} {groupedParties[date].length === 1 ? "party" : "parties"})
                  </span>
                </h3>
                <div className="space-y-3">
                  {groupedParties[date].map((party) => (
                    <Link
                      key={party.id}
                      href={`/events/${party.slug}`}
                      className={`block p-4 rounded-lg border hover:shadow-md transition ${
                        party.featured
                          ? "border-purple-400 bg-purple-50"
                          : "border-purple-200 bg-white"
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
                          <h4 className="font-semibold text-gray-900">{party.name}</h4>
                          <p className="text-sm text-gray-600">
                            {party.host} • {party.venue}
                            {party.neighborhood && `, ${party.neighborhood}`}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="font-medium text-gray-900">
                            {party.price || "TBA"}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Venue Guide */}
        <section className="mt-16 p-8 bg-gray-900 text-white rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Top Party Venues</h2>
          <p className="text-gray-300 mb-6">
            Mexico City's best clubs come alive during Art Week. Here are the spots you need to know:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Looloo", area: "Juárez", vibe: "Deep house & techno, world-class sound" },
              { name: "Fünk", area: "Condesa", vibe: "Underground basement, queer-friendly" },
              { name: "Brutal", area: "Juárez", vibe: "Warehouse techno, LGBTQIA+" },
              { name: "Japan Monterrey", area: "Roma Norte", vibe: "Three floors, eclectic programming" },
              { name: "Departamento", area: "Juárez", vibe: "Rooftop terrace, live music + DJs" },
              { name: "Frontón Bucareli", area: "Centro", vibe: "Historic venue, big events" },
            ].map((venue) => (
              <div key={venue.name} className="p-4 bg-gray-800 rounded-lg">
                <h3 className="font-semibold text-white">{venue.name}</h3>
                <p className="text-sm text-gray-400">{venue.area} • {venue.vibe}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Hosting a party during Art Week?</p>
          <Link
            href="/submit"
            className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
          >
            Submit Your Event
          </Link>
        </div>
      </div>
    </main>
  );
}
