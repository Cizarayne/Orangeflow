import { useState } from 'react';

const scienceResources = [
  {
    title: "Scientists Use AI to Discover Two New Superconductors",
    source: "ScienceDaily",
    summary: "Researchers combined machine learning with quantum physics to identify two previously unknown superconducting materials, significantly accelerating the search for next-generation energy technologies.",
    context: "By integrating deep-learning neural networks with quantum mechanical simulations, the research team bypassed years of traditional trial-and-error laboratory synthesis.\n\nThe two newly mapped crystalline structures exhibit zero electrical resistance at higher critical threshold temperatures than historically predicted, offering an immediate structural blueprint for optimizing low-loss power grids and next-generation particle accelerators.",
    imageUrl: "https://c0.wallpaperflare.com/preview/102/174/406/analysis-biochemistry-biologist-biology.jpg"
  },
  {
    title: "Exercise Found to Reverse Muscle Aging",
    source: "ScienceDaily",
    summary: "New biomedical research reveals how regular physical activity activates molecular pathways that help restore muscle strength and slow age-related decline.",
    context: "The physiological study details the exact transcriptomic shifts that occur within aging skeletal muscle tissues following sustained mechanical stress.\n\nRegular physical exertion triggers cellular autophagy and mitochondrial biogenesis, essentially clearing out senescent proteins and repairing micro-architectural pathways. This effectively reverses structural degradation and resets cellular markers to a more youthful state.",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "European Research Council Awards €838 Million to Leading Scientists",
    source: "ERC",
    summary: "The ERC has awarded funding to 319 research projects across Europe, supporting breakthroughs in medicine, climate science, physics, engineering, and artificial intelligence.",
    context: "This major capital injection targets high-risk, high-reward frontier science. The distributed €838 million fund provides multi-year runway security for 319 principal investigators across diverse institutes.\n\nPriority allocations focus heavily on scaling quantum error correction, engineering synthetic carbon-capture enzymes, and mapping complex neural pathways linked to chronic degenerative pathologies.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuGal4EjgF_hyJGz8aacSId-YN0WPHYZbIDbzvj64Aw&s=10"
  },
  {
    title: "James Webb Space Telescope Detects a Never-Before-Seen Molecule",
    source: "Live Science",
    summary: "Astronomers have identified an unknown chemical substance in the atmospheres of Pluto and Titan, opening new questions about planetary chemistry and atmospheric evolution.",
    context: "Using high-resolution infrared spectroscopy, the space observatory isolated a distinct chemical signature filtering through the outer atmospheric hazes.\n\nThis previously undocumented molecular structure suggests complex, cold-temperature photochemical reactions are occurring at the edges of our solar system, forcing astrobiologists to revise active atmospheric evolution models.",
    imageUrl: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "China's 'Great Green Wall' Shows Remarkable Growth",
    source: "Live Science",
    summary: "New research indicates billions of trees planted to combat desertification are growing faster than many natural forests, demonstrating the potential of large-scale ecological restoration.",
    context: "Satellite biomass tracking data reveals unprecedented growth metrics across the massive afforestation zone. The engineered forest ecosystems are sequestering carbon at accelerated rates.\n\nThis rapid maturation demonstrates that strategically managed human intervention can stabilize fragile topsoil configurations and successfully halt aggressive desert expansion when scaled correctly.",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Scientists Sequence More of Earth's Biodiversity",
    source: "The Guardian",
    summary: "The Wellcome Sanger Institute continues its ambitious Tree of Life project by sequencing tardigrade genomes to better understand evolution, biodiversity, and resilience in extreme environments.",
    context: "The full genomic assembly of multiple tardigrade species exposes specific DNA-protecting proteins that prevent cellular collapse during extreme desiccation and radiation exposure.\n\nBy mapping these precise evolutionary preservation mechanisms, researchers aim to extract genetic insights that could eventually inspire novel bio-stabilization techniques for human medical therapies.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/634/379/769/landscape-photo-of-lake-near-forest-wallpaper-preview.jpg"
  },
  {
    title: "Autonomous AI System Makes Scientific Discoveries Independently",
    source: "arXiv",
    summary: "Researchers introduced an AI framework capable of generating hypotheses, analyzing datasets, and validating discoveries with statistical testing, representing a major step toward autonomous scientific research.",
    context: "This closed-loop machine intelligence platform manages the entire scientific method without human intervention. The system scans unorganized raw data pools, constructs predictive mathematical models, and validates its findings using advanced statistical testing algorithms.\n\nIts successful independence marks a monumental shift toward automated, hyper-speed discovery pipelines across materials science and biochemistry.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKvT6BYclrFdy94XP36ADZ3fM9uvkEtwlpbHQzdGkTA&s=10"
  },
  {
    title: "SVOM Space Observatory Produces Early Scientific Results",
    source: "arXiv",
    summary: "The international SVOM mission has already detected hundreds of high-energy astronomical events beyond gamma-ray bursts, expanding knowledge of X-ray binaries, stellar flares, and black holes.",
    context: "The joint space-tracking array has successfully captured multi-wavelength data streams from active galactic nuclei and highly volatile stellar surfaces.\n\nBy cataloging these energetic X-ray and gamma-ray transient events, astrophysical teams are obtaining unprecedented clarity regarding the intense structural dynamics surrounding active stellar-mass black holes.",
    imageUrl: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "NASA Improves Earth Observation Data Discovery Using AI",
    source: "arXiv",
    summary: "Scientists developed an intelligent search system that helps researchers quickly locate Earth observation datasets through natural-language queries.",
    context: "The deployment of a specialized large language model indexer simplifies the extraction of multi-decade satellite records.\n\nResearchers can now query complex climate variables using conversational text, allowing the system to instantly cross-reference geo-spatial coordinates, atmospheric moisture vectors, and surface temperature anomalies without manual metadata sorting.",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Top Emerging Technologies of 2026 Announced",
    source: "Society of Chemical Industry",
    summary: "A new report highlights scientific advances expected to transform healthcare, clean energy, advanced materials, and critical resources over the coming years.",
    context: "The technical dossier outlines key engineering fields achieving commercial inflection points this year. Innovations like solid-state sodium batteries, targeted CRISPR epigenetic edits, and self-healing bio-concrete are highlighted.\n\nThese material and molecular advancements are projected to drastically reshape industrial carbon footprints and long-term public health infrastructure models.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Nature Examines AI Detection Tools in Universities",
    source: "Nature",
    summary: "Researchers continue evaluating the effectiveness and reliability of AI-generated text detection software used by educational institutions.",
    context: "Statistical stress-testing of popular linguistic detection models reveals persistently high rates of false positives, particularly when scanning text authored by non-native English speakers.\n\nThe analysis warns academic institutions against relying heavily on automated algorithmic policing, prompting a push for alternative, performance-based evaluation frameworks.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Young Scientists Collaborate With World-Class Neuroscientists",
    source: "Frontiers",
    summary: "Children and teenagers worked alongside leading brain researchers to review and explain cutting-edge neuroscience discoveries, encouraging public engagement in science.",
    context: "This unique open-science initiative paired school-aged co-reviewers with active laboratory leads. Together, they translated complex neurological imaging data and synaptic tracking papers into highly accessible public documentation.\n\nThe pedagogical experiment demonstrated that early immersion in formal peer-review environments drastically increases scientific literacy and counters systematic public misinformation.",
    imageUrl: "https://c0.wallpaperflare.com/preview/837/377/176/medical-procedures-medical-office-seafarer-s-medical.jpg"
  },
  {
    title: "Scientists Develop Solar Reactor That Converts Waste Into Valuable Materials",
    source: "tech.liga.net",
    summary: "New experimental technology uses sunlight to transform waste products into useful chemical resources while reducing environmental impact.",
    context: "The photo-catalytic prototype captures concentrated solar thermal energy to break down post-industrial carbon polymers and plastic waste.\n\nInstead of simple incineration, the controlled chemical degradation converts the scrap into high-purity syngas and valuable chemical precursors for pharmaceuticals, operating completely independent of external fossil-fuel energy inputs.",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Researchers Create More Flexible High-Performance Metals",
    source: "tech.liga.net",
    summary: "Material scientists have developed new metal structures with enhanced flexibility and durability, opening opportunities for aerospace, electronics, and robotics.",
    context: "By manipulating crystalline grain boundaries at the nanoscale, the metallurgy lab successfully solved the historic trade-off between tensile strength and ductility.\n\nThe resulting alloy can undergo extreme elastic distortion without micro-fracturing, providing a highly durable material foundation for deep-space structural frameworks and agile robotic actuators.",
    imageUrl: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Research Reveals Milk Lipids May Improve Heart Health",
    source: "Loughborough University",
    summary: "A comprehensive scientific review found that naturally occurring milk lipid bioactives may positively influence cardiovascular health markers in healthy adults.",
    context: "The analytical data review challenges old dietary assumptions regarding dairy fats. The metabolic tracking shows that specific polar lipids and short-chain fatty acids present in mammalian milk matrices actually help optimize blood lipid markers.\n\nThese compounds reduce circulating low-density lipoprotein (LDL) particle counts, showing a correlation with improved long-term arterial elasticity.",
    imageUrl: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Global Science Community Highlights June's Biggest Discoveries",
    source: "News.az",
    summary: "Researchers reported advances ranging from Mars exploration and supercomputing to new environmental technologies and biomedical innovations.",
    context: "The monthly global compilation indexes milestone data across a massive multi-disciplinary spectrum. Key highlights include the parsing of new sub-surface core samples from Martian delta formations.\n\nAdditionally, exascale supercomputing nodes successfully simulated molecular folding patterns at real-time speeds, offering immediate tools for rapid clinical drug modeling.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Google Highlights Major Scientific Research Breakthroughs",
    source: "blog.google",
    summary: "Google's annual research review showcases advances in artificial intelligence, robotics, quantum computing, climate science, and biomedical research.",
    context: "The tech giant's internal labs documented significant leaps in specialized physical modeling. Their flagship quantum processor demonstrated a reduction in operational gate-error metrics.\n\nConcurrently, their advanced weather-forecasting models outperformed traditional regional atmospheric simulation clusters, demonstrating massive compute-efficiency gains.",
    imageUrl: "https://c0.wallpaperflare.com/preview/985/736/853/backgrounds-school-education-science.jpg"
  },
  {
    title: "Renewable Energy Named One of the Biggest Scientific Success Stories",
    source: "Science",
    summary: "Leading researchers continue recognizing the rapid global expansion of renewable energy technologies as one of the most significant scientific achievements of recent years.",
    context: "An analytical review of global energy deployment confirms that photovoltaic efficiency improvements and kinetic wind-turbine mechanics have scaled faster than conservative economic projections predicted.\n\nThis compounding technological scaling curve stands out as a prime example of physics-driven research successfully transitioning into immediate, macro-scale global climate remediation infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Scientific Podcasts Help Bring Research to Wider Audiences",
    source: "Loughborough University",
    summary: "Universities are increasingly using podcasts and digital media to communicate scientific discoveries and make research more accessible to the public.",
    context: "Data tracking consumer listening habits reveals a major surge in audio-first scientific engagement. Academic departments are establishing specialized in-house production studios to transform dense text manuscripts into structured conversational audio streams.\n\nThis conversational transition bridges the gap between institutional research silos and a public seeking vetted, evidence-based digital information.",
    imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Healthcare Research Institutions Reach New Global Milestones",
    source: "newswise.com",
    summary: "Major research centers continue producing high-impact scientific publications in medicine, genomics, cancer research, and public health, reflecting the growing pace of global scientific innovation.",
    context: "An aggregated survey of medical journal citations confirms an exponential increase in cross-border epidemiological data sharing.\n\nCollaborative laboratory structures have achieved unprecedented milestones in isolating targetable oncology cell markers and deploying mRNA-based therapeutic designs, emphasizing that interconnected global networks are driving the accelerated pace of modern clinical discovery.",
    imageUrl: "https://c0.wallpaperflare.com/preview/547/942/519/laboratory-medical-medicine-hand.jpg"
  }
];

