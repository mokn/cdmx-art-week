import { prisma } from "@/lib/db";
import Link from "next/link";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "The Complete Guide to CDMX Art Week 2026 | Mexico City",
  description: "Everything you need to know about Art Week Mexico City 2026. Zona Maco, Material Art Fair, Salón ACME, gallery openings, parties, and insider tips for February 2-9.",
  keywords: [
    "CDMX Art Week 2026",
    "Mexico City Art Week guide",
    "Zona Maco 2026",
    "Material Art Fair 2026",
    "Salón ACME 2026",
    "Mexico City art events February",
    "CDMX gallery openings",
    "Art Week parties Mexico City",
    "Art Week first timer guide"
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
    dateModified: "2026-02-01",
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
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Every February, Mexico City becomes one of the most exciting places on earth for contemporary art. Here&apos;s everything you actually need to know.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/10 px-3 py-1 rounded-full">February 2-9, 2026</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">{totalEvents}+ Events</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">3 Major Fairs</span>
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-gray-50 rounded-xl">
            <h2 className="font-bold text-gray-900 mb-4">In This Guide</h2>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <a href="#what-is-art-week" className="text-gray-600 hover:text-gray-900">What Is Art Week?</a>
              <a href="#the-fairs" className="text-gray-600 hover:text-gray-900">The Three Fairs</a>
              <a href="#day-by-day" className="text-gray-600 hover:text-gray-900">Day-by-Day Structure</a>
              <a href="#neighborhoods" className="text-gray-600 hover:text-gray-900">Neighborhoods + Food</a>
              <a href="#parties" className="text-gray-600 hover:text-gray-900">The Party Scene</a>
              <a href="#getting-around" className="text-gray-600 hover:text-gray-900">Getting Around</a>
              <a href="#practical" className="text-gray-600 hover:text-gray-900">Practical Info</a>
              <a href="#itineraries" className="text-gray-600 hover:text-gray-900">Sample Itineraries</a>
            </div>
          </nav>

          {/* What Is Art Week */}
          <section id="what-is-art-week" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Is Art Week?</h2>

            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Art Week Mexico City is what happens when Zona Maco—Latin America&apos;s largest art fair—triggers a week-long explosion of openings, parties, performances, and cultural events across the city. It&apos;s grown from a single fair into something much bigger: a concentrated moment when the global art world descends on CDMX.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-2">A Brief History</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Zona Maco launched in 2002 as the Maco (Mexico Art Contemporary) fair. By the mid-2000s, galleries started timing openings around the fair. Material Art Fair emerged in 2015 as a counterpoint—smaller, edgier, focused on emerging work. Salón ACME followed with its artist-run model. Now, the week includes everything from museum exhibitions to underground performances to Burning Man-affiliated parties.
                </p>
                <p className="text-gray-600 text-sm">
                  Today, collectors fly in from New York, London, São Paulo, and beyond. International galleries set up temporary booths. And the city&apos;s nightlife—already world-class—goes somewhere else entirely.
                </p>
              </div>

              <h3 className="font-bold text-gray-900 mb-3">Why February?</h3>
              <p className="text-gray-600 mb-6">
                Perfect weather (70°F days, cool evenings), positioned between Art Basel Miami Beach (December) and the Venice Biennale (opens in April/May). It&apos;s become a fixed point on the global art calendar. For Mexico City itself, February is dry season—ideal for gallery hopping and outdoor events.
              </p>

              <h3 className="font-bold text-gray-900 mb-3">Who Comes?</h3>
              <p className="text-gray-600 mb-4">
                The mix is what makes it interesting:
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li><strong>Serious collectors</strong> — VIP previews, advisor meetings, six-figure purchases</li>
                <li><strong>Gallery people</strong> — Directors, artists, curators from around the world</li>
                <li><strong>Art-curious locals</strong> — CDMX has a massive creative class</li>
                <li><strong>The party crowd</strong> — Let&apos;s be honest, Mayan Warrior draws its own demographic</li>
                <li><strong>Creative industry types</strong> — Designers, architects, filmmakers timing work trips</li>
                <li><strong>First-timers</strong> — More every year as word spreads</li>
              </ul>

              <p className="text-gray-600">
                You&apos;ll encounter people in $3,000 Comme des Garçons at Zona Maco VIP and people in vintage finds from La Lagunilla at Material. That range is part of the appeal.
              </p>
            </div>
          </section>

          {/* How This Guide Works */}
          <section className="mb-16 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <h2 className="font-bold text-gray-900 mb-3">How This Guide Works</h2>
            <p className="text-gray-700 mb-4">
              This is your starting point. We&apos;ve also written detailed guides for specific topics—each fair has its own deep-dive, plus guides on what to wear and where to find it.
            </p>
            <div className="space-y-2">
              <Link href="/guide/zona-maco-2026" className="block text-amber-800 hover:text-amber-900 font-medium">
                → Zona Maco 2026: Worth the Hype?
              </Link>
              <Link href="/guide/material-art-fair-2026" className="block text-amber-800 hover:text-amber-900 font-medium">
                → Material Art Fair 2026: The Anti-Zona Maco
              </Link>
              <Link href="/guide/salon-acme-2026" className="block text-amber-800 hover:text-amber-900 font-medium">
                → Salón ACME 2026: By Artists, For Artists
              </Link>
              <Link href="/guide/what-to-wear-art-week-2026" className="block text-amber-800 hover:text-amber-900 font-medium">
                → What to Wear to Art Week
              </Link>
            </div>
          </section>

          {/* The Fairs */}
          <section id="the-fairs" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Three Fairs (An Honest Take)</h2>

            <p className="text-gray-600 mb-8">
              Art Week has three main fairs, each with a distinct personality. You don&apos;t need to hit all of them—pick based on what you&apos;re looking for.
            </p>

            <div className="space-y-6">
              {/* Zona Maco */}
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">Zona Maco</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Feb 5-9</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">Centro Citibanamex · Campo Militar</p>
                <p className="text-gray-600 mb-4">
                  The main event. 200+ galleries, serious collectors, blue-chip everything. It&apos;s massive, it&apos;s exhausting, and it&apos;s inexplicably located between a military base and a horse track, far from the city center. One critic put it well: &quot;There&apos;s little to distinguish it from any other art fair.&quot;
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">200+ galleries</span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Established artists</span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Collector-focused</span>
                </div>
                <p className="text-sm text-gray-500 italic mb-3">
                  Go on opening day if you&apos;re buying. Otherwise, don&apos;t kill yourself getting there.
                </p>
                <Link href="/guide/zona-maco-2026" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read the full Zona Maco guide →
                </Link>
              </div>

              {/* Material */}
              <div className="border border-blue-200 bg-blue-50/30 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">Material Art Fair</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Feb 6-9</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">Maravilla Studios · Atlampa (NEW VENUE)</p>
                <p className="text-gray-600 mb-4">
                  This is where the interesting stuff happens. Smaller, weirder, more experimental. Founded in 2015 as a counterpoint to Zona Maco&apos;s commercial focus. The work actually surprises you. If you only have time for one fair and you&apos;re not dropping six figures, this is it.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">78 galleries</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Emerging artists</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Experimental</span>
                </div>
                <p className="text-sm text-gray-500 italic mb-3">
                  New venue this year after Stranger Things took their usual spot.
                </p>
                <Link href="/guide/material-art-fair-2026" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read the full Material guide →
                </Link>
              </div>

              {/* Salón ACME */}
              <div className="border border-green-200 bg-green-50/30 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">Salón ACME</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Feb 5-9</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">Av. Chapultepec · Juárez</p>
                <p className="text-gray-600 mb-4">
                  Artist-run, beautifully chaotic. Held in a crumbling 1905 mansion where &quot;the architecture and climate of the host city are on display as much as the objects.&quot; Free application process, direct artist sales (60/40 split), no gallery gatekeepers. Gets crowded fast.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Artist-run</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Direct sales</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Historic venue</span>
                </div>
                <p className="text-sm text-gray-500 italic mb-3">
                  Arrive early or get VIP. Lines get brutal, especially on weekends.
                </p>
                <Link href="/guide/salon-acme-2026" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read the full Salón ACME guide →
                </Link>
              </div>
            </div>

            {/* Fair Comparison */}
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 font-medium text-gray-900"></th>
                    <th className="text-center py-3 font-medium text-gray-900">Zona Maco</th>
                    <th className="text-center py-3 font-medium text-gray-900">Material</th>
                    <th className="text-center py-3 font-medium text-gray-900">ACME</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2">Vibe</td>
                    <td className="text-center py-2">Corporate</td>
                    <td className="text-center py-2">Experimental</td>
                    <td className="text-center py-2">Grassroots</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">Price Range</td>
                    <td className="text-center py-2">$$$$$</td>
                    <td className="text-center py-2">$$-$$$</td>
                    <td className="text-center py-2">$-$$</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">Location</td>
                    <td className="text-center py-2">Far</td>
                    <td className="text-center py-2">Accessible</td>
                    <td className="text-center py-2">Central</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">Time Needed</td>
                    <td className="text-center py-2">4-6 hrs</td>
                    <td className="text-center py-2">2-3 hrs</td>
                    <td className="text-center py-2">2-3 hrs</td>
                  </tr>
                  <tr>
                    <td className="py-2">Best For</td>
                    <td className="text-center py-2">Collectors</td>
                    <td className="text-center py-2">Discovery</td>
                    <td className="text-center py-2">Supporting Artists</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Day by Day */}
          <section id="day-by-day" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Day-by-Day Structure</h2>

            <p className="text-gray-600 mb-8">
              Art Week has a rhythm. Understanding it helps you pace yourself—and know when to rest.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-gray-300 pl-6 py-2">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-gray-900">Sunday, Feb 2</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Arrival Day</span>
                </div>
                <p className="text-gray-600 text-sm">
                  People trickling in. A few early gallery openings. Good day to explore neighborhoods, adjust to altitude, scout restaurants.
                </p>
              </div>

              <div className="border-l-4 border-gray-300 pl-6 py-2">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-gray-900">Monday, Feb 3</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Warm-Up</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Gallery openings begin in earnest. San Miguel Chapultepec galleries coordinate openings. Early satellite events. Still manageable.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-6 py-2">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-gray-900">Tuesday, Feb 4</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">VIP Previews</span>
                </div>
                <p className="text-gray-600 text-sm">
                  VIP preview day for multiple fairs. If you have VIP access, this is when collectors are buying and energy is highest. Dinner parties everywhere. Good evening events.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6 py-2">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-gray-900">Wednesday, Feb 5</h3>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Fairs Open</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Zona Maco and Salón ACME open to public. Gallery dinner hell—everyone has somewhere to be. Good day to hit fairs, bad day for restaurants (everything booked).
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6 py-2">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-gray-900">Thursday, Feb 6</h3>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Full Swing</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Material Art Fair opens. All three fairs running. Peak programming. Evening parties start ramping up. Pace yourself.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-6 py-2">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-gray-900">Friday, Feb 7</h3>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Peak Party Night</span>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Mayan Warrior night.</strong> This is the big one for nightlife. Everyone&apos;s schedule revolves around it. Fair crowds pick up. Energy is maximal.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-6 py-2">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-gray-900">Saturday, Feb 8</h3>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Weekend Peak</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Busiest day at all fairs (locals + visitors). More parties. Giegling if you survived Friday. Some people are crashing; others are just getting started.
                </p>
              </div>

              <div className="border-l-4 border-gray-300 pl-6 py-2">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-gray-900">Sunday, Feb 9</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Closing Day</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Final day. Fairs close early. Last-chance purchases, galleries breaking down. Recovery brunches. Some people flying out, others extending.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 text-sm">
                <strong>Pro tip:</strong> Wednesday and Thursday are the sweet spot—fairs are open but not yet weekend-crowded. Friday night is for parties. Saturday is chaos. Sunday is optional.
              </p>
            </div>
          </section>

          {/* Neighborhoods */}
          <section id="neighborhoods" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Neighborhoods + Where to Eat</h2>

            <p className="text-gray-600 mb-8">
              Art Week concentrates in a few key neighborhoods. Here&apos;s where you&apos;ll spend your time—and where to eat when you need a break from the chaos.
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Roma Norte</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Gallery openings, beautiful people, and some of the city&apos;s best food within walking distance. The neighborhood itself is worth exploring—Art Deco and Art Nouveau buildings, tree-lined streets, plaza cafés. You&apos;ll spend a lot of time here.
                </p>
                <div className="text-sm text-gray-700 mb-4">
                  <strong>Art:</strong> Smaller galleries, project spaces, pop-up exhibitions
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Eat:</strong> Contramar (the seafood spot—get the tuna tostadas, arrive by 1pm), Expendio de Maíz (Michelin-starred but casual, no menu, cash only), Chetito (upscale tacos), ISMO (fondue + a hidden speakeasy called ISMO Sonoro with DJs), Alfil (Arabic-Mexican fusion that&apos;s about to blow up)
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Juárez</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Nightlife central. Salón ACME is here, and so are the best clubs. This is where Art Week&apos;s after-dark energy concentrates. More edge than Roma, historically gay neighborhood (still very LGBTQ+ friendly).
                </p>
                <div className="text-sm text-gray-700 mb-4">
                  <strong>Art:</strong> Salón ACME, smaller galleries, performance spaces
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Eat:</strong> Makan (Singaporean, moved from Roma and now has proper space), Taller de Ostiones (oysters, absurdly fresh), Leito Café (authentic Cuban, great for breakfast), Kaito del Valle (Japanese speakeasy—entrance through a vending machine, all-female team)
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Condesa</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Tree-lined streets, Art Deco buildings, parks with running paths. Slightly more chill than Roma. Good for recovery days, morning walks, quieter dinners. Home to some excellent clubs including Fünk.
                </p>
                <div className="text-sm text-gray-700 mb-4">
                  <strong>Art:</strong> Fewer galleries, more residential
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Eat:</strong> Fugu Sushi (8 seats, best omakase in the city—book ahead), Restaurante Castizo (Spanish, the seafood rice is worth it), Café Nin (beautiful brunch spot)
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">San Miguel Chapultepec</h3>
                <p className="text-gray-600 text-sm mb-4">
                  <strong>The gallery district.</strong> Kurimanzutto, OMR, Labor, and a dozen others within walking distance. This is where you come to see serious work. Galleries coordinate openings during Art Week—you can walk between them. Plan a full afternoon.
                </p>
                <div className="text-sm text-gray-700 mb-4">
                  <strong>Art:</strong> Major galleries, blue-chip to emerging
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Note:</strong> Not much food here—eat before you come or after in Roma/Condesa. A few coffee shops for refueling.
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Polanco</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Fancy hotels, high-end shopping, Museo Jumex. More polished, less scene. Collector territory. If you&apos;re staying at the St. Regis or Four Seasons, this is your base.
                </p>
                <div className="text-sm text-gray-700 mb-4">
                  <strong>Art:</strong> Museo Jumex, Museo Soumaya (free), a few upscale galleries
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Eat:</strong> Asai Kaiseki (one of the top three Japanese restaurants in the city, maybe the best), Pujol (if you can get a reservation)
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Centro Histórico</h3>
                <p className="text-gray-600 text-sm mb-4">
                  The old center. Less Art Week action but worth visiting for Palacio de Bellas Artes and the muralists. Incredible architecture. Can feel touristy around the Zócalo but dig deeper and you&apos;ll find gems.
                </p>
                <div className="text-sm text-gray-700 mb-4">
                  <strong>Art:</strong> Palacio de Bellas Artes, MUNAL, some emerging spaces
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Eat:</strong> El Cardenal (classic Mexican breakfast), Café de Tacuba (historic)
                </div>
              </div>
            </div>
          </section>

          {/* The Parties */}
          <section id="parties" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Party Scene</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Let&apos;s be real: for a lot of people, the parties are the point. Art Week has become one of the best times to experience Mexico City&apos;s nightlife. The crowds mix art world people with local scenesters. The venues have sound systems that rival anywhere. And the week has developed its own calendar of events that people plan entire trips around.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-bold text-gray-900">Mayan Warrior — Friday, Feb 7</h3>
                <p className="text-gray-600 text-sm mt-1 mb-2">
                  The Burning Man sound camp turned global phenomenon. Their original art car burned down last year—this is part of the fundraiser for the new one. At Parque Bicentenario. This is the one everyone talks about.
                </p>
                <p className="text-gray-500 text-xs">
                  Get tickets early. It will sell out.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-bold text-gray-900">Giegling — Saturday, Feb 8</h3>
                <p className="text-gray-600 text-sm mt-1">
                  The legendary German collective. Deep, minimal, hypnotic. If you know, you know. Venue TBA.
                </p>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 mb-4">The Clubs</h3>
            <p className="text-gray-600 text-sm mb-4">
              These are the venues that matter during Art Week—each with its own character and sound.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="font-medium text-gray-900 w-28 flex-shrink-0">Looloo</div>
                <div className="text-gray-600 text-sm">Juárez. The sound system. Deep house and techno, international + local DJs. This is where you go if you actually want to dance. Multiple rooms, terrace.</div>
              </div>
              <div className="flex gap-4">
                <div className="font-medium text-gray-900 w-28 flex-shrink-0">Fünk</div>
                <div className="text-gray-600 text-sm">Condesa basement. Funktion-One system. Actively queer and trans-friendly—it&apos;s central to their identity, not an afterthought. Great bookings.</div>
              </div>
              <div className="flex gap-4">
                <div className="font-medium text-gray-900 w-28 flex-shrink-0">Departamento</div>
                <div className="text-gray-600 text-sm">Roma Norte. Rooftop + interior. Live music and DJs. &quot;A meeting point for artists and casual attendees seeking authentic experiences over scene-focused nightlife.&quot;</div>
              </div>
              <div className="flex gap-4">
                <div className="font-medium text-gray-900 w-28 flex-shrink-0">Bar Oriente</div>
                <div className="text-gray-600 text-sm">Roma. More low-key. Good for earlier in the night or when you want to actually talk to people.</div>
              </div>
            </div>

            <p className="text-gray-500 text-sm italic">
              The parties don&apos;t really peak until Thursday-Saturday. Tuesday everyone&apos;s jet-lagged. Wednesday is gallery dinner hell.
            </p>

            <div className="mt-6">
              <Link
                href="/?category=party"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
              >
                See all {totalParties} parties →
              </Link>
            </div>
          </section>

          {/* Getting Around */}
          <section id="getting-around" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Around</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Uber/DiDi</h3>
                <p className="text-gray-600 text-sm">
                  Your main mode of transport. Both apps work well. Prices are very reasonable by US/European standards. <strong>During Art Week, schedule rides in advance when possible</strong>—surge pricing kicks in around event times and after-parties. Keep both apps installed; sometimes one has better availability.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Metro</h3>
                <p className="text-gray-600 text-sm">
                  Cheap and extensive but gets very crowded during rush hours. Useful for getting to Centro Histórico or areas not well-served by rideshare. Probably not your go-to during Art Week when you&apos;re dressed up.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Walking</h3>
                <p className="text-gray-600 text-sm">
                  Roma, Condesa, and Juárez are all very walkable. San Miguel Chapultepec is walkable once you&apos;re there. The neighborhoods connect reasonably well on foot if you have time. Comfortable shoes are essential—you&apos;ll do 15,000+ steps on busy days.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">To/From Zona Maco</h3>
                <p className="text-gray-600 text-sm">
                  This is the tricky one. Zona Maco is at Centro Citibanamex, far from the central neighborhoods. Budget 45-60 minutes each way depending on traffic. Some people coordinate group rides. If you have VIP access, some years there&apos;s shuttle service—check closer to the fair.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">Traffic Warning</h3>
                <p className="text-gray-600 text-sm">
                  Mexico City traffic is legendary. During Art Week it&apos;s worse—more visitors, more events, more chaos. Leave buffer time for everything. Don&apos;t try to do too much in one day. If you have back-to-back events across the city, you will be stressed.
                </p>
              </div>
            </div>
          </section>

          {/* Practical Stuff */}
          <section id="practical" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Stuff</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Weather</h3>
                <p className="text-gray-600 text-sm">
                  February is dry season. Days are warm (70-75°F / 21-24°C), evenings cool (50-55°F / 10-13°C). Sun is strong at this altitude—sunscreen even if it doesn&apos;t feel hot. Light layers essential. Rain is rare but bring a light jacket.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Altitude</h3>
                <p className="text-gray-600 text-sm">
                  CDMX is at 7,350 feet (2,240m). Higher than Denver. You&apos;ll feel it—faster heart rate, shorter breath, alcohol hits harder. Drink lots of water. Go easy the first day or two. Some people take altitude sickness seriously; others don&apos;t notice much.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Money</h3>
                <p className="text-gray-600 text-sm">
                  Mexican pesos. Most places take cards but always carry some cash—market food, taxis, tips, smaller establishments. ATMs everywhere (use bank ATMs inside branches to avoid skimmers). Tipping: 15-20% at restaurants, round up for smaller things.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Language</h3>
                <p className="text-gray-600 text-sm">
                  Spanish is dominant. English widely spoken at galleries, hotels, upscale restaurants, and Art Week events. You can get by with English during Art Week. But knowing basics helps and is appreciated. Google Translate works offline.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Safety</h3>
                <p className="text-gray-600 text-sm">
                  The areas you&apos;ll be in (Roma, Condesa, Juárez, Polanco) are generally safe. Use Uber at night, always. Don&apos;t flash expensive stuff. Be street smart like any big city. During Art Week, popular areas have increased security and police presence.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">VIP Passes</h3>
                <p className="text-gray-600 text-sm">
                  Worth it for Material and Salón ACME—lines get brutal. Zona Maco VIP matters if you&apos;re buying; otherwise less important. VIP gets you preview days, skip-the-line access, sometimes lounges with free drinks.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Where to Stay</h3>
              <p className="text-gray-600 text-sm mb-4">
                <strong>Book early.</strong> Art Week fills up the good places months in advance.
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-gray-900">Roma/Condesa:</strong>
                  <span className="text-gray-600 ml-2">Best location. Walking distance to everything except Zona Maco. Mix of boutique hotels and Airbnbs.</span>
                </div>
                <div>
                  <strong className="text-gray-900">Juárez:</strong>
                  <span className="text-gray-600 ml-2">Great for nightlife. Near Salón ACME. Slightly grittier but very walkable.</span>
                </div>
                <div>
                  <strong className="text-gray-900">Polanco:</strong>
                  <span className="text-gray-600 ml-2">Fancy hotels (St. Regis, Four Seasons). Collector crowd. Less walkable to Roma/Condesa action.</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/guide/what-to-wear-art-week-2026"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                What to wear → (plus shopping guide)
              </Link>
            </div>
          </section>

          {/* Itineraries */}
          <section id="itineraries" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Itineraries</h2>

            <p className="text-gray-600 mb-8">
              How to approach the week depends on what you&apos;re here for. Here are three approaches.
            </p>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">The Art Focused</h3>
                <p className="text-gray-500 text-sm mb-4">For those here primarily for the art</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li><strong>Wed:</strong> Zona Maco (morning/afternoon), gallery openings (evening)</li>
                  <li><strong>Thu:</strong> Material Art Fair, San Miguel Chapultepec galleries</li>
                  <li><strong>Fri:</strong> Salón ACME, Roma galleries, one party if you&apos;re not dead</li>
                  <li><strong>Sat:</strong> Return to favorite fair, Museo Jumex, evening event</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">The Social</h3>
                <p className="text-gray-500 text-sm mb-4">For those here for the scene and nightlife</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li><strong>Wed-Thu:</strong> One fair (Material recommended), dinners, early parties</li>
                  <li><strong>Fri:</strong> Rest during day, Mayan Warrior at night</li>
                  <li><strong>Sat:</strong> Recovery brunch, Salón ACME afternoon, Giegling at night</li>
                  <li><strong>Sun:</strong> Survive</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">The Long Weekend</h3>
                <p className="text-gray-500 text-sm mb-4">Flying in Thursday, leaving Sunday</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li><strong>Thu:</strong> Material Art Fair (skip Zona Maco unless you&apos;re buying), Roma galleries</li>
                  <li><strong>Fri:</strong> Salón ACME (morning, beat crowds), San Miguel Chapultepec, Mayan Warrior</li>
                  <li><strong>Sat:</strong> Second pass at favorite fair, explore neighborhoods, optional party</li>
                  <li><strong>Sun:</strong> Brunch, any last galleries, head to airport</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-6 italic">
              Whatever your approach: leave gaps. The best moments often aren&apos;t scheduled.
            </p>
          </section>

          {/* Featured Events */}
          {featuredEvents.length > 0 && (
            <section className="mb-16">
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

          {/* Other Guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Deep Dive Guides</h2>
            <p className="text-gray-600 mb-6">
              Ready to go deeper? Each fair and topic has its own comprehensive guide.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/guide/zona-maco-2026"
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-1">Zona Maco 2026</h3>
                <p className="text-sm text-gray-600">Worth the hype?</p>
              </Link>
              <Link
                href="/guide/material-art-fair-2026"
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-1">Material Art Fair 2026</h3>
                <p className="text-sm text-gray-600">The anti-Zona Maco</p>
              </Link>
              <Link
                href="/guide/salon-acme-2026"
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-1">Salón ACME 2026</h3>
                <p className="text-sm text-gray-600">By artists, for artists</p>
              </Link>
              <Link
                href="/guide/what-to-wear-art-week-2026"
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-1">What to Wear</h3>
                <p className="text-sm text-gray-600">Dress codes + shopping guide</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Get Daily Updates</h2>
            <p className="text-gray-300 mb-6">
              Starting February 2nd, I&apos;ll send what I actually find each day—curated picks, not a calendar dump.
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
              href="/"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Browse all {totalEvents} events →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
