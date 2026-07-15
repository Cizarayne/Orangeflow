import FactWidget from "../components/FactWidget";
import WondersDashboard from "../components/categories/WondersDashboard";

export default function Explore() {
  return (
    <div className="px-4 py-6 md:px-8 lg:px-12">
      <div className="mb-6 rounded-2xl border border-orange-100 bg-orange-50/70 p-4 text-sm text-zinc-700 shadow-sm md:p-5">
        <p className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
          Discover something new today
        </p>
        <p className="text-lg text-gray-500 mt-3 font-normal max-w-2xl">
          Explore inspiring facts, hidden wonders, and curated topics that make
          learning feel fun and effortless.
        </p>
      </div>
      <FactWidget />
      <WondersDashboard />
    </div>
  );
}
