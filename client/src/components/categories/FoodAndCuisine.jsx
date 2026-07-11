import { useState } from 'react';

const foodResources = [
  {
    title: "World Cup Fans Discover North America's Diverse Food Culture",
    source: "AP News",
    summary: "Restaurants across the United States, Canada, and Mexico are seeing record business as international football fans explore regional specialties like barbecue, tacos, poutine, and deli cuisine during the tournament.",
    context: "The convergence of international football fanbases has triggered an unprecedented surge in regional hospitality sectors. Stadium-adjacent dining corridors report capacity crowds eager to experience hyper-local culinary staples.\n\nFrom slow-smoked pit barbecue variations in the American South to authentic street tacos in Mexico and curd-and-gravy layered poutine in Canada, the tournament is acting as a massive cultural catalyst, drastically driving up micro-economic hospitality yields across all host cities.",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Thailand Promotes Culinary Tourism with Regional Food Festival",
    source: "Travel and Tour World",
    summary: "Thailand has launched the 'Thailand Flavourscape Buffet,' showcasing authentic regional dishes to attract international tourists and strengthen culinary tourism.",
    context: "The state-backed tourism masterplan introduces a targeted framework to decentralize traveler footprints away from saturated urban centers. By highlighting distinct flavor profiles from northern, northeastern, central, and southern provinces, the initiative leverages heritage cuisine as structural infrastructure.\n\nPublic tasting pavilions and curated chef collaborations aim to convert global gastronomical interest into sustained regional economic growth.",
    imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Michelin Inspectors Reveal the Biggest Food Trends of 2026",
    source: "Michelin Guide",
    summary: "The Michelin Guide highlights preserved and fermented foods, live-fire cooking, and the revival of tableside dining as defining culinary trends this year.",
    context: "Anonymous global audits from the guide's inspection teams point to an industry-wide pivot toward visceral, tactile dining experiences. Elite kitchens are actively abandoning overly sanitized, modernist plating techniques in favor of ancestral methods.\n\nTableside preparation ceremonies are being reintroduced to restore human theatrics to the dining room, while ancient preservation techniques are utilized to introduce complex, non-replicable flavor depths.",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Summer Fancy Food Show Highlights Emerging Food Innovations",
    source: "Forbes",
    summary: "Industry experts identify functional beverages, nutrient-dense snacks, and cross-cultural cuisines as major trends shaping the global food industry.",
    context: "The comprehensive trade expo highlights a structural shift in consumer package goods (CPG) metrics. Modern buyers are demands-driven, favoring adaptive beverages embedded with adaptogens and cognitive supplements.\n\nConcurrently, the snack matrix is being completely re-engineered around nutrient density, while cross-cultural snack profiles are disrupting traditional regional supermarket categories.",
    imageUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Food & Wine Publishes 26 Seasonal Summer Recipes",
    source: "Food & Wine",
    summary: "The latest collection features globally inspired dishes, including Thai noodle salads, Brazilian drinks, grilled meats, and creative desserts perfect for summer dining.",
    context: "The seasonal dossier serves as an optimization guide for home-scale high-heat cooking. The formulas balance bright acidity profiles with intense fire-cooked elements.\n\nEmphasizing rapid execution and batch prep, the catalog scales down intricate professional restaurant blueprints—such as regional Thai herb manipulation and Brazilian sugarcane spirit integration—for non-commercial kitchen settings.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Saudi Arabia Launches Culinary Training Program",
    source: "Arab News",
    summary: "A new hands-on culinary education initiative is preparing young Saudis for careers in hospitality and the growing food service industry.",
    context: "As part of the kingdom's economic diversification frameworks, the hospitality sector is expanding its domestic workforce pipeline. The rigorous practical framework covers advanced kitchen dynamics, culinary chemistry, and operational menu engineering.\n\nBy certifying local talent under rigorous international benchmarks, the program establishes a highly skilled workforce ready to operate upcoming world-class hospitality developments.",
    imageUrl: "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "London's Restaurant Scene Continues to Expand",
    source: "The Times of India",
    summary: "Several high-profile restaurant openings are bringing new seafood, barbecue, French, and international dining experiences to the city.",
    context: "Despite variable economic headwinds, London's high-end dining grid continues to absorb major capital investments. The latest wave of launches showcases specialized concepts, including hyper-focused raw bars, primal wood-fired barbecue setups, and progressive takes on classical French bistronomy.\n\nThis growth cements the metropolis as a primary destination for cross-border culinary talent and experimental flagship concepts.",
    imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Street Food Festivals Continue to Grow in Popularity",
    source: "Skiddle",
    summary: "Award-winning street food vendors are attracting large crowds at festivals, reflecting continued demand for affordable gourmet dining experiences.",
    context: "Micro-vending structures are outperforming traditional brick-and-mortar storefronts in consumer engagement metrics. Patrons are shifting away from rigid, long-form dining formats in favor of decentralized open-air aggregate markets.\n\nThese mobile culinary platforms allow award-winning operations to maintain low overhead targets while offering highly innovative, accessible gourmet iterations directly to mass consumer crowds.",
    imageUrl: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Thai Food Festival Celebrates Authentic Regional Cuisine",
    source: "bwhotelier.com",
    summary: "A limited-time Thai culinary festival is introducing diners to traditional curries, aromatic herbs, and regional specialties.",
    context: "The showcase functions as an intense immersion platform focusing on complex ingredient interactions. Curators have bypassed generalized export menus, focusing purely on localized configurations like scratch-made spice pastes, fermented seafood bases, and specific wild micro-greens.\n\nThis specific educational positioning responds directly to growing consumer demand for uncompromised, historical recipe preservation.",
    imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Global Consumers Seek More Authentic Regional Flavors",
    source: "Food, Travel, Living",
    summary: "Food experts say diners increasingly prefer specific regional cuisines rather than generalized international flavors.",
    context: "The macro-trend highlights the gradual obsolescence of non-specific 'pan-Asian' or 'Mediterranean' umbrella labeling. Modern flavor analysis indicates consumers now trace specific sub-regional boundaries, demanding distinct iterations like Oaxacan vs. Yucatecan cooking or Tuscan vs. Sicilian profiles.\n\nThis analytical demographic shift forces operators to rigorously define their sourcing origins and cultural lineages.",
    imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Zero-Waste Cooking Continues to Gain Momentum",
    source: "Maison Puyvalin",
    summary: "Restaurants and home cooks are embracing sustainable cooking techniques that use every part of an ingredient to reduce food waste.",
    context: "Eco-efficiency workflows are transforming commercial preparation stations. Kitchen nodes are engineered to redirect processing byproducts: vegetable trimmings undergo lacto-fermentation into seasoning powders, while animal bones yield concentrated reduction bases.\n\nThis systematic approach drastically lowers kitchen overhead costs while meeting strict local corporate sustainability benchmarks.",
    imageUrl: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Fire-Cooked Cuisine Makes a Strong Comeback",
    source: "Michelin Guide",
    summary: "Open-fire grilling, charcoal cooking, and wood-fired techniques are returning to restaurant menus around the world.",
    context: "Modern dining arrays are seeing heavy integration of primitive, fuel-based heat installations. Culinary teams are decommissioning automated gas systems to master precise thermal gradients using specific woods like hickory, oak, and binchotan charcoal.\n\nThis method requires specialized airflow engineering and artisanal intuition, producing signature Maillard-reaction flavor profiles that cannot be synthetically generated.",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Fermented Foods Become Increasingly Popular",
    source: "Michelin Guide",
    summary: "Chefs are incorporating fermented vegetables, sauces, and beverages into modern dishes for both flavor and health benefits.",
    context: "Biological flavor enhancement has shifted from specialized test-kitchens straight into standard prep lines. Complex ferments like koji, house-brewed vinegars, and artisanal garums serve as the primary foundational acids and umami drivers in contemporary menu development.\n\nBeyond building dense, unique flavor structures, these living matrices align directly with growing consumer demand for microbiome-positive, functional gut-health additions.",
    imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Convenience Foods Focus on Quality Over Speed",
    source: "Food, Travel, Living",
    summary: "Food manufacturers are introducing premium ready-to-eat meals that combine convenience with restaurant-quality flavors.",
    context: "The CPG space is undergoing massive premiumization as manufacturers address the needs of hybrid workers. Advanced flash-freezing technology and modified atmosphere packaging (MAP) preserve molecular textures without chemical stabilizers.\n\nConsumers can now access sous-vide proteins and micro-emulsified sauces at retail tiers, completely bridging the gap between convenience scaling and artisanal integrity.",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Restaurants Experiment with AI-Assisted Kitchens",
    source: "Maison Puyvalin",
    summary: "Artificial intelligence is being used to optimize inventory, reduce food waste, and improve kitchen operations without replacing chefs.",
    context: "Algorithmic layers are managing back-of-house procurement pipelines. Predictive neural models trace local foot-traffic indexes, historical consumption cadences, and hyper-local weather shifts to formulate precise purchasing matrices.\n\nBy maximizing inventory rotation and minimizing raw ingredient decay, these smart software layers preserve razor-thin operating margins while keeping human culinary artistry the focal point.",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Smaller Portions and Snack-Based Dining Gain Popularity",
    source: "Reporter Gourmet",
    summary: "Industry analysts predict consumers will increasingly choose smaller, more flexible meals throughout the day instead of traditional large portions.",
    context: "The structured three-meal paradigm is fragmenting across urban populations. Driven by shifting professional scheduling matrices and dynamic wellness focuses, consumer preferences lean heavily toward grazing models.\n\nRestaurants are adapting by restructuring their menu architectures away from rigid entree layouts toward flexible, high-concept premium small plates and modular snack flights.",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Food Tourism Continues to Drive Global Travel",
    source: "Travel and Tour World",
    summary: "Travelers are increasingly choosing destinations based on local cuisine, food festivals, and unique culinary experiences.",
    context: "Global travel mapping reflects an absolute prioritization of culinary discovery. Booking vectors demonstrate that regional food processing tours, localized foraging excursions, and exclusive chef tables outperform standard historical monument tourism in millennial and Gen-Z demographics.\n\nAgencies are responding by building bespoke, end-to-end agricultural and gastronomical travel itineraries.",
    imageUrl: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Korean Cuisine Continues International Expansion",
    source: "Long Island Business News",
    summary: "Korean restaurants continue opening new locations worldwide, reflecting sustained global demand for Korean food and culture.",
    context: "The global footprint of K-cuisine shows unbroken upward scaling. Fuelled by cross-media cultural exports, foundational concepts like interactive Korean barbecue hubs, specialized fried chicken setups, and high-end fine dining concepts are rapidly expanding across multi-tiered suburban and urban real estate markets.\n\nThis sustained visibility transforms traditional items like gochujang and kimchi into completely integrated mainstream global flavor foundations.",
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Consumers Embrace Sustainable and Local Ingredients",
    source: "Maison Puyvalin",
    summary: "Seasonal produce, locally sourced ingredients, and environmentally responsible menus remain major priorities for chefs and diners alike.",
    context: "Supply chain tracking confirms that hyper-short logistical loops are becoming standard industry requirements. Diners expect transparent verification of raw ingredient origins, directly checking carbon-offset scores and localized farm partnerships.\n\nThis ethical alignment forces kitchen leads to execute agile, highly dynamic menu updates that adapt directly to true seasonal farm outputs.",
    imageUrl: "https://images.unsplash.com/photo-1610348725531-843dff14682c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Global Fusion Cuisine Continues to Evolve",
    source: "Bidfood",
    summary: "Chefs are blending culinary traditions from different cultures to create innovative dishes while preserving authentic regional cooking techniques.",
    context: "Modern structural fusion has discarded the unfocused pairings of previous decades. Contemporary applications emphasize deep fundamental respect for base methods: applying classical French reduction geometry to intricate Mexican mole profiles, or utilizing Japanese preservation mechanics on traditional Nordic proteins.\n\nThis method yields highly advanced, innovative flavor interactions while carefully protecting the historical soul of the core traditions.",
    imageUrl: "https://images.unsplash.com/photo-1551248429-4043bcead39e?auto=format&fit=crop&w=800&q=80"
  }
];

