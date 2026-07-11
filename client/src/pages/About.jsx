import { useNavigate } from 'react-router-dom';
import { 
  Parasol, 
  HeartPulse, 
  Cpu, 
  Helicopter, 
  Clapperboard, 
  Handbag, 
  CloudMoon, 
  Brain,
  BriefcaseBusiness
} from 'lucide-react';

export default function About() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; 

    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Accent Bar */}
      <div className="h-2" />

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-6 py-20 grow flex flex-col justify-center">
        
      
<section className="w-full bg-linear-to-br from-orange-500 to-orange-600 rounded-3xl shadow-xl overflow-hidden relative p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 min-h-72">
          {/* Left Layout Data */}
         
  {/* Header / Brand Section */}
        <header className="mb-12 text-center md:text-left">
          <div className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Welcome to Orangefow
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            About <span className="text-white">us</span>
          </h1>
          <p className="font-Philosopher mt-6 text-xl text-white italic leading-relaxed max-w-3xl">
            Orangefow is a vibrant mini-blog hub where curiosity meets clarity. We distill the noise of modern living into digestible, insightful posts across lifestyle, tech, science, healthcare, transportation, and beyond.
          </p>
        </header>
          {/* Right Layout Decorative Vector */}
          <div className="hidden md:flex relative w-48 h-48 shrink-0 items-center justify-center opacity-20 pointer-events-none select-none">
            <span className="text-[100px] font-black font-mono leading-none tracking-tighter text-white">
              -ˋˏ ༻𖤓༺ ˎˊ-
            </span>
          </div>
        </section>
        <hr className="border-slate-200 my-4" />

        {/* Categories Grid - 9 Items creating a flawless 3x3 layout on large displays */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          
          {/* Lifestyle */}
          <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ff6600] mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
              <Parasol size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Lifestyle</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Curated breakdowns on mindful habits, personal productivity frameworks, and sustainable digital wellness strategies to help you slow down in a fast-paced digital world.
            </p>
          </div>

          {/* Tech & Science */}
          <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ff6600] mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
              <Cpu size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Tech & Science</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Demystifying complex breakthroughs, scientific frameworks, and engineering milestones. We translate industry jargon into clean, understandable human breakthroughs.
            </p>
          </div>

          {/* Healthcare */}
          <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ff6600] mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
              <HeartPulse size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Healthcare</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Transparent perspectives on preventative physical health, systemic medical developments, and functional wellness techniques supported by peer-reviewed modern research.
            </p>
          </div>

          {/* Transportation */}
          <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ff6600] mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
              <Helicopter size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Transportation</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Charting how we navigate across land and air. From green electric vehicles and urban transit infrastructure optimization to the next horizons of advanced aviation logistics.
            </p>
          </div>

          {/* Entertainment */}
          <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ff6600] mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
              <Clapperboard size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Entertainment</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Deep-dives into cinematic narratives, trends shaping streaming models, digital media philosophies, and essential recommendations for the casual critic or pop-culture enthusiast.
            </p>
          </div>

          {/* Fashion */}
          <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ff6600] mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
              <Handbag size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Fashion</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Exploring aesthetics at the intersection of functionality. Tracking sustainable textiles, streetwear expressions, and cultural stylistic updates without the gatekeeping filter.
            </p>
          </div>

          {/* Weather */}
          <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ff6600] mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
              <CloudMoon size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Weather</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Answering meteorological patterns and shifts. Unpacking microclimates, changing global conditions, and real-world environmental alerts impacting day-to-day community spaces.
            </p>
          </div>

          {/* Artificial Intelligence */}
          <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ff6600] mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
              <Brain size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Artificial Intelligence</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Navigating machine intelligence, automation frameworks, neural model advancements, and the critical ethical questions determining how AI restructures everyday workspace tools.
            </p>
          </div>

          {/* NEW: Business */}
          <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ff6600] mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
              <BriefcaseBusiness size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Business</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Unpacking shifting global markets, macro economic trends, start-up operational models, and strategic entrepreneurship guides to navigate modern financial landscapes.
            </p>
          </div>

        </section>

        <hr className="border-slate-200 my-4" />

        {/* Conclusion & Call to Action */}
        <footer className="mt-8 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-lg">
            <p className="text-slate-700 italic font-medium text-lg font-Philosopher">
              Think of us as your daily mental espresso: smart, smooth, and with a hint of zest. No fluff, just fresh perspectives to fuel your day.
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-orange-500 flex items-center justify-center md:justify-start gap-2">
              Live smarter. Move forward. Think orangefow.
            </p>
          </div>

          {/* Black Get Started Button */}
          <div className="shrink-0">
            <button
              onClick={handleGetStarted}
              className="w-full md:w-auto px-8 py-4 bg-slate-950 text-white font-semibold rounded-xl shadow-lg hover:bg-slate-800 active:scale-98 transition-all duration-200 tracking-wide text-sm"
            >
              Get Started
            </button>
          </div>
        </footer>

      </main>

      {/* Micro Footer Accent */}
      <div className="py-6 text-center text-xs text-slate-400 border-t border-slate-200/50">
        &copy; {new Date().getFullYear()} Orangefow. All rights reserved.
      </div>
    </div>
  );
};
