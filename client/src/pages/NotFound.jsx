import { Link } from "react-router-dom";
import { MapPinSearch } from "lucide-react"; // Replaced Compass with MapPinSearch[cite: 2]

export default function NotFound() {
  return (
    <main className="min-h-screen justify-center flex flex-col items-center px-5 py-8 bg-[#f5faff] text-[#131d23]">
      
      {/* Icon / Branding Accent - Added float animation */}
      <div className="flex items-center justify-center mb-6 text-[#ff6600] animate-bounce">
        <MapPinSearch size={80} strokeWidth={1.5} />
      </div>

      {/* Header Section - Increased max width & sizes */}
      <section className="text-center mb-8 w-full max-w-lg">
        <h1 className="font-sans text-9xl font-black text-[#131d23] mb-3 tracking-tight">
          4<span className="text-[#ff6600]">0</span>4
        </h1>
        <p className="font-sans text-2xl font-bold text-[#131d23] mb-2">
          Lost in the flow?
        </p>
        <p className="font-sans text-lg text-[#5e5e5e]">
          The page you are looking for doesn't exist or has been moved.
        </p>
      </section>

      {/* Card Container - Increased to max-w-lg with larger padding */}
      <div className="w-full max-w-lg bg-white p-10 rounded-2xl drop-shadow-md text-center flex flex-col gap-5">
        <p className="text-base text-[#5e5e5e]">
          Let's get you back to where things are moving smoothly.
        </p>

        {/* Action Button - Primary Orange */}
        <Link to="/dashboard" className="w-full">
          <button
            type="button"
            className="w-full h-14 bg-[#ff6600] text-white font-bold rounded-[10px] active:scale-[0.98] transition-all shadow-md hover:opacity-85 flex items-center justify-center gap-2"
          >
            Go to Dashboard
          </button>
        </Link>

        {/* Back to Home Button - Changed route to "/" and updated text */}
        <div className="text-center">
          <Link to="/" className="block w-full">
            <button 
              type="button"
              className="mt-0 w-full h-14 bg-black text-white font-bold rounded-[10px] active:scale-[0.98] transition-all shadow-md hover:opacity-85"
            >
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      <div className="h-12"></div>
    </main>
  );
}