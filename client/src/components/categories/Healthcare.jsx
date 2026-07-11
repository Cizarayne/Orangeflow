import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const healthcareResources = [
  {
    title: "AI Is Revolutionizing Disease Diagnosis",
    source: "Capital Analytics Associates",
    summary: "Hospitals are increasingly adopting AI tools to help detect cancers, heart disease, and neurological disorders faster and with greater accuracy.",
    context: "By embedding neural networks within diagnostic radiology, providers are cutting down incidental miss rates by over 30%. Deep-learning diagnostic algorithms process full-body cross-sections in seconds, flagging critical anomalies for physicians to optimize triage prioritization under heavy patient volumes.",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Digital Health Records Improve Coordination",
    source: "Capital Analytics Associates",
    summary: "Healthcare providers continue integrating electronic health records to streamline communication and improve patient outcomes.",
    context: "Modern updates rely heavily on FHIR (Fast Healthcare Interoperability Resources) APIs to securely break down information walls between cross-county facilities, allowing seamless transfer of patient histories during emergency transfers or specialist referrals.",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Climate Change Challenges Healthcare Systems",
    source: "The Guardian",
    summary: "Rising temperatures and extreme weather events are forcing hospitals to strengthen emergency preparedness and climate resilience.",
    context: "Modern hospital masterplans are prioritizing clean microgrid fail-safes and localized clean air ventilation filters, guaranteeing critical intensive care units remain fully operational through municipal grid collapses and prolonged extreme environmental emergencies.",
    imageUrl: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Value-Based Care Models Show Promise",
    source: "Health Management Associates",
    summary: "Providers are shifting from fee-for-service models to value-based care, focusing on patient outcomes and cost efficiency.",
    context: "By aligning financial incentives with quality metrics, healthcare systems are incentivizing preventative care measures and chronic disease management strategies, ultimately reducing the overall burden on emergency departments.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "WHO Issues Alert on Counterfeit Cancer Medication",
    source: "World Health Organization",
    summary: "The World Health Organization recently warned healthcare providers about falsified oncology drugs circulating in several markets.",
    context: "The alert highlights specific batches of chemotherapy agents that contain sub-therapeutic levels of active ingredients, posing severe risks to patient safety. Regulatory bodies are increasing surveillance at ports of entry to intercept these dangerous shipments.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/984/388/60/3-d-abstraction-dna-genetic-wallpaper-preview.jpg"
  },
  {
    title: "Healthcare Leaders Focus on Affordability",
    source: "Health Management Associates",
    summary: "Policymakers and providers are exploring reforms to reduce costs while maintaining access and quality of care.",
    context: "State frameworks are looking into standardized biosimilar drug caps and centralized volume purchasing strategies to lower costs for chronic treatments, easing the financial strain on individuals managing long-term conditions.",
    imageUrl: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AI Benchmarks Improve Clinical Safety",
    source: "arXiv",
    summary: "New research benchmarks are helping evaluate how well AI agents perform complex healthcare tasks before real-world adoption.",
    context: "The new standard test sets challenge digital agents against layered, multi-condition medical scenarios, ensuring that AI diagnostic tools prioritize absolute accuracy and patient safety before they are certified for real-world hospital environments.",
    imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Global Healthcare Innovation Accelerates",
    source: "Reuters Events",
    summary: "Investment continues in biotechnology, medical robotics, diagnostics, and personalized medicine despite economic challenges.",
    context: "Capital is focusing on smart microsurgery instruments and point-of-care molecular diagnostic devices, accelerating the migration of complex treatments out of traditional hospitals and into local diagnostic clinics.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Ongoing Digital Transformation",
    source: "Capital Analytics Associates",
    summary: "Experts expect AI, connected medical devices, predictive analytics, and telehealth to continue reshaping how care is delivered.",
    context: "The integration of IoT-enabled wearables with hospital EHR systems is creating a continuous feedback loop, allowing physicians to monitor patient vitals in real-time and intervene before minor issues escalate into critical events.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Telemedicine Reshapes Patient Care",
    source: "Capital Analytics Associates",
    summary: "Virtual consultations and remote monitoring remain a major pillar of modern healthcare delivery.",
    context: "Post-pandemic regulations have solidified telehealth reimbursement rates, ensuring that rural and underserved populations can access specialist care without the burden of travel, significantly improving adherence to treatment plans.",
    imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Healthcare Faces Workforce Shortages",
    source: "Greater Geneva Bern area",
    summary: "Many countries are investing in recruitment, automation, and flexible staffing solutions to address shortages of doctors, nurses, and allied health professionals.",
    context: "To counteract record burnout rates, hospital networks are transitioning from classical rigid scheduling matrices to flexible algorithmic shift-matching platforms, matching localized care demands with automated floating nurse and physician networks.",
    imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AI Regulation for Medical Devices Advances",
    source: "Nelson Advisors",
    summary: "Health regulators are developing dedicated frameworks to ensure AI-powered medical devices are safe, effective, and transparent before widespread deployment.",
    context: "Unlike static hardware certifications, modern generative health algorithms evolve dynamically with new data. Regulatory watchdogs are introducing lifecycle baseline tracking to monitor model drift and eliminate diagnostic bias in real time.",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Precision Medicine Becomes Personalized",
    source: "Reuters",
    summary: "Advances in genomics and biomarker testing are allowing treatments to be tailored to individual patients, particularly in cancer care.",
    context: "Liquid biopsy arrays can now detect genetic oncology markers long before structural tumors form on conventional scans, enabling oncologists to construct custom immuno-oncology cocktails engineered around the patient's exact cell profile.",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Healthcare() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeDetail, setActiveDetail] = useState(null);

  // Layout limits display to 3 visible columns matching image reference viewport aspect
  const visibleCount = 3;
  const activeSlideIndex = Math.floor(startIndex / visibleCount);
  const totalDots = Math.ceil(healthcareResources.length / visibleCount);

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount >= healthcareResources.length ? 0 : prev + visibleCount));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - visibleCount < 0 ? healthcareResources.length - visibleCount : prev - visibleCount));
  };

  // Close the detail drawer on Escape, and lock body scroll while it's open
  useEffect(() => {
    if (!activeDetail) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveDetail(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeDetail]);

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .carousel-fade { animation: none; }
      `}</style>
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
                The Medical <em className="font-serif italic text-[#ff6b00]">Dispatch</em>
              </h1>
              <p className="text-sm md:text-base text-[#1a1a1a]/70 leading-relaxed max-w-xl">
                Our multi-disciplinary research squads compile clinical insight updates across public wellness networks, biometric developments, and deep medical automation intelligence to guide global decision makers.
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
                Clinical & Technical Services
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a]/50">
                Articles · 2026
              </span>
            </div>
          </div>
        </section>

        {/* 3-Column Editorial Grid */}
        <section className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 transition-all duration-500">
            {healthcareResources.slice(startIndex, startIndex + visibleCount).map((item, idx) => (
              <article
                key={idx}
                onClick={() => setActiveDetail(item)}
                className="group cursor-pointer flex flex-col gap-4"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-16/10 overflow-hidden bg-gray-200 mb-2">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-3 bg-[#ff6b00]" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#ff6b00]">
                      {item.source}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl font-medium leading-tight text-[#0a0a0a] group-hover:text-[#ff6b00] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="font-serif italic text-sm md:text-[15px] text-[#1a1a1a]/70 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  <div className="mt-2 pt-3 border-t border-[#1a1a1a]/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#1a1a1a]/50">
                      Read Full Dispatch
                    </span>
                    <span className="w-8 h-px bg-[#1a1a1a]/20 group-hover:w-12 group-hover:bg-[#ff6b00] transition-all duration-300" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-16 mb-8 border-t border-[#1a1a1a]/10 pt-6">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-[#ff6b00] transition-colors shadow-lg"
                aria-label="Previous items"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-[#ff6b00] transition-colors shadow-lg"
                aria-label="Next items"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalDots }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setStartIndex(idx * visibleCount)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlideIndex === idx ? "bg-[#ff6b00] w-8" : "bg-[#1a1a1a]/20 w-2 hover:bg-[#1a1a1a]/40"
                  }`}
                  aria-label={`Go to slide group ${idx + 1}`}
                />
              ))}
            </div>

            <span className="text-[11px] font-mono text-[#1a1a1a]/50 tracking-wider uppercase bg-white/50 px-3 py-1.5 border border-[#1a1a1a]/10 hidden sm:block">
              Showing {startIndex + 1}–{Math.min(startIndex + visibleCount, healthcareResources.length)} of {healthcareResources.length} Key Perspectives
            </span>
          </div>
        </section>

        {/* Sliding Interactive Context Drawer Modal Overlays */}
        {activeDetail && (
          <div className="fixed inset-0 z-50 flex justify-end bg-[#1a1a1a]/40 backdrop-blur-sm transition-opacity duration-300">
            {/* Modal clickout zone */}
            <div className="flex-1" onClick={() => setActiveDetail(null)} />
            
            {/* Main Context Panel Sheet */}
            <div className="w-full max-w-2xl bg-[#f6f4ef] h-full overflow-y-auto shadow-2xl p-8 md:p-12 flex flex-col relative">
              {/* Close Button */}
              <button
                onClick={() => setActiveDetail(null)}
                className="absolute top-8 right-8 w-10 h-10 rounded-full border border-[#1a1a1a]/20 flex items-center justify-center hover:bg-[#ff6b00] hover:text-white hover:border-[#ff6b00] transition-all"
              >
                
              </button>

              {/* Image in Modal */}
              <div className="w-full aspect-video overflow-hidden bg-gray-200 mb-8 mt-4">
                <img
                  src={activeDetail.imageUrl}
                  alt={activeDetail.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <span className="h-px w-3 bg-[#ff6b00]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#ff6b00]">
                    {activeDetail.source}
                  </span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-[#0a0a0a]">
                  {activeDetail.title}
                </h2>

                <p className="font-serif italic text-lg text-[#1a1a1a]/70 leading-relaxed">
                  {activeDetail.summary}
                </p>

                <div className="h-px w-full bg-[#1a1a1a]/10 my-4" />

                <div className="font-sans text-sm md:text-base text-[#1a1a1a]/80 leading-relaxed space-y-4">
                  {activeDetail.context.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#1a1a1a]/10 flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#1a1a1a] text-white px-8 py-3 text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#ff6b00] transition-colors">
                    Download PDF Brief
                  </button>
                  <button 
                    onClick={() => setActiveDetail(null)}
                    className="border border-[#1a1a1a]/20 text-[#1a1a1a] px-8 py-3 text-xs font-mono font-bold uppercase tracking-widest hover:border-[#1a1a1a] transition-colors"
                  >
                    Close Dispatch
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}