import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | CDMX Art Week 2026",
  description: "Personal takes on Art Week Mexico City - daily updates, honest reviews, and what I actually found worth doing.",
  openGraph: {
    title: "Blog | CDMX Art Week 2026",
    description: "Personal takes on Art Week Mexico City.",
  },
};

const posts = [
  {
    slug: "what-burning-man-taught-me",
    title: "What Burning Man Taught Me About Art Week",
    description: "100+ events. 8 days. Here's how I'm thinking about it.",
    date: "January 31, 2026",
    featured: true,
  },
  // Future posts will go here:
  // { slug: "day-1-art-week", title: "Day 1: What I Actually Found", ... }
];

export default function BlogPage() {
  const featuredPosts = posts.filter(p => p.featured);
  const otherPosts = posts.filter(p => !p.featured);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-600">
          Personal takes, daily updates, and honest reviews. What I actually find worth doing during Art Week.
        </p>
      </header>

      {/* Latest Post */}
      {featuredPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Latest
          </h2>
          <div className="space-y-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition"
              >
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Archive
          </h2>
          <div className="space-y-4">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600">{post.description}</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                    {post.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Coming Soon */}
      <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
        <h3 className="font-semibold text-gray-900 mb-2">Daily updates during Art Week</h3>
        <p className="text-gray-600 text-sm mb-4">
          Starting February 3, I&apos;ll post daily about what I actually find—the good, the overhyped, and the unexpected gems.
        </p>
        <Link
          href="/"
          className="inline-block bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition text-sm"
        >
          Subscribe for updates
        </Link>
      </div>

      {/* Link to Guides */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <p className="text-gray-600 text-sm">
          Looking for practical info? Check out the{" "}
          <Link href="/guide" className="text-blue-600 hover:text-blue-800 font-medium">
            Guides
          </Link>{" "}
          for everything from fair breakdowns to what to wear.
        </p>
      </div>
    </div>
  );
}
