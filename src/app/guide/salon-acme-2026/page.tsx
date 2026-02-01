import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Salón ACME 2026: The Complete Guide | CDMX Art Week",
  description: "Everything about Salón ACME 2026 - the artist-run fair with free applications, emerging talent, and a stunning 1905 mansion venue. By artists, for artists.",
  keywords: [
    "Salón ACME 2026",
    "Salon ACME Mexico City",
    "Salón ACME art fair",
    "Proyectos Públicos",
    "General Prim mansion",
    "emerging artists Mexico City",
    "CDMX Art Week fairs",
    "free art fair application",
    "Mexico City art week",
    "artist-run art fair",
  ],
  openGraph: {
    title: "Salón ACME 2026: The Complete Guide",
    description: "The artist-run fair in a rescued 1905 mansion. Free to apply, open to all.",
    url: "https://cdmxartweek.com/guide/salon-acme-2026",
    type: "article",
  },
};

export default function SalonAcmeGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Salón ACME 2026: The Complete Guide",
    description: "Everything about Salón ACME - the artist-run fair with free applications and emerging talent",
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
        <header className="bg-gradient-to-br from-amber-900 via-stone-900 to-black text-white py-20">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-amber-400 uppercase tracking-widest text-sm mb-4">The Complete Guide</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Salón ACME 2026
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              By artists, for artists. The fair where you buy directly from creators in a crumbling 1905 mansion.
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Quick Facts */}
          <section className="mb-12 bg-amber-50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">The Basics</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Dates</span>
                <p className="font-medium text-gray-900">February 5-8, 2026</p>
              </div>
              <div>
                <span className="text-gray-500">Location</span>
                <p className="font-medium text-gray-900">Proyectos Públicos, Juárez</p>
              </div>
              <div>
                <span className="text-gray-500">Edition</span>
                <p className="font-medium text-gray-900">No. 13 (13th year)</p>
              </div>
              <div>
                <span className="text-gray-500">Artist Applications</span>
                <p className="font-medium text-gray-900">Free (no fee)</p>
              </div>
            </div>
          </section>

          {/* The Pitch */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Makes Salón ACME Different</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              If Material is the indie alternative to Zona Maco, <strong>Salón ACME is the indie alternative to everything</strong>. This isn&apos;t a gallery fair—it&apos;s an artist fair. No middlemen. You&apos;re buying directly from the people who made the work.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The application is <strong>completely free</strong>—extremely unusual for any art fair. Artists submit work, a curatorial board selects pieces, and if you&apos;re chosen, you show alongside 100+ other emerging creators. No booth fees, no gallery representation required.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              And the venue? A crumbling 1905 mansion that was abandoned for 47 years before being rescued from demolition. The peeling wallpaper stays. The faded paint stays. The graffiti from former squatters stays. It&apos;s not polished—it&apos;s alive.
            </p>

            <div className="border-l-4 border-amber-400 pl-6 my-8">
              <p className="text-gray-700 italic">
                &quot;We decided not to be a fair or a gallery because we saw a gap in how things are done in Mexico City. The general aim is to de-centre the contents of the fair and display work being done by groups of artists and curators in the states.&quot;
              </p>
              <p className="text-gray-500 text-sm mt-2">— Zazil Barba, Co-founder</p>
            </div>
          </section>

          {/* Origin Story */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Origin Story</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Salón ACME launched in 2013, the same year Material started. But where Material was founded by gallerists frustrated with Zona Maco, ACME was founded by <strong>artists frustrated with the entire gallery system</strong>.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The founders—<strong>Álvaro Ugarte, Sebastián Vizcaíno, and Zazil Barba</strong> (artists from Guadalajara), along with curator <strong>Homero Fernández</strong>—created the project through two collectives: Archipiélago and Base Proyectos. Their goal: investigate, incentivize, and promote artistic production in Mexico without the traditional gallery gatekeeping.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The key innovation? The <strong>Open Call</strong>. Any artist—any age, any nationality, any background—can submit work for free. A curatorial board reviews everything (they received 1,800 applications in 2025) and selects around 80 artists for the main exhibition. No gallery needed. No connections required.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              In 2023, <strong>Ana Castella</strong> became director. She&apos;d previously curated at arteBA (Buenos Aires) and ArtBO (Bogotá), and brought international connections while respecting the founders&apos; vision. Under her direction, the fair has grown to 22,000 visitors while maintaining its artist-first ethos.
            </p>
          </section>

          {/* The Venue */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Venue: A Rescued Mansion</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Salón ACME takes place at <strong>Proyecto Público Prim</strong>—and the building is as much a draw as the art inside it.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Built in 1905 by engineer Alberto Robles Gil (who later became governor of Jalisco), this neoclassical mansion in Colonia Juárez was abandoned for <strong>47 years</strong>. Water leaks, dust, decay. It was slated for demolition to make way for real estate development.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Then <strong>Pepe Islas</strong>, founder of Proyectos Públicos, bought it and rescued it. But here&apos;s the twist: instead of a pristine restoration, he preserved the patina. The decaying wood, the peeling paint, the windows without glass, the graffiti left by people who illegally occupied the space—it all stays.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Venue Details</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-amber-500">◆</span>
                  <span><strong>Address:</strong> Calle General Prim 30-32, Col. Juárez, Cuauhtémoc</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500">◆</span>
                  <span><strong>Nearest Metro:</strong> Insurgentes (5-10 min walk)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500">◆</span>
                  <span><strong>From Roma/Condesa:</strong> 10-15 min walk</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500">◆</span>
                  <span><strong>Architecture:</strong> Renovated by Productora and Alberto Kalach in 2014</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Atlas Obscura calls it one of Mexico City&apos;s hidden gems. Louis Vuitton shot a campaign here. But during Art Week, it belongs to the artists.
            </p>
          </section>

          {/* The Sections */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fair Sections</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-amber-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Convocatoria (Open Call)</h3>
                <p className="text-gray-600 mt-2">
                  The heart of Salón ACME. Around 80 artists selected from 1,800+ applications by a curatorial board that changes every year. The board includes artists, curators, scholars, gallerists, and museum directors—ensuring fresh perspectives each edition. <strong>Application is free</strong>, all techniques welcome, maximum price per work is $100,000 MXN.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Estado (State)</h3>
                <p className="text-gray-600 mt-2">
                  Each year, one Mexican state gets the spotlight. For 2026, it&apos;s <strong>Puebla</strong>, curated by art historian Nina Fiocco. Past editions featured Veracruz (2025), Nuevo León (2024), and others. This section de-centers Mexico City and highlights regional scenes that rarely get international attention.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Proyectos (Projects)</h3>
                <p className="text-gray-600 mt-2">
                  Solo presentations from galleries, residency programs, and art spaces from Mexico and internationally. The 2026 edition includes projects from Mexico City, London, Buenos Aires, and beyond. This is where you&apos;ll see more curated, gallery-backed presentations alongside the open call.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Bodega</h3>
                <p className="text-gray-600 mt-2">
                  A themed exhibition curated by a guest team. Past themes have explored personal spaces, memory, and domestic life. The 2025 edition (&quot;From Bed to Living Room&quot;) featured 21 artists. Expect something intimate and conceptual.
                </p>
              </div>

              <div className="border-l-4 border-pink-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Patio</h3>
                <p className="text-gray-600 mt-2">
                  Large-scale installations in the mansion&apos;s outdoor spaces. Past years have featured work addressing ecological themes, urban vegetation, and anti-monuments. This is where ACME gets ambitious and site-specific.
                </p>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="font-bold text-gray-900 text-lg">Sala</h3>
                <p className="text-gray-600 mt-2">
                  Editorial and printed materials—zines, artist books, independent publications, critical investigations. A nod to ACME&apos;s interdisciplinary roots.
                </p>
              </div>
            </div>
          </section>

          {/* Supporting Emerging Artists */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Salón ACME Supports Artists</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              ACME isn&apos;t just a place to show work—it&apos;s a launching pad. Here&apos;s what they offer:
            </p>

            <div className="space-y-6">
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Free Application, Fair Split</h3>
                <p className="text-gray-600 text-sm">
                  No application fee (unprecedented for art fairs). If your work sells, you keep <strong>60%</strong>—the fair takes 40%. Compare that to gallery commissions of 50% or more.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">HANGAR Residency (Lisbon)</h3>
                <p className="text-gray-600 text-sm">
                  HANGAR - Centro de Investigação Artística awards a one-month residency in Lisbon, Portugal to a selected artist. Past winners have used this to develop new bodies of work and connect with European art scenes.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Casa Wabi Residency (Oaxaca)</h3>
                <p className="text-gray-600 text-sm">
                  A one-month residency at Tadao Ando&apos;s stunning Casa Wabi on the coast of Oaxaca. One of Mexico&apos;s most prestigious artist residencies, awarded to a participating artist.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Cobertizo Residency (Mexico)</h3>
                <p className="text-gray-600 text-sm">
                  Two artists receive residencies at Cobertizo, a Mexican art space focused on contemporary art production.
                </p>
              </div>

              <div className="bg-pink-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Biennial of the Americas Award (Colorado)</h3>
                <p className="text-gray-600 text-sm">
                  New in 2025: a 2-4 week residency at RedLine Contemporary Art Center in Denver, Colorado, in partnership with the Biennial of the Americas.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">International Visitors Program</h3>
                <p className="text-gray-600 text-sm">
                  ACME invites curators from institutions like the <strong>Centre Pompidou, Palais de Tokyo, Reina Sofía, and Thyssen-Bornemisza</strong> to the fair. These aren&apos;t casual visitors—they&apos;re actively looking for emerging talent. Direct access to this level of institutional attention is rare.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-amber-400 pl-6 my-8">
              <p className="text-gray-700 italic">
                &quot;Participating in the Open Call exhibition can represent an important step in an artist&apos;s career. It is an opportunity to have wide visibility among a very diverse audience and to establish direct contact with the most important agents of the artistic and cultural scene.&quot;
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
                    Raw, emerging, unfiltered. You&apos;re seeing artists before they have gallery representation—some will be rough, some will blow you away. All formats and media: painting, sculpture, video, performance, installation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">💰</div>
                <div>
                  <strong className="text-gray-900">The prices</strong>
                  <p className="text-gray-600 mt-1">
                    Entry-level. Works max out at $100,000 MXN (~$5,000 USD), with many pieces in the $100-$3,500 range. This is where you start a collection without needing a trust fund.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">👥</div>
                <div>
                  <strong className="text-gray-900">The crowd</strong>
                  <p className="text-gray-600 mt-1">
                    22,000 visitors over four days—but more eclectic than the fair crowd. Artists, students, curious locals, serious collectors looking for discoveries, and international curators scouting talent.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🎭</div>
                <div>
                  <strong className="text-gray-900">Beyond visual art</strong>
                  <p className="text-gray-600 mt-1">
                    ACME is interdisciplinary. Expect live performances, music, literature events, and even gastronomy programming. The Estado section often includes live performances from the featured state.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🏛️</div>
                <div>
                  <strong className="text-gray-900">The building</strong>
                  <p className="text-gray-600 mt-1">
                    The venue is half the experience. Wander labyrinthine corridors, discover art in unexpected rooms, find yourself in a courtyard surrounded by preserved decay. Bring your camera.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Salón ACME vs. Material vs. Zona Maco</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 pr-4"></th>
                    <th className="text-left py-3 px-4 font-bold text-amber-600">ACME</th>
                    <th className="text-left py-3 px-4 font-bold text-blue-600">Material</th>
                    <th className="text-left py-3 pl-4 font-bold text-gray-600">Zona Maco</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Focus</td>
                    <td className="py-3 px-4">Artists (direct)</td>
                    <td className="py-3 px-4">Emerging galleries</td>
                    <td className="py-3 pl-4">Established galleries</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Price range</td>
                    <td className="py-3 px-4">$100 - $5,000 USD</td>
                    <td className="py-3 px-4">$1,000 - $64,000</td>
                    <td className="py-3 pl-4">$5,000 - $500,000+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Selection</td>
                    <td className="py-3 px-4">Free open call</td>
                    <td className="py-3 px-4">Gallery application</td>
                    <td className="py-3 pl-4">Gallery application</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Venue</td>
                    <td className="py-3 px-4">1905 mansion, Juárez</td>
                    <td className="py-3 px-4">Maravilla Studios, Atlampa</td>
                    <td className="py-3 pl-4">Centro Citibanamex</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Vibe</td>
                    <td className="py-3 px-4">Raw, intimate, DIY</td>
                    <td className="py-3 px-4">Experimental, social</td>
                    <td className="py-3 pl-4">Corporate, overwhelming</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-gray-900">Best for</td>
                    <td className="py-3 px-4">First-time collectors</td>
                    <td className="py-3 px-4">Emerging collectors</td>
                    <td className="py-3 pl-4">Serious buyers</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 leading-relaxed mt-6">
              Many people do all three—they&apos;re not mutually exclusive. But if you&apos;re new to collecting and want to buy something you love from someone you can actually talk to, ACME is where to start.
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
                  <p className="text-gray-600 text-sm">February 5-8, 2026 (same dates as Material)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">🎫</div>
                <div>
                  <strong className="text-gray-900">Tickets</strong>
                  <p className="text-gray-600 text-sm">Available at <a href="https://salonacme.com" className="text-amber-600 hover:text-amber-700">salonacme.com</a>. Much more affordable than the other fairs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">📍</div>
                <div>
                  <strong className="text-gray-900">Getting there</strong>
                  <p className="text-gray-600 text-sm">Calle General Prim 30-32, Col. Juárez. Walking distance from Roma Norte. Metro Insurgentes is nearby. Easy Uber from anywhere.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">⏰</div>
                <div>
                  <strong className="text-gray-900">Best time to go</strong>
                  <p className="text-gray-600 text-sm">Opening day for first picks. Later in the weekend for a more relaxed vibe. Artists are usually present and happy to talk.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">👟</div>
                <div>
                  <strong className="text-gray-900">What to wear</strong>
                  <p className="text-gray-600 text-sm">Casual. This is the least formal of the three fairs. The building has uneven floors and stairs—wear comfortable shoes.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pro Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pro Tips</h2>

            <div className="space-y-4">
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-gray-700">
                  <strong>Talk to the artists.</strong> Unlike gallery fairs, most artists are present at their work. Ask questions. Learn the story. This is the whole point of ACME.
                </p>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-gray-700">
                  <strong>Explore the building.</strong> Don&apos;t just see the main rooms. Wander the corridors, find the hidden spaces, go upstairs. The venue rewards curiosity.
                </p>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-gray-700">
                  <strong>Check the Estado section.</strong> The regional spotlight is often the most interesting part—artists you&apos;d never encounter otherwise, from scenes outside the capital.
                </p>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-gray-700">
                  <strong>Combine with Material.</strong> They run the same dates. ACME is in Juárez (walkable from Roma), Material is in Atlampa (quick transit). Do both in one day.
                </p>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-gray-700">
                  <strong>Bring cash for small purchases.</strong> Some artists may prefer cash for smaller works. Cards work too, but cash never hurts.
                </p>
              </div>
            </div>
          </section>

          {/* Gallery Climate Coalition */}
          <section className="mb-12">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Sustainability Note</h3>
              <p className="text-gray-600 text-sm">
                Salón ACME is a member of the <strong>Gallery Climate Coalition</strong>, indicating commitment to sustainable practices in the art sector. Small thing, but worth noting.
              </p>
            </div>
          </section>

          {/* Sources */}
          <section className="mb-12 text-sm text-gray-500">
            <h3 className="font-medium text-gray-700 mb-2">Sources</h3>
            <ul className="space-y-1">
              <li><a href="https://salonacme.com/en/about" className="hover:text-gray-700">Salón ACME Official Website</a></li>
              <li><a href="https://mymodernmet.com/salon-acme-art-fair-2025/" className="hover:text-gray-700">My Modern Met: Mexico City&apos;s Salón ACME Spotlights Emerging Creators</a></li>
              <li><a href="https://whitewall.art/art/salon-acme-no-11-is-a-fountain-of-emerging-creativity-in-mexico-city/" className="hover:text-gray-700">Whitewall: Salón ACME No. 11 Unveiled in Mexico City</a></li>
              <li><a href="https://whitewall.art/art/ana-castella-centers-latin-american-emerging-art-for-salon-acme-2024/" className="hover:text-gray-700">Whitewall: Ana Castella Centers Latin American Art for Salón ACME 2024</a></li>
              <li><a href="https://www.theartnewspaper.com/2025/02/07/material-salon-acme-mexico-city-art-week-zona-maco-satellite-fairs" className="hover:text-gray-700">The Art Newspaper: At Mexico City&apos;s Material and Salón Acme fairs</a></li>
              <li><a href="https://whitewall.art/lifestyle/proyectos-publicos-hosts-salon-acme-with-a-mission-to-democratize-art-in-mexico-city/" className="hover:text-gray-700">Whitewall: Proyectos Públicos Hosts Salón Acme</a></li>
              <li><a href="https://www.atlasobscura.com/places/proyecto-publico-prim" className="hover:text-gray-700">Atlas Obscura: Proyecto Público Prim</a></li>
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
              href="/guide/material-art-fair-2026"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Material Art Fair Guide
            </Link>
            <Link
              href="/guide/zona-maco-2026"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Zona Maco Guide →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