export default function ScienceAndResearch() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeDetail, setActiveDetail] = useState(null);
  const visibleCount = 3;
  const activeSlideIndex = Math.floor(startIndex / visibleCount);
  const totalDots = Math.ceil(scienceResources.length / visibleCount);

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount >= scienceResources.length ? 0 : prev + visibleCount));
  };
  const handlePrev = () => {
    setStartIndex((prev) => (prev - visibleCount < 0 ? scienceResources.length - visibleCount : prev - visibleCount));
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
              The Scientific <em className="font-serif italic text-[#ff6b00]">Dispatch</em>
            </h1>
            <p className="text-sm md:text-base text-[#1a1a1a]/70 leading-relaxed max-w-2xl">
              Twenty dispatches from the front lines of empirical research — tracing the arc of superconductor discovery loops, astrophysical spectroscopy, autonomous laboratory orchestration, and the quiet revolution of nanostructured material science.
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
          {scienceResources.slice(startIndex, startIndex + visibleCount).map((item, idx) => (
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
          className="absolute -left-2 md:-left-5 top-1/3 w-11 h-11 rounded-full bg-white border border-[#1a1a1a]/15 text-[#0a0a0a] flex items-center justify-center hover:border-[#ff6b00] hover:text-[#ff6b00] transition-all shadow-sm lg:flex"
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