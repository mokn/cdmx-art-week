import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mayan Warrior Mexico City 2026: The Complete History & Guide | CDMX Art Week",
  description: "The complete story of Mayan Warrior - from Mexico City origins to Burning Man legend to the 2023 fire and rebirth. Everything about their Art Week 2026 return.",
  keywords: [
    "Mayan Warrior 2026",
    "Mayan Warrior Mexico City",
    "Mayan Warrior history",
    "Mayan Warrior fire",
    "Mayan Warrior Galaxyer",
    "Mayan Warrior Burning Man",
    "Pablo González Vargas",
    "Mayan Warrior Art Week",
    "Mexico City techno",
    "Mayan Warrior CDMX",
  ],
  openGraph: {
    title: "Mayan Warrior Mexico City 2026: The Complete Story",
    description: "From Mexico City origins to Burning Man legend to the fire and rebirth. The full Mayan Warrior story.",
    url: "https://cdmxartweek.com/guide/mayan-warrior-2026",
    type: "article",
  },
};

export default function MayanWarriorGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mayan Warrior Mexico City 2026: The Complete History & Guide",
    description: "The complete story of Mayan Warrior and their Art Week 2026 return",
    datePublished: "2026-01-28",
    dateModified: "2026-02-01",
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
        <header className="bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white py-20">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-purple-400 uppercase tracking-widest text-sm mb-4">The Complete Story</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Mayan Warrior
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From a Mexico City dream to Burning Man legend. The fire that destroyed everything. And the rebirth that followed.
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Quick Facts */}
          <section className="mb-12 bg-purple-50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Art Week 2026</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Date</span>
                <p className="font-medium text-gray-900">Friday, February 7, 2026</p>
              </div>
              <div>
                <span className="text-gray-500">Venue</span>
                <p className="font-medium text-gray-900">Parque Bicentenario</p>
              </div>
              <div>
                <span className="text-gray-500">Time</span>
                <p className="font-medium text-gray-900">10pm – 5am</p>
              </div>
              <div>
                <span className="text-gray-500">Type</span>
                <p className="font-medium text-gray-900">Annual Fundraiser</p>
              </div>
            </div>
          </section>

          {/* The Origin Story */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Origin Story</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              It started in 2011 with a small gathering of friends and a wild idea: bring Mexico&apos;s emerging electronic music scene to Burning Man in a way no one had done before.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The man behind it was <strong>Pablo González Vargas</strong>—a Mexico City entrepreneur who&apos;d already founded Sr. Pago (one of Latin America&apos;s leading e-payment platforms) and EXA Radio and TV (one of Mexico&apos;s biggest youth media networks). But his real passion was art and music.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              In 2012, Mayan Warrior was born. González Vargas assembled a crew of artists, craftsmen, photographers, designers, architects, and musicians from Mexico City and Northern California. The mission: showcase the incredible rise of contemporary Mexican electronic music and digital arts to the world.
            </p>

            <div className="border-l-4 border-purple-400 pl-6 my-8">
              <p className="text-gray-700 italic">
                &quot;The platform connects the ancient psychedelic mysticism of Mexico—a birthplace for rituals involving magic mushrooms and peyote—with the cyber-hippy technology of today&apos;s Burning Man.&quot;
              </p>
              <p className="text-gray-500 text-sm mt-2">— NBC News</p>
            </div>
          </section>

          {/* Cultural Roots */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Cultural Roots</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Mayan Warrior isn&apos;t just a name—it&apos;s a philosophy. The project draws deeply from Mexico&apos;s indigenous heritage, specifically <strong>Mayan culture</strong> and the <strong>Wixárika (Huichol)</strong> traditions from the Peyote Desert in central Mexico.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The Wixárika people are known for their spiritual pilgrimages to harvest peyote, their intricate beadwork and yarn paintings depicting cosmic visions, and their belief in the interconnectedness of all things. These themes—transformation, transcendence, community, and cosmic connection—run through everything Mayan Warrior does.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              González Vargas has described the project as a &quot;healing and transformational platform&quot;—not just a party, but a space for higher states of consciousness and self-discovery.
            </p>
          </section>

          {/* The Art Car */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Legendary Art Car</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              The heart of Mayan Warrior was always the art car. Built on a heavy-duty International 4400 truck that was completely torn down and rebuilt, it became one of the most recognized vehicles at Burning Man.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">The Original Build</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-purple-500">◆</span>
                  <span>The truck&apos;s cab transformed into the head of a supernatural Mayan being</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500">◆</span>
                  <span>Blazing neon and the same twinkling strobes used in the Eiffel Tower</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500">◆</span>
                  <span>12 30-watt strafing lasers dancing across the night sky</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500">◆</span>
                  <span>German D&B Audiotechnik sound system—one of the best on the playa</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500">◆</span>
                  <span>Visible from greater distance than any other art car at Burning Man</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              The lighting was designed by <strong>Paolo Montiel</strong>—the same designer who set the Chichén Itzá pyramids aglow. Co-founder <strong>Barrett Lyon</strong>, an internet entrepreneur who founded cyber-security firm Defense.net, helped bring the technical vision to life.
            </p>

            <p className="text-gray-600 leading-relaxed">
              It cost roughly <strong>$600,000 per year</strong> just to transport the car to the playa, plus another $300,000 to run the foundation that covered maintenance, storage, and operations. This was never a money-making venture—it was a labor of love funded by González Vargas and the community.
            </p>
          </section>

          {/* The Music */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Sound</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Mayan Warrior&apos;s musical identity sits firmly in the <strong>deep house</strong> world—what González Vargas describes as &quot;a very small scene, maybe 300,000 people around the world.&quot; It&apos;s not mainstream EDM. It&apos;s not bottle-service techno. It&apos;s something more intentional.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The programming blends tribal rhythms, deep and tech house, and melodic techno. Music curators <strong>Rebolledo</strong> and <strong>Damián Romero</strong> have shaped the sound to showcase the ascent of contemporary Mexican electronic music while paying homage to the ancient cultures of the region.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Artists Who&apos;ve Played Mayan Warrior</h3>
              <div className="flex flex-wrap gap-2">
                {["Damian Lazarus", "DJ Tennis", "Âme", "&ME", "Adam Port", "Rampa", "Dixon", "Bedouin", "Carlita", "Monolink", "Polo & Pan", "Robag Wruhme", "Francesca Lombardo", "Jan Blomqvist", "WhoMadeWho", "Vintage Culture"].map((artist) => (
                  <span key={artist} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    {artist}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-4">
                Plus rising Mexican acts like Zombies In Miami, Kalexis, and many others from the local scene.
              </p>
            </div>
          </section>

          {/* The Fire */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Fire</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              On April 6, 2023, Mayan Warrior burned to the ground.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The art car was traveling from Guadalajara to Punta Mita—a beach town on Mexico&apos;s Pacific coast—for a fundraising event. About an hour before arriving, a back tire caught fire. The combination of the rig being overweight, the heat, and a rough road caused the tire to ignite. By the time they could stop, it was too late.
            </p>

            <div className="border-l-4 border-red-400 pl-6 my-8 bg-red-50 p-6 rounded-r-xl">
              <p className="text-gray-700">
                The entire car—over a decade of work, millions of dollars of equipment, irreplaceable art—burned to ashes on the side of a Mexican highway.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Rumors swirled. Some whispered about drug cartel interference. Others speculated insurance fraud. González Vargas addressed them directly: &quot;Of course not true.&quot; It was simply a tragic accident.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              But here&apos;s the thing about Mayan Warrior: they&apos;d always preached transformation. And in the wake of destruction, González Vargas found something unexpected.
            </p>

            <div className="border-l-4 border-purple-400 pl-6 my-8">
              <p className="text-gray-700 italic">
                &quot;The fire made me feel liberated. We were freed from a physically and financially intensive endeavor. Now we can reimagine everything.&quot;
              </p>
              <p className="text-gray-500 text-sm mt-2">— Pablo González Vargas, Billboard interview</p>
            </div>
          </section>

          {/* The Rebirth */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Rebirth: Mayan Warrior Galaxyer</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              In July 2024, Mayan Warrior announced their return: <strong>Mayan Warrior Galaxyer</strong>—a completely reimagined art car that debuted at Burning Man 2024.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The new vehicle fuses ancient Mayan artistry with bleeding-edge technology. The design team—González Vargas working with Alvaro Manzo on concept, Paolo Montiel on lasers and lighting, and Daniel Coello on industrial design—created something that resembles a Mayan spaceship crossed with a sacred altar.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Galaxyer Specifications</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-purple-500">◆</span>
                  <span><strong>Sound:</strong> 153,600-watt D&B Audiotechnik KLS cardioid speaker system—nearly twice as powerful as the original</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500">◆</span>
                  <span><strong>Visuals:</strong> Custom LED screens, 400-watt laser, eight 30-watt lasers, 17 headlights</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500">◆</span>
                  <span><strong>Stage:</strong> Large enough to accommodate full bands or a small orchestra</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500">◆</span>
                  <span><strong>Power:</strong> Wireless-controlled custom electrical drivetrain</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              The concept: the soul of the original Mayan Warrior traveling through space, time, and the cosmos—reborn as something new.
            </p>

            <div className="border-l-4 border-purple-400 pl-6 my-8">
              <p className="text-gray-700 italic">
                &quot;Let this be a portal to higher alternate states of consciousness of transcendental self-discovery.&quot;
              </p>
              <p className="text-gray-500 text-sm mt-2">— Pablo González Vargas on the Galaxyer</p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              The programming is evolving too. González Vargas has said they&apos;ll &quot;slowly transition into a more diverse spectrum of musical and cultural performances&quot;—fewer DJs, more live acts with real instruments providing new experiences.
            </p>
          </section>

          {/* Art Week History */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mayan Warrior & Mexico City Art Week</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              While Burning Man made Mayan Warrior world-famous, Mexico City is home. The annual Art Week fundraiser has become one of the most anticipated events of the year—a homecoming where the global phenomenon returns to its roots.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The event takes place at <strong>Parque Bicentenario</strong> in the Miguel Hidalgo neighborhood—a massive park that gives the production room to breathe. Past years have featured the art car alongside <strong>MAXA</strong>, another Mexican art car collective, creating a double-feature of immersive experiences.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              These fundraisers aren&apos;t just parties—they&apos;re the financial engine that makes everything else possible. The money raised supports Mayan Warrior&apos;s projects throughout the year: the art car maintenance, the foundation operations, and the mission to elevate Mexican electronic music and art globally.
            </p>
          </section>

          {/* 2026 Event */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Art Week 2026: What to Expect</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl">🔊</div>
                <div>
                  <strong className="text-gray-900">The Galaxyer in Mexico City</strong>
                  <p className="text-gray-600 mt-1">
                    This will be one of the first major Mexican appearances of the new art car. Expect the full production: the 150,000+ watt sound system, the lasers, the LED installations, the whole sensory overload.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🎨</div>
                <div>
                  <strong className="text-gray-900">More than music</strong>
                  <p className="text-gray-600 mt-1">
                    Visual art, immersive installations, and potentially live performances beyond just DJs. The Galaxyer was built to host a different kind of experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">👥</div>
                <div>
                  <strong className="text-gray-900">The crowd</strong>
                  <p className="text-gray-600 mt-1">
                    Art Week brings an international mix—collectors, artists, DJs, burners, and locals who&apos;ve been waiting all year. This isn&apos;t a velvet rope club. Dress creative. Come with intention.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🌅</div>
                <div>
                  <strong className="text-gray-900">The timeline</strong>
                  <p className="text-gray-600 mt-1">
                    10pm to 5am. Peak energy hits around 2-4am. Pace yourself—it&apos;s a marathon, not a sprint. Bring layers; it gets cold before sunrise.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Practical */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Information</h2>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="flex gap-4">
                <div className="text-xl">🎫</div>
                <div>
                  <strong className="text-gray-900">Tickets</strong>
                  <p className="text-gray-600 text-sm">Sell out fast. Follow <a href="https://instagram.com/mayanwarrior" className="text-purple-600 hover:text-purple-700">@mayanwarrior</a> on Instagram for release announcements. Sign up for their mailing list. Don&apos;t sleep on it.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">📍</div>
                <div>
                  <strong className="text-gray-900">Parque Bicentenario</strong>
                  <p className="text-gray-600 text-sm">Av. 5 de Mayo 290, Miguel Hidalgo. North of the center but more accessible than you&apos;d think. Uber there; schedule one back or be prepared to wait at sunrise.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">💧</div>
                <div>
                  <strong className="text-gray-900">Stay hydrated</strong>
                  <p className="text-gray-600 text-sm">It&apos;s a 7-hour event. Bring cash for water and drinks. Take care of yourself and the people around you. This is a community.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">📱</div>
                <div>
                  <strong className="text-gray-900">Phone battery</strong>
                  <p className="text-gray-600 text-sm">Bring a portable charger. You&apos;ll need it to get home. And maybe to capture a moment or two—though honestly, put the phone away and be present.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-xl">👕</div>
                <div>
                  <strong className="text-gray-900">What to wear</strong>
                  <p className="text-gray-600 text-sm">Creative expression encouraged. Layers for temperature changes. Comfortable shoes—you&apos;ll be on your feet for hours. This isn&apos;t a dress-to-impress club; it&apos;s a dress-to-express gathering.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Can't Get Tickets */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Can&apos;t Get Tickets?</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Mayan Warrior sells out. It happens. But Art Week has plenty of other experiences worth your time—some would argue even better for actually dancing.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900">Giegling — Saturday, Feb 8</h3>
                <p className="text-gray-600 text-sm mt-1">
                  The legendary German collective known for minimal, hypnotic, deep techno. Different vibe than Mayan Warrior—more introspective, equally special. If you know Giegling, you&apos;re already planning to be there.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900">Looloo</h3>
                <p className="text-gray-600 text-sm mt-1">
                  The sound system in Juárez. Running events all week during Art Week. If you want to actually dance—like, properly lose yourself on a dance floor—this is where the locals go. Mayan Warrior collaborates with them for a reason.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900">Fünk</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Condesa basement with a Funktion-One system. Queer and trans-friendly—it&apos;s central to their identity, not an afterthought. Great bookings, intimate space, real community.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900">Departamento</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Roma Norte rooftop venue. Mix of live music and DJs. Described as &quot;a meeting point for artists and casual attendees seeking authentic experiences over scene-focused nightlife.&quot;
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/parties"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
              >
                See all Art Week parties →
              </Link>
            </div>
          </section>

          {/* The Bigger Picture */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Bigger Picture</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Mayan Warrior matters beyond the party. It put Mexican electronic music on the global map. It created a model for how art cars and sound camps could operate as cultural platforms rather than just entertainment. It proved that something born in Mexico City could become a cornerstone of Burning Man culture.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The fire could have been the end. Instead, it became a transformation—exactly what the project had always been about. The Galaxyer isn&apos;t just a replacement; it&apos;s an evolution.
            </p>

            <p className="text-gray-600 leading-relaxed">
              When you&apos;re at Parque Bicentenario on Friday night, surrounded by the lights and the bass and the crowd, you&apos;re not just at a party. You&apos;re part of a 14-year story that spans from Mexico City to the Nevada desert and back—a story about art, community, destruction, and rebirth.
            </p>
          </section>

          {/* Sources */}
          <section className="mb-12 text-sm text-gray-500">
            <h3 className="font-medium text-gray-700 mb-2">Sources</h3>
            <ul className="space-y-1">
              <li><a href="https://www.billboard.com/music/music-news/mayan-warrior-fire-interview-burning-man-art-car-1235398142/" className="hover:text-gray-700">Billboard: Mayan Warrior Fire Interview</a></li>
              <li><a href="https://www.billboard.com/music/music-news/mayan-warrior-new-art-car-burning-man-2024-1235448920/" className="hover:text-gray-700">Billboard: New Art Car Announcement</a></li>
              <li><a href="https://www.nbcnews.com/news/latino/mexican-psychedelics-meets-lasers-meet-burning-man-favorite-mayan-warrior-n901841" className="hover:text-gray-700">NBC News: Meet the Mayan Warrior</a></li>
              <li><a href="https://edmidentity.com/2024/07/03/mayan-warrior-galaxyer-burning-man-debut-la-halloween/" className="hover:text-gray-700">EDM Identity: Galaxyer Debut</a></li>
              <li><a href="https://journal.burningman.org/2019/06/philosophical-center/tenprinciples/papeyote-on-gifting-as-transformation/" className="hover:text-gray-700">Burning Man Journal: Pablo González Vargas Interview</a></li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Get the Full Art Week Schedule</h2>
            <p className="text-gray-300 mb-6">
              Every party, every night. Plus gallery openings and art fairs. Daily picks delivered to your inbox.
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
              href="/parties"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← All Parties
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
