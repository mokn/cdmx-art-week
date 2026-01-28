import { prisma } from "@/lib/db";
import Link from "next/link";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "The Complete Guide to CDMX Art Week 2026 | Mexico City",
  description: "Everything you need to know about Art Week Mexico City 2026. Zona Maco, Material Art Fair, gallery openings, parties, and insider tips for February 4-9.",
  keywords: [
    "CDMX Art Week 2026",
    "Mexico City Art Week guide",
    "Zona Maco 2026",
    "Material Art Fair",
    "Mexico City art events February",
    "CDMX gallery openings",
    "Art Week parties Mexico City"
  ],
  openGraph: {
    title: "The Complete Guide to CDMX Art Week 2026",
    description: "Everything you need to know about Art Week Mexico City 2026. Zona Maco, gallery openings, parties, and insider tips.",
    url: "https://cdmxartweek.com/guide/art-week-2026",
    type: "article",
  },
};

async function getStats() {
  const totalEvents = await prisma.event.count({ where: { approved: true } });
  const totalParties = await prisma.event.count({ where: { approved: true, category: "party" } });
  const featuredEvents = await prisma.event.findMany({
    where: { approved: true, featured: true },
    orderBy: { date: "asc" },
    take: 5,
  });
  return { totalEvents, totalParties, featuredEvents };
}

export default async function ArtWeekGuidePage() {
  const { totalEvents, totalParties, featuredEvents } = await getStats();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Complete Guide to CDMX Art Week 2026",
    description: "Everything you need to know about Art Week Mexico City 2026",
    datePublished: "2026-01-28",
    author: {
      "@type": "Organization",
      name: "CDMX Art Week",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="min-h-screen">
        {/* Hero */}
        <header className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">The Complete Guide</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              CDMX Art Week 2026: Everything You Need to Know
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Every February, Mexico City transforms into one of the world's most exciting destinations for contemporary art. Here's your insider guide to making the most of it.
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Intro */}
          <section className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              For one week in February, Mexico City becomes the center of the Latin American art world.
              Major collectors fly in from New York and London. Galleries across Roma and San Miguel Chapultepec
              time their best openings. And the city's legendary nightlife scene kicks into overdrive with
              parties that have become destinations in their own right.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This year, we've tracked <strong>{totalEvents} events</strong> across the city—from the main fairs
              to intimate gallery dinners to {totalParties} parties that'll keep you dancing until sunrise.
              Whether you're a serious collector or just want to experience CDMX at its most electric,
              this guide has you covered.
            </p>
          </section>

          {/* Quick Stats */}
          <section className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gray-900">Feb 4-9</div>
              <div className="text-sm text-gray-600 mt-1">Main Week</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gray-900">{totalEvents}</div>
              <div className="text-sm text-gray-600 mt-1">Events</div>
            </div>
            <div className="bg-purple-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-700">{totalParties}</div>
              <div className="text-sm text-purple-600 mt-1">Parties</div>
            </div>
          </section>

          {/* The Fairs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Main Fairs</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                <strong>Zona Maco</strong> is the anchor of the week—Latin America's largest art fair,
                bringing together 200+ galleries from around the world at Centro Citibanamex. This is
                where the big deals happen, where museum directors scout acquisitions, and where you'll
                see everything from blue-chip contemporary to emerging Latin American talent.
              </p>
              <p>
                <strong>Material Art Fair</strong> takes a different approach. Focused on emerging and
                mid-career artists, Material has become the fair for discovering what's next. The energy
                is younger, the work is edgier, and the price points are more accessible.
              </p>
              <p>
                <strong>Salón ACME</strong> rounds out the trio with a focus on Mexican galleries and
                artists. It's the most local of the three, and often where you'll find the most
                interesting conversations about the Mexican art scene specifically.
              </p>
            </div>
          </section>

          {/* Neighborhoods */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Neighborhoods to Know</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">San Miguel Chapultepec</h3>
                <p className="text-gray-600 text-sm mt-1">
                  The gallery district. Kurimanzutto, OMR, and a dozen other top galleries cluster here.
                  Plan a full afternoon to walk the circuit.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Roma & Condesa</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Where you'll eat, drink, and stumble into gallery openings. The neighborhood transforms
                  during Art Week with pop-ups and events in unexpected spaces.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Juárez</h3>
                <p className="text-gray-600 text-sm mt-1">
                  The nightlife epicenter. Looloo, Departamento, and the city's best clubs are here.
                  This is where Art Week's after-dark energy concentrates.
                </p>
              </div>
            </div>
          </section>

          {/* The Parties */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Party Scene</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Let's be honest: for many people, the parties are the point. Art Week has become one
                of the best times to experience Mexico City's world-class nightlife, with international
                DJs, elaborate productions, and crowds that mix art world insiders with local scenesters.
              </p>
              <p>
                <strong>Mayan Warrior</strong>—the Burning Man sound camp turned global phenomenon—typically
                throws one of the week's most anticipated events. Their sound system is legendary, and
                their Art Week parties have become annual pilgrimages for electronic music fans.
              </p>
              <p>
                But don't sleep on the smaller venues. <strong>Looloo</strong> in Juárez has one of the
                best sound systems in the city. <strong>Fünk</strong> in Condesa is intimate and
                queer-friendly. <strong>Departamento</strong> has a rooftop that feels like a secret.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/parties"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
              >
                See all {totalParties} parties →
              </Link>
            </div>
          </section>

          {/* Insider Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Insider Tips</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl">🎫</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Book fair tickets in advance</h3>
                  <p className="text-gray-600 text-sm">Lines get long, especially on opening days. VIP passes are worth it if you're serious.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🚶</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Wear comfortable shoes</h3>
                  <p className="text-gray-600 text-sm">You'll walk miles through fairs and galleries. Save the heels for evening events.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🌙</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Pace yourself</h3>
                  <p className="text-gray-600 text-sm">Art Week is a marathon, not a sprint. The best parties are Thursday-Saturday.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">📱</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Follow this guide</h3>
                  <p className="text-gray-600 text-sm">We'll send daily updates with that day's can't-miss events. No FOMO.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Events */}
          {featuredEvents.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't Miss</h2>
              <div className="space-y-3">
                {featuredEvents.map((event) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.slug}`}
                    className="block p-4 bg-yellow-50 border border-yellow-200 rounded-lg hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{event.name}</h3>
                        <p className="text-sm text-gray-600">{event.host} · {event.venue}</p>
                      </div>
                      <span className="text-xs font-medium text-yellow-700 bg-yellow-200 px-2 py-1 rounded">
                        FEATURED
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Get the Daily Guide</h2>
            <p className="text-gray-300 mb-6">
              We'll send you each day's events, curated picks, and insider tips. No spam, just Art Week.
            </p>
            <Link
              href="/#events"
              className="inline-block px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition"
            >
              Subscribe for Free
            </Link>
          </section>

          {/* Full Schedule Link */}
          <div className="mt-12 text-center">
            <Link
              href="/schedule"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              View the full schedule →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
