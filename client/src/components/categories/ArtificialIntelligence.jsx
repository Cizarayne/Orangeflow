import { useState, useEffect } from "react";
import { X, Clock, Search } from "lucide-react";

const aiResources = [
  {
    title: "UN Warns That Unchecked AI Development Could Pose Catastrophic Risks",
    source: "Reuters",
    category: "Policy",
    summary: "A United Nations scientific panel says AI capabilities are advancing faster than governance, highlighting risks including autonomous AI systems, cyberattacks, misinformation, and biological threats.",
    context: "The international assembly warns that current global governance mechanisms are failing to keep pace with algorithmic breakthroughs. As models gain autonomy, safety protocols are becoming increasingly decoupled from deployment speeds.\n\nThe scientific panel emphasized that immediate regulatory intervention is required to secure dual-use AI code bases, mitigate machine-driven geopolitical cyberattacks, and prevent the weaponization of automated biological synthesis tools before systems cross non-reversible capability thresholds.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    author: "Sarah Mitchell",
    readTime: "5 min read",
    date: "July 7, 2026"
  },
  {
    title: "UN Launches 'AI for Good' Global Commission",
    source: "Axios",
    category: "Governance",
    summary: "The United Nations has established a new international commission bringing together governments, researchers, and technology leaders to promote responsible AI development worldwide.",
    context: "This newly formed body seeks to operationalize ethical AI standards across sovereign lines. By bridging the gap between industry hyperscalers and civic policymakers, the commission intends to formalize safety benchmarks.\n\nPriority mandates include building accessible, open-source safety frameworks for developing nations, creating strict verification methods for foundational model architectures, and ensuring tech monopolies do not exclusively dictate global safety parameters.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    author: "Michael Chen",
    readTime: "4 min read",
    date: "July 7, 2026"
  },
  {
    title: "UK Regulator Calls for Stronger AI Oversight in Financial Services",
    source: "The Guardian",
    category: "Finance",
    summary: "Britain's financial watchdog recommends expanding regulatory powers to address AI-related fraud, cybersecurity risks, and consumer protection in banking and finance.",
    context: "With systemic automation deeply penetrating quantitative trading desks and consumer loan approvals, financial watchdogs are raising red flags. The proposed oversight changes seek to hold institutions explicitly liable for algorithmic bias and autonomous market disruptions.\n\nNew legal frameworks would demand that banks provide absolute traceability for automated credit decisions and maintain failsafe overrides to block market flash crashes triggered by correlated AI behaviors.",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    author: "Emma Thompson",
    readTime: "6 min read",
    date: "July 6, 2026"
  },
  {
    title: "Britain Plans Massive AI Growth Zones",
    source: "The Guardian",
    category: "Infrastructure",
    summary: "The UK government is proposing dedicated AI infrastructure zones with large-scale data centers, though experts question whether power and land requirements are realistic.",
    context: "The aggressive industrial strategy intends to accelerate local cloud compute capabilities by cutting through bureaucratic zoning laws. However, grid engineers warn that local energy grids cannot safely sustain the exponential megawatt surges required by these massive server arrays without triggering regional blackouts or relying on fossil-fuel backups.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    author: "James Wilson",
    readTime: "5 min read",
    date: "July 6, 2026"
  },
  {
    title: "Enterprise AI Coding Tools Double Developer Productivity",
    source: "arXiv",
    category: "Technology",
    summary: "A new longitudinal study found that organizations adopting AI-assisted software development significantly increased engineering productivity while relying more on automated code reviews.",
    context: "The academic study indicates a fundamental shift in standard software lifecycles. Engineers utilizing context-aware agents successfully slashed sprint completion timelines by 50%.\n\nDespite the rapid output, researchers noted a growing reliance on automated code review tools, highlighting a critical shift in developer roles from pure syntax generation to high-level architectural oversight and intent validation.",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
    author: "Dr. Lisa Park",
    readTime: "7 min read",
    date: "July 5, 2026"
  },
  {
    title: "Google Details the Evolution of Its AI Supercomputers",
    source: "arXiv",
    category: "Research",
    summary: "Google has published research describing how five generations of TPU-based AI supercomputers have dramatically improved performance, energy efficiency, and scalability for AI training.",
    context: "The technical paper lays bare the hardware breakthroughs underpinning contemporary frontier models. By optimization at the optical interconnect level and rethinking liquid-cooling manifolds, the systems sustain unmatched workloads.\n\nThis multi-generational retrospective highlights that architectural efficiency and customized domain-specific silicon (TPUs) provide vastly superior scaling metrics compared to standard off-the-shelf commodity compute components.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
    author: "David Kumar",
    readTime: "8 min read",
    date: "July 5, 2026"
  },
  {
    title: "AI Infrastructure Spending Continues to Surge",
    source: "AIapps",
    category: "Business",
    summary: "Technology companies worldwide continue investing billions of dollars in AI chips, cloud infrastructure, and hyperscale data centers to support increasingly powerful AI models.",
    context: "Capital expenditure tracking reveals unprecedented hyper-scaler investments. Tech giants are aggressively outbidding each other for cutting-edge semiconductor allocations, raw land tracts, and dedicated clean-energy power purchase agreements.\n\nMarket analysts suggest this massive infrastructure arms race treats raw compute capacity as the ultimate sovereign resource of the late 2020s, heavily impacting global hardware supply chains.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    author: "Rachel Green",
    readTime: "5 min read",
    date: "July 4, 2026"
  },
  {
    title: "AI Regulation Becomes a Global Priority",
    source: "Welcome.AI",
    category: "Policy",
    summary: "Governments are introducing new policies focused on transparency, safety testing, copyright, privacy, and accountability for advanced AI systems.",
    context: "The legislative landscape is fracturing into distinct regional approaches. While some blocks mandate stringent pre-training model transparency and algorithmic data lineage audits, others prioritize consumer privacy protections.\n\nThis global compliance push forces multi-national AI labs to maintain localized data instances and prepare comprehensive safety-testing dossiers before receiving market access clearance.",
    imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
    author: "Thomas Anderson",
    readTime: "6 min read",
    date: "July 4, 2026"
  },
  {
    title: "Businesses Accelerate Enterprise AI Adoption",
    source: "crescendo.ai",
    category: "Enterprise",
    summary: "Companies across finance, healthcare, manufacturing, and customer service continue integrating AI into daily operations to improve efficiency and decision-making.",
    context: "Corporate technology audits reflect a shift away from experimental sandboxes into full production-grade machine deployments. Legacy workflows are rapidly transforming into agent-assisted systems.\n\nFrom fully automated predictive supply chain routing to instant medical insurance pre-authorizations, enterprises are aggressively reducing operational friction, rewriting corporate workforce roles in the process.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    author: "Jennifer Martinez",
    readTime: "5 min read",
    date: "July 3, 2026"
  },
  {
    title: "AI Agents Become More Capable of Complex Tasks",
    source: "Reuters",
    category: "Innovation",
    summary: "Next-generation AI assistants are increasingly able to perform multi-step workflows, automate business processes, and assist knowledge workers with minimal supervision.",
    context: "Unlike static chatbots of the past, contemporary agentic architectures execute complex, long-horizon objectives natively. These systems spin up isolated sandbox environments, test their own output, and self-correct code.\n\nBy operating semi-autonomously across fragmented enterprise applications, these cognitive agents are drastically shrinking the administrative overhead historically tied to routine knowledge work.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    author: "Alex Johnson",
    readTime: "6 min read",
    date: "July 3, 2026"
  },
  {
    title: "Debate Over AI Data Centers Intensifies",
    source: "Business Insider",
    category: "Environment",
    summary: "Community groups are raising concerns about the environmental impact, electricity demand, and water consumption associated with rapidly expanding AI infrastructure.",
    context: "The ecological footprint of artificial intelligence has drawn sharp grassroots resistance. Local coalitions are challenging municipal water allocations used for evaporative cooling loops inside massive server parks.\n\nAs clusters demand unprecedented baseline power draws, communities face rising electricity tariffs, turning data center construction sites into major battlegrounds for regional environmental justice.",
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    author: "Maria Garcia",
    readTime: "7 min read",
    date: "July 2, 2026"
  },
  {
    title: "Media Industry Continues Exploring AI-Generated Content",
    source: "People.com",
    category: "Entertainment",
    summary: "AI-generated actors, voices, and creative tools are becoming more common in film and entertainment, while raising ethical questions about copyright and human creativity.",
    context: "Hollywood and independent studios are standardizing hyper-realistic generative video and voice synthesis into post-production pipelines. While reducing budgeting constraints, it has sparked fierce Union pushback.\n\nThe industry faces complex legal precedents regarding digital likeness permanence, synthetic typecasting, and the systemic erosion of downstream royalties for human actors and voice talent.",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    author: "Chris Evans",
    readTime: "5 min read",
    date: "July 2, 2026"
  },
  {
    title: "Researchers Work to Reduce AI Hallucinations",
    source: "arXiv",
    category: "Research",
    summary: "New research proposes techniques to improve the factual accuracy of AI-generated summaries and reduce fabricated information in language models.",
    context: "The latest computer science papers address structural unreliability in text-generation systems. By implementing dense cross-referencing verification layers and automated semantic critique loops, engineers are reducing confabulation rates.\n\nThese methods verify internal model assertions against trusted, external real-time data sources before final output delivery, paving the way for legally compliant deployment in mission-critical fields.",
    imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
    author: "Dr. Alan Turing",
    readTime: "8 min read",
    date: "July 1, 2026"
  },
  {
    title: "News Organizations Rethink AI Transparency",
    source: "arXiv",
    category: "Media",
    summary: "Researchers suggest that simple, user-friendly disclosures may build more trust than lengthy explanations about how AI contributes to journalism.",
    context: "Academic reader-behavior studies reveal that overly complex algorithmic transparency disclaimers inadvertently alienate audiences. Instead, news rooms are adopting hyper-minimized visual tags.\n\nIndicating precisely whether a model assisted with copy editing, translation, or data synthesis fosters significantly higher reader trust and alignment compared to dense, legalese-filled methodology pages.",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    author: "Laura Bennett",
    readTime: "4 min read",
    date: "July 1, 2026"
  },
  {
    title: "AI Competition Drives Global Chip Innovation",
    source: "arXiv",
    category: "Technology",
    summary: "Semiconductor manufacturers continue developing faster AI accelerators with improved energy efficiency to meet growing demand for model training and inference.",
    context: "The insatiable demand for tokens is forcing foundry operators to push the physical boundaries of silicon lithography. Companies are debuting advanced multi-die packaging, specialized memory channels, and sub-nanometer processing nodes.\n\nThese design innovations seek to break the memory-bandwidth bottleneck, lowering the cost of real-time multi-modal model inference at global scales.",
    imageUrl: "https://images.unsplash.com/photo-1517055729445-fa7d27394b48?auto=format&fit=crop&w=800&q=80",
    author: "Kevin Zhang",
    readTime: "7 min read",
    date: "June 30, 2026"
  },
  {
    title: "Governments Race to Develop National AI Strategies",
    source: "Welcome.AI",
    category: "Policy",
    summary: "Countries are expanding investments in AI research, education, computing infrastructure, and workforce development to strengthen global competitiveness.",
    context: "Sovereign entities are viewing advanced artificial intelligence as a core national security pillar. State-sponsored venture funds are actively subsidizing local talent pipelines and providing sovereign cloud instances.\n\nBy securing localized compute autonomy, nations aim to safeguard cultural data alignment and insulate domestic industries against potential foreign technology embargos.",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    author: "Patricia Moore",
    readTime: "6 min read",
    date: "June 30, 2026"
  },
  {
    title: "Healthcare Remains One of AI's Fastest-Growing Sectors",
    source: "crescendo.ai",
    category: "Healthcare",
    summary: "Hospitals are increasingly using AI for medical imaging, clinical documentation, diagnostics, drug discovery, and patient monitoring.",
    context: "Clinical environments are undergoing systemic shifts as computer vision networks audit radiological scans with unprecedented accuracy. Concurrently, molecular generative models are predicting protein folds in days rather than decades.\n\nThese automated diagnostic aids optimize hospital resource management, significantly reducing administrative burnout for front-line nurses and accelerating target identification for complex pharmacology.",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    author: "Dr. Susan Lee",
    readTime: "6 min read",
    date: "June 29, 2026"
  },
  {
    title: "AI Transforms Software Development Workflows",
    source: "arXiv",
    category: "Technology",
    summary: "AI-powered coding assistants are becoming standard tools for developers, helping generate code, review pull requests, detect bugs, and improve productivity.",
    context: "Modern integrated development environments (IDEs) are shifting toward fully collaborative multi-agent codebases. Autonomous tools now trace legacy dependency errors and generate proactive unit testing scripts natively.\n\nThis continuous workflow augmentation allows modern developers to spend less time managing boilerplate configurations and more time designing resilient distributed systems architectures.",
    imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80",
    author: "Ryan Cooper",
    readTime: "5 min read",
    date: "June 29, 2026"
  },
  {
    title: "Global Discussions Focus on Safe AI Governance",
    source: "Reuters",
    category: "Governance",
    summary: "International organizations are working toward shared standards for evaluating advanced AI systems, improving transparency, and managing emerging risks.",
    context: "Multilateral global safety summits are working to standardize 'red-teaming' rules for models before public weights release. Delegates are focused on preventing malicious zero-day exploit discoveries via automated agents.\n\nEstablishing non-partisan testing bodies across international lines serves to guarantee that minimum fallback containment switches exist across all frontier model clusters.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    author: "Michelle Roberts",
    readTime: "7 min read",
    date: "June 28, 2026"
  },
  {
    title: "Experts Predict AI Will Continue Reshaping Every Industry",
    source: "AIapps",
    category: "Analysis",
    summary: "Analysts expect AI to remain one of the fastest-growing technologies in 2026, influencing education, finance, manufacturing, transportation, scientific research, and creative industries through increasingly capable foundation models and intelligent automation.",
    context: "As 2026 marks an inflection point for autonomous multi-modal intelligence, structural industry displacement is accelerating. Market dynamics are favoring organizations that aggressively integrate foundation layers.\n\nLong-term forecasting points to an economy where intelligence functions as a standard API utility, permanently altering market competitive structures and human capital value mechanics across the globe.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    author: "Daniel Kim",
    readTime: "8 min read",
    date: "June 28, 2026"
  }
];

