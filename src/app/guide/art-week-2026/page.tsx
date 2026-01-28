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
              CDMX Art Week 2026
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Every February, Mexico City becomes one of the most exciting places on earth for contemporary art. Here&apos;s what you actually need to know.
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              For one week, collectors fly in from New York and London. Galleries across Roma and San Miguel Chapultepec time their best openings. And the city&apos;s nightlife—already world-class—goes somewhere else entirely.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We&apos;ve tracked <strong>{totalEvents} events</strong> so far, including <strong>{totalParties} parties</strong>. This guide is the honest version—what&apos;s actually worth your time, what&apos;s overhyped, and where to eat when you need a break from the chaos.
            </p>
          </section>

          {/* The Fairs - Honest Take */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Fairs (An Honest Take)</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Zona Maco</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  The main event. 200+ galleries, serious collectors, blue-chip everything. Here&apos;s the thing though: it&apos;s massive, it&apos;s exhausting, and honestly—one critic put it well—&quot;there&apos;s little to distinguish it from any other art fair.&quot; It&apos;s also inexplicably located between a military base and a horse racing track, far from anything. Go on opening day if you&apos;re buying. Otherwise, don&apos;t kill yourself getting there.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Material Art Fair</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  This is where the interesting stuff happens. Smaller, weirder, more experimental. The work actually surprises you. If you only have time for one fair and you&apos;re not dropping six figures, this is it. At Expo Reforma—much more accessible than Zona Maco&apos;s location.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Salón ACME</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Independent artist selections, beautiful hacienda-like space in Juárez. &quot;The architecture and climate of the host city are on display as much as the objects.&quot; Gets crowded fast—arrive early or get VIP.
                </p>
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-6 italic">
              Pro tip: Arrive early to Material and ACME. Lines get brutal. VIP passes are actually worth it here.
            </p>
          </section>

          {/* Neighborhoods */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Neighborhoods + Where to Eat</h2>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Roma Norte</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Gallery openings, beautiful people, and some of the city&apos;s best food within walking distance. You&apos;ll spend a lot of time here.
                </p>
                <div className="text-sm text-gray-700">
                  <strong>Eat:</strong> Contramar (the seafood spot—get the tuna tostadas), Expendio de Maíz (Michelin-starred but casual, no menu, cash only), Chetito (upscale tacos), ISMO (fondue + a hidden speakeasy called ISMO Sonoro with DJs), Alfil (Arabic-Mexican fusion that&apos;s about to blow up)
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Juárez</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Nightlife central. Salón ACME is here, and so are the best clubs. This is where Art Week&apos;s after-dark energy concentrates.
                </p>
                <div className="text-sm text-gray-700">
                  <strong>Eat:</strong> Makan (Singaporean, moved from Roma and now has proper space), Taller de Ostiones (oysters, absurdly fresh), Leito Café (authentic Cuban, great for breakfast), Kaito del Valle (Japanese speakeasy—entrance through a vending machine, all-female team, recently relocated here)
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Condesa</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Tree-lined streets, Art Deco buildings, slightly more chill than Roma. Good for recovery days.
                </p>
                <div className="text-sm text-gray-700">
                  <strong>Eat:</strong> Fugu Sushi (8 seats, best omakase in the city—book ahead), Restaurante Castizo (Spanish, the seafood rice is worth it)
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">San Miguel Chapultepec</h3>
                <p className="text-gray-600 text-sm mb-4">
                  The gallery district. Kurimanzutto, OMR, Labor, and a dozen others within walking distance. Plan a full afternoon.
                </p>
                <div className="text-sm text-gray-700">
                  <strong>Note:</strong> Not much food here—eat before you come or after in Roma/Condesa.
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Polanco</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Museo Jumex, fancy hotels, collector energy. More polished, less scene.
                </p>
                <div className="text-sm text-gray-700">
                  <strong>Eat:</strong> Asai Kaiseki (one of the top three Japanese restaurants in the city, maybe the best)
                </div>
              </div>
            </div>
          </section>

          {/* The Parties */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Party Scene</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Let&apos;s be real: for a lot of people, the parties are the point. Art Week has become one of the best times to experience Mexico City&apos;s nightlife. The crowds mix art world people with local scenesters. The venues have sound systems that rival anywhere.
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-bold text-gray-900">Mayan Warrior — Friday, Feb 7</h3>
                <p className="text-gray-600 text-sm mt-1">
                  The Burning Man sound camp turned global phenomenon. Their art car burned down last year—this is a fundraiser for the new one. Parque Bicentenario. This is the one everyone talks about.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-bold text-gray-900">Giegling — Saturday, Feb 8</h3>
                <p className="text-gray-600 text-sm mt-1">
                  The legendary German collective. If you know, you know.
                </p>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 mb-3">The Clubs</h3>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="font-medium text-gray-900 w-24 flex-shrink-0">Looloo</div>
                <div className="text-gray-600 text-sm">Juárez. The sound system. Deep house and techno, international + local DJs. This is where you go if you actually want to dance.</div>
              </div>
              <div className="flex gap-4">
                <div className="font-medium text-gray-900 w-24 flex-shrink-0">Fünk</div>
                <div className="text-gray-600 text-sm">Condesa basement. Funktion-One system. Actively queer and trans-friendly—it&apos;s central to their identity, not an afterthought.</div>
              </div>
              <div className="flex gap-4">
                <div className="font-medium text-gray-900 w-24 flex-shrink-0">Departamento</div>
                <div className="text-gray-600 text-sm">Roma Norte. Rooftop + interior. Live music and DJs. &quot;A meeting point for artists and casual attendees seeking authentic experiences over scene-focused nightlife.&quot;</div>
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-6 italic">
              The parties don&apos;t really peak until Thursday-Saturday. Tuesday everyone&apos;s jet-lagged. Wednesday is gallery dinner hell.
            </p>

            <div className="mt-6">
              <Link
                href="/parties"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
              >
                See all {totalParties} parties →
              </Link>
            </div>
          </section>

          {/* Practical Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Stuff</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-xl">📍</div>
                <div>
                  <strong className="text-gray-900">Stay in Roma, Condesa, or Juárez.</strong>
                  <span className="text-gray-600 text-sm block">Close to everything. Polanco if you want fancy hotels.</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">🚗</div>
                <div>
                  <strong className="text-gray-900">Art traffic is brutal.</strong>
                  <span className="text-gray-600 text-sm block">Schedule Ubers ahead. Leave buffer time. Don&apos;t try to do too much in one day.</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">🎫</div>
                <div>
                  <strong className="text-gray-900">VIP passes are worth it for Material and ACME.</strong>
                  <span className="text-gray-600 text-sm block">Lines get long. For Zona Maco it matters less unless you&apos;re buying.</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">👟</div>
                <div>
                  <strong className="text-gray-900">Comfortable shoes.</strong>
                  <span className="text-gray-600 text-sm block">You&apos;ll walk miles. Save the heels for evening.</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">📱</div>
                <div>
                  <strong className="text-gray-900">Uber at night, always.</strong>
                  <span className="text-gray-600 text-sm block">The city is generally safe but be smart. Popular areas are well-patrolled during Art Week.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Events */}
          {featuredEvents.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Don&apos;t Miss</h2>
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
              Starting February 4th, we&apos;ll send you each day&apos;s events—curated picks, not a calendar dump.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition"
            >
              Subscribe Free
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
