import { 
  Earth, Cpu, Trophy, Landmark, Car, Handbag, Clapperboard, 
  GraduationCap, Microscope, HeartPulse, Factory, BriefcaseBusiness, 
  Coins, ChartNoAxesCombined, Bot, Rocket, Leaf, Plane, Utensils, 
  ScrollText, Dna, Building2, Zap, Sprout, House, Shield, PlaneTakeoff, Ship 
} from 'lucide-react';

const CategoriesData = [
  { name: "Countries", icon: <Earth className="w-4 h-4" /> },
  { name: "Wildlife", icon: <Earth className="w-4 h-4" /> }, // Swap to <PawPrint /> if needed
  { name: "Technology", icon: <Cpu className="w-4 h-4" /> },
  { name: "Sports", icon: <Trophy className="w-4 h-4" /> },
  { name: "World Heritage Sites", icon: <Landmark className="w-4 h-4" /> },
  { name: "Automobile", icon: <Car className="w-4 h-4" /> },
  { name: "Fashion", icon: <Handbag className="w-4 h-4" /> },
  { name: "Media & Entertainment", icon: <Clapperboard className="w-4 h-4" />},
  { name: "Education", icon: <GraduationCap className="w-4 h-4" /> },
  { name: "Science & Research", icon: <Microscope className="w-4 h-4" /> },
  { name: "Politics", icon: <Microscope className="w-4 h-4" /> }, 
  { name: "Healthcare", icon: <HeartPulse className="w-4 h-4" /> },
  { name: "Industrial & Logistics", icon: <Factory className="w-4 h-4" /> },
  { name: "Business", icon: <BriefcaseBusiness className="w-4 h-4" /> },
  { name: "Finance", icon: <Coins className="w-4 h-4" /> },
  { name: "Economy", icon: <ChartNoAxesCombined className="w-4 h-4" /> },
  { name: "Artificial Intelligence", icon: <Bot className="w-4 h-4" /> },
  { name: "Space & Astronomy", icon: <Rocket className="w-4 h-4" /> },
  { name: "Environment & Climate", icon: <Leaf className="w-4 h-4" /> },
  { name: "Travel & Tourism", icon: <Plane className="w-4 h-4" /> },
  { name: "Food & Cuisine", icon: <Utensils className="w-4 h-4" /> },
  { name: "History", icon: <ScrollText className="w-4 h-4" /> },
  { name: "Culture & Traditions", icon: <Dna className="w-4 h-4" /> },
  { name: "Architecture", icon: <Building2 className="w-4 h-4" /> },
  { name: "Energy", icon: <Zap className="w-4 h-4" /> },
  { name: "Agriculture", icon: <Sprout className="w-4 h-4" /> },
  { name: "Real Estate", icon: <House className="w-4 h-4" /> },
  { name: "Military & Defense", icon: <Shield className="w-4 h-4" /> },
  { name: "Aviation", icon: <PlaneTakeoff className="w-4 h-4" /> },
  { name: "Maritime & Shipping", icon: <Ship className="w-4 h-4" /> },
];

export default function CategoryGrid() {
  return (
    // White background div wrapping all elements seamlessly
    <div className="w-full bg-white shadow-sm border border-gray-100 rounded-2xl p-6">
      <div className="max-w-7xl mx-auto">
        {/* flex-wrap ensures buttons drop down to the next line dynamically */}
        <div className="flex flex-wrap gap-3 justify-start">
          {CategoriesData.map((category, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 text-gray-700 text-sm font-medium rounded-xl border border-gray-200 transition-all duration-200 active:scale-95"
            >
              <span className="text-gray-500">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}