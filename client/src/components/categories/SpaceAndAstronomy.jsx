import { useState, useEffect } from "react";
import { X } from "lucide-react";

const newsData = [
  {
    num: "01",
    tag: "OBSERVATORY",
    title: "Vera C. Rubin Observatory Begins Its 10-Year Sky Survey",
    description: "The observatory has officially started the Legacy Survey of Space and Time (LSST), using the world's largest digital camera to map the southern sky and discover millions of new celestial objects.",
    context: "The LSST will produce an unprecedented 500 petabytes of data over its decade-long mission, fundamentally transforming our understanding of dark matter, dark energy, and transient phenomena. With its 3.2-gigapixel camera, it can spot objects 100 million times fainter than what the human eye can see.",
    source: "Space.com",
    sourceUrl: "https://www.space.com/astronomy/rubin-observatory-begins-filming-the-greatest-cosmic-movie-ever-beginning-a-new-era-of-astronomy",
    image: "https://kimi-web-img.moonshot.cn/img/cdn.mos.cms.futurecdn.net/6948d2d4f91327cd69f51218a5c97970a420e8e4.jpg"
  },
  {
    num: "02",
    tag: "MISSION RESCUE",
    title: "NASA Launches Mission to Rescue the Swift Space Telescope",
    description: "NASA is attempting an in-orbit rescue of the aging Neil Gehrels Swift Observatory, demonstrating a new era of satellite servicing technology.",
    context: "Swift has been hunting gamma-ray bursts since 2004. This rescue mission tests technologies that could extend the operational life of critical space assets without the cost of full replacement, potentially saving billions in future observatory budgets.",
    source: "Axios",
    sourceUrl: "https://www.axios.com/2026/07/03/nasa-swift-rescue-mission",
    image: "https://kimi-web-img.moonshot.cn/img/cdn.mos.cms.futurecdn.net/76e15824585ba09176d150dcbf19ee0c5ce65039.jpg"
  },
  {
    num: "03",
    tag: "INTERSTELLAR",
    title: "Ancient Interstellar Comet 3I/ATLAS Amazes Astronomers",
    description: "Scientists believe the newly discovered interstellar comet may be 10–12 billion years old, making it one of the oldest objects ever observed passing through our Solar System.",
    context: "3I/ATLAS offers a rare glimpse into material formed before our Sun existed. Its ancient composition could reveal secrets about the chemistry of the early universe and how the building blocks of planets were distributed across star systems.",
    source: "The Times",
    sourceUrl: "https://www.thetimes.com/uk/science/article/comet-ancient-relic-distant-star-system-dh328xqx6",
    image: "https://kimi-web-img.moonshot.cn/img/scx2.b-cdn.net/bdfdb8509e14847c50c49be2bc09cdf82b768379.jpg"
  },
  {
    num: "04",
    tag: "GALACTIC STRUCTURE",
    title: "Milky Way May Be Larger Than Previously Thought",
    description: "New observations from NASA's Chandra X-ray Observatory suggest the spiral arms of our galaxy extend farther than earlier estimates.",
    context: "If confirmed, this would mean our galaxy's total mass and extent are significantly greater than current models predict, potentially reshaping theories about dark matter distribution and the gravitational dynamics of the Local Group.",
    source: "New York Post",
    sourceUrl: "https://nypost.com/2026/07/04/world-news/nasas-chandra-telescope-reveals-milky-ways-outer-reaches-may-stretch-farther-than-previously-known/",
    image: "https://kimi-web-img.moonshot.cn/img/assets.science.nasa.gov/2865681d7db61c8dc147efefd66a6e7081f6bb80.jpg"
  },
  {
    num: "05",
    tag: "PLANETARY ARRIVAL",
    title: "BepiColombo Nears Historic Arrival at Mercury",
    description: "After an eight-year journey, the joint ESA-JAXA spacecraft is preparing for orbital insertion around Mercury later this year.",
    context: "Mercury remains the least explored terrestrial planet. BepiColombo's dual-orbiter design will study the planet's magnetic field, interior structure, and surface composition in unprecedented detail, potentially explaining why it has a disproportionately large iron core.",
    source: "Times of India",
    sourceUrl: "https://timesofindia.indiatimes.com/science/bepicolombo-the-spacecraft-that-spent-8-years-travelling-to-mercury-is-finally-arriving-in-2026/articleshow/132154072.cms",
    image: "https://kimi-web-img.moonshot.cn/img/www.esa.int/152e7790ecc08e7e8fe68089831b489fa6df4358.jpg"
  },
  {
    num: "06",
    tag: "MARS EXPLORATION",
    title: "NASA and Relativity Space Partner on a New Mars Mission",
    description: "NASA announced a public-private partnership that combines commercial spacecraft with NASA science instruments for future Mars exploration.",
    context: "This partnership model could dramatically reduce the cost of Mars missions by leveraging commercial launch and spacecraft capabilities. It signals a shift toward sustainable, repeatable Mars exploration architectures rather than one-off flagship missions.",
    source: "NASA",
    sourceUrl: "https://www.nasa.gov/2026-news-releases/",
    image: "https://kimi-web-img.moonshot.cn/img/cdn.mos.cms.futurecdn.net/6948d2d4f91327cd69f51218a5c97970a420e8e4.jpg"
  },
  {
    num: "07",
    tag: "SPACE TELESCOPE",
    title: "Roman Space Telescope Targets Earlier Launch",
    description: "NASA's Nancy Grace Roman Space Telescope is now aiming for a September 2026 launch to investigate dark matter, dark energy, and distant exoplanets.",
    context: "Roman's wide-field infrared view will complement JWST's deep, narrow observations. Its coronagraph technology will directly image exoplanets for the first time from space, potentially detecting atmospheric biosignatures on Earth-like worlds.",
    source: "ScienceDaily",
    sourceUrl: "https://www.sciencedaily.com/releases/2026/05/260518041345.htm",
    image: "https://kimi-web-img.moonshot.cn/img/cdn.mos.cms.futurecdn.net/c65d9ef1109d4643794fdb50fbd6d98e353a90ad.jpg"
  },
  {
    num: "08",
    tag: "ASTEROID DISCOVERY",
    title: "Rubin Observatory Already Discovers Thousands of Asteroids",
    description: "Early observations have identified over 11,000 previously unknown asteroids, including dozens of near-Earth objects.",
    context: "This discovery rate far exceeds projections and demonstrates Rubin's potential as a planetary defense asset. The rapid identification of near-Earth objects significantly improves our warning time for potential impact threats.",
    source: "Space.com",
    sourceUrl: "https://www.space.com/astronomy/rubin-observatory-begins-filming-the-greatest-cosmic-movie-ever-beginning-a-new-era-of-astronomy",
    image: "https://kimi-web-img.moonshot.cn/img/c02.purpledshub.com/220c2633e2d7fa7a1be3e72d6c0123d6711383ac.jpg"
  },
  {
    num: "09",
    tag: "MARTIAN WEATHER",
    title: "Mars Express Captures Spectacular Dust Devils",
    description: "ESA's Mars Express spacecraft photographed numerous dust devils swirling across Mars' Mamers Valles region.",
    context: "Dust devils play a crucial role in Mars' atmospheric dynamics, transporting fine particles and potentially affecting surface missions. Understanding their patterns helps engineers design more resilient rovers and landers.",
    source: "Universe Today",
    sourceUrl: "https://www.universetoday.com/",
    image: "https://kimi-web-img.moonshot.cn/img/www.esa.int/6756ef4579055d47b9cb96b2df406cb173718930.jpg"
  },
  {
    num: "10",
    tag: "HUMAN SPACEFLIGHT",
    title: "Australia Considers Funding Its First ISS Mission",
    description: "The Australian government is reviewing support for astronaut Katherine Bennell-Pegg's proposed International Space Station mission.",
    context: "A successful Australian ISS mission would mark the country's entry into human spaceflight and strengthen Asia-Pacific space partnerships. The $100M investment signals growing national commitment to space science and technology.",
    source: "Daily Telegraph",
    sourceUrl: "https://www.dailytelegraph.com.au/news/national/inside-the-bold-science-experiment-planned-for-australias-first-woman-in-space/news-story/85feb95884293b749ad5d9789c308875",
    image: "https://kimi-web-img.moonshot.cn/img/cdn.mos.cms.futurecdn.net/c65d9ef1109d4643794fdb50fbd6d98e353a90ad.jpg"
  },
  {
    num: "11",
    tag: "COSMIC IMAGERY",
    title: "NASA Releases Patriotic Cosmic Images",
    description: "NASA published stunning red, white, and blue astronomical images captured by the Chandra X-ray Observatory to celebrate America's 250th anniversary.",
    context: "The images showcase Chandra's ability to reveal hidden structures in X-ray wavelengths invisible to optical telescopes, highlighting supernova remnants and galaxy clusters in vivid false-color composites.",
    source: "New York Post",
    sourceUrl: "https://nypost.com/2026/07/01/lifestyle/nasa-releases-4-cosmic-images-in-red-white-and-blue-ahead-of-americas-250th-birthday/",
    image: "https://kimi-web-img.moonshot.cn/img/c02.purpledshub.com/220c2633e2d7fa7a1be3e72d6c0123d6711383ac.jpg"
  },
  {
    num: "12",
    tag: "PLANETARY SCIENCE",
    title: "Nature Astronomy Publishes New Findings on Mars' Interior",
    description: "Researchers using InSight mission data found evidence of a melt-depleted lower crust and Earth-like magmatic systems on Mars.",
    context: "These findings suggest Mars had a more geologically active past than previously thought, with magmatic processes similar to Earth's. This has implications for understanding Mars' habitability and the potential for subsurface water reservoirs.",
    source: "Nature Astronomy",
    sourceUrl: "https://www.nature.com/natastron/articles?year=2026",
    image: "https://kimi-web-img.moonshot.cn/img/www.esa.int/6756ef4579055d47b9cb96b2df406cb173718930.jpg"
  },
  {
    num: "13",
    tag: "SCIENCE OUTLOOK",
    title: "SETI Highlights Major Space Science Goals for 2026",
    description: "SETI outlines upcoming advances in lunar exploration, deep-space missions, and next-generation observatories.",
    context: "SETI's roadmap emphasizes the convergence of multiple space science disciplines — from lunar resource utilization to biosignature detection — creating a comprehensive framework for humanity's next steps in space.",
    source: "SETI Institute",
    sourceUrl: "https://www.seti.org/news/what-to-expect-in-space-science-2026/",
    image: "https://kimi-web-img.moonshot.cn/img/assets.science.nasa.gov/6dd583b7a83a5701435f2b7f70b60e2a3bc3fb0b.jpg"
  },
  {
    num: "14",
    tag: "YEAR IN REVIEW",
    title: "2026 Shapes Up as a Landmark Year for Space Exploration",
    description: "Scientists expect significant milestones including lunar missions, new observatories, and international collaborations.",
    context: "With Artemis progress, multiple new telescope first light events, and renewed international partnerships, 2026 represents a potential inflection point where space exploration transitions from experimental to operational at scale.",
    source: "Astronomy Magazine",
    sourceUrl: "https://www.astronomy.com/science/2026-an-exciting-year-for-space-science/",
    image: "https://kimi-web-img.moonshot.cn/img/cdn.mos.cms.futurecdn.net/6948d2d4f91327cd69f51218a5c97970a420e8e4.jpg"
  },
  {
    num: "15",
    tag: "SURVEY SCIENCE",
    title: "Astronomy Magazine Covers Rubin Observatory's Historic Survey",
    description: "The publication highlights how the telescope's decade-long project could transform our understanding of the universe.",
    context: "Rubin's time-domain astronomy capability will create a 4D map of the universe, tracking how objects change over time. This dynamic view will revolutionize fields from asteroid tracking to supernova cosmology.",
    source: "Astronomy Magazine",
    sourceUrl: "https://www.astronomy.com/",
    image: "https://kimi-web-img.moonshot.cn/img/cdn.mos.cms.futurecdn.net/c65d9ef1109d4643794fdb50fbd6d98e353a90ad.jpg"
  },
  {
    num: "16",
    tag: "GALAXY DYNAMICS",
    title: "Universe Today Explores New Galactic Shockwave Discovery",
    description: "Astronomers have observed a glowing shockwave surrounding a galaxy moving through intergalactic space.",
    context: "These shockwaves, created as galaxies plow through the intergalactic medium, reveal the distribution of dark matter and the dynamics of cosmic web filaments. They serve as natural probes of the universe's large-scale structure.",
    source: "Universe Today",
    sourceUrl: "https://www.universetoday.com/",
    image: "https://kimi-web-img.moonshot.cn/img/assets.science.nasa.gov/6dd583b7a83a5701435f2b7f70b60e2a3bc3fb0b.jpg"
  },
  {
    num: "17",
    tag: "DARK MATTER",
    title: "Hubble Discovers a New Type of Cosmic Object",
    description: "Scientists identified 'Cloud-9,' a starless, dark matter-rich gas cloud believed to be a relic of early galaxy formation.",
    context: "Cloud-9 represents a missing link in galaxy formation theory — a dark matter halo that failed to form stars. Studying such objects could reveal why some dark matter halos produce galaxies while others remain dark and barren.",
    source: "ESA/Hubble",
    sourceUrl: "https://esahubble.org/news/archive/year/2026/",
    image: "https://kimi-web-img.moonshot.cn/img/assets.science.nasa.gov/6dd583b7a83a5701435f2b7f70b60e2a3bc3fb0b.jpg"
  },
  {
    num: "18",
    tag: "RESEARCH ROUNDUP",
    title: "Phys.org Highlights Advances in Space Research",
    description: "Recent reports include new galaxy images, mission updates, and ongoing astronomical discoveries from observatories worldwide.",
    context: "The breadth of ongoing research underscores how space science has become a truly global endeavor, with contributions from ground-based observatories, space telescopes, and citizen scientists working across disciplines.",
    source: "Phys.org",
    sourceUrl: "https://phys.org/space-news/",
    image: "https://kimi-web-img.moonshot.cn/img/c02.purpledshub.com/220c2633e2d7fa7a1be3e72d6c0123d6711383ac.jpg"
  },
  {
    num: "19",
    tag: "EVENT CALENDAR",
    title: "Planetary Society Releases 2026 Space Events Calendar",
    description: "The calendar features major rocket launches, eclipses, planetary alignments, and other significant celestial events throughout the year.",
    context: "The calendar serves as both a public engagement tool and a planning resource for the space community, coordinating observation campaigns around key events like planetary oppositions and meteor showers.",
    source: "The Planetary Society",
    sourceUrl: "https://www.planetary.org/articles/calendar-of-space-events-2026",
    image: "https://kimi-web-img.moonshot.cn/img/cdn.mos.cms.futurecdn.net/76e15824585ba09176d150dcbf19ee0c5ce65039.jpg"
  },
  {
    num: "20",
    tag: "ONGOING COVERAGE",
    title: "Space.com Covers the Biggest Stories in Space and Astronomy",
    description: "Ongoing coverage includes rocket launches, night sky events, Titan exploration concepts, and the latest developments in space science.",
    context: "Comprehensive space journalism plays a vital role in translating complex science for the public, building support for space exploration funding, and inspiring the next generation of scientists and engineers.",
    source: "Space.com",
    sourceUrl: "https://www.space.com/",
    image: "https://kimi-web-img.moonshot.cn/img/scx2.b-cdn.net/bdfdb8509e14847c50c49be2bc09cdf82b768379.jpg"
  }
];

