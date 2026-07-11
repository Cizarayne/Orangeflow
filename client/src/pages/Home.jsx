import { useState, useEffect, useRef } from "react";
import { FEATURED_SLIDES } from "../assets/resources/FeaturedSlides";
import { PORTFOLIO_ITEMS } from "../assets/resources/PortfoIioItems";
import { uncommonWords } from "../assets/resources/Wordoftheday";
import {
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Shuffle,
} from "lucide-react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Word of the Day — picks a random uncommon word, avoiding immediate repeats
  const getRandomWordIndex = (excludeIndex) => {
    if (uncommonWords.length <= 1) return 0;
    let next;
    do {
      next = Math.floor(Math.random() * uncommonWords.length);
    } while (next === excludeIndex);
    return next;
  };
  const [wordIndex, setWordIndex] = useState(() => getRandomWordIndex(-1));
  const [isWordPlaying, setIsWordPlaying] = useState(true);

  // Auto-generate a new word every 5 seconds while playing
  useEffect(() => {
    if (!isWordPlaying) return;
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => getRandomWordIndex(prev));
    }, 5000);
    return () => clearInterval(wordInterval);
  }, [isWordPlaying]);

  const handleRecycleWord = () => {
    setWordIndex((prev) => getRandomWordIndex(prev));
  };

  const activeWord = uncommonWords[wordIndex];

  // Auto-advance slider loops tracking Gensler's marquee behavior
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % FEATURED_SLIDES.length);
      }, 8000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  // Handle slide loading side effects safely (Fixed: Added dependency array to stop infinite rendering loops)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [activeIndex, isPlaying]);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? FEATURED_SLIDES.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % FEATURED_SLIDES.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased selection:bg-orange-500 selection:text-white text-slate-800">
      {/* HERO VIDEO SLIDER */}
      <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <video
            ref={videoRef}
            src={FEATURED_SLIDES[activeIndex].link}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
        </div>

        {/* CONTAINER DIV WITH TARGET DESCRIPTIONS */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pb-28 md:pb-36 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end text-white">
          <div className="lg:col-span-8 flex flex-col items-start">
            <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Featured Case
            </span>
            <h1 className="text-2xl md:text-5xl font-black tracking-tight leading-tight uppercase max-w-4xl transition-all duration-300">
              {FEATURED_SLIDES[activeIndex].top}
            </h1>
            <p className="mt-4 text-slate-200 text-sm md:text-base max-w-2xl font-light leading-relaxed">
              {FEATURED_SLIDES[activeIndex].bottom}
            </p>
          </div>

          <div className="lg:col-span-4 flex items-center lg:justify-end gap-3 mt-6 lg:mt-0">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-xl transition-all active:scale-95 border border-white/10"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-xl transition-all active:scale-95 border border-white/10"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <div className="h-8 w-px bg-white/20 mx-1" />
            <button
              onClick={handlePrev}
              className="p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-xl transition-all active:scale-95 border border-white/10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all active:scale-95 shadow-lg"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* FOOTER STEP NAVIGATION (Updated to grid-cols-5 md:grid-cols-10 for perfect multi-slide balance) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 w-full border-t border-white/10 bg-black/30 backdrop-blur-xs">
          <div className="max-w-7xl mx-auto grid grid-cols-5 lg:grid-cols-10 text-white text-[10px] uppercase font-bold tracking-wider">
            {FEATURED_SLIDES.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`py-4 px-2 text-center border-r border-white/10 transition-all flex flex-col items-center justify-center gap-1 relative overflow-hidden ${
                  idx === activeIndex
                    ? "bg-white/10 text-orange-400"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span className="font-mono">0{idx + 1}</span>
                <span className="truncate hidden xl:inline max-w-22.5 text-[9px] font-normal tracking-normal">
                  {slide.top}
                </span>

                {idx === activeIndex && (
                  <div className="absolute bottom-0 left-0 h-1 bg-orange-500 w-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CORE BODY CONTAINER */}
      <main
        id="about"
        className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col gap-24"
      >
        {/* DESIGN PHILOSOPHY STATEMENT */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-200 pb-16">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Design Philosophy
            </h2>
            <p className="mt-2 text-2xl md:text-3xl  font-extrabold tracking-tight text-slate-900 uppercase">
              Shaping Future Spaces & Digital Realities
            </p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-slate-900  text-base md:text-lg leading-relaxed max-w-3xl font-normal">
              Mirroring modern collaborative layout systems, our mandate tracks
              macro market transformations. Whether analyzing automated
              technical networks, vehicular structural flows at a city junction,
              or immersive user interfaces, we optimize touchpoints across the
              human environment.
            </p>
          </div>
        </section>

        {/* WORD OF THE DAY */}
        <section>
          <div className="relative bg-black rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="flex-1 min-w-0">
                <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
                  Word of the Day
                </span>

                <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white capitalize transition-all duration-300">
                  {activeWord.word}
                </h3>
                <p className="mt-3 text-slate-300 font-fugaz text-base md:text-lg font-normal leading-relaxed max-w-2xl">
                  {activeWord.meaning}
                </p>
                <p className="mt-4 border-l-4 border-orange-500 pl-4 text-slate-400 text-sm md:text-base italic leading-relaxed max-w-2xl">
                  "{activeWord.sentence}"
                </p>
              </div>

              {/* Controls */}
              <div className="flex md:flex-col gap-3 shrink-0">
                <button
                  onClick={() => setIsWordPlaying(!isWordPlaying)}
                  className="p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-xl transition-all active:scale-95 border border-white/10"
                  aria-label={isWordPlaying ? "Pause word cycling" : "Resume word cycling"}
                >
                  {isWordPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button
                  onClick={handleRecycleWord}
                  className="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all active:scale-95 shadow-lg"
                  aria-label="Generate a new word"
                >
                  <Shuffle size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE GALLERY SECTION WITH OVERLAY EFFECT DIV CONTAINER */}
        <section id="work" className="flex flex-col gap-8">
          <div>
            <p className="text-xl font-extrabold text-slate-900 uppercase tracking-tight mt-1">
              Global Media Portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <div
                key={index}
                className="group relative bg-[#131d23] h-96 rounded-2xl overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <video
                  src={item.link}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-300"
                  muted
                  loop
                  playsInline
                  autoPlay
                />

                {/* MOUSE OVERLAY TRIGGER EFFECT DIV */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-black/40 p-6 flex flex-col justify-between z-10">
                  <div className="text-xs font-bold tracking-wider text-white uppercase drop-shadow-xs">
                    {item.top}
                  </div>

                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-slate-900/90 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.bottom}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase text-white tracking-wider group-hover:text-orange-500 transition-colors">
                      View Case Study <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}