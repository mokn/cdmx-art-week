import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getEvent(slug: string) {
  return prisma.event.findUnique({
    where: { slug, approved: true },
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) {
    return { title: "Event Not Found" };
  }

  return {
    title: `${event.name} | CDMX Art Week 2026`,
    description: event.description,
    openGraph: {
      title: `${event.name} | CDMX Art Week 2026`,
      description: event.description,
      type: "article",
      url: `https://cdmxartweek.com/events/${event.slug}`,
    },
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) {
    notFound();
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  // JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.date.toISOString(),
    endDate: event.endDate?.toISOString() || event.date.toISOString(),
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.address,
        addressLocality: "Mexico City",
        addressCountry: "MX",
      },
    },
    organizer: {
      "@type": "Organization",
      name: event.host,
    },
    ...(event.price && event.price !== "Free" && {
      offers: {
        "@type": "Offer",
        price: event.price.replace(/[^0-9.]/g, ""),
        priceCurrency: "USD",
        url: event.ticketUrl,
      },
    }),
    ...(event.imageUrl && { image: event.imageUrl }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="text-gray-600 hover:text-gray-900 text-sm mb-6 inline-flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Events
        </Link>

        <article>
          {/* Hero Image */}
          <div className={`h-64 md:h-96 rounded-xl mb-8 bg-gradient-to-br ${
            event.category === "party" ? "from-purple-500 to-pink-500" :
            event.category === "exhibition" ? "from-blue-500 to-cyan-500" :
            event.category === "gallery" ? "from-gray-700 to-gray-900" :
            event.category === "performance" ? "from-red-500 to-orange-500" :
            "from-gray-500 to-gray-700"
          } relative overflow-hidden`}>
            {event.featured && (
              <span className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-sm font-bold px-3 py-1 rounded">
                FEATURED EVENT
              </span>
            )}
            {event.imageUrl && (
              <img
                src={event.imageUrl}
                alt={event.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Event Info */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium text-gray-500 uppercase">
                  {event.category}
                </span>
                {event.neighborhood && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{event.neighborhood}</span>
                  </>
                )}
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-2">{event.name}</h1>
              <p className="text-xl text-gray-600 mb-6">by {event.host}</p>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 whitespace-pre-wrap">{event.description}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Event Details</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Date & Time</p>
                    <p className="font-medium text-gray-900">{formatDate(event.date)}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="font-medium text-gray-900">{event.venue}</p>
                    <p className="text-sm text-gray-600">{event.address}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">Price</p>
                    <p className="font-medium text-gray-900 text-lg">{event.price || "Free"}</p>
                  </div>
                </div>

                {event.ticketUrl && (
                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block w-full text-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition"
                  >
                    Get Tickets
                  </a>
                )}
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address + ", Mexico City")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
