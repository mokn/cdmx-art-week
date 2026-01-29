import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mayan Warrior Mexico City 2026 | CDMX Art Week",
  description: "Mayan Warrior returns to Mexico City during Art Week 2026. Everything you need to know: date, venue, tickets, and what to expect.",
  keywords: [
    "Mayan Warrior 2026",
    "Mayan Warrior Mexico City",
    "Mayan Warrior CDMX",
    "Mayan Warrior Art Week",
    "Mayan Warrior party",
    "Mexico City techno",
  ],
  openGraph: {
    title: "Mayan Warrior Mexico City 2026",
    description: "Mayan Warrior returns to Mexico City during Art Week 2026. The one everyone's talking about.",
    url: "https://cdmxartweek.com/guide/mayan-warrior-2026",
    type: "article",
  },
};

export default function MayanWarriorGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mayan Warrior Mexico City 2026",
    description: "Everything you need to know about Mayan Warrior at CDMX Art Week 2026",
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
        <header className="bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white py-20">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-purple-400 uppercase tracking-widest text-sm mb-4">Art Week 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Mayan Warrior
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The Burning Man sound camp turned global phenomenon. This is the party everyone talks about.
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Quick Facts */}
          <section className="mb-12 bg-purple-50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">The Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Date</span>
                <p className="font-medium text-gray-900">Friday, February 7, 2026</p>
              </div>
              <div>
                <span className="text-gray-500">Venue</span>
                <p className="font-medium text-gray-900">Parque Bicentenario</p>
              </div>
              <div>
                <span className="text-gray-500">Time</span>
                <p className="font-medium text-gray-900">Late night → sunrise</p>
              </div>
              <div>
                <span className="text-gray-500">Vibe</span>
                <p className="font-medium text-gray-900">Art + Music + Community</p>
              </div>
            </div>
          </section>

          {/* The Story */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Story</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              If you know Burning Man, you know Mayan Warrior. The Mexican sound camp has become one of the most recognized names in the global electronic music scene—their art car is legendary, their lineups are stacked, and their production is on another level.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Here&apos;s what makes this year special: their art car burned down last year. This event is a fundraiser for the new one. The energy around it is going to be different—part celebration, part comeback, all community.
            </p>

            <div className="border-l-4 border-purple-400 pl-6 my-8">
              <p className="text-gray-700 italic">
                &quot;Mayan Warrior isn&apos;t just a party. It&apos;s where the art world, the music world, and Mexico City&apos;s creative scene collide for one night.&quot;
              </p>
            </div>
          </section>

          {/* What to Expect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl">🔊</div>
                <div>
                  <strong className="text-gray-900">The sound</strong>
                  <p className="text-gray-600 mt-1">
                    World-class production. Think deep house, melodic techno, and everything in between. The kind of sound system that you feel in your chest.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🎨</div>
                <div>
                  <strong className="text-gray-900">The art</strong>
                  <p className="text-gray-600 mt-1">
                    Installations, visuals, the whole immersive experience. This isn&apos;t just a DJ in a warehouse—it&apos;s a production.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">👥</div>
                <div>
                  <strong className="text-gray-900">The crowd</strong>
                  <p className="text-gray-600 mt-1">
                    Art week brings an international mix. Collectors, artists, DJs, and locals who&apos;ve been waiting all year for this. Dress creative—this isn&apos;t a velvet rope club.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🌅</div>
                <div>
                  <strong className="text-gray-900">The timeline</strong>
                  <p className="text-gray-600 mt-1">
                    It goes late. Very late. Peak energy is usually 2-4am. Pace yourself. Bring layers—it gets cold before sunrise.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Practical */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Stuff</h2>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="flex gap-4">
                <div className="text-xl">🎫</div>
                <div>
                  <strong className="text-gray-900">Tickets</strong>
                  <p className="text-gray-600 text-sm">Sell out fast. Follow @mayanwarrior on Instagram for release announcements. Don&apos;t sleep on it.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">📍</div>
                <div>
                  <strong className="text-gray-900">Parque Bicentenario</strong>
                  <p className="text-gray-600 text-sm">North of the city, but more accessible than you&apos;d think. Uber there, schedule one back or be prepared to wait.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">💧</div>
                <div>
                  <strong className="text-gray-900">Stay hydrated</strong>
                  <p className="text-gray-600 text-sm">It&apos;s a long night. Bring cash for water/drinks. Take care of yourself and the people around you.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">📱</div>
                <div>
                  <strong className="text-gray-900">Phone battery</strong>
                  <p className="text-gray-600 text-sm">Bring a portable charger. You&apos;ll need it to get home.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Other Parties */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Can&apos;t Get Tickets?</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Art Week has plenty of other parties worth your time. The scene doesn&apos;t stop at Mayan Warrior.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900">Giegling — Saturday, Feb 8</h3>
                <p className="text-gray-600 text-sm mt-1">
                  The legendary German collective. Minimal, hypnotic, deep. Different vibe, equally special.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900">Looloo</h3>
                <p className="text-gray-600 text-sm mt-1">
                  The sound system in Juárez. Running events all week. If you want to dance, this is where.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900">Fünk</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Condesa basement with a Funktion-One system. Queer and trans-friendly space with great bookings.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/parties"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
              >
                See all Art Week parties →
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Get the Full Party Schedule</h2>
            <p className="text-gray-300 mb-6">
              Every party, every night. Plus gallery openings and art fairs. Daily picks in your inbox.
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
              href="/parties"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← All Parties
            </Link>
            <Link
              href="/guide/art-week-2026"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Complete Art Week Guide →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
