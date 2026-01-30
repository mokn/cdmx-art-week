import { prisma } from "@/lib/db";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Galleries | CDMX Art Week 2026",
  description: "Discover the galleries participating in Art Week Mexico City 2026. From established institutions to emerging spaces across Roma, Condesa, San Miguel Chapultepec, and more.",
  openGraph: {
    title: "Galleries | CDMX Art Week 2026",
    description: "Discover the galleries participating in Art Week Mexico City 2026.",
    url: "https://cdmxartweek.com/galleries",
  },
};

async function getGalleries() {
  return prisma.gallery.findMany({
    orderBy: [
      { featured: "desc" },
      { neighborhood: "asc" },
      { name: "asc" },
    ],
  });
}

export default async function GalleriesPage() {
  const galleries = await getGalleries();

  // Group galleries by neighborhood
  const byNeighborhood = galleries.reduce((acc, gallery) => {
    const hood = gallery.neighborhood;
    if (!acc[hood]) acc[hood] = [];
    acc[hood].push(gallery);
    return acc;
  }, {} as Record<string, typeof galleries>);

  const neighborhoods = Object.keys(byNeighborhood).sort();

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-400 uppercase tracking-widest text-xs mb-1">Art Week 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold">Galleries</h1>
          <p className="text-gray-400 mt-2">{galleries.length} participating galleries across Mexico City</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {galleries.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-xl">
            <p className="text-gray-600 text-lg">Gallery directory coming soon.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {neighborhoods.map((neighborhood) => (
              <section key={neighborhood}>
                <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {neighborhood}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {byNeighborhood[neighborhood].map((gallery) => (
                    <div
                      key={gallery.id}
                      className={`p-4 rounded-lg border ${
                        gallery.featured
                          ? "border-yellow-300 bg-yellow-50"
                          : "border-gray-200 bg-white"
                      } hover:shadow-md transition`}
                    >
                      <div className="flex gap-4">
                        {gallery.imageUrl && (
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                            <img
                              src={gallery.imageUrl}
                              alt={gallery.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900">
                            {gallery.name}
                            {gallery.featured && (
                              <span className="ml-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full">
                                Featured
                              </span>
                            )}
                          </h3>
                          <p className="text-sm text-gray-500 mt-0.5">{gallery.address}</p>
                          {gallery.artWeekExhibition && (
                            <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                              <span className="font-medium">Now showing:</span> {gallery.artWeekExhibition}
                            </p>
                          )}
                          <div className="flex gap-3 mt-3">
                            {gallery.website && (
                              <a
                                href={gallery.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 hover:text-blue-800"
                              >
                                Website
                              </a>
                            )}
                            {gallery.instagram && (
                              <a
                                href={`https://instagram.com/${gallery.instagram.replace("@", "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 hover:text-blue-800"
                              >
                                Instagram
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      {gallery.description && !gallery.imageUrl && (
                        <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                          {gallery.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl text-center">
          <p className="text-gray-600 mb-3">Want your gallery listed?</p>
          <Link
            href="/submit"
            className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition"
          >
            Submit Your Gallery
          </Link>
        </div>
      </div>
    </main>
  );
}
