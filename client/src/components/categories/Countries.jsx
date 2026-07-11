import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus, Minus, Play, Pause } from 'lucide-react';

const globalNodes = [
  {
    title: "Singapore",
    metrics: ["Smart City", "Global Port", "Digital Gov"],
    summary: "Often ranked as one of the smartest cities in the world, with world-class public transportation, digital government services, and one of the busiest ports globally.",
    context: "Singapore pushes the envelope of high-density metropolitan design. By integrating automated public infrastructure streams with unified civic identity portals, the urban landscape operates as a highly optimized digital engine, matching its massive global maritime freight throughput.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/689/265/112/8k-singapore-marina-gardens-gardens-by-the-bay-wallpaper-preview.jpg"
  },
  {
    title: "United Arab Emirates",
    metrics: ["Artificial Intelligence", "Renewable Energy", "Smart Cities"],
    summary: "Home to futuristic cities like Dubai and Abu Dhabi, with major investments in artificial intelligence, renewable energy, and smart-city technologies.",
    context: "The UAE acts as a critical testbed for architectural hyper-scaling. Driven by long-term national technology mandates, the municipal frameworks of Dubai and Abu Dhabi integrate predictive artificial intelligence nodes, commercial-scale photovoltaic fields, and decentralized civic workflows.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/67/283/725/night-lights-in-dubai-wallpaper-preview.jpg"
  },
  {
    title: "Japan",
    metrics: ["Robotics", "High-Speed Rail", "Advanced Manufacturing"],
    summary: "A global leader in robotics, high-speed rail, advanced manufacturing, and consumer electronics.",
    context: "Japan remains a vital cornerstone of hard physical engineering. Its high-speed Shinkansen networks demonstrate decades of perfect mechanical precision, while its manufacturing clusters continuously pioneer complex automated assembly techniques and precision electronic component design.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/110/350/379/5bd3ac44ed7a6-wallpaper-preview.jpg"
  },
  {
    title: "South Korea",
    metrics: ["Hyper-Connected", "Semiconductors", "Tech Innovation"],
    summary: "One of the world's most connected countries, known for ultra-fast internet, semiconductor manufacturing, and technological innovation.",
    context: "South Korea sets the baseline for national data throughput architecture. Anchored by major high-performance hardware fabrication facilities, the region blends rapid public network communication bands with an aggressive, iterative approach to consumer product research and software design.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/485/358/545/autumn-building-tower-architecture-wallpaper-preview.jpg"
  },
  {
    title: "Switzerland",
    metrics: ["Deep Research", "Finance Hub", "Pharmaceuticals"],
    summary: "Consistently ranks among the world's most innovative countries, with strengths in finance, pharmaceuticals, and scientific research.",
    context: "Switzerland thrives on high-barrier specialized industries. Leveraging structural private banking infrastructure alongside elite physical research networks, the territory sustains an ideal climate for breakthrough biomedical development and micro-precision mechanics.",
    imageUrl: "https://media.cntraveller.com/photos/68666af93d015233b745c7e6/16:9/w_2240,c_limit/Zurich_GettyImages-451614321.jpg"
  },
  {
    title: "Sweden",
    metrics: ["Sustainability", "Clean Tech", "Startup Ecosystem"],
    summary: "A leader in sustainability, clean energy, and globally recognized technology startups.",
    context: "Sweden serves as an incubator for modern platform architectures. By combining aggressive fossil-free grid deadlines with high domestic digital literacy, the environment fosters sustainable tech unicorns that scale across international markets.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/477/768/859/stockholm-sweden-cityscape-wallpaper-preview.jpg"
  },
  {
    title: "Norway",
    metrics: ["Hydropower Grid", "EV Adoption", "Resource Capital"],
    summary: "Generates nearly all of its electricity from renewable hydropower and has one of the highest electric vehicle adoption rates worldwide.",
    context: "Norway operates a uniquely clean industrial system, powering almost its entire domestic consumption baseline through natural hydrological elevation energy. This state-backed green baseline supports an accelerated consumer transition toward fully electric transport systems.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/590/415/688/norway-alesund-wallpaper-preview.jpg"
  },
  {
    title: "Finland",
    metrics: ["Pedagogical Design", "Social Stability", "Human Index"],
    summary: "Frequently ranks among the happiest countries and has one of the world's highest-performing education systems.",
    context: "Finland links human index metrics with operational economic durability. Its non-traditional educational models prioritize multi-disciplinary equity, generating high baseline scientific and tech-literate cohorts within a highly cohesive social environment.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/592/172/925/finland-helsinki-wallpaper-preview.jpg"
  },
  {
    title: "Denmark",
    metrics: ["Green Urbanism", "Climate Targets", "Bicycle Transit"],
    summary: "Renowned for bicycle-friendly cities, green urban planning, and ambitious climate goals.",
    context: "Denmark reshapes metropolitan transport paradigms. By allocating significant physical real estate to active bicycle channels and wind-powered municipal infrastructure, its urban spaces demonstrate that rapid decarbonization can coexist with high economic throughput.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/407/788/962/sea-the-sky-trees-people-wallpaper-preview.jpg"
  },
  {
    title: "Germany",
    metrics: ["Precision Engineering", "Automotive Core", "Industrial Output"],
    summary: "Europe's largest economy, known for precision engineering, automotive manufacturing, and industrial innovation.",
    context: "Germany represents the heavy industrial engine of Europe. Its classic engineering frameworks consistently integrate smart manufacturing tech, maintaining global dominance in high-end vehicle performance parameters and heavy machine-tool export markets.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/212/414/335/night-germany-frankfurt-am-main-wallpaper-preview.jpg"
  },
  {
    title: "Canada",
    metrics: ["AI Frameworks", "Multicultural Hub", "Advanced Healthcare"],
    summary: "A global leader in artificial intelligence research, multiculturalism, and high-quality healthcare and education.",
    context: "Canada functions as a key intellectual point for fundamental machine learning algorithms. Supported by robust academic funding and a high lifestyle baseline, its cities consistently attract elite international tech researchers and engineering teams.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/432/11/584/canada-toronto-cn-tower-best-wallpaper-preview.jpg"
  },
  {
    title: "Netherlands",
    metrics: ["Water Management", "Agri-Tech Matrices", "Cycling Infrastructure"],
    summary: "Famous for innovative water management systems, sustainable agriculture, and cycling infrastructure.",
    context: "The Netherlands counters geographical limitations with intensive civil engineering. Its advanced dyke structures protect vital low-lying urban nodes, while its automated indoor vertical agricultural platforms lead the world in caloric output per square meter.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/162/202/528/windmill-netherlands-road-sea-wallpaper-preview.jpg"
  },
  {
    title: "Australia",
    metrics: ["Decentralized Grid", "Tertiary Research", "Clinical Care"],
    summary: "Combines advanced healthcare, world-class universities, and a strong focus on renewable energy development.",
    context: "Australia leverages massive spatial baselines to deploy immense decentralized solar installations and grid-stabilizing virtual power plants. This energy revolution runs parallel to high-ranking medical and biotechnological academic centers.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/505/945/135/sydney-opera-house-sydney-australia-sea-wallpaper-preview.jpg"
  },
  {
    title: "New Zealand",
    metrics: ["Governance", "Conservation", "Quality of Life"],
    summary: "Recognized for transparent governance, environmental conservation, and high quality of life.",
    context: "New Zealand emphasizes institutional integrity and resource preservation. Its regulatory frameworks integrate strict ecological accounting matrices, proving that pristine natural assets can be preserved alongside open, high-trust civic administration.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/494/283/780/stanley-bay-auckland-new-zealand-wallpaper-preview.jpg"
  },
  {
    title: "Estonia",
    metrics: ["E-Government", "Data Cryptography", "Digital Nomadism"],
    summary: "One of the world's most digitally advanced nations, offering nearly all government services online through its e-government system.",
    context: "Estonia operates essentially as a secure, cloud-based nation-state. By utilizing distributed ledger technology to underpin all civic documents, tax declarations, and legal structures, it eliminates bureaucratic friction for citizens and international digital residents alike.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/718/304/984/home-estonia-panorama-tallinn-hd-wallpaper-preview.jpg"
  },
  {
    title: "Qatar",
    metrics: ["Smart Infrastructure", "Logistics Hubs", "Capital Logistics"],
    summary: "Rapidly modernizing through investments in infrastructure, education, and smart-city development under its national vision.",
    context: "Qatar channels sovereign energy capital into highly sophisticated physical assets. From automated city districts to centralized tech-education research hubs, the state is building an interconnected Knowledge Economy geared for post-hydrocarbon survival.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/250/395/615/doha-cityscape-skyscrapers-qatar-wallpaper-preview.jpg"
  },
  {
    title: "Luxembourg",
    metrics: ["Sovereign Finance", "Free Transit", "Capital Density"],
    summary: "A global financial hub with one of the highest GDPs per capita and free nationwide public transportation.",
    context: "Luxembourg pairs immense economic density with radical social infrastructure experiments. As the first global nation to subsidize all civic transit routes entirely out of public funds, it sets new metrics for low-friction worker mobility.",
    imageUrl: "https://c1.wallpaperflare.com/preview/553/221/159/architecture-building-castle-photos.jpg"
  },
  {
    title: "United States",
    metrics: ["Compute Infrastructure", "Venture Capital", "Innovation Hubs"],
    summary: "Home to many of the world's leading technology companies, research institutions, and innovation centers.",
    context: "The US remains the dominant global force in foundational software development, semiconductor design, and venture capital liquidity. Its interconnected research university networks act as the primary catalyst for commercializing disruptive technologies.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/920/293/266/tower-block-new-york-usa-united-states-wallpaper-preview.jpg"
  },
  {
    title: "China",
    metrics: ["High-Speed Transit", "Mass Production", "Macro Infrastructure"],
    summary: "Leads the world in high-speed rail mileage, advanced manufacturing, and large-scale infrastructure development.",
    context: "China scales engineering systems to unprecedented dimensions. Its nation-spanning high-speed rail network supports complex internal logistics, linking automated industrial ports with internal manufacturing supply chains that dictate global consumer product cycles.",
    imageUrl: "https://c0.wallpaperflare.com/preview/71/923/749/orient-pearl-shanghai-china-taken-during-daytime.jpg"
  },
  {
    title: "France",
    metrics: ["Aerospace Vectors", "Nuclear Baseload", "Cultural Capital"],
    summary: "Combines advanced aerospace, nuclear energy expertise, high-speed rail networks, and globally influential culture and innovation.",
    context: "France unifies heavy technical sovereignty with structural innovation. Its multi-decade commitment to nuclear power guarantees clean industrial baseload output, powering both its advanced aerospace manufacturing clusters and extensive domestic high-speed rail infrastructure.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/313/933/99/sunset-the-city-france-paris-wallpaper-preview.jpg"
  }
];

