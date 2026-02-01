import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides | CDMX Art Week 2026",
  description: "New to Art Week Mexico City? Start here. Comprehensive guides to the fairs, what to wear, where to go, and how to actually enjoy the week.",
  openGraph: {
    title: "Guides | CDMX Art Week 2026",
    description: "New to Art Week? Start here. Everything you need to know.",
  },
};

const guides = [
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
    category: "fairs",
  },
  {
    slug: "material-art-fair-2026",
    title: "Material Art Fair 2026: The Anti-Zona Maco",
    description: "The fair for emerging galleries and experimental art - everything you need to know about Material.",
    date: "February 1, 2026",
    category: "fairs",
  },
  {
    slug: "salon-acme-2026",
    title: "Salón ACME 2026: By Artists, For Artists",
    description: "The artist-run fair with free applications, direct sales, and a crumbling 1905 mansion venue.",
    date: "February 1, 2026",
    category: "fairs",
  },
  {
    slug: "mayan-warrior-2026",
    title: "Mayan Warrior Art Week 2026",
    description: "The legendary Burning Man sound camp comes to Mexico City.",
    date: "January 28, 2026",
    category: "events",
  },
  {
    slug: "what-to-wear-art-week-2026",
    title: "What to Wear to Art Week Mexico City",
    description: "From Zona Maco VIP to Salón ACME casual - the complete style guide, plus where to shop in CDMX.",
    date: "February 1, 2026",
    category: "practical",
  },
  {
    slug: "san-miguel-chapultepec-galleries",
    title: "San Miguel Chapultepec Gallery Guide",
    description: "Walking route through Mexico City's gallery district. 15+ spaces from Kurimanzutto to emerging artists.",
    date: "February 1, 2026",
    category: "practical",
  },
];

export default function GuidesPage() {
  const featuredGuide = guides.find(g => g.featured);
  const fairGuides = guides.filter(g => g.category === "fairs");
  const otherGuides = guides.filter(g => !g.featured && g.category !== "fairs");

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header with newcomer intro */}
      <header className="mb-12">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-4">
          New to Art Week?
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Guides
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          First time at Art Week Mexico City? You&apos;re in the right place. These guides cover everything from which fairs to prioritize to what to wear.
        </p>
        <p className="text-gray-500">
          Start with the complete guide below, then dive into specific fairs or topics.
        </p>
      </header>

      {/* Start Here - Featured Guide */}
      {featuredGuide && (
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Start Here
          </h2>
          <Link
            href={`/guide/${featuredGuide.slug}`}
            className="block p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-gray-700 transition"
          >
            <p className="text-gray-400 text-sm mb-2">{featuredGuide.date}</p>
            <h3 className="text-2xl font-bold mb-2">
              {featuredGuide.title}
            </h3>
            <p className="text-gray-300">{featuredGuide.description}</p>
            <span className="inline-block mt-4 text-sm font-medium text-white border-b border-white/50">
              Read the guide →
            </span>
          </Link>
        </section>
      )}

      {/* The Fairs */}
      <section className="mb-12">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          The Fairs
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Art Week has three main fairs. Here&apos;s what makes each one different.
        </p>
        <div className="space-y-4">
          {fairGuides.map((guide) => (
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

      {/* More Guides */}
      <section className="mb-12">
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

      {/* Link to Blog */}
      <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
        <h3 className="font-semibold text-gray-900 mb-2">Want personal takes?</h3>
        <p className="text-gray-600 text-sm mb-4">
          The guides are practical reference material. For personal stories, daily updates, and honest reviews, check out the blog.
        </p>
        <Link
          href="/blog"
          className="inline-block text-amber-800 font-medium hover:text-amber-900"
        >
          Read the blog →
        </Link>
      </div>

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
