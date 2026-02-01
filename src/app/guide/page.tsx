import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides | CDMX Art Week 2026",
  description: "Honest guides to Art Week Mexico City 2026 - what's worth it, what's overhyped, and how to actually enjoy the week.",
  openGraph: {
    title: "Guides | CDMX Art Week 2026",
    description: "Honest guides to Art Week Mexico City 2026.",
  },
};

const guides = [
  {
    slug: "what-burning-man-taught-me",
    title: "What Burning Man Taught Me About Art Week",
    description: "100+ events. 8 days. Here's how I'm thinking about it.",
    date: "January 31, 2026",
    featured: true,
  },
  {
    slug: "art-week-2026",
    title: "The Complete Art Week 2026 Guide",
    description: "Everything you need to know about Art Week Mexico City - fairs, parties, galleries, and where to eat.",
    date: "January 28, 2026",
    featured: true,
  },
  {
    slug: "zona-maco-2026",
    title: "Zona Maco 2026: Worth the Hype?",
    description: "An honest take on the main fair - what to expect, whether to go, and how to survive it.",
    date: "January 28, 2026",
    featured: false,
  },
  {
    slug: "mayan-warrior-2026",
    title: "Mayan Warrior Art Week 2026",
    description: "The legendary Burning Man sound camp comes to Mexico City.",
    date: "January 28, 2026",
    featured: false,
  },
  {
    slug: "material-art-fair-2026",
    title: "Material Art Fair 2026: The Anti-Zona Maco",
    description: "The fair for emerging galleries and experimental art - everything you need to know about Material.",
    date: "February 1, 2026",
    featured: false,
  },
  {
    slug: "salon-acme-2026",
    title: "Salón ACME 2026: By Artists, For Artists",
    description: "The artist-run fair with free applications, direct sales, and a crumbling 1905 mansion venue.",
    date: "February 1, 2026",
    featured: false,
  },
];

export default function GuidesPage() {
  const featuredGuides = guides.filter(g => g.featured);
  const otherGuides = guides.filter(g => !g.featured);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Guides
        </h1>
        <p className="text-xl text-gray-600">
          Honest takes on Art Week—what&apos;s worth it, what&apos;s overhyped, and how to actually enjoy the week.
        </p>
      </header>

      {/* Featured Guides */}
      {featuredGuides.length > 0 && (
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Featured
          </h2>
          <div className="space-y-6">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition"
              >
                <p className="text-sm text-gray-500 mb-2">{guide.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {guide.title}
                </h3>
                <p className="text-gray-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Other Guides */}
      {otherGuides.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            More Guides
          </h2>
          <div className="space-y-4">
            {otherGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-600">{guide.description}</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                    {guide.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="mt-12 p-6 bg-gray-900 rounded-xl text-center">
        <h3 className="text-white font-semibold mb-2">Get daily updates</h3>
        <p className="text-gray-400 text-sm mb-4">
          I&apos;ll send what I actually find each day during Art Week.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Subscribe
        </Link>
      </div>
    </div>
  );
}
