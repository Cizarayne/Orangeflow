import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const travelArticles = [
  {
    title: "Global Tourism Continues Strong Growth in 2026",
    metrics: ["Global Growth", "Route Expansion", "Border Openings"],
    summary:
      "International travel continues to recover, with millions of tourists visiting destinations across Europe, Asia, Africa, and the Americas.",
    context:
      "Airlines are rapidly expanding long-haul networks and countries are structurally simplifying entry requirements, triggering a massive wave of cross-continental flight activity and unprecedented global passenger volumes.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/662/647/638/nature-landscape-sea-clouds-wallpaper-preview.jpg",
  },
  {
    title: "Saudi Arabia Invests Billions in Tourism Development",
    metrics: ["Giga Projects", "NEOM & Red Sea", "Vision 2030"],
    summary:
      "Saudi Arabia continues expanding structural projects such as NEOM, the Red Sea Project, and Diriyah, aiming to become a premier global destination.",
    context:
      "Massive capital allocation into hyper-futuristic infrastructure, luxury coastal preserves, and ancient heritage restorations are repositioning the kingdom as a monumental modern travel epicentre.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/836/289/177/allah-arab-arabian-arabic-wallpaper-preview.jpg",
  },
  {
    title: "Japan Experiences Record International Visitors",
    metrics: ["Inbound Boom", "Yen Exchange", "Transit Matrix"],
    summary:
      "Japan continues attracting record numbers of tourists thanks to favorable exchange rates, cultural attractions, and flawless transportation infrastructure.",
    context:
      "From the neon-soaked grids of Tokyo to historic shrines in Kyoto, a highly optimized rail grid and excellent consumer purchasing power are driving massive tourism records.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/188/249/284/japan-shibuya-sunset-wallpaper-preview.jpg",
  },
  {
    title: "Thailand Strengthens Position as SE Asia Hub",
    metrics: ["Wellness Hub", "Culinary Arts", "Island Corridors"],
    summary:
      "Thailand is aggressively promoting cultural festivals, culinary tourism, wellness retreats, and isolated island destinations.",
    context:
      "By blending ease of entry with hyper-targeted cultural marketing, Thailand secures its throne as Southeast Asia's core leisure hub for backpackers and luxury travelers alike.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/665/666/450/5bd32ba480ca4-wallpaper-preview.jpg",
  },
  {
    title: "Sustainable Tourism Becomes a Global Priority",
    metrics: ["Eco-Footprint", "Conservation", "Green Lodges"],
    summary:
      "More destinations are prioritizing eco-friendly accommodations, wildlife preservation, and responsible low-impact travel.",
    context:
      "Governments and local operators are implementing strict carrying-capacity rules and zero-waste initiatives to protect delicate biomes from the pressures of overtourism.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyuZcj1iCKZTZwVPUM1-DWhxIiQ8Cg-SjoyQ3qPrH7Q&s=10",
  },
  {
    title: "AI Transforms Travel Planning",
    metrics: ["Smart Itineraries", "Neural Translation", "Predictive Pricing"],
    summary:
      "Artificial intelligence is helping travelers build personalized itineraries, compare global fares, and receive instant localized guidance.",
    context:
      "Next-generation LLMs and dynamic data scraping engines automate complete travel mapping workflows, creating highly personalized, adaptive schedules based on real-time factors.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8s5VWFVGaIyfuwtYGDCIerKO6sshLDhRR1tWxtMi7g&s=10",
  },
  {
    title: "Airlines Expand International Flight Networks",
    metrics: ["Aviation Grids", "Long-Haul Routes", "Fleet Logistics"],
    summary:
      "Major airlines are launching new direct long-haul routes connecting emerging regional tourist destinations with prime global metropolises.",
    context:
      "Fuel-efficient, ultra-long-range narrowbody and widebody aircraft allow carriers to bypass traditional megahubs, opening profitable direct point-to-point air corridors.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/477/400/28/sunset-the-sky-mountains-the-plane-wallpaper-preview.jpg",
  },
  {
    title: "Luxury Train Travel Experiences a Revival",
    metrics: ["Slow Travel", "Premium Rail", "Heritage Journeys"],
    summary:
      "Premium experiential rail journeys across Europe, Asia, and Africa are becoming immensely popular among luxury demographics.",
    context:
      "Moving away from frantic airport security lines, travelers are opting for boutique rolling hotels that offer exquisite fine dining, private suites, and sweeping landscape views.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexvPWKp6Eb3sWNVTRmdRoK-68Prfbc77bCrpI1ci9Pw&s=10",
  },
  {
    title: "Digital Nomad Visas Continue Expanding Worldwide",
    metrics: ["Remote Visas", "Work From Anywhere", "Expat Hubs"],
    summary:
      "More countries are introducing dedicated long-term visas that allow remote professionals to legally live, spend, and work remotely.",
    context:
      "Coastal and European nations are reframing immigration frameworks to capture high-earning remote talent, boosting local economies outside traditional holiday seasons.",
    imageUrl:
      "https://c0.wallpaperflare.com/preview/805/844/1000/confused-digital-nomad-electronics-fashion.jpg",
  },
  {
    title: "Adventure Tourism Sees Significant Growth",
    metrics: ["Thrill Expeditions", "Polar Journeys", "Alpine Treks"],
    summary:
      "Activities like remote hiking, diving, mountaineering, wildlife safaris, and polar expeditions continue to capture market share.",
    context:
      "Modern travelers are increasingly prioritizing physical milestones and high-adrenaline, unscripted wilderness challenges over passive urban sightseeing packages.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/537/664/855/nature-water-mountains-trees-wallpaper-preview.jpg",
  },
  {
    title: "Food Tourism Drives International Travel",
    metrics: ["Gastronomy", "Culinary Trails", "Street Culture"],
    summary:
      "Travelers increasingly choose destinations based heavily on local culinary reputation, street food, and immersive cooking classes.",
    context:
      "Food tracking has shifted from a secondary activity to a core trip driver. Authentic epicurean experiences function as a primary doorway into local sociology and tradition.",
    imageUrl:
      "https://c1.wallpaperflare.com/preview/973/24/8/fruits-boats-cooking-food.jpg",
  },
  {
    title: "Cruise Industry Continues Fleet Expansion",
    metrics: ["Maritime Tech", "Clean Energy", "Floating Resorts"],
    summary:
      "Cruise operators are introducing massive, environmentally conscious vessels equipped with cleaner propulsion tech.",
    context:
      "Modern mega-ships integrate LNG power systems and advanced hull coatings alongside sprawling onboard experiential architecture to capture younger demographics.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/592/232/835/water-sea-board-case-wallpaper-preview.jpg",
  },
  {
    title: "Smart Airports Improve Passenger Experience",
    metrics: ["Biometric Gates", "AI Screening", "Automated Baggage"],
    summary:
      "International aviation hubs are deploying facial biometrics, automated screening, and digital luggage tracking.",
    context:
      "By integrating seamless identity verification pipelines, leading global gateways drastically reduce standard check-in delays and queuing friction points.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/736/849/78/sunset-sunrise-airport-planes-wallpaper-preview.jpg",
  },
  {
    title: "National Parks Receive Record Visitor Numbers",
    metrics: ["Protected Zones", "Eco Preservation", "Backcountry"],
    summary:
      "Protected natural areas around the world continue attracting historic numbers of outdoor recreation enthusiasts.",
    context:
      "The surge highlights a global desire for open-air wellness, pushing conservation agencies to deploy advanced digital permitting reservation systems to protect trail networks.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/885/382/474/nature-road-arches-national-park-utah-wallpaper-preview.jpg",
  },
  {
    title: "Luxury Eco-Resorts Become More Popular",
    metrics: ["Off-Grid Luxury", "Renewable Power", "Community Fusion"],
    summary:
      "High-end accommodations are combining five-star luxury amenities with solar arrays, upcycled design, and community aid.",
    context:
      "Elite travelers are actively seeking exclusive, low-impact properties that allow deep communion with raw natural landscapes without sacrificing top-tier luxury expectations.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/282/810/421/ocean-summer-summertime-hotel-wallpaper-preview.jpg",
  },
  {
    title: "Medical Tourism Continues to Expand",
    metrics: ["Clinical Travel", "Healthcare Hubs", "Elective Care"],
    summary:
      "Countries like Thailand, Turkey, India, South Korea, and the UAE draw international clients for premium, affordable care.",
    context:
      "Cross-border health networks provide state-of-the-art elective procedures, surgeries, and dental workflows bundled alongside comprehensive luxury post-op recovery care.",
    imageUrl:
      "https://c0.wallpaperflare.com/preview/810/376/64/care-connection-device-diagnosis.jpg",
  },
  {
    title: "Cultural Heritage Tourism Flourishes",
    metrics: ["UNESCO Sites", "Archaeology", "Historic Traces"],
    summary:
      "UNESCO World Heritage Sites remain crown jewels of global itineraries, driving profound educational and cultural engagement.",
    context:
      "Preservation-focused travelers allocate significant capital toward guided historical archeology circuits, funding critical ongoing localized structural preservation initiatives.",
    imageUrl:
      "https://c1.wallpaperflare.com/preview/417/45/296/thailand-buddha-buddhism-asia.jpg",
  },
  {
    title: "Space Tourism Advances with Commercial Flights",
    metrics: ["Suborbital Tech", "Civilian Astronauts", "Aerospace Frontier"],
    summary:
      "Private aerospace companies continue developing commercial suborbital and orbital flight options for civilian passengers.",
    context:
      "While initial entry remains cost-exclusive, escalating launch frequencies and structural platform scaling are cementing atmospheric escape as a genuine luxury travel sector.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/716/131/782/earth-space-atmosphere-stars-wallpaper-preview.jpg",
  },
  {
    title: "Travel Insurance Demand Reaches New Highs",
    metrics: ["Risk Mitigation", "Climate Disruption", "Medical Safety"],
    summary:
      "Travelers are purchasing fully comprehensive insurance policies covering medical crises, volatile weather disruptions, and cancellations.",
    context:
      "Unpredictable planetary weather patterns and a hyper-awareness of global health scenarios have fundamentally transformed premium insurance from an optional fallback to a non-negotiable step.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOvyDI5olhCojfF-YSzaFfS-jSU6ED0w0fz_spfL5jZw&s=10",
  },
  {
    title: "Technology Reshapes the Tourism Industry",
    metrics: ["Digital Passports", "VR Previews", "Contactless Flow"],
    summary:
      "From digital IDs to VR destination previews and AI concierge integrations, software is optimizing the end-to-end travel lifecycle.",
    context:
      "The elimination of traditional physical friction points creates a seamless ecosystem where verification, itinerary management, and localized transactions happen instantaneously.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAeiGCByN01pz4C_1_8bzinzUTp1U7ALZGbCKUlkU4hg&s=10",
  },
];

