import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What to Wear to Art Week Mexico City 2026 | CDMX Art Week",
  description: "The complete guide to dressing for Art Week CDMX - from Zona Maco VIP to Salón ACME casual. What the art world actually wears, where to shop in Mexico City, and how to nail the vibe.",
  keywords: [
    "What to wear Art Week Mexico City",
    "Zona Maco dress code",
    "Art Week CDMX fashion",
    "Mexico City vintage shopping",
    "Art fair fashion guide",
    "Material Art Fair style",
    "art world fashion",
    "Mexico City February weather",
    "Roma Condesa vintage shops",
    "La Lagunilla market",
  ],
  openGraph: {
    title: "What to Wear to Art Week Mexico City 2026",
    description: "From Zona Maco VIP to Salón ACME casual - how to dress for every fair and party.",
    url: "https://cdmxartweek.com/guide/what-to-wear-art-week-2026",
    type: "article",
  },
};

export default function WhatToWearGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What to Wear to Art Week Mexico City 2026",
    description: "The complete guide to dressing for Art Week CDMX",
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
        <header className="bg-gradient-to-br from-stone-900 via-neutral-900 to-black text-white py-20">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-stone-400 uppercase tracking-widest text-sm mb-4">The Style Guide</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              What to Wear to Art Week
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Mexico City isn&apos;t Miami. Here&apos;s how the art world actually dresses—and where to find it.
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* The Vibe */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">First: Forget What You Think You Know</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              If your reference point is Art Basel Miami—influencers in sequined sets, yacht party energy, see-and-be-seen excess—reset your expectations. <strong>Mexico City Art Week is not that.</strong>
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The vibe here is more intellectual, more understated, more... interesting. Yes, people dress up. But the flex isn&apos;t loud luxury—it&apos;s a vintage piece with a story, an emerging Mexican designer, a perfectly broken-in leather jacket. The goal isn&apos;t to look expensive. It&apos;s to look like you belong in a room full of artists, collectors, and curators who&apos;ve been doing this for decades.
            </p>

            <div className="border-l-4 border-stone-400 pl-6 my-8">
              <p className="text-gray-700 italic">
                &quot;As a freelancer, I represent myself. In the visually crowded environment of an art fair, having an identifiable look is a way to stand out. My go-to: one sexy thing and one conversation starter.&quot;
              </p>
              <p className="text-gray-500 text-sm mt-2">— Osman Can Yerebakan, art journalist</p>
            </div>
          </section>

          {/* How CDMX Differs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Mexico City Differs from Other Art Weeks</h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 pr-4 font-bold text-gray-900">City</th>
                    <th className="text-left py-3 px-4">Vibe</th>
                    <th className="text-left py-3 pl-4">What People Wear</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Art Basel Miami</td>
                    <td className="py-3 px-4">Party, influencer, see-and-be-seen</td>
                    <td className="py-3 pl-4">&quot;Loud lux meets artsy meets old money with beach vacation sprinkled in&quot;</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Frieze London</td>
                    <td className="py-3 px-4">Intellectual, fashion-forward, making an effort</td>
                    <td className="py-3 pl-4">New clothes, clearly dressed up, but more understated than Miami</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Zona Maco</td>
                    <td className="py-3 px-4">International, business-creative, Latin American wealth</td>
                    <td className="py-3 pl-4">Quality materials, polished but not flashy, gallerist-appropriate</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-gray-900">Material</td>
                    <td className="py-3 px-4">Experimental, social, &quot;tragically hip&quot;</td>
                    <td className="py-3 pl-4">Art world black, interesting pieces over expensive ones</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-gray-900">Salón ACME</td>
                    <td className="py-3 px-4">DIY, artist-run, intimate</td>
                    <td className="py-3 pl-4">Most casual—comfortable shoes for uneven mansion floors</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 leading-relaxed">
              The key insight: <strong>each fair has a different dress code</strong>. What works at Zona Maco VIP would feel overdressed at Salón ACME. What&apos;s perfect for Material might be too casual for a collector dinner. Read the room—or read ahead.
            </p>
          </section>

          {/* The Weather */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Weather Factor</h2>

            <div className="bg-amber-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">February in Mexico City</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Daytime highs</span>
                  <p className="font-medium text-gray-900">73°F (23°C) - warm, sunny</p>
                </div>
                <div>
                  <span className="text-gray-500">Nighttime lows</span>
                  <p className="font-medium text-gray-900">43°F (6°C) - genuinely cold</p>
                </div>
                <div>
                  <span className="text-gray-500">Rain</span>
                  <p className="font-medium text-gray-900">Almost none (dry season)</p>
                </div>
                <div>
                  <span className="text-gray-500">UV Index</span>
                  <p className="font-medium text-gray-900">High - sunscreen needed</p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              The 30-degree temperature swing is the thing people get wrong. You&apos;ll be in a t-shirt at 2pm and genuinely cold waiting for an Uber at 11pm. <strong>Layers aren&apos;t optional—they&apos;re the entire strategy.</strong>
            </p>

            <p className="text-gray-600 leading-relaxed">
              Also: many buildings (galleries, older venues, B&Bs) don&apos;t have great heating. That 1905 mansion hosting Salón ACME? Beautiful. Also cold inside in the morning.
            </p>
          </section>

          {/* The Art World Uniform */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Art World Uniform (Yes, It&apos;s Real)</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              There&apos;s a reason the stereotype exists. Walk into any gallery opening anywhere in the world and you&apos;ll see a sea of black. Why?
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="text-xl">🎨</div>
                <div>
                  <strong className="text-gray-900">It lets the art stand out</strong>
                  <p className="text-gray-600 text-sm mt-1">You&apos;re not competing with the work on the walls. Neutral clothing makes the viewer, not the viewed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">🍷</div>
                <div>
                  <strong className="text-gray-900">Practical reasons</strong>
                  <p className="text-gray-600 text-sm mt-1">Red wine spills. Paint stains. Black hides evidence of both.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">✨</div>
                <div>
                  <strong className="text-gray-900">The details do the talking</strong>
                  <p className="text-gray-600 text-sm mt-1">When everyone&apos;s in black, the differentiators become: interesting spectacles, sculptural shoes, a single bold accessory, quality of fabric.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              The brands associated with this aesthetic: The Row, Loewe, Bottega Veneta, Jil Sander, Issey Miyake (especially Pleats Please—lightweight, wrinkle-resistant, travels well). More affordable: COS, &amp;Other Stories.
            </p>

            <div className="border-l-4 border-stone-400 pl-6 my-8">
              <p className="text-gray-700 italic">
                &quot;My artistic interests are very eclectic, but I would describe my personal style as quite minimalist. I surround myself with color and pattern through the art I work with every day, so I prefer my clothes to be more neutral. Basically, I let the art do the talking.&quot;
              </p>
              <p className="text-gray-500 text-sm mt-2">— Art world insider, PORTER interview</p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              That said: <strong>you don&apos;t have to wear black</strong>. Some of the most memorable people at fairs are the ones who commit to color, pattern, or something unexpected. The point isn&apos;t conformity—it&apos;s intentionality.
            </p>
          </section>

          {/* Fair by Fair */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Wear: Fair by Fair</h2>

            <div className="space-y-8">
              {/* Zona Maco */}
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Zona Maco</h3>
                <p className="text-sm text-gray-500 mb-4">The main fair. Corporate-ish. International collectors.</p>

                <div className="space-y-3 text-gray-600">
                  <p><strong>The vibe:</strong> Business-creative. Think gallerist at a board meeting, not gallerist at an opening.</p>
                  <p><strong>What works:</strong> Quality materials over logos. A well-cut blazer. Cashmere. Structured bags. Clean lines. Interesting shoes that you can still walk miles in.</p>
                  <p><strong>What doesn&apos;t:</strong> Anything too casual (athleisure, shorts, flip-flops). Anything too flashy (you&apos;re not competing with collectors who spend six figures).</p>
                  <p><strong>Pro tip:</strong> The venue is a convention center. It&apos;s huge. It&apos;s air-conditioned. Bring a light layer even though it&apos;s warm outside.</p>
                </div>
              </div>

              {/* Material */}
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Material Art Fair</h3>
                <p className="text-sm text-gray-500 mb-4">The indie fair. Experimental galleries. &quot;Tragically hip&quot; crowd.</p>

                <div className="space-y-3 text-gray-600">
                  <p><strong>The vibe:</strong> Creative casual. The gallerists might be aloof, the work might be provocative, and the crowd definitely knows about that band you haven&apos;t heard of yet.</p>
                  <p><strong>What works:</strong> Vintage. All-black with one interesting piece. Statement outerwear. Band tees if they&apos;re good ones. Japanese designers. Things with a story.</p>
                  <p><strong>What doesn&apos;t:</strong> Looking like you&apos;re trying too hard. Obvious luxury logos. Anything that screams &quot;I just came from Zona Maco VIP.&quot;</p>
                  <p><strong>Pro tip:</strong> The closing rave on Saturday is a real party. If you&apos;re staying, dress for dancing.</p>
                </div>
              </div>

              {/* Salon ACME */}
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Salón ACME</h3>
                <p className="text-sm text-gray-500 mb-4">Artist-run. In a crumbling 1905 mansion. Most casual.</p>

                <div className="space-y-3 text-gray-600">
                  <p><strong>The vibe:</strong> Come as you are. This is a fair where artists sell their own work, BBQs replace collector dinners, and the building itself has graffiti from former squatters.</p>
                  <p><strong>What works:</strong> Whatever you&apos;re comfortable in. Layers (the mansion is cold in the morning). Shoes you can walk uneven floors in. Something with pockets for cash.</p>
                  <p><strong>What doesn&apos;t:</strong> Overdressing. Looking like you think you&apos;re at a different fair.</p>
                  <p><strong>Pro tip:</strong> The Estado section often has live music and performances. Dress for standing, moving, being part of something.</p>
                </div>
              </div>

              {/* Parties */}
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Openings &amp; After-Parties</h3>
                <p className="text-sm text-gray-500 mb-4">Gallery openings, Mayan Warrior, late nights.</p>

                <div className="space-y-3 text-gray-600">
                  <p><strong>The vibe:</strong> This is where you can go bold. Evening events are the place for statement pieces, more makeup, higher heels (if that&apos;s your thing), drama.</p>
                  <p><strong>What works:</strong> The thing you&apos;ve been waiting for an excuse to wear. Interesting textures. Something that moves. Conversation starters.</p>
                  <p><strong>What doesn&apos;t:</strong> Anything uncomfortable. You&apos;ll be standing, drinking, talking for hours.</p>
                  <p><strong>Pro tip:</strong> It gets cold at night. A great coat or jacket is both practical and an outfit-maker.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Types of People */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who You&apos;ll See (And What They&apos;re Wearing)</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl">💰</div>
                <div>
                  <strong className="text-gray-900">Serious Collectors</strong>
                  <p className="text-gray-600 mt-1">
                    Understated luxury. The Row, Bottega Veneta, Jil Sander. They want to blend in enough to browse without being immediately targeted by salespeople, but the quality signals status. Interesting spectacles are common.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🖼️</div>
                <div>
                  <strong className="text-gray-900">Gallerists &amp; Dealers</strong>
                  <p className="text-gray-600 mt-1">
                    A lot of black. Simple silhouettes, quality fabrics. &quot;Subtle flourishes like a bow or a fine material like cashmere or velvet make a straightforward suit more memorable.&quot; They&apos;re working—comfort matters.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🎨</div>
                <div>
                  <strong className="text-gray-900">Artists</strong>
                  <p className="text-gray-600 mt-1">
                    Two camps: the all-black uniform (practical, lets the work speak) or the &quot;art party peacock&quot; who uses clothing as self-expression. Both are valid.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🏛️</div>
                <div>
                  <strong className="text-gray-900">Curators &amp; Museum People</strong>
                  <p className="text-gray-600 mt-1">
                    Often incorporate pieces from designers they&apos;ve worked with, or local artisans. More intellectual approach to fashion—wearing something with a story or cultural significance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">📱</div>
                <div>
                  <strong className="text-gray-900">The Instagram Crowd</strong>
                  <p className="text-gray-600 mt-1">
                    More common at Basel Miami than here, but they exist. Bold statement pieces, photo-ready outfits. In CDMX, this energy mostly shows up at Mayan Warrior, not the fairs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mexican Fashion Identity */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Mexican Fashion Advantage</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Here&apos;s the thing about dressing for Art Week in Mexico City: <strong>you have access to one of the most interesting fashion scenes in the world</strong>. Mexican designers are doing things no one else is doing—collaborating with indigenous artisans, reviving ancestral techniques, creating contemporary pieces rooted in centuries of tradition.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Incorporating a local piece isn&apos;t just stylish—it shows cultural awareness. It&apos;s a conversation starter. And it supports the creative economy you&apos;re there to celebrate.
            </p>

            <div className="bg-stone-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Mexican Designers to Know</h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <strong>Carla Fernández</strong> - Collaborates with artisans from indigenous communities across Mexico. &quot;The best fashion in Mexico is made in the mountains, the deserts, and the jungles.&quot; Bold colors, androgynous shapes, handmade.
                </div>
                <div>
                  <strong>Yakampot</strong> - Contemporary design meets indigenous craftsmanship. Founded 2012, works with communities across Mexico.
                </div>
                <div>
                  <strong>Sandra Weil</strong> - Elegant silk dresses, draped trousers, delicate blouses. Flagship in Polanco.
                </div>
                <div>
                  <strong>Lydia Lavín</strong> - Works with 3,000+ artisans from 14 indigenous communities. Huichol embroidery and beadwork on contemporary gowns.
                </div>
              </div>
            </div>

            <div className="border-l-4 border-stone-400 pl-6 my-8">
              <p className="text-gray-700 italic">
                &quot;In today&apos;s Mexican design language there&apos;s a complexity. For us it means pride in a combination of cultures—the European modernists who came to Mexico City, our Aztec roots, our pre-Columbian aesthetics—and we push them all forward into a more international, contemporary view.&quot;
              </p>
              <p className="text-gray-500 text-sm mt-2">— Mexican designer</p>
            </div>
          </section>

          {/* Where to Shop */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Shop in Mexico City</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Whether you need a last-minute outfit or want to find something unique, Mexico City has options at every price point. Here&apos;s the breakdown:
            </p>

            {/* Luxury */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-lg">💎</span> Luxury Designer ($$$$)
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600 mb-3">
                  <strong>Polanco</strong> - Avenida Presidente Masaryk is &quot;the Rodeo Drive of Mexico City.&quot; Louis Vuitton, Hermès, Gucci, Chanel flagships. El Palacio de Hierro department store. Mexican designers like Carla Fernández and Sandra Weil also have boutiques here.
                </p>
              </div>
            </div>

            {/* High-End Vintage */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-lg">✨</span> Designer Vintage ($$$)
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div>
                  <strong className="text-gray-900">VOID</strong> <span className="text-gray-500 text-sm">(Condesa/Roma)</span>
                  <p className="text-gray-600 text-sm">1930s house, five themed rooms, café in back. Chanel, Hermès, Saint Laurent, Gucci from 1800-1999. &quot;Don&apos;t expect a bargain—goods are mint condition, prices correspond.&quot;</p>
                </div>
                <div>
                  <strong className="text-gray-900">Goodbye Folk</strong> <span className="text-gray-500 text-sm">(Roma Norte)</span>
                  <p className="text-gray-600 text-sm">Three-story townhouse since 2008. 70s-90s vintage, themed rooms, custom shoes, barbershop. Prices: $340-1,200 MXN ($17-60 USD).</p>
                </div>
              </div>
            </div>

            {/* Mid-Range Vintage */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-lg">🧥</span> Curated Vintage ($$)
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div>
                  <strong className="text-gray-900">Revolver Vintage</strong> <span className="text-gray-500 text-sm">(Roma)</span>
                  <p className="text-gray-600 text-sm">Rock &apos;n&apos; roll focus. Leather motorcycle jackets, denim, band tees, vintage sports.</p>
                </div>
                <div>
                  <strong className="text-gray-900">Erre Vintage</strong> <span className="text-gray-500 text-sm">(Condesa)</span>
                  <p className="text-gray-600 text-sm">Quality denim and t-shirts. Hip aesthetic, well-curated basics.</p>
                </div>
                <div>
                  <strong className="text-gray-900">Back to Life Vintage</strong> <span className="text-gray-500 text-sm">(Roma)</span>
                  <p className="text-gray-600 text-sm">Cowboy boots, kimonos, suede jackets, great jewelry. $13-220 USD range.</p>
                </div>
                <div>
                  <strong className="text-gray-900">Casa Ananda</strong> <span className="text-gray-500 text-sm">(Roma Norte)</span>
                  <p className="text-gray-600 text-sm">Gorgeous multi-story house. Vintage clothing, local art, records, vintage magazines.</p>
                </div>
              </div>
            </div>

            {/* Markets */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-lg">🛒</span> Markets &amp; Tianguis ($)
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div>
                  <strong className="text-gray-900">Tianguis La Lagunilla</strong> <span className="text-gray-500 text-sm">(Centro - Sundays, arrive by 8am)</span>
                  <p className="text-gray-600 text-sm">The legendary Sunday market. Six blocks of antiques, vintage, cowboy boots, band tees. &quot;Piles of good clothing for 50 pesos&quot; (~$2.50 USD). Micheladas, music, atmosphere.</p>
                </div>
                <div>
                  <strong className="text-gray-900">Tianguis Cultural del Chopo</strong> <span className="text-gray-500 text-sm">(Buenavista - Saturdays 11am-5pm)</span>
                  <p className="text-gray-600 text-sm">The punk/metal/goth market since 1980. Band tees $100-250 MXN ($5-12 USD). Vinyl, leather, alternative everything. Live bands.</p>
                </div>
                <div>
                  <strong className="text-gray-900">Bazar del Sábado</strong> <span className="text-gray-500 text-sm">(San Ángel - Saturdays 9am-6pm)</span>
                  <p className="text-gray-600 text-sm">High-quality artisan market since 1960. Hand-tooled leather, jewelry, fine art. More expensive but exceptional quality. Near Frida &amp; Diego museum.</p>
                </div>
                <div>
                  <strong className="text-gray-900">Mercado Pino Suárez</strong> <span className="text-gray-500 text-sm">(Centro)</span>
                  <p className="text-gray-600 text-sm">&quot;The heart of thrift shopping in Centro.&quot; Entire market for secondhand clothing. Zero pretension, ridiculously cheap prices.</p>
                </div>
              </div>
            </div>

            {/* Budget */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-lg">💵</span> Budget &amp; Deep Thrift (¢)
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div>
                  <strong className="text-gray-900">Pacas near Mercado Mixcalco</strong> <span className="text-gray-500 text-sm">(Centro)</span>
                  <p className="text-gray-600 text-sm">&quot;Pacas&quot; = bulk bales of used clothes from the US. Dig through piles for 10-100 pesos ($0.50-5 USD). Leather, workwear, Y2K pieces. Cash only, patience required.</p>
                </div>
                <div>
                  <strong className="text-gray-900">Tepito</strong> <span className="text-gray-500 text-sm">(Centro - ⚠️ use caution)</span>
                  <p className="text-gray-600 text-sm">Insane selection, obscure finds, counterfeit designer. Wednesday used clothing: garments for 1 peso. <strong>Safety rules</strong>: Go in groups, daytime only, leave valuables at hotel, bring small cash, don&apos;t photograph, stick to main streets. Not for tourists.</p>
                </div>
              </div>
            </div>

            {/* Artisan */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-lg">🧵</span> Artisan &amp; Traditional Textiles
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div>
                  <strong className="text-gray-900">La Ciudadela</strong> <span className="text-gray-500 text-sm">(Centro)</span>
                  <p className="text-gray-600 text-sm">350+ vendors from 22 Mexican states. Textiles, embroidery, silver, leather. Walk the whole market first—prices vary wildly. Bargaining expected.</p>
                </div>
                <div>
                  <strong className="text-gray-900">Mercado de Artesanías de Coyoacán</strong> <span className="text-gray-500 text-sm">(Coyoacán)</span>
                  <p className="text-gray-600 text-sm">Two floors in charming colonial neighborhood. Embroidered blouses, rebozos, ceramics. &quot;Too cheap to haggle.&quot; Near Frida Kahlo Museum.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Practical Checklist */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Practical Checklist</h2>

            <div className="space-y-4">
              <div className="p-4 bg-stone-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Layers, layers, layers.</strong> A light jacket or sweater for daytime AC; a real coat for cold nights. The temperature swing is 30+ degrees.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Comfortable shoes you can walk miles in.</strong> Zona Maco is massive. You&apos;ll be on your feet all day. Beautiful but painful doesn&apos;t work here.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Sunscreen and sunglasses.</strong> February UV is high. You&apos;ll be walking between venues.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>A bag that works.</strong> You&apos;ll be carrying a phone, cards, maybe a catalog or two. Crossbody keeps hands free. Nothing too precious—you&apos;re in crowds.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>One &quot;going out&quot; outfit.</strong> For openings, dinners, Mayan Warrior. Something you feel great in that&apos;s different from your fair-walking clothes.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Cash in small bills.</strong> For markets, small vendors, and tips. Not everywhere takes cards.
                </p>
              </div>
            </div>
          </section>

          {/* Final Advice */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Real Advice</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Here&apos;s what actually matters: <strong>wear something that makes you feel like yourself</strong>. The art world rewards authenticity and punishes trying too hard. The best-dressed people at any fair aren&apos;t the ones in the most expensive clothes—they&apos;re the ones who look comfortable in their own skin.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              If you have a look, commit to it. If you don&apos;t, keep it simple: good basics, one interesting piece, comfortable shoes. You&apos;re there to see art and have conversations, not to compete in a fashion show.
            </p>

            <div className="border-l-4 border-stone-400 pl-6 my-8">
              <p className="text-gray-700 italic">
                &quot;What she values: Authenticity, individuality, and creativity. What she isn&apos;t: Power-dressed or dolled-up.&quot;
              </p>
              <p className="text-gray-500 text-sm mt-2">— PORTER, on art world style</p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              And if you&apos;re still stressed about it? Go to La Lagunilla on Sunday morning, find a vintage leather jacket for 200 pesos, and call it your Art Week uniform. You&apos;ll fit right in.
            </p>
          </section>

          {/* Sources */}
          <section className="mb-12 text-sm text-gray-500">
            <h3 className="font-medium text-gray-700 mb-2">Sources</h3>
            <ul className="space-y-1">
              <li><a href="https://www.artbasel.com/stories/fashion-art-basel-paris-fair" className="hover:text-gray-700">Art Basel: What to Wear at an Art Fair</a></li>
              <li><a href="https://www.net-a-porter.com/en-us/porter/article-f7918aefb6da2f7f/fashion/fashion-memo/how-to-dress-like-an-art-world-insider" className="hover:text-gray-700">PORTER: How to Dress Like an Art World Insider</a></li>
              <li><a href="https://roadbook.com/mexico-city/city-guide/best-vintage-shops-flea-markets-mexico-city/" className="hover:text-gray-700">Roadbook: Best Vintage Shops and Flea Markets in Mexico City</a></li>
              <li><a href="https://sustainably-chic.com/blog/mexico-city-thrift-stores/" className="hover:text-gray-700">Sustainably Chic: 21 Best Vintage &amp; Thrift Stores in Mexico City</a></li>
              <li><a href="https://doors.nyc/collections/mexican-designers" className="hover:text-gray-700">Doors NYC: Mexican Fashion Designers</a></li>
              <li><a href="https://theartgirl.substack.com/p/what-to-wear-art-basel-miami" className="hover:text-gray-700">The Art Girl: What to Wear to Art Basel Miami</a></li>
              <li><a href="https://anearthlyparadise.com/mexico-city-february-weather/" className="hover:text-gray-700">Mexico City in February: Weather Guide</a></li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Get the Full Art Week Schedule</h2>
            <p className="text-gray-300 mb-6">
              All the fairs, openings, and parties. Daily picks in your inbox.
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
              href="/guide/art-week-2026"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Complete Art Week Guide
            </Link>
            <Link
              href="/guide/material-art-fair-2026"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Material Art Fair Guide →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
