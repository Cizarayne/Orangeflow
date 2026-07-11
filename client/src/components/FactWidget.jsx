import { useState, useEffect } from "react";
import { RefreshCw, Play, Pause } from "lucide-react";
import { worldFacts } from "../assets/resources/WorldFacts.js";

export default function FactWidget() {
  const [currentFact, setCurrentFact] = useState(worldFacts[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // Function to pull a random fact from the resource array, fading out
  // the old fact before swapping in the new one, then fading back in.
  const getRandomFact = () => {
    setIsVisible(false);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * worldFacts.length);
      setCurrentFact(worldFacts[randomIndex]);
      setIsVisible(true);
    }, 300); // matches the fade-out duration below
  };

  // Auto-scroll loop engine
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      getRandomFact();
    }, 6000); // Transitions exactly every 3 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full max-w-7xl mx-auto p-10 sm:p-12 bg-[#FF5C00] rounded-4xl text-white font-sans flex flex-col md:flex-row justify-between items-center gap-8 shadow-lg select-none">
      {/* Left Column: Text Content and Fact Details */}
      <div
        className={`flex-1 space-y-4 max-w-2xl transition-all duration-300 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="inline-block px-4 py-1.5 bg-white text-[#FF5C00] font-semibold text-xs uppercase tracking-wider rounded-full shadow-sm">
          {currentFact.category}
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight">
          "{currentFact.fact}"
        </h3>

        <p className="text-white/70 text-xs italic tracking-wide uppercase">
          Source: {currentFact.source}
        </p>
      </div>

      {/* Right Column: Interaction Action Block matching orangeflow layout */}
      <div className="w-full md:w-auto bg-white text-neutral-900 p-6 rounded-3xl flex flex-row md:flex-col items-center justify-center gap-4 min-w-45 shadow-sm">
        <p className="text-sm font-bold text-center hidden md:block tracking-tight text-neutral-700">
          Fact Controls
        </p>

        <div className="flex flex-row gap-3 w-full justify-center">
          {/* Pause / Play Toggle Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-800 hover:text-[#FF5C00] hover:border-[#FF5C00] bg-white transition-all duration-200"
            title={isPlaying ? "Pause rotation" : "Play rotation"}
          >
            {isPlaying ? (
              <Pause size={18} fill="currentColor" />
            ) : (
              <Play size={18} fill="currentColor" />
            )}
          </button>

          {/* Manual Force Regeneration Button */}
          <button
            onClick={getRandomFact}
            className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-800 hover:text-[#FF5C00] hover:border-[#FF5C00] bg-white transition-all duration-200 active:rotate-45"
            title="Generate new fact"
          >
            <RefreshCw
              size={18}
              className={isPlaying ? "animate-spin-slow" : ""}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