export default function TravelAndTourism() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoCycle, setAutoCycle] = useState(true);

  useEffect(() => {
    if (!autoCycle || isExpanded) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % travelArticles.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoCycle, isExpanded]);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % travelArticles.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      (prev) => (prev - 1 + travelArticles.length) % travelArticles.length,
    );
  };

  const activeArticle = travelArticles[currentIndex];
  const progress = ((currentIndex + 1) / travelArticles.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-orange-500 selection:text-white">
      <section className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <header className="border-b border-slate-200 pb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <span className="block text-xs font-mono font-bold uppercase tracking-[0.28em] text-orange-500">
                Global Reconnaissance // Travel & Tourism
              </span>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                The 2026 Travel & Tourism Strategic Index
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                A premium Orangeflow briefing surface tracking the destinations,
                infrastructure, experience shifts, and mobility systems shaping
                global travel demand.
              </p>
            </div>


          </div>
        </header>

        <main className="mt-10 flex flex-col gap-8">
          <section className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)]">
            <div className="grid grid-cols-1 xl:grid-cols-12">
              <div className="relative min-h-90 overflow-hidden xl:col-span-7">
                <img
                  src={activeArticle.imageUrl}
                  alt={activeArticle.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/65 via-slate-900/20 to-transparent" />

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-white/90">
                    Live Brief {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                  <div className="max-w-2xl">
                    <p className="text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-orange-300">
                      {activeArticle.metrics[0]}
                    </p>
                    <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-4xl">
                      {activeArticle.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200 sm:text-base">
                      {activeArticle.summary}
                    </p>
                  </div>
                </div>
              </div>

              <div className="xl:col-span-5">
                <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {activeArticle.metrics.map((metric, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-orange-600"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 rounded-3xl bg-slate-50 p-5">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-slate-400">
                        Strategic Readout
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {activeArticle.summary}
                      </p>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded
                          ? "mt-6 max-h-72 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-slate-200 pt-6">
                        <p className="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-orange-500">
                          Why It Matters
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {activeArticle.context}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-5">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-slate-400">
                        <span>Feed Progress</span>
                        <span>
                          {String(currentIndex + 1).padStart(2, "0")} /{" "}
                          {travelArticles.length}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100">
                        <div
                          className="h-2 rounded-full bg-orange-500 transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-[11px] font-mono font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-orange-500"
                      >
                        {isExpanded ? "Hide Analysis" : "Expand Analysis"}
                      </button>

                      <button
                        onClick={() => setAutoCycle(!autoCycle)}
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-[11px] font-mono font-bold uppercase tracking-[0.24em] text-slate-600 transition-colors hover:border-orange-200 hover:text-orange-500"
                      >
                        {autoCycle ? "Pause Stream" : "Resume Stream"}
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={handlePrev}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500"
                        aria-label="Previous Article"
                      >
                        <ChevronLeft size={18} strokeWidth={2.5} />
                      </button>
                      <button
                        onClick={handleNext}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500"
                        aria-label="Next Article"
                      >
                        <ChevronRight size={18} strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {travelArticles.map((article, idx) => (
              <button
                key={article.title}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsExpanded(false);
                }}
                className={`group rounded-3xl border p-5 text-left transition-all duration-300 ${
                  currentIndex === idx
                    ? "border-orange-200 bg-white shadow-[0_16px_45px_-32px_rgba(249,115,22,0.9)]"
                    : "border-slate-200 bg-white/80 hover:-translate-y-1 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-[0.24em] ${
                      currentIndex === idx
                        ? "text-orange-500"
                        : "text-slate-400"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500">
                    {article.metrics[0]}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-black tracking-tight text-slate-950 transition-colors group-hover:text-orange-500">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {article.summary}
                </p>
              </button>
            ))}
          </section>
        </main>
      </section>
    </div>
  );
}
