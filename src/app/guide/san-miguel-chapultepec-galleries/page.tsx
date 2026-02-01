import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "San Miguel Chapultepec Gallery Guide | CDMX Art Week 2026",
  description: "The complete guide to Mexico City's premier gallery district. Walking routes, gallery listings, hours, and insider tips for San Miguel Chapultepec during Art Week.",
  keywords: [
    "San Miguel Chapultepec galleries",
    "Mexico City gallery district",
    "CDMX art galleries",
    "Kurimanzutto",
    "OMR gallery",
    "Labor gallery Mexico City",
    "Mexico City art walk",
    "Art Week gallery guide",
    "contemporary art Mexico City",
  ],
  openGraph: {
    title: "San Miguel Chapultepec Gallery Guide | CDMX Art Week 2026",
    description: "The complete guide to Mexico City's premier gallery district.",
    url: "https://cdmxartweek.com/guide/san-miguel-chapultepec-galleries",
    type: "article",
  },
};

export default function SanMiguelChapultepecGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "San Miguel Chapultepec Gallery Guide",
    description: "The complete guide to Mexico City's premier gallery district during Art Week.",
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
        <header className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">Gallery District Guide</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              San Miguel Chapultepec
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Mexico City&apos;s gallery district. 15+ contemporary art spaces within walking distance, from blue-chip powerhouses to emerging artist platforms.
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12 p-6 bg-gray-50 rounded-xl">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">15+</p>
              <p className="text-sm text-gray-600">Galleries</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">3-4 hrs</p>
              <p className="text-sm text-gray-600">Walking Time</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">Free</p>
              <p className="text-sm text-gray-600">Admission</p>
            </div>
          </div>

          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-gray-50 rounded-xl">
            <h2 className="font-bold text-gray-900 mb-4">In This Guide</h2>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <a href="#why-here" className="text-gray-600 hover:text-gray-900">Why This Neighborhood?</a>
              <a href="#the-galleries" className="text-gray-600 hover:text-gray-900">The Galleries</a>
              <a href="#walking-route" className="text-gray-600 hover:text-gray-900">Walking Route</a>
              <a href="#art-week" className="text-gray-600 hover:text-gray-900">Art Week Programming</a>
              <a href="#practical" className="text-gray-600 hover:text-gray-900">Practical Info</a>
              <a href="#food" className="text-gray-600 hover:text-gray-900">Where to Eat</a>
            </div>
          </nav>

          {/* Intro */}
          <section className="mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you&apos;re serious about contemporary art, you&apos;ll end up in San Miguel Chapultepec. This quiet, tree-lined neighborhood west of Chapultepec Park has become Mexico City&apos;s answer to Chelsea or Mayfair—a concentrated cluster of galleries that represent everyone from Gabriel Orozco to emerging artists you&apos;ll be hearing about in five years.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Unlike fair-hopping, a gallery walk here is free, uncrowded, and lets you actually spend time with the work. Plan a full afternoon. Wear comfortable shoes. And don&apos;t try to see everything—pick 5-7 galleries that match your interests and give them proper attention.
            </p>
          </section>

          {/* Why Here */}
          <section id="why-here" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why This Neighborhood?</h2>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-6">
                San Miguel Chapultepec wasn&apos;t always an art district. Named after a 16th-century chapel dedicated to St. Michael the Archangel, it developed as a middle-class residential area in the early 20th century. The transformation started in the 2000s.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">The Timeline</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>1935:</strong> Galería de Arte Mexicano (GAM) founded—Mexico&apos;s first contemporary gallery (still operating, 90 years later)</p>
                  <p><strong>1999:</strong> Kurimanzutto founded by José Kuri and Mónica Manzutto with Gabriel Orozco</p>
                  <p><strong>2008:</strong> Kurimanzutto opens permanent San Miguel Chapultepec location</p>
                  <p><strong>2009:</strong> LABOR and Patricia Conde Galería open</p>
                  <p><strong>2018-present:</strong> Rapid expansion—Galería RGR, JO-HS, Alejandra Topete, and more</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                <strong>Why here specifically?</strong> The neighborhood offered large historic homes suitable for gallery conversion, proximity to Chapultepec Park, and—crucially—it&apos;s near Luis Barragán&apos;s UNESCO World Heritage house. LABOR sits directly across the street from Barragán&apos;s home. That proximity to one of Mexico&apos;s most important architects created a cultural anchor.
              </p>

              <p className="text-gray-600">
                Today, gallerists describe it as having &quot;the warmth and welcome of an intimate home&quot; rather than the sterile feel of some gallery districts. The residential character remains—you&apos;ll walk past family homes and corner shops between blue-chip galleries.
              </p>
            </div>
          </section>

          {/* The Galleries */}
          <section id="the-galleries" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Galleries</h2>

            <p className="text-gray-600 mb-8">
              Organized by type to help you prioritize. Most are free admission; some require appointments for Saturday visits.
            </p>

            {/* Blue Chip */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                Blue-Chip & Established
              </h3>
              <p className="text-gray-500 text-sm mb-4">Major galleries with international reputations and established artists.</p>

              <div className="space-y-6">
                {/* Kurimanzutto */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">Kurimanzutto</h4>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Must Visit</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">Gobernador Rafael Rebollar 94</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Mexico City&apos;s most influential contemporary gallery. Founded in 1999 with Gabriel Orozco, now representing major international artists. The building itself—designed by architect Alberto Kalach—is worth seeing. Industrial space with soaring ceilings.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Gabriel Orozco</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Daniel Guzmán</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Abraham Cruzvillegas</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    <strong>Hours:</strong> Tue-Thu 11am-6pm; Fri-Sat 11am-4pm
                  </p>
                </div>

                {/* GAM */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">Galería de Arte Mexicano (GAM)</h4>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Historic</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">Gobernador Rafael Rebollar 43</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Mexico&apos;s oldest active gallery—90 years and counting. Founded in 1935 by Carolina Amor, directed by her sister Inés from 1936-1980s. Represents the continuum of Mexican modern art from the muralists to contemporary. Essential for understanding Mexico&apos;s art history.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Mexican Modern</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Manuel Felguérez</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Helen Escobedo</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    <strong>Hours:</strong> Mon-Fri 10am-7pm
                  </p>
                </div>

                {/* OMR */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">Galería OMR</h4>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Must Visit</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">Córdoba 100, Roma Norte <span className="italic">(Note: Roma location)</span></p>
                  <p className="text-gray-600 text-sm mb-4">
                    40+ years in operation, 400+ exhibitions. Recently moved from a turn-of-century Porfirian villa to a brutalist 1970s building. International program with artists like Pia Camil, José Dávila, and Candida Höfer. They also run LagoAlgo, the restaurant/cultural space in Chapultepec Park.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Pia Camil</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">José Dávila</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">SUPERFLEX</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    <strong>Hours:</strong> Tue-Fri 10am-6pm; Sat 10am-4pm
                  </p>
                </div>

                {/* MASA */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">MASA Galería</h4>
                  <p className="text-gray-500 text-sm mb-3">Joaquín A. Pérez 6</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Blurs the line between art and design. Housed in a vast 19th-century colonial home previously owned by art patron Federico Sánchez Fogarty. The space itself is stunning. Focus on experimental and collectible design alongside contemporary art.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Hours:</strong> Tue-Thu 11am-6pm; Fri-Sat 11am-4pm
                  </p>
                </div>

                {/* Proyectos Monclova */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Proyectos Monclova</h4>
                  <p className="text-gray-500 text-sm mb-3">Lamartine 415, Polanco <span className="italic">(Note: Polanco location)</span></p>
                  <p className="text-gray-600 text-sm mb-4">
                    One of Mexico&apos;s most influential galleries since 2005. Focuses on modern and contemporary Mexican/Latin American art. Two exhibition areas plus a video room. Represents 5 iconic modern artists plus 20+ mid-career and established artists.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Hours:</strong> Mon-Fri 10am-6pm; Sat 11am-4pm
                  </p>
                </div>
              </div>
            </div>

            {/* Conceptual & Research-Based */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                Conceptual & Research-Based
              </h3>
              <p className="text-gray-500 text-sm mb-4">Galleries focused on conceptual work, social practice, and research-based projects.</p>

              <div className="space-y-6">
                {/* LABOR */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">LABOR</h4>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Essential</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">General Francisco Ramírez 5, Ampliación Daniel Garza</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Conceptual contemporary art addressing political and social issues. Founded 2009 by Pamela Echeverría. Located in a 1948 functionalist residence by architect Enrique del Moral—<strong>directly across from Luis Barragán&apos;s UNESCO World Heritage house</strong>. Artists work on research-based projects; 5 exhibitions annually.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Teresa Margolles</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Santiago Sierra</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Jill Magid</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    <strong>Contact:</strong> ana@labor.org.mx · +52 55 6304 8755
                  </p>
                </div>
              </div>
            </div>

            {/* Emerging & Contemporary */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                Emerging & Contemporary Focus
              </h3>
              <p className="text-gray-500 text-sm mb-4">Where you&apos;ll discover artists before everyone else does.</p>

              <div className="space-y-6">
                {/* Galería RGR */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Galería RGR</h4>
                  <p className="text-gray-500 text-sm mb-3">Gral. Antonio León 48</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Founded 2018. Whitewashed, laid-back space focused on painting, sculpture, installation, and digital media. First Latin American solo shows for Jeppe Hein (2021), Ding Yi (2022), and Mathias Bitzer (2023). Eclectic mix of 25+ international artists.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Hours:</strong> Tue-Fri 10am-6pm; Sat 11am-3pm
                  </p>
                </div>

                {/* JO-HS */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">JO-HS</h4>
                  <p className="text-gray-500 text-sm mb-3">Gobernador José Guadalupe Covarrubias 46</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Gallery, residency, and shop founded 2021 by Danish curator Elisabeth Johs. Focuses on emerging artists from Mexico and Latin America. Described as having &quot;the warmth and welcome of an intimate home.&quot; Worth visiting for the space itself.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Hours:</strong> Tue-Sat 9am-5pm
                  </p>
                </div>

                {/* House of Gaga */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">House of Gaga</h4>
                  <p className="text-gray-500 text-sm mb-3">Ámsterdam 123, Condesa <span className="italic">(Main location; new space opening Feb 2, 2026)</span></p>
                  <p className="text-gray-600 text-sm mb-4">
                    International contemporary gallery with ambitious programming. Known for collaborative projects and supporting emerging voices. Opening a new location during Art Week 2026.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Hours:</strong> Mon-Fri 10am-6pm · hello@houseofgaga.com
                  </p>
                </div>

                {/* Enrique Guerrero */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Enrique Guerrero Gallery</h4>
                  <p className="text-gray-500 text-sm mb-3">General Juan Cano 103</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Founded 1997, recently moved from Polanco. Bridges emerging artists and Latin American masters—represents José Clemente Orozco, Francisco Zúñiga, Francisco Toledo, and Julio Galán alongside new voices. Painting, sculpture, photography, video, installation, digital media.
                  </p>
                </div>

                {/* Saenger */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Saenger Galería</h4>
                  <p className="text-gray-500 text-sm mb-3">Near Constituyentes, across from Chapultepec Park</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Founded 2019 by Bernardo Saenger. Started as a publishing project, now focuses on energetic, younger painters. Located in a distinctive triangular building shared with GAM and the Universidad del Valle campus.
                  </p>
                </div>

                {/* Alejandra Topete */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">Alejandra Topete Gallery</h4>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">New 2024</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">San Miguel Chapultepec</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Opened September 2024. The owner spent 20 years as art conservator/restorer at Casa Luis Barragán—her roster of artists are influenced by Barragán&apos;s aesthetic. Focus on textiles and contemporary art with Latin American artists.
                  </p>
                </div>
              </div>
            </div>

            {/* Specialists */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-600 rounded-full"></span>
                Specialists
              </h3>
              <p className="text-gray-500 text-sm mb-4">Galleries with specific medium or genre focus.</p>

              <div className="space-y-6">
                {/* Patricia Conde */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">Patricia Conde Galería</h4>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Photography</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">Gral. Juan Cano 68</p>
                  <p className="text-gray-600 text-sm mb-4">
                    The only Mexican gallery dedicated exclusively to contemporary photography. Founded 2009. Represents the main modern photographers of the Mexican scene and has incorporated international photographers since 2012.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Contact:</strong> info@patriciacondegaleria.com · +52 55 5290-6345
                  </p>
                </div>

                {/* Le Laboratoire */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">Le Laboratoire</h4>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Urban Art</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">Gral. Antonio León 56</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Premier venue for urban art in Mexico City since 2008. Founded by French gallerist Julien Cuisset. Urban art, graphics, sound art, drawing, painting, photography, sculpture, video, performance. Upstairs shop &quot;Pisotres&quot; has artisanal products and contemporary design.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Hours:</strong> Tue-Sun 11am-2:30pm & 4:30-7pm; Sat by appointment only
                  </p>
                </div>

                {/* Pequeod Co */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Pequeod Co.</h4>
                  <p className="text-gray-500 text-sm mb-3">Lancaster 29, Juárez <span className="italic">(Note: Juárez location)</span></p>
                  <p className="text-gray-600 text-sm mb-4">
                    Founded 2020. Works with emerging artists among Mexico&apos;s most prominent voices. Ambitious projects through exhibitions and collaborations. Member of GAMA (Gallery Association). Small but influential.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Hours:</strong> Tue-Thu 11am-5pm; Fri-Sat 11am-2pm · 1@pequodco.com
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Walking Route */}
          <section id="walking-route" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Walking Route</h2>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-3">The Geography</h3>
              <p className="text-gray-600 text-sm mb-4">
                San Miguel Chapultepec is a triangle-shaped neighborhood bounded by Avenida Constituyentes (north), Avenida Parque Lira (west), and Circuito Bicentenario/Avenida Jalisco (east). Streets are named after Mexican generals and governors—you&apos;ll see &quot;General&quot; and &quot;Gobernador&quot; a lot.
              </p>
              <p className="text-gray-600 text-sm">
                The main gallery clusters are along <strong>Gobernador Rafael Rebollar</strong> (Kurimanzutto, GAM), <strong>Gral. Antonio León</strong> (Le Laboratoire, Galería RGR), and <strong>Gral. Juan Cano</strong> (Patricia Conde, Enrique Guerrero).
              </p>
            </div>

            <h3 className="font-bold text-gray-900 mb-4">Suggested Route (3-4 hours)</h3>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <div>
                  <p className="font-medium text-gray-900">Start at Kurimanzutto</p>
                  <p className="text-gray-600 text-sm">Gobernador Rafael Rebollar 94. The anchor of the district. Give yourself 30-45 minutes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <div>
                  <p className="font-medium text-gray-900">Walk to GAM</p>
                  <p className="text-gray-600 text-sm">Same street, #43. Mexico&apos;s oldest gallery. 15-20 minutes depending on the show.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <div>
                  <p className="font-medium text-gray-900">Head to MASA</p>
                  <p className="text-gray-600 text-sm">Joaquín A. Pérez 6. The building alone is worth the walk. Art + design crossover.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                <div>
                  <p className="font-medium text-gray-900">JO-HS</p>
                  <p className="text-gray-600 text-sm">Gobernador José Guadalupe Covarrubias 46. Emerging Latin American artists. Intimate space.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">5</div>
                <div>
                  <p className="font-medium text-gray-900">Coffee break</p>
                  <p className="text-gray-600 text-sm">Café Papagayo or Siete Café. You&apos;re halfway through.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">6</div>
                <div>
                  <p className="font-medium text-gray-900">Patricia Conde Galería</p>
                  <p className="text-gray-600 text-sm">Gral. Juan Cano 68. If you&apos;re interested in photography, don&apos;t skip this.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">7</div>
                <div>
                  <p className="font-medium text-gray-900">Galería RGR + Le Laboratoire</p>
                  <p className="text-gray-600 text-sm">Both on Gral. Antonio León. Two very different programs—contemporary/experimental and urban art.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">8</div>
                <div>
                  <p className="font-medium text-gray-900">End at LABOR</p>
                  <p className="text-gray-600 text-sm">General Francisco Ramírez 5. Across from Casa Luis Barragán. Save time for this one—the work is challenging and rewards attention.</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-gray-700 text-sm">
                <strong>Bonus:</strong> If you have time, book a tour of Casa Luis Barragán in advance (casaluisbarragan.org). It&apos;s right across from LABOR and one of the most important architectural experiences in Mexico City. Tours book up weeks ahead during Art Week.
              </p>
            </div>
          </section>

          {/* Art Week Programming */}
          <section id="art-week" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Art Week Programming</h2>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-6">
                During Art Week (February 2-9, 2026), galleries coordinate their schedules. Most open new shows, extend hours, and host special programming. Here&apos;s what to expect:
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">GAMA (Gallery Association)</h3>
                <p className="text-gray-600 text-sm mb-4">
                  GAMA is a private association of 26 member galleries representing modern and contemporary art. During coordinated events, member galleries extend hours (typically 11am-7pm) and often host evening openings.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Members include:</strong> Proyectos Monclova, GAM, House of Gaga, Pequeod Co., Patricia Conde, Le Laboratoire, and others.
                </p>
              </div>

              <h3 className="font-bold text-gray-900 mb-3">What Happens When</h3>
              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <p><strong>Monday-Tuesday (Feb 3-4):</strong> Gallery openings begin. Less crowded—good time to have actual conversations with gallerists.</p>
                <p><strong>Wednesday-Thursday (Feb 5-6):</strong> Fairs are open, so some visitors split time. Galleries may have artist talks, walkthroughs.</p>
                <p><strong>Friday evening (Feb 7):</strong> Coordinated gallery night across the district. Extended hours, often 6pm-9pm or later. Best energy of the week.</p>
                <p><strong>Saturday (Feb 8):</strong> Busiest day. Locals + visitors. Come early if you want space to think.</p>
              </div>

              <p className="text-gray-600">
                <strong>Pro tip:</strong> Check gallery Instagram accounts the week before—they&apos;ll announce specific opening dates and any special Art Week programming.
              </p>
            </div>
          </section>

          {/* Practical Info */}
          <section id="practical" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Info</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Getting There</h3>
                <p className="text-gray-600 text-sm mb-3">
                  <strong>Metro:</strong> Chapultepec (Line 2), Juanacatlán, or Constituyentes. From Chapultepec station, it&apos;s a 10-15 minute walk west into the neighborhood.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Uber/DiDi:</strong> Drop at Kurimanzutto or GAM on Gobernador Rafael Rebollar. 15-25 minutes from Roma/Condesa depending on traffic.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Parking</h3>
                <p className="text-gray-600 text-sm">
                  Paid lot on Calzada Gandhi beside Chapultepec Park. Street parking is limited and competitive. Honestly, Uber is easier.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600 text-sm">
                  Most galleries: Tue-Sat, roughly 10am/11am to 5pm/6pm. Some close for lunch. Mondays are almost universally closed. <strong>Always check websites before visiting</strong>—galleries may be between shows or by appointment only.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Appointments</h3>
                <p className="text-gray-600 text-sm">
                  Most galleries don&apos;t require appointments for regular visits. Exceptions: Le Laboratoire (Saturdays by appointment), some galleries during installation periods. Call or email if you&apos;re traveling specifically to see something.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">What to Wear</h3>
                <p className="text-gray-600 text-sm">
                  Smart casual. Comfortable walking shoes essential—you&apos;ll cover 2-3 miles. The neighborhood is residential, so you don&apos;t need to dress up, but this is the art world: all black still works.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Admission</h3>
                <p className="text-gray-600 text-sm">
                  Free at all galleries. No tickets needed. Some galleries have guest books—sign if you want to be added to mailing lists.
                </p>
              </div>
            </div>
          </section>

          {/* Where to Eat */}
          <section id="food" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Eat & Coffee</h2>

            <p className="text-gray-600 mb-6">
              The neighborhood has good options, though less density than Roma/Condesa. Plan for a mid-walk coffee and post-walk lunch.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Coffee</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900">Café Papagayo</p>
                    <p className="text-gray-600 text-sm">Full coffee bar, breakfast through dinner. Good midpoint break.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900">Siete Café</p>
                    <p className="text-gray-600 text-sm">Specialty coffee. Quick stop.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900">Bicca & Co.</p>
                    <p className="text-gray-600 text-sm">Café option in the neighborhood.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900">Las Puertas del Paraíso</p>
                    <p className="text-gray-600 text-sm">Organic bakery with specialty conchas (matcha, jamaica). Worth seeking out.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3">Lunch / Dinner</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900">Comal Oculto</p>
                    <p className="text-gray-600 text-sm">Heirloom corn focus. Wild mushroom sopes, enchiladas ahogadas, lamb shank gorditas. The move.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900">La Sirloinería</p>
                    <p className="text-gray-600 text-sm">Innovative tacos al pastor with sirloin on prime angus beef. Unexpected and excellent.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900">Cancino</p>
                    <p className="text-gray-600 text-sm">Local favorite. Solid choice.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900">LagoAlgo</p>
                    <p className="text-gray-600 text-sm">In Chapultepec Park. High-end Mexican, farm-to-table, lakeside setting. Run by OMR gallery. Art world crowd.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3">Quick Bites</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900">Tacos El Güero</p>
                    <p className="text-gray-600 text-sm">Taco stand. Fast, cheap, good.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900">La Ventanita</p>
                    <p className="text-gray-600 text-sm">Casual dining. Easy stop.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Tips */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Tips</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-xl">1.</div>
                <p className="text-gray-600">
                  <strong>Don&apos;t try to see everything.</strong> Pick 5-7 galleries based on your interests. Quality over quantity.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">2.</div>
                <p className="text-gray-600">
                  <strong>Talk to people.</strong> Gallery staff are generally knowledgeable and happy to discuss the work. This isn&apos;t a museum—engagement is welcome.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">3.</div>
                <p className="text-gray-600">
                  <strong>Check before you go.</strong> Galleries can be between shows, closed for installation, or by appointment only. A quick website/Instagram check saves wasted trips.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">4.</div>
                <p className="text-gray-600">
                  <strong>Combine with Casa Luis Barragán.</strong> Book the tour weeks in advance. It&apos;s right next to LABOR and essential if you care about architecture.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">5.</div>
                <p className="text-gray-600">
                  <strong>Friday evening during Art Week</strong> is the best time for energy and openings. Monday-Tuesday is best for actually looking at art without crowds.
                </p>
              </div>
            </div>
          </section>

          {/* Related Guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/guide/art-week-2026"
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-1">Complete Art Week Guide</h3>
                <p className="text-sm text-gray-600">The full overview</p>
              </Link>
              <Link
                href="/guide/what-to-wear-art-week-2026"
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-1">What to Wear</h3>
                <p className="text-sm text-gray-600">Dress codes + shopping</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Get Daily Updates</h2>
            <p className="text-gray-300 mb-6">
              I&apos;ll send what I actually find each day during Art Week—including gallery highlights.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition"
            >
              Subscribe Free
            </Link>
          </section>

          {/* Back Link */}
          <div className="mt-12 text-center">
            <Link
              href="/guide"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Back to all guides
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
