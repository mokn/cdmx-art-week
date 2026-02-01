import { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

export const metadata: Metadata = {
  title: "What Burning Man Taught Me About Art Week | CDMX Art Week 2026",
  description: "100+ events. 8 days. Here's how I'm approaching Art Week Mexico City 2026 - by finding the interesting, different, quirky stuff instead of chasing the hype.",
  keywords: [
    "CDMX Art Week 2026",
    "Art Week Mexico City tips",
    "Zona Maco guide",
    "Mexico City art week approach",
    "Art Week philosophy",
  ],
  openGraph: {
    title: "What Burning Man Taught Me About Art Week",
    description: "100+ events. 8 days. Here's how I'm approaching Art Week Mexico City 2026.",
    url: "https://cdmxartweek.com/blog/what-burning-man-taught-me",
    type: "article",
  },
};

export default function BurningManArtWeekPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What Burning Man Taught Me About Art Week",
    description: "100+ events. 8 days. Here's how I'm approaching Art Week Mexico City 2026.",
    datePublished: "2026-01-31",
    author: {
      "@type": "Person",
      name: "Mike",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-10">
          <p className="text-sm text-gray-500 mb-2">January 31, 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Burning Man Taught Me About Art Week
          </h1>
          <p className="text-xl text-gray-600">
            100+ events. 8 days. Here&apos;s how I&apos;m thinking about it.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-gray max-w-none">
          <p>
            I built this site because I got tired of piecing together Art Week from Instagram stories, scattered Google Docs, and random PDFs. I wanted one place with everything—events, parties, galleries—that I could actually use.
          </p>

          <p>It&apos;s still evolving, but here&apos;s what&apos;s live:</p>

          <ul>
            <li><strong>Full schedule</strong> — 100+ events, searchable by day and category</li>
            <li><strong>Itinerary builder</strong> — Save events, share your plan with friends</li>
            <li><strong>Gallery guide</strong> — What&apos;s showing where during the week</li>
            <li><strong>Party listings</strong> — The after-hours stuff, all in one place</li>
          </ul>

          <p>
            I&apos;m making updates based on feedback, so if something&apos;s missing or broken—<a href="mailto:michael@cdmxartweek.com">let me know</a>. <strong>And if this isn&apos;t your thing, no worries—unsubscribe anytime, no hard feelings.</strong>
          </p>

          <hr />

          <p>
            It&apos;s Sunday. Tomorrow the craziness starts.
          </p>

          <p>
            Art Week kicks off Monday. 100+ events across 8 days. My calendar looks like a conspiracy theorist&apos;s wall—overlapping openings, parties, fairs, and at least three things labeled &ldquo;you HAVE to be there.&rdquo;
          </p>

          <p>It reminds me of Burning Man.</p>

          <p>
            I&apos;ve been to the playa a few times, and I&apos;ve watched people run themselves into the ground—chasing Robot Heart, trying to catch the hot DJ, sprinting across the desert in goggles because someone&apos;s friend&apos;s friend said something epic was about to happen.
          </p>

          <p>Then they spend Day 4 asleep in a tent that&apos;s now 140 degrees.</p>

          <p>That was never my move. I&apos;ve always tried to find the other thing.</p>

          <p>
            One year I wandered to the outskirts and found a sauna someone had built out of a metal trailer. No line, no scene, no influencer doing breathwork—just a sketchy box in the desert that was exactly what I needed after three days of dust. I&apos;m still not 100% sure it was sanitary, but I didn&apos;t get sick, so we&apos;re calling it a win.
          </p>

          <p>
            Another night I stumbled onto a small art car playing jazz to maybe 12 people at 4am. No one was taking photos. No one was trying to be anywhere else. It was just... nice?
          </p>

          <p>
            Those are the moments I remember. Not the DJ set everyone posted about.
          </p>

          <h2>Taking the Same Approach to Art Week</h2>

          <p>
            I&apos;m not chasing Zona Maco VIP previews or trying to hit every opening. If there&apos;s a huge line, I&apos;m probably walking past. The popular stuff overwhelms me. I want the interesting, different, slightly weird things—the ones that won&apos;t end up in a recap carousel.
          </p>

          <p>
            (All this said, I&apos;m definitely going to end up at Mayan Warrior. I&apos;m not a monk.)
          </p>

          <h2>A Few Things Already on My Radar</h2>

          <p>
            <strong><Link href="/events/a-night-in-the-floating-world-ml3w6u2l" className="text-blue-600 hover:text-blue-800">A Night in the Floating World</Link></strong> — Tuesday night. This might be the only event all week that actually takes your phone at the door. No filming the performers, no posting stories mid-experience, no checking if something better is happening elsewhere. Just... being there. In a week full of see-and-be-seen energy, that sounds kind of radical? Live art, transforming performances, dress code is &ldquo;dark, elegant, experimental.&rdquo; I&apos;m in.
          </p>

          <p>
            <strong><Link href="/events/traum-art-week-2026-ml3ucjmp" className="text-blue-600 hover:text-blue-800">TRAUM Art Week</Link></strong> — If Floating World is the night version of presence, this is the morning version. Sound journeys, rituals, a space designed for &ldquo;connection and creative exploration.&rdquo; Opens at 10am and runs all week with programming through midnight. The kind of place you wander into when you need to decompress from the chaos.
          </p>

          <p>
            <strong><Link href="/events/jo-hs-nigredo-albedo-rubedo" className="text-blue-600 hover:text-blue-800">JO-HS: Nigredo Albedo Rubedo</Link></strong> — Tuesday at 5pm. The title is alchemical—the three stages of transformation. No idea what to expect, which is exactly the point. Small gallery in Juárez. This is the stuff that won&apos;t end up in anyone&apos;s recap carousel.
          </p>

          <p>
            <strong>The gallery walks</strong> — Small spaces, actual conversations, no one asking if you&apos;re a collector. More my speed.
          </p>

          <p>
            <strong>The unplanned stuff</strong> — I&apos;m leaving gaps. The best night is always one I didn&apos;t schedule.
          </p>

          <h2>Following Along</h2>

          <p>
            I&apos;ll send a short email each day sharing what I actually find. Not a &ldquo;best of&rdquo; list—just what I stumbled into and whether it was worth it.
          </p>
        </div>

        {/* Email Signup */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h3 className="font-semibold text-gray-900 mb-2">Get daily updates</h3>
          <p className="text-gray-600 text-sm mb-4">
            I&apos;ll send what I actually find each day—no hype, just honest takes.
          </p>
          <EmailSignup />
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Browse the full schedule
            </Link>
            <Link
              href="/guide/art-week-2026"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read the complete Art Week guide →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