const categories = ["ALL", "OBSERVATORY", "MISSION RESCUE", "INTERSTELLAR", "GALACTIC STRUCTURE", "PLANETARY ARRIVAL", "MARS EXPLORATION", "SPACE TELESCOPE", "ASTEROID DISCOVERY", "HUMAN SPACEFLIGHT", "COSMIC IMAGERY", "PLANETARY SCIENCE", "SCIENCE OUTLOOK", "GALAXY DYNAMICS", "DARK MATTER"];

export default function SpaceAndAstronomy() {
  const [selectedBrief, setSelectedBrief] = useState(null);
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    if (!selectedBrief) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedBrief(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedBrief]);

  const filteredData = activeFilter === "ALL"
    ? newsData
    : newsData.filter(d => d.tag === activeFilter);

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 font-sans antialiased">
      {/* ===== HEADER ===== */}
      <header className="max-w-6xl mx-auto px-6 py-12 pb-8 border-b-2 border-neutral-900 relative">
        <div className="absolute -bottom-0.5 left-6 w-32 h-0.5 bg-orange-600" />
        <span className="block text-xs font-mono font-bold uppercase tracking-[3px] text-orange-600 mb-3">
          GLOBAL RECONNAISSANCE // INTEL REPORT
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
          The 2026 Space &<br />Astronomy Index
        </h1>
        <p className="mt-4 text-base md:text-lg text-neutral-500 max-w-2xl leading-relaxed">
          Twenty essential discoveries, mission milestones, and cosmic phenomena shaping our understanding of the universe this year.
        </p>
      </header>

      {/* ===== STATS BAR ===== */}
      <div className="max-w-6xl mx-auto px-6 py-5 flex gap-8 border-b border-stone-200">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-2xl font-extrabold text-orange-600">20</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">Stories</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-2xl font-extrabold text-orange-600">{new Set(newsData.map(d => d.source)).size}</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">Sources</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-2xl font-extrabold text-orange-600">{newsData.filter(d => d.tag.includes('OBSERVATORY') || d.tag.includes('TELESCOPE')).length}</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">Observatories</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-2xl font-extrabold text-orange-600">{newsData.filter(d => d.tag.includes('MARS') || d.tag.includes('MERCURY') || d.tag.includes('PLANETARY')).length}</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">Planetary</span>
        </div>
      </div>

      {/* ===== FILTER BAR ===== */}
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap gap-2">
        {categories.slice(0, 8).map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1.5 border rounded-sm font-mono text-[11px] font-semibold uppercase tracking-wide transition-all duration-200 ${
              activeFilter === cat
                ? 'bg-orange-50 border-orange-600 text-orange-600'
                : 'border-stone-200 text-neutral-500 hover:border-stone-300 hover:text-neutral-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ===== FEED ===== */}
      <main className="max-w-6xl mx-auto px-6 pb-16 flex flex-col gap-4">
        {filteredData.map((item) => (
          <div
            key={item.num}
            onClick={() => setSelectedBrief(newsData.indexOf(item))}
            className="group bg-white border border-stone-200 rounded-sm shadow-sm hover:shadow-md hover:border-stone-300 hover:translate-x-1 transition-all duration-300 cursor-pointer flex overflow-hidden relative"
          >
            {/* Left accent bar */}
            <div className="absolute top-0 left-0 w-0.75 h-full bg-transparent group-hover:bg-orange-600 transition-colors duration-300" />

            {/* Image */}
            <div className="w-60 min-w-60 h-45 relative overflow-hidden hidden md:block shrink-0">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-3 left-3 font-mono text-lg font-extrabold text-white drop-shadow">
                {item.num}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 p-5 md:p-6 flex flex-col justify-center min-w-0">
              <span className="inline-block w-fit px-2.5 py-1 bg-stone-50 text-neutral-400 font-mono text-[9px] font-bold uppercase tracking-widest rounded-sm mb-3">
                {item.tag}
              </span>
              <h2 className="text-lg md:text-xl font-black uppercase tracking-tight leading-tight mb-2 text-neutral-900 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed mb-3">
                {item.description}
              </p>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Read full analysis +
              </span>
            </div>

            {/* Source badge */}
            <div className="hidden md:flex flex-col items-end justify-start p-5 shrink-0">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-wide text-neutral-400 px-2 py-1 border border-stone-200 rounded-sm">
                {item.source}
              </span>
            </div>
          </div>
        ))}
      </main>

      {/* ===== MODAL ===== */}
      {selectedBrief !== null && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedBrief(null); }}
          className="fixed inset-0 z-50 bg-stone-50/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.2s_ease-out]"
        >
          <style>{`
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes scaleIn {
              from { opacity: 0; transform: scale(0.96) translateY(8px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>

          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm relative shadow-2xl animate-[scaleIn_0.25s_ease-out] border border-stone-200"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedBrief(null)}
              aria-label="Close"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/30 text-white flex items-center justify-center transition-colors z-10"
            >
              <X size={18} />
            </button>

            {/* Hero image */}
            <img
              src={newsData[selectedBrief].image}
              alt={newsData[selectedBrief].title}
              className="w-full h-64 md:h-80 object-cover"
            />

            {/* Content */}
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-base font-bold text-orange-600">
                  {newsData[selectedBrief].num}
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400 bg-stone-50 px-2.5 py-1 rounded-sm">
                  {newsData[selectedBrief].tag}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight mb-5 text-neutral-900">
                {newsData[selectedBrief].title}
              </h2>

              <p className="text-sm md:text-base text-neutral-500 leading-relaxed mb-6">
                {newsData[selectedBrief].description}
              </p>

              <div className="border-t border-stone-200 pt-6">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-orange-600 mb-3">
                  Why it matters
                </span>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  {newsData[selectedBrief].context}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-stone-200 flex items-center gap-2">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wide text-neutral-400">
                  Source:
                </span>
                <a
                  href={newsData[selectedBrief].sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-orange-600 hover:underline"
                >
                  {newsData[selectedBrief].source} →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}