export default function ArtificialIntelligence() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeDetail, setActiveDetail] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleCount = 3;
  const activeSlideIndex = Math.floor(startIndex / visibleCount);

  const filteredResources = aiResources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalDots = Math.ceil(filteredResources.length / visibleCount);

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= filteredResources.length ? 0 : prev + visibleCount
    );
  };
  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - visibleCount < 0
        ? Math.max(0, filteredResources.length - visibleCount)
        : prev - visibleCount
    );
  };

  // Reset to first page when filters change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStartIndex(0);
  }, [searchQuery, selectedCategory]);

  const categories = ["All", ...new Set(aiResources.map((r) => r.category))];
  const uniqueSources = new Set(aiResources.map((r) => r.source)).size;

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
              The Artificial Intelligence <em className="font-serif italic text-[#ff6b00]">Dispatch</em>
            </h1>
            <p className="text-sm md:text-base text-[#1a1a1a]/70 leading-relaxed max-w-2xl">
              Twenty dispatches from the front lines of machine intelligence — tracing the arc of sovereign compute infrastructure, algorithmic governance frameworks, autonomous agent architectures, and the quiet revolution of enterprise intelligence deployment.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/60">
              <span className="h-px w-6 bg-[#1a1a1a]/30" />
              <span>Live Feed</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b00] animate-pulse" />
            </div>
            <div className="font-serif text-5xl md:text-6xl font-light text-[#0a0a0a] tabular-nums">
              {String(filteredResources.length).padStart(2, '0')}
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/50">
              Articles · 2026
            </span>
          </div>
        </div>
      </section>

      {/* Editorial Search & Filter Rail */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end">
          {/* Search */}
          <div className="flex-1 w-full lg:max-w-md">
            <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/50 mb-2 block">
              Search Index
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]/40" />
              <input
                type="text"
                placeholder="Query articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-transparent border-b border-[#1a1a1a]/20 focus:border-[#ff6b00] focus:outline-none text-sm text-[#0a0a0a] placeholder-[#1a1a1a]/40 font-sans transition-colors"
              />
            </div>
          </div>

          {/* Category filter */}
          <div className="w-full lg:w-auto">
            <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/50 mb-2 block">
              Category Filter
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[10px] font-mono font-bold uppercase tracking-[0.15em] px-3 py-1.5 border transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#ff6b00] text-white border-[#ff6b00]'
                      : 'bg-transparent text-[#1a1a1a]/60 border-[#1a1a1a]/15 hover:border-[#ff6b00] hover:text-[#ff6b00]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Metadata rail */}
        <div className="mt-8 pt-6 border-t border-[#1a1a1a]/10 flex flex-wrap gap-x-10 gap-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/40">Total Dispatches</span>
            <span className="font-serif text-xl text-[#0a0a0a] tabular-nums">{aiResources.length}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/40">Categories</span>
            <span className="font-serif text-xl text-[#0a0a0a] tabular-nums">{categories.length - 1}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/40">Sources</span>
            <span className="font-serif text-xl text-[#0a0a0a] tabular-nums">{uniqueSources}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/40">Updated</span>
            <span className="font-serif text-xl text-[#0a0a0a]">Today</span>
          </div>
        </div>
      </section>

      {/* 3-Column Editorial Grid */}
      <section className="max-w-7xl mx-auto px-6 relative">
        {filteredResources.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl text-[#1a1a1a]/50 italic">No dispatches match your query.</p>
            <p className="text-xs font-mono uppercase tracking-widest text-[#1a1a1a]/40 mt-3">Adjust filters to continue</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 transition-all duration-500">
              {filteredResources.slice(startIndex, startIndex + visibleCount).map((item, idx) => (
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
                      {String(startIndex + idx + 1).padStart(2, '0')} / {String(filteredResources.length).padStart(2, '0')}
                    </div>
                    {/* Category tag */}
                    <div className="absolute top-4 right-4 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#ff6b00] bg-white/90 backdrop-blur-sm px-2 py-1">
                      {item.category}
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
                      {item.date}
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

                  {/* Author + read time footer */}
                  <div className="mt-auto pt-4 border-t border-[#1a1a1a]/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#1a1a1a]/10 flex items-center justify-center text-[10px] font-mono font-bold text-[#0a0a0a]">
                        {item.author.charAt(0)}
                      </div>
                      <span className="text-[11px] text-[#1a1a1a]/60">{item.author}</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/50 group-hover:text-[#ff6b00] transition-colors flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.readTime}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Carousel Navigation */}
            {filteredResources.length > visibleCount && (
              <>
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
              </>
            )}
          </>
        )}
      </section>

      {/* Pagination Rail */}
      {filteredResources.length > visibleCount && (
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
      )}

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
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/40 ml-2">
                    · {activeDetail.category}
                  </span>
                </div>
                <button
                  onClick={() => setActiveDetail(null)}
                  className="w-9 h-9 rounded-full border border-[#1a1a1a]/20 flex items-center justify-center hover:border-[#ff6b00] hover:text-[#ff6b00] transition-all"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="px-8 md:px-12 py-10">
              {/* Source + date tag */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
                  {activeDetail.source}
                </span>
                <span className="h-px flex-1 bg-[#1a1a1a]/15" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/40">
                  {activeDetail.date} · {activeDetail.readTime}
                </span>
              </div>

              {/* Hero image */}
              <div className="w-full aspect-16/10 overflow-hidden bg-[#e8e4db] mb-8">
                <img
                  src={activeDetail.imageUrl}
                  alt={activeDetail.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight text-[#0a0a0a] mb-6 tracking-tight">
                {activeDetail.title}
              </h2>

              {/* Author block */}
              <div className="flex items-center gap-3 mb-10 pb-8 border-b border-[#1a1a1a]/10">
                <div className="w-10 h-10 rounded-full bg-[#ff6b00] flex items-center justify-center text-white font-serif text-sm font-bold">
                  {activeDetail.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0a0a0a]">{activeDetail.author}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/50">
                    Filed Report
                  </p>
                </div>
              </div>

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