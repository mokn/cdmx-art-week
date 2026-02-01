import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Material Art Fair 2026: The Complete Guide | CDMX Art Week",
  description: "Everything about Material Art Fair 2026 - the indie alternative to Zona Maco. History, what makes it different, what to expect, and why collectors say it's the better fair.",
  keywords: [
    "Material Art Fair 2026",
    "Feria Material 2026",
    "Material Art Fair Mexico City",
    "Material vs Zona Maco",
    "Material Art Fair tickets",
    "Expo Reforma art fair",
    "emerging art Mexico City",
    "CDMX Art Week fairs",
    "Brett Schultz Material",
    "Latin America art fair",
  ],
  openGraph: {
    title: "Material Art Fair 2026: The Complete Guide",
    description: "The indie fair everyone recommends over Zona Maco. Here's why.",
    url: "https://cdmxartweek.com/guide/material-art-fair-2026",
    type: "article",
  },
};

export default function MaterialArtFairGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Material Art Fair 2026: The Complete Guide",
    description: "Everything about Material Art Fair - the indie alternative to Zona Maco",
    datePublished: "2026-02-01",
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
        <header className="bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white py-20">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">The Complete Guide</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Material Art Fair 2026
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The fair everyone tells you to go to instead of Zona Maco. Here&apos;s why they&apos;re right.
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Quick Facts */}
          <section className="mb-12 bg-blue-50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">The Basics</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Dates</span>
                <p className="font-medium text-gray-900">February 5-8, 2026</p>
              </div>
              <div>
                <span className="text-gray-500">Location</span>
                <p className="font-medium text-gray-900">Expo Reforma, Juárez</p>
              </div>
              <div>
                <span className="text-gray-500">Edition</span>
                <p className="font-medium text-gray-900">Vol. 12 (12th year)</p>
              </div>
              <div>
                <span className="text-gray-500">Exhibitors</span>
                <p className="font-medium text-gray-900">~70 galleries</p>
              </div>
            </div>
          </section>

          {/* The Pitch */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Material?</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Ask anyone who&apos;s been to both fairs and they&apos;ll tell you the same thing: <strong>if you only have time for one, go to Material</strong>.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Zona Maco is massive—200+ galleries, blue-chip everything, serious collectors dropping six figures. It&apos;s impressive. It&apos;s also exhausting, corporate, and located between a military base and a horse track in the north of the city.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Material is the opposite. Smaller, weirder, more experimental. The work actually surprises you. The venue is walkable from Roma and Condesa. And the vibe? One visitor described it as &quot;hanging out in a three-dimensional art playground with artists and writers and all manner of creative weirdos—a Situationist dream.&quot;
            </p>

            <div className="border-l-4 border-blue-400 pl-6 my-8">
              <p className="text-gray-700 italic">
                &quot;This is one of the few art fairs that actually makes me like art fairs and restores my faith in the art world.&quot;
              </p>
              <p className="text-gray-500 text-sm mt-2">— BmoreArt review</p>
            </div>
          </section>

          {/* Origin Story */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Origin Story</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Material was born from frustration. In 2013, <strong>Brett W. Schultz</strong> and <strong>Daniela Elbahara</strong>—co-founders of the Mexico City gallery Yautepec—had just done Zona Maco for the third year in a row. They were miserable.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              &quot;We felt like we were not in the right place there,&quot; Schultz later explained. &quot;In the main fair, we were competing with huge blue-chip galleries showing name-brand artists. We always felt stuffed away in a corner without getting a return on investment. It never felt personal.&quot;
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              So they did something different. Instead of Zona Maco, they organized a collective pop-up show in a house in Roma during Art Week—partnering with galleries like Proyectos Ultravioleta from Guatemala, DiabloRosso from Panama, and Sultana from Paris. No booths. No corporate venue. Just art in a house.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The experience was transformative. &quot;The camaraderie, the collaboration, the quality time with collectors and curators who came by—it was so much more enjoyable than doing an art fair.&quot;
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              In 2014, Material Art Fair was born. The mission: create a fair with the spirit of that intimate, collaborative experience. Schultz partnered with <strong>Isa Natalia Castilla</strong>, founder of Incontemporary, and they&apos;ve been running it together ever since.
            </p>
          </section>

          {/* The Scene */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Mexico City Scene That Made It Possible</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Material didn&apos;t emerge in a vacuum. Around 2012-2013, Mexico City was exploding with artist-run, independent spaces. A wild project called <strong>Preteen Gallery</strong> became famous on Twitter. Soon after, spaces like <strong>Bikini Wax</strong>, <strong>Lodos</strong>, and <strong>Lulu</strong> emerged with exciting programs.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              These weren&apos;t traditional galleries. They were experimental, curator-driven, often run out of apartments or storefronts. The original impulse behind Material was to give these spaces a platform—to highlight the scene of interesting artist-run projects that had no home at a fair like Zona Maco.
            </p>

            <p className="text-gray-600 leading-relaxed">
              That DNA still runs through the fair today. While Material has grown—70+ galleries, 20,000+ visitors—it&apos;s never lost its commitment to emerging voices and experimental work.
            </p>
          </section>

          {/* The Venue */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Venue: Expo Reforma</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Material takes place at <strong>Expo Reforma</strong> in Colonia Juárez—a gorgeous venue consisting of two 120-year-old Art Deco homes repurposed for events. It&apos;s a far cry from the convention-center sterility of Zona Maco&apos;s Centro Citibanamex.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Venue Details</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-blue-500">◆</span>
                  <span><strong>Address:</strong> Av. Morelos 67, Juárez, Cuauhtémoc</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500">◆</span>
                  <span><strong>Nearest Metro:</strong> Hidalgo (6 min walk)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500">◆</span>
                  <span><strong>From Roma/Condesa:</strong> 15-20 min walk or quick Uber</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500">◆</span>
                  <span><strong>Layout:</strong> Two floors of galleries in a 3D labyrinth design</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              The fair layout itself is part of the experience. Local architecture firm <strong>APRDELESP</strong> designed an ingenious proprietary structure—a vertical scheme using scaffolding that makes everything feel visible, social, and in dialogue. It&apos;s not rows of white booths. It&apos;s a three-dimensional art playground.
            </p>

            <p className="text-gray-600 leading-relaxed">
              And unlike Zona Maco&apos;s trek to the north of the city, Expo Reforma is in the heart of things. Walk out the door and you&apos;re in Juárez—surrounded by great restaurants, bars, and galleries. The Monument to the Revolution is around the corner.
            </p>
          </section>

          {/* The Sections */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fair Sections & Programs</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Galerías (Main Section)</h3>
                <p className="text-gray-600 mt-2">
                  The core of the fair. Around 70 galleries from 20+ countries, with over half from Latin America. You&apos;ll find a mix of emerging and mid-career galleries—spaces like Lodos, Salón Silicón, Galería Muy, and international participants from New York, Berlin, Paris, and beyond.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Proyectos</h3>
                <p className="text-gray-600 mt-2">
                  Material&apos;s incubator program for emerging spaces. Six galleries are selected to participate <strong>for free</strong>, paired with curator mentors, and given professional development workshops. The focus is on spaces from outside established art capitals—places like Aberrante (Morelia), Azul Arena (Ciudad Juárez), and Sala de Espera (Tijuana). Curated by Lorena Peña Brito, curator-in-chief at Museo Cabañas.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">IMMATERIAL</h3>
                <p className="text-gray-600 mt-2">
                  The performance program, curated by Michelangelo Miccolis. Past editions have featured work at venues around the city, including Museo Experimental El Eco. Expect the unexpected—this is where Material gets really experimental.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Material Monday</h3>
                <p className="text-gray-600 mt-2">
                  The day before the fair opens, 12 local galleries open their doors simultaneously from 4-8pm with special exhibitions. Material provides <strong>free transportation</strong> between spaces. It&apos;s the perfect warm-up—see the city&apos;s gallery scene before diving into the fair.
                </p>
              </div>
            </div>
          </section>

          {/* What to Expect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl">🎨</div>
                <div>
                  <strong className="text-gray-900">The art</strong>
                  <p className="text-gray-600 mt-1">
                    Emerging and mid-career work that actually takes risks. You won&apos;t see the same blue-chip names as Zona Maco. You&apos;ll see what&apos;s next—the galleries and artists everyone will be talking about in five years.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">👥</div>
                <div>
                  <strong className="text-gray-900">The crowd</strong>
                  <p className="text-gray-600 mt-1">
                    Over 20,000 visitors, but eclectic—seasoned collectors walking alongside curious locals, museum curators, journalists, artists. Less stuffy than Zona Maco. More interesting conversations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🌎</div>
                <div>
                  <strong className="text-gray-900">Latin American focus</strong>
                  <p className="text-gray-600 mt-1">
                    56% of exhibitors come from Latin America. This isn&apos;t a European or American fair that happens to be in Mexico—it&apos;s deeply rooted in the region&apos;s creative energy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🍸</div>
                <div>
                  <strong className="text-gray-900">The lounge</strong>
                  <p className="text-gray-600 mt-1">
                    The Banregio Lounge, hosted by Círculo Mexicano from Grupo Habita, offers proper Mexican food and cocktails. You can actually eat well at this fair.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">⏱️</div>
                <div>
                  <strong className="text-gray-900">Time needed</strong>
                  <p className="text-gray-600 mt-1">
                    You can see the whole fair in 2-3 hours—it&apos;s not the marathon that Zona Maco is. Leave time to actually look at the work and talk to gallerists.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Notable Galleries */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Galleries to Watch</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              The exhibitor list changes each year, but here are some spaces that have been highlights in recent editions:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { name: "Salón Silicón", location: "Mexico City", note: "One of CDMX's most beloved new enterprises" },
                { name: "Lodos", location: "Mexico City", note: "Historical + contemporary pairings" },
                { name: "Galería Muy", location: "Chiapas", note: "Indigenous-run, contemporary Indigenous art" },
                { name: "Beverly's", location: "New York", note: "Artist-run bar/gallery, Material partner since 2014" },
                { name: "Proxyco", location: "New York", note: "Strong photography presentations" },
                { name: "Abattoir", location: "Cleveland", note: "Craft traditions, textiles" },
              ].map((gallery) => (
                <div key={gallery.name} className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900">{gallery.name}</h3>
                  <p className="text-sm text-gray-500">{gallery.location}</p>
                  <p className="text-sm text-gray-600 mt-1">{gallery.note}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-sm italic">
              Check material-fair.com closer to the fair for the full 2026 exhibitor list.
            </p>
          </section>

          {/* Material vs Zona Maco */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Material vs. Zona Maco</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 pr-4"></th>
                    <th className="text-left py-3 px-4 font-bold text-blue-600">Material</th>
                    <th className="text-left py-3 pl-4 font-bold text-gray-600">Zona Maco</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Size</td>
                    <td className="py-3 px-4">~70 galleries</td>
                    <td className="py-3 pl-4">200+ galleries</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Focus</td>
                    <td className="py-3 px-4">Emerging & experimental</td>
                    <td className="py-3 pl-4">Blue-chip & established</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Location</td>
                    <td className="py-3 px-4">Juárez (walkable)</td>
                    <td className="py-3 pl-4">Centro Citibanamex (45-60 min from Roma)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Vibe</td>
                    <td className="py-3 px-4">Intimate, social, experimental</td>
                    <td className="py-3 pl-4">Corporate, overwhelming, transactional</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Time needed</td>
                    <td className="py-3 px-4">2-3 hours</td>
                    <td className="py-3 pl-4">Full day</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Best for</td>
                    <td className="py-3 px-4">Discovery, emerging collectors</td>
                    <td className="py-3 pl-4">Serious buyers, industry networking</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-gray-900">Price range</td>
                    <td className="py-3 px-4">$500 - $50,000</td>
                    <td className="py-3 pl-4">$5,000 - $500,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border-l-4 border-blue-400 pl-6 my-8">
              <p className="text-gray-700 italic">
                &quot;I loved the quality of works at Zona Maco and the spirit of Material Art Fair.&quot;
              </p>
              <p className="text-gray-500 text-sm mt-2">— Artist Tariku Shiferaw</p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              The truth is: many serious collectors do both. Some galleries—like Kurimanzutto, Labor, and OMR—show at both fairs. But if you&apos;re not in the market for six-figure pieces and you want to actually enjoy yourself? Material is the move.
            </p>
          </section>

          {/* Practical Info */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Information</h2>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="flex gap-4">
                <div className="text-xl">📅</div>
                <div>
                  <strong className="text-gray-900">Dates</strong>
                  <p className="text-gray-600 text-sm">February 5-8, 2026. Material Monday (gallery walk) is February 3.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">🎫</div>
                <div>
                  <strong className="text-gray-900">Tickets</strong>
                  <p className="text-gray-600 text-sm">Available via Unbo or at the door. Check <a href="https://material-fair.com" className="text-blue-600 hover:text-blue-700">material-fair.com</a> for pricing. VIP gets you opening night access.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">📍</div>
                <div>
                  <strong className="text-gray-900">Getting there</strong>
                  <p className="text-gray-600 text-sm">Expo Reforma, Av. Morelos 67, Juárez. Metro Hidalgo is 6 min walk. Metrobus stops one block away. Easy Uber from anywhere.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">⏰</div>
                <div>
                  <strong className="text-gray-900">Best time to go</strong>
                  <p className="text-gray-600 text-sm">Opening night (Thursday) for VIP energy. Friday or Saturday midday if you want calmer viewing. Avoid Sunday if you want to actually talk to gallerists.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">👟</div>
                <div>
                  <strong className="text-gray-900">What to wear</strong>
                  <p className="text-gray-600 text-sm">More casual than Zona Maco. Art world creative—think interesting, not formal. Comfortable shoes still matter.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pro Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pro Tips</h2>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-gray-700">
                  <strong>Do Material Monday.</strong> The gallery walk on February 3 is free and includes transportation between 12 spaces. It&apos;s the best way to see the local scene beyond the fair.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-gray-700">
                  <strong>Talk to people.</strong> Unlike Zona Maco, Material is small enough that you can actually have conversations with gallerists and artists. Take advantage of it.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-gray-700">
                  <strong>Check out Proyectos.</strong> The emerging galleries in this section are often the most interesting—and the most affordable.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-gray-700">
                  <strong>Combine with Salón ACME.</strong> Both fairs are in Juárez, within walking distance. Do them back-to-back for the full indie fair experience.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-gray-700">
                  <strong>Eat in the neighborhood.</strong> Juárez has great food. Makan (Singaporean), Taller de Ostiones (oysters), Kaito del Valle (Japanese speakeasy through a vending machine).
                </p>
              </div>
            </div>
          </section>

          {/* Sources */}
          <section className="mb-12 text-sm text-gray-500">
            <h3 className="font-medium text-gray-700 mb-2">Sources</h3>
            <ul className="space-y-1">
              <li><a href="https://www.artnews.com/art-news/market/material-art-fair-brett-w-schultz-interview-1234695435/" className="hover:text-gray-700">ARTnews: Material Fair Celebrates 10 Years (Brett Schultz Interview)</a></li>
              <li><a href="https://www.artspace.com/magazine/interviews_features/material-art-fair-interview" className="hover:text-gray-700">Artspace: Brett Schultz on the Cutting Edge of Mexico City&apos;s Art Scene</a></li>
              <li><a href="https://mymodernmet.com/feria-material-2025/" className="hover:text-gray-700">My Modern Met: Feria Material Welcomes 18,000 Visitors</a></li>
              <li><a href="https://bmoreart.com/2020/02/art-utopia-material-art-fair-cdmx.html" className="hover:text-gray-700">BmoreArt: Art Utopia - Material Art Fair CDMX</a></li>
              <li><a href="https://material-fair.com/" className="hover:text-gray-700">Material Art Fair Official Website</a></li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Get the Full Art Week Schedule</h2>
            <p className="text-gray-300 mb-6">
              All three fairs, plus gallery openings and parties. Daily picks in your inbox.
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
              href="/guide/zona-maco-2026"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Zona Maco Guide
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
