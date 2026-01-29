import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zona Maco 2026: Dates, Tickets & What to Actually Know | CDMX Art Week",
  description: "Everything you need to know about Zona Maco 2026. Dates, ticket prices, is it worth it, and honest advice from people who've been.",
  keywords: [
    "Zona Maco 2026",
    "Zona Maco tickets",
    "Zona Maco dates",
    "Zona Maco Mexico City",
    "Mexico City art fair 2026",
    "Zona Maco worth it",
  ],
  openGraph: {
    title: "Zona Maco 2026: The Honest Guide",
    description: "Everything you need to know about Zona Maco 2026. Dates, tickets, and whether it's actually worth your time.",
    url: "https://cdmxartweek.com/guide/zona-maco-2026",
    type: "article",
  },
};

export default function ZonaMacoGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Zona Maco 2026: Dates, Tickets & What to Actually Know",
    description: "The honest guide to Zona Maco 2026",
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
            <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">The Honest Guide</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Zona Maco 2026
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Latin America&apos;s biggest art fair. 200+ galleries. Here&apos;s what you actually need to know before you go.
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Quick Facts */}
          <section className="mb-12 bg-gray-50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">The Basics</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Dates</span>
                <p className="font-medium text-gray-900">February 5-9, 2026</p>
              </div>
              <div>
                <span className="text-gray-500">Location</span>
                <p className="font-medium text-gray-900">Centro Citibanamex</p>
              </div>
              <div>
                <span className="text-gray-500">VIP Preview</span>
                <p className="font-medium text-gray-900">February 4</p>
              </div>
              <div>
                <span className="text-gray-500">General Admission</span>
                <p className="font-medium text-gray-900">~$25 USD</p>
              </div>
            </div>
          </section>

          {/* Honest Take */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Honest Take</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Let&apos;s get this out of the way: Zona Maco is massive, exhausting, and—one critic put it well—&quot;there&apos;s little to distinguish it from any other art fair.&quot; It&apos;s the blue-chip, serious-collector event. If you&apos;re dropping six figures, this is where you do it.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              For everyone else? It&apos;s worth seeing once, but don&apos;t kill yourself getting there. The venue is inexplicably located between a military base and a horse racing track, far from anything. Budget an hour each way from Roma/Condesa.
            </p>

            <div className="border-l-4 border-yellow-400 pl-6 my-8">
              <p className="text-gray-700 italic">
                &quot;If you only have time for one fair and you&apos;re not buying, skip Zona Maco and go to Material Art Fair instead. The work actually surprises you there.&quot;
              </p>
            </div>
          </section>

          {/* Who Should Go */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Actually Go</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-green-500 text-xl">✓</div>
                <div>
                  <strong className="text-gray-900">Serious collectors</strong>
                  <p className="text-gray-600 text-sm">This is where the big galleries bring big work. Gagosian, Hauser & Wirth, the usual suspects.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-green-500 text-xl">✓</div>
                <div>
                  <strong className="text-gray-900">First-timers to art fairs</strong>
                  <p className="text-gray-600 text-sm">Worth experiencing the scale once. Just know what you&apos;re getting into.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-green-500 text-xl">✓</div>
                <div>
                  <strong className="text-gray-900">Industry people</strong>
                  <p className="text-gray-600 text-sm">The networking happens here. VIP opening day is where deals get done.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-yellow-500 text-xl">~</div>
                <div>
                  <strong className="text-gray-900">Casual art fans</strong>
                  <p className="text-gray-600 text-sm">You might enjoy it, but Material and Salón ACME will feel more rewarding for the effort.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Logistics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting There (The Hard Part)</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Centro Citibanamex is in the north of the city, nowhere near anything. From Roma or Condesa, you&apos;re looking at 45 minutes to an hour each way in traffic. During Art Week, make that longer.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="flex gap-4">
                <div className="text-xl">🚗</div>
                <div>
                  <strong className="text-gray-900">Uber/Taxi</strong>
                  <p className="text-gray-600 text-sm">$15-25 USD each way from Roma. Schedule your return in the app—getting a ride back can take a while.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">⏰</div>
                <div>
                  <strong className="text-gray-900">Best time to go</strong>
                  <p className="text-gray-600 text-sm">Arrive when it opens (11am) to avoid crowds. Or go later in the week when the initial frenzy dies down.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">👟</div>
                <div>
                  <strong className="text-gray-900">Wear comfortable shoes</strong>
                  <p className="text-gray-600 text-sm">You&apos;ll walk miles. The venue is enormous. Save the heels for evening events.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sections */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Sections</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Main Section</h3>
                <p className="text-gray-600 mt-2">
                  The big galleries. Established artists. This is where most people spend their time and where the serious money changes hands.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Zona Maco Sur</h3>
                <p className="text-gray-600 mt-2">
                  Emerging and mid-career Latin American artists. More interesting than the main section if you&apos;re looking for discovery over brand names.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Diseño</h3>
                <p className="text-gray-600 mt-2">
                  Design and furniture. Worth a walk through if you&apos;re into collectible design. Some genuinely interesting pieces from Mexican designers.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Foto</h3>
                <p className="text-gray-600 mt-2">
                  Photography-focused galleries. Can feel like an afterthought some years, but occasionally has standout work.
                </p>
              </div>
            </div>
          </section>

          {/* VIP Worth It */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Is VIP Worth It?</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              For Zona Maco specifically? Only if you&apos;re buying or networking. The VIP preview (Feb 4) is when collectors make moves. General admission days aren&apos;t that crowded—it&apos;s not like Material or ACME where lines get brutal.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Save your VIP budget for Material Art Fair and Salón ACME, where it actually matters for the experience.
            </p>
          </section>

          {/* Alternatives */}
          <section className="mb-12 bg-blue-50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Consider Instead</h2>
            <p className="text-gray-600 mb-4">
              If you&apos;re not a serious collector, these might be better uses of your time:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Material Art Fair</strong> — Smaller, weirder, more experimental. At Expo Reforma, much easier to get to.</li>
              <li><strong>Salón ACME</strong> — Beautiful space in Juárez, independent artist selections. Architecture is part of the experience.</li>
              <li><strong>Gallery walks</strong> — San Miguel Chapultepec has a dozen major galleries within walking distance. Free, no crowds, better art-to-effort ratio.</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Get the Full Art Week Schedule</h2>
            <p className="text-gray-300 mb-6">
              48+ events. Parties, openings, all the fairs. Curated daily picks in your inbox.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition"
            >
              Subscribe Free
            </Link>
          </section>

          {/* Related Links */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center text-center">
            <Link
              href="/guide/art-week-2026"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Complete Art Week Guide
            </Link>
            <Link
              href="/schedule"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              View Full Schedule →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
