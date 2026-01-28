import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | CDMX Art Week 2026",
  description: "Learn about CDMX Art Week - your independent guide to Mexico City's art scene during Art Week 2026.",
};

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">About CDMX Art Week</h1>

        <div className="max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Your independent guide to Mexico City&apos;s most exciting week for contemporary art.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">What is Art Week?</h2>
          <p className="text-gray-300 mb-4">
            Every February, Mexico City transforms into a global hub for contemporary art.
            Major art fairs like Zona Maco and Material Art Fair draw collectors, curators,
            and art lovers from around the world. Galleries across the city host special
            openings, and the cultural calendar explodes with exhibitions, parties,
            performances, and events.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">Why This Guide?</h2>
          <p className="text-gray-300 mb-4">
            With so much happening, it&apos;s hard to know where to go. This guide brings together
            events from across the city—gallery openings, underground parties, talks, performances,
            and more—so you can make the most of Art Week.
          </p>
          <p className="text-gray-300 mb-4">
            We&apos;re independent and community-driven. Event organizers can submit their events
            for free, and we curate the best of what&apos;s happening.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">Get Featured</h2>
          <p className="text-gray-300 mb-4">
            Want your event to stand out? Featured events get premium placement and a special
            badge that catches attention. Contact us to learn more about featured listings.
          </p>

          <div className="bg-gray-800 rounded-xl p-6 mt-8">
            <h3 className="font-semibold text-white mb-2">Contact</h3>
            <p className="text-gray-300">
              Email: <a href="mailto:hello@cdmxartweek.com" className="text-blue-400 hover:text-blue-300">hello@cdmxartweek.com</a>
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/submit"
              className="inline-block px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition"
            >
              Submit Your Event
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
