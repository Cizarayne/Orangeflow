import { useState } from 'react';

const educationResources = [
  {
    title: "AI Adoption in Schools Accelerates Worldwide",
    source: "UNESCO",
    summary: "Schools and universities are rapidly integrating AI into teaching, assessment, and administration, with educators calling for better AI training and governance.",
    context: "A deep dive into recent institutional audits reveals that over 68% of secondary and higher education entities have deployed large language models for administrative automation or preliminary assessment grading. This rapid integration has caused significant friction between faculty boards and IT departments.\n\nEducators are voicing concerns regarding algorithmic plagiarism detection inaccuracies and structural threats to instructional workforce stability. UNESCO's current directives call for immediate, standardized ethical deployment playbooks to ensure machine-assisted evaluation techniques maintain academic integrity, data privacy, and transparency across diverse student cohorts.",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "UNESCO Promotes Safe and Inclusive AI in Education",
    source: "UNESCO",
    summary: "Global education leaders are working on frameworks to ensure AI enhances learning while protecting students' rights and privacy.",
    context: "The international collaborative framework focuses strictly on data residency and minor privacy protections within primary school networks. Under these newly proposed guidelines, educational technology providers are required to submit their neural models to independent third-party safety audits before deployment.\n\nThis system ensures that adaptive learning engines do not generate discriminatory learning pathways or create hidden predictive profiles that commercial tracking mechanisms could exploit. The ultimate objective is to transform public AI educational tools into transparent, strictly regulated civic infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Global Higher Education Undergoes Major Transformation",
    source: "UNESCO",
    summary: "UNESCO has released a roadmap addressing the rapid expansion of universities, digital learning, and international collaboration.",
    context: "With global university enrollment anticipated to scale dramatically over the coming decades, traditional brick-and-mortar campuses are encountering immense physical constraints. The freshly issued roadmap introduces systemic directives aimed at modernizing aging university accreditation matrices.\n\nBy leveraging global resource sharing, universal recognition of non-traditional certifications, and unified digital credit transfers, the blueprint allows student bodies to seamlessly assemble modular qualifications from multiple top-tier international institutions simultaneously, bypassing rigid regional enrollment bottlenecks.",
    imageUrl: "https://c1.wallpaperflare.com/preview/294/960/948/accomplishment-ceremony-education-graduation.jpg"
  },
  {
    title: "Vocational Education Gains Momentum Worldwide",
    source: "UNESCO",
    summary: "Countries are investing more in technical and vocational education to prepare students for skilled careers and reduce workforce shortages.",
    context: "Faced with severe industrial worker deficits, multiple state ministries are realigning secondary school funding toward technical training facilities. This tactical pivot integrates engineering, automation, and advanced manufacturing coursework directly into secondary graduation pathways.\n\nBy partnering with regional industrial syndicates, these institutions guarantee immediate employment pipelines, establishing an alternative career path that sidesteps the mounting tuition debt cycles associated with conventional four-year academic degrees.",
    imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "International Day of Education Focuses on Youth Leadership",
    source: "Geneva Global Hub",
    summary: "This year's theme emphasizes empowering young people to shape the future of education.",
    context: "The latest assembly has elevated youth representatives from purely consultative roles directly into structural advisory positions. Student leaders are now actively participating in redesigning regional school policies, allocating localized infrastructure funding, and evaluating the day-to-day efficacy of hybrid learning programs.\n\nThis shift challenges top-down policy generation, allowing the generation most impacted by digital transformations to explicitly dictate procurement requirements and mental health accommodations.",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Universities Expand Online and Hybrid Learning Environments",
    source: "UNESCO",
    summary: "Higher education institutions continue investing in flexible digital learning environments to reach more students globally.",
    context: "Legacy campus architectures are being rapidly retrofitted into dynamic broadcasting hubs. Universities are allocating substantial capital to high-fidelity audio-visual configurations and continuous edge-computing nodes to host interactive, remote research seminars.\n\nThis infrastructure investment allows institutions to engage remote international student populations who are unable to secure physical visas, stabilizing university balance sheets through expanded, boundary-free enrollment models.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AI Literacy Becomes a Core School Subject",
    source: "UNESCO",
    summary: "Education systems are increasingly teaching students how to use AI responsibly and critically.",
    context: "Recognizing that basic computer literacy is no longer sufficient for modern job markets, ministries of education are introducing mandatory algorithmic literacy frameworks. Students as young as twelve are being taught the fundamentals of machine training datasets, large-scale data manipulation, and neural pattern analysis.\n\nThe curriculum focuses heavily on critical evaluation, instructing students on how to identify AI-generated misinformation, bias patterns, and deepfake source materials to foster an analytical digital citizenry.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Research Security Becomes a Global Priority",
    source: "UMCS",
    summary: "Universities are strengthening policies to protect international research partnerships and sensitive technologies.",
    context: "Amid shifting geopolitical relationships, academic networks have become frequent targets for industrial and state-sponsored espionage. In response, leading global laboratories are enforcing zero-trust data access protocols on all shared cloud environments.\n\nResearch security matrices now require explicit clearance tracking for all international post-doctoral scholars accessing dual-use technology arrays, quantum engineering data, and biochemical patent sequences to prevent unauthorized technological leakage.",
    imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "World Congress of Education to Highlight Future Learning",
    source: "IIASA",
    summary: "Experts from around the world will meet in Helsinki to discuss innovation, technology, and sustainable education.",
    context: "The upcoming global delegation is set to establish new international benchmarks for primary and secondary infrastructure. Key focus areas include structural biophilic architecture, passive climate-control integration for extreme weather zones, and cognitive machine learning partnerships.\n\nPolicy architects and technology executives plan to use the summit to finalize open-source digital textbook standards to reduce economic barriers across developing public school districts.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Digital Learning Platforms Continue to Expand Rapidly",
    source: "UNESCO",
    summary: "Governments and universities are investing heavily in online education infrastructure to improve accessibility.",
    context: "The current phase of platform growth focuses on optimizing accessibility across regions with limited digital infrastructure. Engineers are prioritizing ultra-low-bandwidth, asynchronous mobile applications that function efficiently on older phone models.\n\nBy caching critical curriculum data locally on device storage, these systems allow rural and isolated student populations to complete accredited courses without requiring expensive, continuous broadband access.",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "India Integrates SWAYAM MOOCs into University Curricula",
    source: "The Times of India",
    summary: "Universities are being encouraged to formally include online courses for academic credit.",
    context: "This structural policy update represents a massive push toward decentralized higher education. Under the new guidelines, state universities can formally outsource up to 40% of their standard semester course packages to the centralized SWAYAM online portal.\n\nThis integration allows students in remote regional colleges to learn directly from leading national professors, significantly leveling institutional quality imbalances while maximizing resource allocation across crowded public campuses.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Malaysia Defends Its Growing Global University Reputation",
    source: "Taiwan News",
    summary: "Officials highlight improved international rankings and educational competitiveness.",
    context: "Malaysia's ministry of higher education is executing a coordinated strategy to establish the country as Southeast Asia's primary educational destination. Backed by targeted research grants and expanded cross-border satellite campus initiatives, local universities have climbed global performance indexes.\n\nThis structural reputational growth has driven a notable increase in international student applications, helping shield domestic universities from localized demographic birth-rate declines.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "International Journal Seeks More Education Researchers",
    source: "UNESCO Institute for Lifelong Learning",
    summary: "UNESCO's International Review of Education is expanding its global reviewer network.",
    context: "To counteract historical Western biases in peer-review pipelines, the publication is intentionally onboarding qualitative researchers from Latin America, Africa, and Central Asia. The expanded board aims to fast-track research documentation focused on adult literacy, community-led vocational models, and post-crisis educational recovery frameworks.\n\nThis open call serves to broaden global pedagogical discourse, providing global visibility to successful localized educational structures.",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AI-Powered Personalized Learning Continues to Improve Outcomes",
    source: "UNESCO",
    summary: "Adaptive learning platforms are helping teachers tailor lessons to individual student needs.",
    context: "Modern adaptive software layers track student engagement metrics, response latencies, and conceptual error patterns in real time. Rather than relying on uniform, standardized worksheets, the system automatically recalibrates question complexities for each student.\n\nThis continuous personalization prevents struggling students from falling behind while challenging advanced learners, freeing classroom instructors to focus on highly targeted, small-group conceptual interventions.",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Data Comics Show Promise as Educational Tools",
    source: "arXiv",
    summary: "New research suggests AI-assisted visual storytelling improves student understanding of complex topics.",
    context: "A recent cognitive science publication highlights that combining dense quantitative data arrays with graphic storytelling significantly lowers cognitive load metrics. By utilizing generative design engines to convert complex statistics and scientific abstracts into sequential visual blocks, schools have recorded a 34% increase in long-term concept retention.\n\nThis format bridges the gap between abstract algorithmic logic and intuitive visual processing, offering a powerful tool for neurodiverse classrooms.",
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Education Systems Focus on Digital Skills for Future Jobs",
    source: "UNESCO",
    summary: "Coding, cybersecurity, AI, and data science continue to become central parts of school curricula.",
    context: "Global educational masterplans are phasing out traditional administrative electives to make room for cybersecurity and basic database engineering labs. The revised targets treat network defense principles and structural code review as fundamental requirements, ensuring the upcoming workforce enters the labor market prepared for an increasingly complex digital landscape.",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Schools Adapt to Climate Change Impact",
    source: "The Irish Sun",
    summary: "Extreme heat is forcing schools in several countries to revise schedules and outdoor activities to protect students.",
    context: "Extended seasonal heatwaves are disrupting traditional academic calendar frameworks. Municipalities in highly affected zones are introducing adjusted 'early-shift' school timetables to complete intense instructional blocks before peak daily temperatures.\n\nConcurrently, school districts are auditing urban heat island indicators on properties, swapping asphalt play yards for shaded, permeable green covers to preserve baseline physiological safety.",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Global Education Forums Highlight Innovation Pathways",
    source: "Facebook",
    summary: "International conferences continue bringing together educators, policymakers, and technology leaders to shape the future of learning.",
    context: "The contemporary debate centers on breaking down the historical divide between public school administrations and corporate software engineering environments. Panelists are advocating for collaborative open-source sandboxes where teachers can directly test and refine software tools, preventing commercial entities from dictating pedagogical methods without academic oversight.",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "International Research Collaboration Continues to Grow",
    source: "UMCS",
    summary: "Universities are building stronger cross-border partnerships in science, technology, and education.",
    context: "By establishing shared, cloud-linked laboratory environments, research institutions are effectively pooling expensive instrumentation resources. This framework allows researchers based in resource-constrained regions to run complex simulations using high-performance compute clusters located overseas, democratizing the pace of global scientific discovery.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Education Funding Faces Challenges in Key Regions",
    source: "The Guardian",
    summary: "The cancellation of overseas education initiatives has sparked debate about global education aid priorities.",
    context: "Sudden fiscal pullbacks by major donor countries have left several international literacy and equity programs facing severe funding deficits. Policy analysts warn that dismantling these established support frameworks risks reversing a decade of progress in primary school retention rates across post-conflict zones.\n\nThis shift has ignited critical debates regarding the reliability of sovereign foreign aid versus the development of self-sustaining, community-funded education trusts.",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Education() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeDetail, setActiveDetail] = useState(null);
  const visibleCount = 3;
  const activeSlideIndex = Math.floor(startIndex / visibleCount);
  const totalDots = Math.ceil(educationResources.length / visibleCount);

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount >= educationResources.length ? 0 : prev + visibleCount));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - visibleCount < 0 ? educationResources.length - visibleCount : prev - visibleCount));
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
              The Educational <em className="font-serif italic text-[#ff6b00]">Dispatch</em>
            </h1>
            <p className="text-sm md:text-base text-[#1a1a1a]/70 leading-relaxed max-w-2xl">
              Twenty dispatches from the front lines of global pedagogy — tracing the arc of AI literacy mandates, vocational restructuring, cross-border university partnerships, and the quiet revolution of adaptive learning platforms.
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
          {educationResources.slice(startIndex, startIndex + visibleCount).map((item, idx) => (
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