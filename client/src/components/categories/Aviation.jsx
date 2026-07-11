import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { aviationBriefings } from "../../assets/resources/AviationInfo.js";

export default function Aviation() {
  const [selectedBrief, setSelectedBrief] = useState(null);

  useEffect(() => {
    if (!selectedBrief) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedBrief(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedBrief]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased py-16 px-4 sm:px-6 lg:px-8">
      {/* Editorial Content Header Block */}
      <header className="max-w-6xl mx-auto mb-16 border-b-4 border-gray-900 pb-8">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500 block mb-2">
          GLOBAL RECONNAISSANCE // INTEL REPORT
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
          The 2026 Aviation <br />
          Strategic Index
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl font-normal leading-relaxed">
          Twenty essential industry movements, technology integrations, and
          macro-financial trajectories shaping global aerospace infrastructure
          and airline operations.
        </p>
      </header>

      {/* Main Structural Feed Matching Screenshot 2026-07-06 142327.png Exactly */}
      <main className="max-w-6xl mx-auto flex flex-col gap-8">
        {aviationBriefings.map((brief, index) => (
          <div
            key={index}
            onClick={() => setSelectedBrief(brief)}
            className="bg-white p-8 md:p-12 shadow-xs border border-gray-100/80 rounded-xs flex flex-col md:flex-row md:items-start justify-between gap-6 hover:border-orange-500/30 transition-all duration-300 group cursor-pointer"
          >
            {/* Left Hand Text Layout Block */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 max-w-4xl">
              {/* Numeric Index Styling */}
              <span className="text-base font-mono font-bold text-orange-400 tracking-tight leading-none pt-1 min-w-7">
                {brief.num}
              </span>

              {/* Typography Structure */}
              <div className="flex flex-col">
                {/* Visual Label Tag Block */}
                <div className="mb-3">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase bg-gray-50 px-2.5 py-1 rounded-xs">
                    {brief.tag}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight leading-tight mb-3 uppercase group-hover:text-orange-500 transition-colors cursor-pointer">
                  {brief.title}
                </h2>

                {/* Content Description */}
                <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed">
                  {brief.description}
                </p>

                <span className="mt-4 text-[10px] font-mono font-bold uppercase tracking-widest text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read full analysis +
                </span>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Expanded Briefing Modal */}
      {selectedBrief && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedBrief(null);
          }}
          className="fixed inset-0 z-50 bg-gray-950/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.2s_ease-out]"
        >
          <style>{`
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes scaleIn {
              from { opacity: 0; transform: scale(0.96) translateY(8px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
            @media (prefers-reduced-motion: reduce) {
              .modal-scale-in { animation: none !important; }
            }
          `}</style>

          <div
            className="modal-scale-in bg-white w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xs relative p-8 md:p-12 animate-[scaleIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBrief(null)}
              aria-label="Close"
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <X size={18} className="text-gray-900" />
            </button>

            <div className="flex items-start gap-4 mb-2">
              <span className="text-base font-mono font-bold text-orange-400 tracking-tight leading-none pt-1">
                {selectedBrief.num}
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase bg-gray-50 px-2.5 py-1 rounded-xs">
                {selectedBrief.tag}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight mb-6 uppercase">
              {selectedBrief.title}
            </h2>

            <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed mb-6">
              {selectedBrief.description}
            </p>

            {selectedBrief.context && (
              <div className="border-t border-gray-100 pt-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-orange-500 block mb-3">
                  Why it matters
                </span>
                <p className="text-sm md:text-base text-gray-600 font-normal leading-relaxed">
                  {selectedBrief.context}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}