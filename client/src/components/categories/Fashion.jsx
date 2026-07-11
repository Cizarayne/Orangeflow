import { useState } from 'react';

const fashionResources = [
  {
    title: "Paris Men's Fashion Week Showcases Spring/Summer 2027 Collections",
    source: "Harper's BAZAAR",
    summary: "Designers including Dior, Louis Vuitton, and Saint Laurent unveiled new collections, while celebrities filled the front rows, highlighting Paris as the center of global menswear.",
    context: "The Parisian runway corridor reasserted its structural dominance over global menswear architectures. High-visibility brand houses deployed structural updates blending heritage tailoring with hyper-functional, tech-forward fabrics.\n\nFront-row demographic tracking reflects unprecedented convergence of digital creators and traditional cinema icons, cementing the seasonal showcase as a prime macro-marketing driver for global multi-national luxury conglomerates.",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Summer 2026 Fashion Trends Dominate Global Runways",
    source: "Vogue",
    summary: "Designers are embracing balloon trousers, scarf styling, peplum silhouettes, Bermuda shorts, and retro-inspired tailoring for the season.",
    context: "Seasonal aesthetic audits point to a deliberate shift away from ultra-minimalist loungewear variants. The new design matrices favor structural volume manipulation—most notably via balloon-cut lower garments and peplum flares.\n\nRetro-leaning tailoring parameters have been updated for extreme heat environments, combining relaxed structural architecture with hyper-breathable, low-weight fabrication lines.",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sustainability Continues to Reshape the Fashion Industry",
    source: "European Parliament",
    summary: "European regulations and industry initiatives are pushing brands toward circular fashion, textile recycling, and more sustainable production methods.",
    context: "Sovereign regulatory enforcement is forcing a structural re-engineering of garment life cycles. New European legislative acts target post-consumer waste management, demanding absolute traceability for fiber composition arrays.\n\nBrands are transitioning infrastructure toward advanced chemical textile recycling loops and certified circular material flows to avoid steep non-compliance penalties.",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AI Is Transforming Fashion Design and Retail",
    source: "arXiv",
    summary: "Fashion companies are using artificial intelligence to forecast trends, personalize shopping experiences, optimize inventory, and create virtual try-on experiences.",
    context: "Neural computing networks are penetrating deep into fashion business lifecycles. Algorithmic generative tools assist design nodes with immediate colorway iterations based on live data pools.\n\nConcurrently, computer vision models drive high-fidelity virtual try-on modules at consumer interfaces, driving up conversion metrics while suppressing traditional retail return-logistics overhead.",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Luxury Watch Industry Unveils 2026 Collections",
    source: "British GQ",
    summary: "Premium brands introduced innovative mechanical watches featuring new materials, slimmer designs, and improved craftsmanship.",
    context: "The horological landscape reflects an absolute prioritization of material science. High-end foundries are debuting composite ultra-slim cases engineered from carbon matrices and titanium alloys.\n\nThese lightweight structural components protect mechanical movements calibrated to higher precision tolerances, catering to an analytical consumer segment focused on physical durability and engineering craft.",
    imageUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Personal Style Overtakes Fast-Changing Trends",
    source: "styleanalytics.substack.com",
    summary: "Industry analysts report that consumers increasingly value timeless wardrobes, thrift shopping, and individuality over rapidly changing fashion cycles.",
    context: "Consumer metric data shows a marked deceleration in fast-fashion buying cadences. Demographics are realigning purchasing intent around the concept of the 'capsule wardrobe' and vintage curation.\n\nThis anti-trend movement elevates individual archival pieces above macro-engineered viral styles, disrupting traditional seasonal high-volume inventory cycles.",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Trend Forecasting Becomes More Data-Driven",
    source: "Heuritech",
    summary: "Fashion forecasting firms are using AI and consumer analytics to predict colors, fabrics, and silhouettes months before retail launches.",
    context: "Predictive modeling has shifted forecasting from intuitive guesswork to systematic data science. Machine learning arrays scan millions of unstructured consumer digital images to track sub-cultural fashion behaviors.\n\nBy mapping visual growth curves, systems identify micro-trends months ahead of traditional consumer cycles, allowing supply-chain nodes to allocate production assets with absolute efficiency.",
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Literary Chic Emerges as a Global Fashion Trend",
    source: "Wikipedia",
    summary: "Designers are blending classic literature, academic aesthetics, and preppy styles into contemporary collections, giving rise to 'bookworm chic.'",
    context: "The sub-cultural aesthetic 'bookworm chic' has formalized into mainstream runway architectures. Design houses are modifying collegiate styling with tailoring inspired by mid-century academic attire.\n\nHeavy-weight wools, structured spectacles, and literary references integrated into textile prints characterize this structural trend, bridging intellectual heritage with premium consumer apparel lines.",
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Y2K Fashion Revival Continues Worldwide",
    source: "InStyle",
    summary: "Cargo pants, logo bags, halter tops, low-rise denim, and other early-2000s styles remain highly popular among younger consumers.",
    context: "Consumer demographic mapping confirms the multi-year resilience of turn-of-the-century styles. Multi-pocket cargo variants and heavy logo placement remain primary margin drivers in Gen-Z purchasing buckets.\n\nThis nostalgic fixation has driven luxury houses to reissue archival product lines from the 2000-2004 cycles, capturing massive market share in secondary resale indices.",
    imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Celebrity Fashion Continues to Influence Consumer Spending",
    source: "ELLE",
    summary: "Red-carpet appearances and social media posts from celebrities continue driving demand for luxury and designer brands.",
    context: "The systemic pipeline between elite red-carpet moments and immediate digital checkout conversion has tightened. Live-streamed events function as direct retail infrastructure.\n\nWhen high-profile individuals amplify an archival look, retail search indexes experience near-instantaneous surges, forcing luxury distribution channels to maintain adaptive buffer stock matching celebrity stylistic adjustments.",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Vera Wang Debuts New Haute Couture Style",
    source: "InStyle",
    summary: "Fashion icon Vera Wang drew attention during Paris Haute Couture Week with a bold new look, reinforcing her influence on luxury fashion.",
    context: "The avant-garde presentation shattered established bridal and eveningwear paradigms. Wang integrated elements of industrial geometry and architectural structural drapery into delicate silk foundations.\n\nThis design pivot re-establishes her technical studio as a key exploratory force in high-luxury fashion, forcing a re-evaluation of classic evening wear rules.",
    imageUrl: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Traditional Fashion Makes a Modern Comeback",
    source: "The Times of India",
    summary: "Designers and public figures are increasingly showcasing traditional garments with contemporary styling, celebrating cultural heritage.",
    context: "Regional heritage textiles are undergoing an industry-wide structural modernization. Technical ateliers are hybridizing localized weaving methods with modern Western streetwear cuts.\n\nThis preservation mechanic safeguards historic manual skills while creating a new tier of premium, heritage-linked luxury products sought after by global diaspora consumers.",
    imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Spring/Summer 2026 Runways Highlight Bold Colors and Textures",
    source: "Cosmopolitan",
    summary: "Collections feature sheer fabrics, sculptural tailoring, oversized accessories, and vibrant color palettes inspired by art and nature.",
    context: "The physical sensory experience forms the foundation of recent collection rollouts. Visual contrast metrics are pushed to extremes via hyper-saturated color scales placed directly alongside translucent, multi-layered sheer structures.\n\nOversized accessory hardware functions as a secondary design anchor, balancing out relaxed, fluid garment architectures with sharp, rigid geometric weights.",
    imageUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Virtual Fashion and Digital Clothing Continue Growing",
    source: "arXiv",
    summary: "Luxury brands are investing in digital fashion, virtual garments, and augmented reality experiences for online shoppers.",
    context: "Digital asset integration has evolved beyond simple marketing mechanics into an independent revenue stream. Computational designers construct complex, physics-compliant digital textures available exclusively for online rendering spaces.\n\nThese virtual garments function as hyper-efficient testing fields: brands gauge aesthetic interest metrics before deploying physical capital allocations for tangible factory production.",
    imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Fashion Retailers Improve Inventory with AI Analytics",
    source: "arXiv",
    summary: "Brands are adopting predictive inventory systems to reduce waste, improve stock management, and respond more quickly to consumer demand.",
    context: "Supply chain visibility models are mitigating the industry's historical overproduction crisis. Automated predictive routing matches real-time region-by-region sales trends with localized factory batching setups.\n\nBy executing smaller, rapid-response manufacturing runs, logistics terminals systematically drive down deadstock volume while preserving baseline product margin values.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Summer Fashion Focuses on Comfort and Versatility",
    source: "Yahoo Shopping",
    summary: "Lightweight fabrics, breathable materials, relaxed tailoring, and multifunctional clothing continue to dominate seasonal wardrobes.",
    context: "The technical requirements for warm-weather dressing emphasize adaptable utility. Material standards require moisture-wicking weave configurations embedded directly within premium natural linens and organic cotton slubs.\n\nThis design philosophy fields cross-functional items that shift seamlessly between professional business environments and leisure tracking configurations without requiring garment swaps.",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Luxury Brands Invest More in Sustainable Materials",
    source: "European Parliament",
    summary: "Designers are increasing the use of recycled fibers, organic cotton, biodegradable textiles, and low-impact manufacturing techniques.",
    context: "Premium brands are progressively adjusting their raw input matrices. Ateliers are prioritizing lab-grown alternatives and bio-synthetic polymers that offer the structural density of luxury silks and leathers without the ecological overhead.\n\nThis chemical optimization allows high-fashion operations to present eco-responsible collections that maintain the tactile expectations of luxury consumers.",
    imageUrl: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Beauty and Fashion Trends Become More Connected",
    source: "Allure",
    summary: "Natural makeup, skincare-focused beauty routines, and minimalist styling are increasingly shaping fashion campaigns and runway presentations.",
    context: "Visual marketing strategies demonstrate a unified convergence between cosmetics and fabric presentation. Runways are abandoning heavy, high-intervention studio cosmetics to lean into low-opacity, hydration-focused skin finishes.\n\nThis hyper-clean look balances the intricate textures and sculptural weights of current apparel designs, ensuring the visual focus remains on structural garment architecture.",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aaa2f197cdd8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Fashion Weeks Expand Global Influence",
    source: "Harper's BAZAAR",
    summary: "Events in Paris, Milan, London, New York, Tokyo, and Seoul continue introducing emerging designers and showcasing diverse cultural influences.",
    context: "The global style grid is expanding into a decentralized network. While the traditional European centers hold historical capital positions, expanding showcases in Tokyo and Seoul act as primary incubators for technical street styling and avant-garde deconstruction.\n\nThis multi-polar dynamic forces an ongoing evolution of global fashion, introducing diverse regional design vocabularies into mainstream distribution models.",
    imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Global Fashion Industry Prioritizes Innovation",
    source: "arXiv",
    summary: "From AI-powered design tools to sustainable textiles and digital commerce, the fashion industry continues evolving through technology while balancing creativity with environmental responsibility.",
    context: "As 2026 shifts consumer priorities toward eco-efficiency and digital integration, the entire fashion supply chain faces re-engineering. Ateliers that scale algorithmic predictive data models alongside low-impact circular chemistry are outperforming legacy players.\n\nThe future market landscape treats garment fabrication not as a simple material line item, but as an advanced interface bridging raw computational intelligence with conscious human creative expression.",
    imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Fashion() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeDetail, setActiveDetail] = useState(null);
  const visibleCount = 3;
  const activeSlideIndex = Math.floor(startIndex / visibleCount);
  const totalDots = Math.ceil(fashionResources.length / visibleCount);

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount >= fashionResources.length ? 0 : prev + visibleCount));
  };
  const handlePrev = () => {
    setStartIndex((prev) => (prev - visibleCount < 0 ? fashionResources.length - visibleCount : prev - visibleCount));
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
              The Fashion <em className="font-serif italic text-[#ff6b00]">Dispatch</em>
            </h1>
            <p className="text-sm md:text-base text-[#1a1a1a]/70 leading-relaxed max-w-2xl">
              Twenty curated dispatches from the front lines of style — tracing the arc of runway architecture, material science, algorithmic forecasting, and the quiet revolution of conscious consumption.
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
          {fashionResources.slice(startIndex, startIndex + visibleCount).map((item, idx) => (
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
          className="absolute -right-2 md:-right-5 top-1/3 w-11 h-11 rounded-full bg-white border border-[#1a1a1a]/15 text-[#0a0a0a] flex items-center justify-center hover:border-[#ff6b00] hover:text-[#ff6b00] transition-all shadow-sm lg:flex"
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