export default function FoodAndCuisine() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeDetail, setActiveDetail] = useState(null);
  const visibleCount = 3;
  const activeSlideIndex = Math.floor(startIndex / visibleCount);
  const totalDots = Math.ceil(foodResources.length / visibleCount);

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount >= foodResources.length ? 0 : prev + visibleCount));
  };
  const handlePrev = () => {
    setStartIndex((prev) => (prev - visibleCount < 0 ? foodResources.length - visibleCount : prev - visibleCount));
  };

  return (
    <div className="bg-[#f6f4ef] text-[#1a1a1a] antialiased selection:bg-[#ff6b00] selection:text-white min-h-screen font-sans">
      {/* Refined Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-[#1a1a1a]/15 pb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b00]" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
                Index · Vol. 2026 · Issue 07
              </span>
              <span className="h-px flex-1 max-w-15 bg-[#1a1a1a]/20" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/50">
                Tuesday, July 07
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-[#0a0a0a] leading-[1.05] mb-5">
              The Culinary <em className="font-serif italic text-[#ff6b00]">Dispatch</em>
            </h1>
            <p className="text-sm md:text-base text-[#1a1a1a]/70 leading-relaxed max-w-2xl">
              Twenty dispatches from the front lines of gastronomy — tracing the arc of open-fire engineering, regional flavor cartographies, algorithmic back-of-house systems, and the quiet revolution of ingredient provenance.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/60">
              <span className="h-px w-6 bg-[#1a1a1a]/30" />
              <span>Live Feed</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b00] animate-pulse" />
            </div>
            <div className="font-serif text-5xl md:text-6xl font-light text-[#0a0a0a] tabular-nums">
              20
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/50">
              Articles · 2026
            </span>
          </div>
        </div>
      </section>

      {/* 3-Column Editorial Grid */}
      <section className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 transition-all duration-500">
          {foodResources.slice(startIndex, startIndex + visibleCount).map((item, idx) => (
            <article
              key={idx}
              onClick={() => setActiveDetail(item)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden bg-[#e8e4db] mb-5 aspect-4/5">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:saturate-125"
                />
                {/* Overlay number */}
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-white/90 bg-black/30 backdrop-blur-sm px-2 py-1">
                  {String(startIndex + idx + 1).padStart(2, '0')} / 20
                </div>
                {/* Hover arrow indicator */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-[#0a0a0a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#ff6b00]">
                  {item.source}
                </span>
                <span className="h-px flex-1 bg-[#1a1a1a]/15" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/40">
                  Dispatch
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl md:text-[22px] font-normal leading-snug text-[#0a0a0a] mb-3 group-hover:text-[#ff6b00] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-[#1a1a1a]/65 leading-relaxed line-clamp-3 mb-4">
                {item.summary}
              </p>

              {/* Read more hint */}
              <div className="mt-auto pt-4 border-t border-[#1a1a1a]/10 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/50 group-hover:text-[#ff6b00] transition-colors">
                  Read Analysis →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Navigation */}
        <button
          onClick={handlePrev}
          className="absolute -left-2 md:-left-5 top-1/3 w-11 h-11 rounded-full bg-white border border-[#1a1a1a]/15 text-[#0a0a0a] flex items-center justify-center hover:border-[#ff6b00] hover:text-[#ff6b00] transition-all shadow-sm  lg:flex"
          aria-label="Previous"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18L9 12L15 6" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute -right-2 md:-right-5 top-1/3 w-11 h-11 rounded-full bg-white border border-[#1a1a1a]/15 text-[#0a0a0a] flex items-center justify-center hover:border-[#ff6b00] hover:text-[#ff6b00] transition-all shadow-smlg:flex"
          aria-label="Next"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18L15 12L9 6" />
          </svg>
        </button>
      </section>

      {/* Pagination Rail */}
      <section className="max-w-7xl mx-auto px-6 mt-14 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-16 border-t border-[#1a1a1a]/10 pt-8">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/50">
            Page
          </span>
          <div className="flex gap-1.5">
            {Array.from({ length: totalDots }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx * visibleCount)}
                className={`h-0.5 transition-all duration-500 ${
                  activeSlideIndex === idx ? 'w-10 bg-[#ff6b00]' : 'w-5 bg-[#1a1a1a]/20 hover:bg-[#1a1a1a]/40'
                }`}
                aria-label={`Page ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-[10px] font-mono tabular-nums text-[#1a1a1a]/50">
            {String(activeSlideIndex + 1).padStart(2, '0')} / {String(totalDots).padStart(2, '0')}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/60 hover:text-[#ff6b00] transition-colors flex items-center gap-2"
          >
            ← Prev
          </button>
          <span className="h-3 w-px bg-[#1a1a1a]/20" />
          <button
            onClick={handleNext}
            className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/60 hover:text-[#ff6b00] transition-colors flex items-center gap-2"
          >
            Next →
          </button>
        </div>
      </section>

      {/* Slide-out Detail Panel */}
      {activeDetail && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="flex-1 bg-[#0a0a0a]/40 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
            onClick={() => setActiveDetail(null)}
          />

          {/* Panel */}
          <div className="w-full max-w-2xl bg-[#f6f4ef] h-full overflow-y-auto relative shadow-2xl animate-[slideIn_0.4s_cubic-bezier(0.16,1,0.3,1)]">
            {/* Top accent bar */}
            <div className="sticky top-0 z-10 bg-[#f6f4ef]/95 backdrop-blur-md border-b border-[#1a1a1a]/10">
              <div className="flex justify-between items-center px-8 md:px-12 py-5">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b00]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
                    Full Dispatch
                  </span>
                </div>
                <button
                  onClick={() => setActiveDetail(null)}
                  className="w-9 h-9 rounded-full border border-[#1a1a1a]/20 flex items-center justify-center hover:border-[#ff6b00] hover:text-[#ff6b00] transition-all"
                  aria-label="Close"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6L18 18" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="px-8 md:px-12 py-10">
              {/* Source tag */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
                  {activeDetail.source}
                </span>
                <span className="h-px flex-1 bg-[#1a1a1a]/15" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/40">
                  2026 · Filed Report
                </span>
              </div>

              {/* Hero image */}
              <div className="w-full aspect-16/10 overflow-hidden bg-[#e8e4db] mb-10">
                <img
                  src={activeDetail.imageUrl}
                  alt={activeDetail.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight text-[#0a0a0a] mb-8 tracking-tight">
                {activeDetail.title}
              </h2>

              {/* Pull quote */}
              <div className="relative pl-6 border-l-2 border-[#ff6b00] mb-10 py-1">
                <p className="font-serif text-lg md:text-xl italic leading-relaxed text-[#1a1a1a]/85">
                  {activeDetail.summary}
                </p>
              </div>

              {/* Context body */}
              <div className="space-y-5 text-[15px] leading-[1.75] text-[#1a1a1a]/75 font-sans">
                {activeDetail.context.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Footer meta */}
              <div className="mt-14 pt-8 border-t border-[#1a1a1a]/10 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/50">
                  End of Dispatch
                </span>
                <button
                  onClick={() => setActiveDetail(null)}
                  className="text-[10px] font-mono uppercase tracking-widest text-[#ff6b00] hover:text-[#0a0a0a] transition-colors flex items-center gap-2"
                >
                  ← Return to Index
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}