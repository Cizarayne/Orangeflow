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
    <div className="mx-auto w-full max-w-7xl rounded-[28px] bg-[#FF5C00] p-4 text-white shadow-lg select-none sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
        <div
          className={`flex-1 transition-all duration-300 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <div className="mb-3 inline-flex items-center rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF5C00] shadow-sm sm:text-xs">
            Fact of the Day
          </div>

          <div className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 sm:text-xs">
            {currentFact.category}
          </div>

          <h3 className="text-xl font-bold leading-snug tracking-tight sm:text-2xl md:text-3xl">
            “{currentFact.fact}”
          </h3>

          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/70 italic">
            Source: {currentFact.source}
          </p>
        </div>

        <div className="flex w-full flex-row items-center justify-between gap-3 rounded-[22px] bg-white p-3 text-neutral-900 shadow-sm md:w-auto md:flex-col md:justify-center md:p-4 md:min-w-[150px]">
          <p className="hidden text-center text-sm font-bold tracking-tight text-neutral-700 md:block">
            Fact Controls
          </p>

          <div className="flex w-full justify-center gap-3 md:w-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 transition-all duration-200 hover:border-[#FF5C00] hover:text-[#FF5C00]"
              title={isPlaying ? "Pause rotation" : "Play rotation"}
            >
              {isPlaying ? (
                <Pause size={18} fill="currentColor" />
              ) : (
                <Play size={18} fill="currentColor" />
              )}
            </button>

            <button
              onClick={getRandomFact}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 transition-all duration-200 hover:border-[#FF5C00] hover:text-[#FF5C00] active:rotate-45"
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
    </div>
  );
}