export default function Countries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoCycle, setAutoCycle] = useState(true);

  useEffect(() => {
    if (!autoCycle || isExpanded) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % globalNodes.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [autoCycle, isExpanded]);

  const handleNext = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev + 1) % globalNodes.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev - 1 + globalNodes.length) % globalNodes.length);
  };

  const activeNode = globalNodes[currentIndex];

  return (
    <div className="bg-[#FAFAF8] text-[#181A2A] min-h-screen py-12 px-4 md:px-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:ital,wght@0,400;0,600;0,700;1,500;1,600&display=swap');
        .font-display { font-family: 'Baloo 2', system-ui, sans-serif; }
        .font-body { font-family: 'Nunito', system-ui, sans-serif; }
      `}</style>

      {/* Page Header */}
      <header className="max-w-6xl mx-auto mb-8">
        <span className="inline-block bg-[#FFE7D6] text-[#E64A00] font-display font-bold text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
          Global Innovation Index
        </span>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.05] text-[#181A2A] mb-4">
          Countries Shaping<br className="hidden md:block" /> Tomorrow
        </h1>
        <p className="font-body italic text-[#6B6F80] text-base md:text-lg max-w-xl leading-relaxed">
          From smart cities to clean-energy grids, these are the nations rewriting
          what's possible — ranked, mapped, and ready to explore.
        </p>
      </header>

      {/* Main Showcase Panel */}
      <main className="max-w-6xl mx-auto relative">
        <div className="relative bg-linear-to-br from-[#FF7A1A] to-[#FF4400] rounded-[2.5rem] p-4 md:p-6 overflow-hidden shadow-[0_20px_50px_-15px_rgba(255,68,0,0.45)]">

          {/* Decorative soft shapes, echoing the reference art direction */}
          <div className="pointer-events-none absolute -top-10 -right-10 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <svg className="pointer-events-none absolute top-10 right-24 w-16 h-16 text-white/15 hidden md:block" viewBox="0 0 100 100" fill="none">
            <path d="M20 80 L80 20 M55 20 L80 20 L80 45" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
          </svg>
          <svg className="pointer-events-none absolute -bottom-6 -left-6 w-40 h-40 text-white/10 hidden md:block" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="60" cy="60" r="35" />
            <circle cx="120" cy="50" r="22" />
            <circle cx="140" cy="110" r="30" />
            <circle cx="70" cy="130" r="26" />
          </svg>

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch">

            {/* Image Frame */}
            <div className="md:col-span-7 relative rounded-4xl overflow-hidden min-h-70 md:min-h-110">
              <img
                src={activeNode.imageUrl}
                alt={activeNode.title}
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-trom-black/30 via-transparent to-transparent" />
              <span className="absolute top-5 left-5 bg-white text-[#E64A00] font-display font-bold text-xs px-4 py-1.5 rounded-full shadow-sm">
                {String(currentIndex + 1).padStart(2, '0')} / {String(globalNodes.length).padStart(2, '0')}
              </span>
            </div>

            {/* Floating White Card */}
            <div className="md:col-span-5 bg-white rounded-4xl p-7 md:p-8 flex flex-col justify-between shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)]">
              <div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {activeNode.metrics.map((metric, i) => (
                    <span key={i} className="font-body font-semibold text-[11px] uppercase tracking-wide bg-[#FFF1E6] text-[#E64A00] border border-[#FFD9BC] px-3 py-1 rounded-full">
                      {metric}
                    </span>
                  ))}
                </div>

                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-[#181A2A] mb-3">
                  {activeNode.title}
                </h2>
                <p className="font-body italic text-[#6B6F80] text-sm md:text-base leading-relaxed mb-4">
                  {activeNode.summary}
                </p>

                <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100 border-t border-dashed border-[#EFE3DA] pt-4 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="font-body text-[#4B4F5F] text-sm md:text-base leading-relaxed">
                    {activeNode.context}
                  </p>
                </div>
              </div>

              {/* Icon control cluster, echoing the rounded social-icon grid in the reference */}
              <div className="mt-8 pt-6 border-t border-[#F1EBE5]">
                <p className="font-body font-semibold text-[11px] uppercase tracking-wider text-[#A8ACB8] mb-3">
                  Browse the index
                </p>
                <div className="grid grid-cols-4 gap-3">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous country"
                    className="aspect-square rounded-2xl border-2 border-[#FFD9BC] text-[#E64A00] hover:bg-[#FF4400] hover:border-[#FF4400] hover:text-white transition-colors flex items-center justify-center"
                  >
                    <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next country"
                    className="aspect-square rounded-2xl border-2 border-[#FFD9BC] text-[#E64A00] hover:bg-[#FF4400] hover:border-[#FF4400] hover:text-white transition-colors flex items-center justify-center"
                  >
                    <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-label={isExpanded ? "Show less detail" : "Show more detail"}
                    className="aspect-square rounded-2xl border-2 border-[#FFD9BC] text-[#E64A00] hover:bg-[#FF4400] hover:border-[#FF4400] hover:text-white transition-colors flex items-center justify-center"
                  >
                    {isExpanded ? <Minus className="w-5 h-5" strokeWidth={2.5} /> : <Plus className="w-5 h-5" strokeWidth={2.5} />}
                  </button>
                  <button
                    onClick={() => setAutoCycle(!autoCycle)}
                    aria-label={autoCycle ? "Pause auto-play" : "Resume auto-play"}
                    className="aspect-square rounded-2xl border-2 border-[#FFD9BC] text-[#E64A00] hover:bg-[#FF4400] hover:border-[#FF4400] hover:text-white transition-colors flex items-center justify-center"
                  >
                    {autoCycle ? <Pause className="w-5 h-5" strokeWidth={2.5} /> : <Play className="w-5 h-5" strokeWidth={2.5} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Dot Navigation Footer */}
      <footer className="max-w-6xl mx-auto mt-7 flex flex-wrap justify-between items-center gap-4 px-1">
        <div className="flex gap-2 overflow-x-auto max-w-full py-1">
          {globalNodes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrentIndex(idx); setIsExpanded(false); }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-7 bg-[#FF4400]' : 'w-2.5 bg-[#FFD9BC] hover:bg-[#FFB98A]'
              }`}
              aria-label={`Go to ${globalNodes[idx].title}`}
            />
          ))}
        </div>
        <span className="font-body font-semibold text-xs text-[#A8ACB8] bg-white border border-[#F1EBE5] px-3 py-1.5 rounded-full">
          {currentIndex + 1} of {globalNodes.length} countries
        </span>
      </footer>
    </div>
  );
}