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
    "Maravilla Studios art fair",
    "emerging art Mexico City",
    "CDMX Art Week fairs",
    "Brett Schultz Material",
    "Latin America art fair",
    "Proyectos emerging galleries",
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
                <p className="font-medium text-gray-900">Maravilla Studios, Atlampa</p>
              </div>
              <div>
                <span className="text-gray-500">Edition</span>
                <p className="font-medium text-gray-900">Vol. 12 (12th year)</p>
              </div>
              <div>
                <span className="text-gray-500">Exhibitors</span>
                <p className="font-medium text-gray-900">78 galleries from 21 countries</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Venue: Maravilla Studios</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              For 2026, Material moves to a stunning new home: <strong>Maravilla Studios</strong> in Colonia Atlampa. This historic industrial factory—over a century old and spanning more than 10,000 square meters—was recently renovated into an events space. It&apos;s a far cry from the convention-center sterility of Zona Maco&apos;s Centro Citibanamex.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-2">The Venue Change Story</h3>
              <p className="text-gray-600 text-sm">
                Material had been planning to return to Expo Reforma in Juárez, where they&apos;d been for recent editions. But six weeks before the fair, they learned the venue was hosting &quot;Stranger Things: The Experience&quot;—an immersive Netflix activation. So they pivoted. According to founder Brett Schultz, the move to Maravilla &quot;also gives us room to grow in the future.&quot;
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Venue Details</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-blue-500">◆</span>
                  <span><strong>Address:</strong> Fresno 315, Col. Atlampa, Cuauhtémoc, 06450</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500">◆</span>
                  <span><strong>Metro:</strong> Buenavista (Lines 1, 3, 4), San Cosme (Line 2), or Tlatelolco (Line 3)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500">◆</span>
                  <span><strong>Metrobús:</strong> Buenavista station</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500">◆</span>
                  <span><strong>Layout:</strong> Five exhibition halls, single-level with step-free accessibility</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500">◆</span>
                  <span><strong>Parking:</strong> Limited street parking only—rideshare or transit recommended</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Maravilla is a production facility that&apos;s hosted everything from film shoots to MUTEK performances. The industrial bones—over a century of history—give it character that white-box convention centers can&apos;t match. Five exhibition halls spread across a single level mean no stairs, easy flow between sections, and room for the fair to breathe.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The Atlampa location is a bit further from Roma/Condesa than Juárez, but it&apos;s well-connected by transit. And honestly? The extra space might make this the best Material yet.
            </p>
          </section>

          {/* The Sections */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fair Sections & Programs</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Galerías (Main Section)</h3>
                <p className="text-gray-600 mt-2">
                  The core of the fair. 78 galleries from 21 countries, with over half from Latin America. The selection committee—Beatriz López (Instituto de Visión), Christopher Rivera (EMBAJADA), and Francisco Cordero-Oceguera (Lodos)—prioritizes galleries with adventurous programming and support for emerging artists. You&apos;ll find established spaces alongside young international galleries taking their first steps onto the fair circuit.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Proyectos</h3>
                <p className="text-gray-600 mt-2">
                  This is where Material&apos;s commitment to emerging spaces really shows. Relaunched in 2021 with support from Del Castillo y Castro Abogados, Proyectos is a <strong>two-year program</strong> for Mexico-based organizations—commercial and non-commercial—dedicated to contemporary art.
                </p>
                <p className="text-gray-600 mt-2">
                  Six organizations are selected to participate <strong>completely free</strong>. They&apos;re paired with curator mentors, given access to professional development workshops, and introduced to the global art landscape. The focus is on spaces from outside established art capitals—places like Aberrante (Morelia), Azul Arena (Ciudad Juárez), and Sala de Espera (Tijuana).
                </p>
                <p className="text-gray-600 mt-2">
                  As the organizers put it: &quot;We believe we can make a more measurable, lasting, and significant contribution to the ecosystem upon which the health and relevance of our own organization depends.&quot;
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">IMMATERIAL</h3>
                <p className="text-gray-600 mt-2">
                  The performance program, now in its third edition. This year features work by artists including Ivan Cheng and Sophie Jung. Expect the unexpected—this is where Material gets really experimental, with performances woven throughout the fair.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Material Monday</h3>
                <p className="text-gray-600 mt-2">
                  February 2, the Monday before the fair opens. Twelve local galleries open their doors simultaneously with special exhibitions. Material provides <strong>free transportation</strong> between spaces. It&apos;s the perfect warm-up—see the city&apos;s gallery scene before diving into the fair.
                </p>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Talks & Panels</h3>
                <p className="text-gray-600 mt-2">
                  The Banregio Lounge hosts panel discussions throughout the fair covering topics like institutional narratives, art patronage, and contemporary practice. Plus book presentations on contemporary art history and portfolio reviews.
                </p>
              </div>

              <div className="border-l-4 border-pink-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Closing Rave</h3>
                <p className="text-gray-600 mt-2">
                  Material ends with a proper party—DJs and dancing in the venue after the fair closes on Saturday night. It&apos;s become a highlight of Art Week.
                </p>
              </div>
            </div>
          </section>

          {/* Supporting Emerging Artists */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Material Supports Emerging Artists</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              What sets Material apart isn&apos;t just the art on display—it&apos;s the ecosystem they&apos;ve built to support artists and galleries who are just getting started. This goes far beyond giving them booth space.
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">The Collé Prize</h3>
                <p className="text-gray-600 text-sm">
                  An acquisition award recognizing collage and assemblage practices. The winner&apos;s work is acquired by the Pardon Collection. Last year&apos;s winner, Enrique García, was recognized for work that emphasizes collage as both medium and &quot;creative philosophy that fosters transformative thinking.&quot;
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">The Olivia Foundation Prize</h3>
                <p className="text-gray-600 text-sm">
                  Recognizes innovative work in abstraction. The winning piece is acquired by the foundation. In 2025, Venezuelan artist Luz Carabaño took home this inaugural award.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Cobertizo Residency Award</h3>
                <p className="text-gray-600 text-sm">
                  A three-week residency at Cobertizo, an art space focused on promoting contemporary art production. Winners receive transportation, housing, a private studio with 24/7 access, meals, portfolio reviews with mentors, and an Open Studio event with guests from the art scene.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Institutional Acquisitions</h3>
                <p className="text-gray-600 text-sm">
                  Material actively cultivates relationships with major institutions. Recent editions have seen acquisitions by the Pérez Art Museum Miami and the Jumex Collection—a huge boost for emerging artists shown by smaller galleries.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-green-400 pl-6 my-8">
              <p className="text-gray-700 italic">
                &quot;Material showcases invited galleries, project spaces, and non-profits, all selected on the basis of the quality of their proposals as well as their general commitment to adventurous programming and support for emerging artists.&quot;
              </p>
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
                    <td className="py-3 px-4">Maravilla Studios, Atlampa</td>
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
                  <p className="text-gray-600 text-sm">February 5-8, 2026. Material Monday (gallery walk) is February 2.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">🎫</div>
                <div>
                  <strong className="text-gray-900">Tickets</strong>
                  <p className="text-gray-600 text-sm">Available via Boletia or at the door. Check <a href="https://material-fair.com" className="text-blue-600 hover:text-blue-700">material-fair.com</a> for pricing. Opening Night (Feb 5, 5-8pm) is ticketed separately.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">📍</div>
                <div>
                  <strong className="text-gray-900">Getting there</strong>
                  <p className="text-gray-600 text-sm">Maravilla Studios, Fresno 315, Col. Atlampa. Metro Buenavista (Lines 1, 3, 4) or San Cosme (Line 2). Rideshare recommended—limited street parking only.</p>
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
                  <strong>Do Material Monday.</strong> The gallery walk on February 2 is free and includes transportation between 12 spaces. It&apos;s the best way to see the local scene beyond the fair.
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
                  <strong>Stay for the closing rave.</strong> Saturday night after the fair closes, Material throws a proper party with DJs. It&apos;s become a highlight of Art Week.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-gray-700">
                  <strong>Take transit.</strong> Maravilla is well-connected by Metro and Metrobús, but street parking is limited. Rideshare or transit will save you the headache.
                </p>
              </div>
            </div>
          </section>

          {/* Sources */}
          <section className="mb-12 text-sm text-gray-500">
            <h3 className="font-medium text-gray-700 mb-2">Sources</h3>
            <ul className="space-y-1">
              <li><a href="https://www.artnews.com/art-news/market/material-art-fair-mexico-city-venue-change-stranger-things-1234767738/" className="hover:text-gray-700">ARTnews: Mexico City&apos;s Material Fair Announces Last-Minute Venue Change</a></li>
              <li><a href="https://www.artnews.com/art-news/market/material-art-fair-brett-w-schultz-interview-1234695435/" className="hover:text-gray-700">ARTnews: Material Fair Celebrates 10 Years (Brett Schultz Interview)</a></li>
              <li><a href="https://mymodernmet.com/feria-material-2025/" className="hover:text-gray-700">My Modern Met: Feria Material Welcomes 18,000 Visitors</a></li>
              <li><a href="https://material-fair.com/platform/feria-material-vol-12/" className="hover:text-gray-700">Material Art Fair: Feria Material Vol. 12</a></li>
              <li><a href="https://material-fair.com/exhibitor/" className="hover:text-gray-700">Material Art Fair: Exhibitor Programs</a></li>
              <li><a href="https://maravillastudios.com.mx/" className="hover:text-gray-700">Maravilla Studios</a></li>
              <li><a href="https://cobertizo.com.mx/" className="hover:text-gray-700">Cobertizo Art Residency</a></li>
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
