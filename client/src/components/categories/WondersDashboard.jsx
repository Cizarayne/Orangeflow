import { wondersList } from "../../assets/resources/WondersList.js";

export default function WondersDashboard() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* Header section matching the editorial style */}
      <header className="max-w-5xl mx-auto px-6 pt-16 pb-8 border-b border-gray-100">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
          Remarkable Wonders
        </h1>
        <p className="text-lg text-gray-500 mt-3 font-normal max-w-2xl">
          A curated exploration beyond traditional boundaries spanning 60 of the
          world's most breathtaking natural landscapes and legendary human
          achievements.
        </p>
      </header>

      {/* Main layout matching layout alignment patterns in Screenshot 2026-07-06 103603.jpg */}
      <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 md:gap-20">
        {wondersList.map((wonder, index) => {
          // Alternates image placement on left/right just like the layout references
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Container with precise aspect-ratio matching the visual reference */}
              <div className="w-full md:w-1/2 overflow-hidden bg-gray-50 rounded-xs shadow-sm">
                <img
                  src={wonder.imageUrl}
                  alt={wonder.title}
                  loading="lazy"
                  className="w-full aspect-16/10 object-cover hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Text Block content styling hierarchy matching reference image */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                  {wonder.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-berkshire font-extrabold text-gray-900 leading-tight tracking-tight mb-3 hover:text-orange-600 transition-colors cursor-pointer">
                  {wonder.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600 font-normal leading-relaxed max-w-xl">
                  {wonder.description}
                </p>
              </div>
            </div>
          );
        })}
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-8 text-center text-xs text-gray-400 font-medium tracking-wide">
        &copy; {new Date().getFullYear()} WONDERS OF THE WORLD FEED. ALL RIGHTS
        RESERVED.
      </footer>
    </div>
  );
}
