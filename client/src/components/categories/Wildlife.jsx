import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus, Minus, Play, Pause } from 'lucide-react';

const wildlifeNodes = [
  {
    title: "African Elephant",
    metrics: ["Infrasound", "Savanna Core", "Megafauna"],
    summary: "The world's largest land animal, capable of communicating through low-frequency vibrations that can travel several kilometers.",
    context: "African Elephants utilize specialized plantar pads and low-frequency vocalizations to transmit signals across vast geological structures. These seismic waves bypass dense scrub obstacles, allowing matriarchal herds to navigate optimal hydration points and coordinate evasive maneuvers during territorial resource shifts.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/254/1023/808/wildlife-grassland-savanna-elephants-wallpaper-preview.jpg"
  },
  {
    title: "Bengal Tiger",
    metrics: ["Apex Predator", "Stripe Matrix", "Riparian Hub"],
    summary: "Every tiger has a unique stripe pattern, much like a human fingerprint.",
    context: "The distinctive disruptive camouflage of the Bengal Tiger breaks up physical silhouettes across variable-light wetlands and dense grasslands. This specialized phenotypic coat adaptation allows for critical stealth calibration during low-light ambush maneuvers.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/787/852/43/tiger-animals-water-bengal-tigers-wallpaper-preview.jpg"
  },
  {
    title: "Giant Panda",
    metrics: ["Dietary Shift", "Montane Zones", "Specialized Thumb"],
    summary: "Although classified as carnivores, about 99% of their diet consists of bamboo.",
    context: "Giant Pandas present a highly specialized evolutionary paradox, maintaining a carnivoran digestive tract while subsisting on dense fibrous bamboo matrices. This requires near-continuous metabolic feeding cycles to extract adequate daily caloric requirements.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/527/140/976/panda-panda-bear-giant-panda-bear-wallpaper-preview.jpg"
  },
  {
    title: "Polar Bear",
    metrics: ["Arctic Thermal", "Transparent Fur", "Marine Mammal"],
    summary: "Their fur appears white, but each hair is actually transparent and helps trap heat.",
    context: "Polar Bear guard hairs function like fiber-optic conduits, funneling ambient solar radiation directly to their dark epidermal skin layer. This mechanism, coupled with thick subcutaneous adipose tissue, preserves high internal core temperatures within extreme sub-zero sea-ice matrices.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/510/498/352/antarctica-bear-polar-bear-wallpaper-preview.jpg"
  },
  {
    title: "Blue Whale",
    metrics: ["Baleen Grid", "Pelagic Biomass", "Acoustic Ranges"],
    summary: "The largest animal ever known to have lived on Earth, reaching lengths of over 30 meters (100 feet).",
    context: "Blue Whales navigate deep pelagic currents, acting as major carbon sinks and stabilizing krill population distributions. Their low-frequency acoustic vocalizations penetrate deep ocean sound channels, allowing cross-ocean transmission networks between dispersed biological cohorts.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/795/952/836/nature-animals-wildlife-whale-wallpaper-preview.jpg"
  },
  {
    title: "Mountain Gorilla",
    metrics: ["Social Pack", "High Altitude", "Genetic Parallel"],
    summary: "Shares approximately 98% of its DNA with humans and lives in close-knit family groups.",
    context: "Sustained within high-altitude volcanic corridors, Mountain Gorillas maintain complex social hierarchies governed by alpha silverbacks. Their tight community architecture maximizes group safety vectors and ensures collective territory protection.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/470/849/94/mountain-gorilla-silverback-rwanda-wallpaper-preview.jpg"
  },
  {
    title: "Snow Leopard",
    metrics: ["Steep Terrain", "Kinetic Leap", "High Altitudes"],
    summary: "Can leap up to six times its body length while navigating steep mountain terrain.",
    context: "The Snow Leopard is built for severe vertical environments, utilizing an elongated, muscular tail to balance kinetic energy during high-speed leaps across unstable scree slopes and icy cliffs.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/575/539/758/snow-leopards-animals-monochrome-leopard-animal-wallpaper-preview.jpg"
  },
  {
    title: "Komodo Dragon",
    metrics: ["Olfactory Node", "Island Core", "Ectothermic Peak"],
    summary: "The world's largest living lizard, capable of detecting prey from several kilometers away using its tongue.",
    context: "Komodo Dragons deploy their deeply forked tongues to sample airborne volatile organic compounds, funneling microscopic particles into specialized vomeronasal sensors to accurately track prey paths across isolated island topographies.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/855/700/902/reptiles-komodo-dragon-komodo-lizard-wallpaper-preview.jpg"
  },
  {
    title: "Red Kangaroo",
    metrics: ["Elastic Energy", "Arid Ecosystems", "Saltatorial Drive"],
    summary: "Can jump over 9 meters (30 feet) in a single leap and reach speeds exceeding 60 km/h (37 mph).",
    context: "The saltatorial locomotion of the Red Kangaroo relies heavily on massive energy-storing tendons in the hind legs. This structural elastic rebound mechanism minimizes metabolic oxygen consumption at high running velocities across harsh desert rangelands.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/329/617/111/boxing-red-kangaroos-sturt-national-park-australia-wallpaper-preview.jpg"
  },
  {
    title: "Bald Eagle",
    metrics: ["Visual Resolves", "Avian Apex", "Raptor Flight"],
    summary: "Possesses eyesight estimated to be four to five times sharper than that of humans.",
    context: "Bald Eagles utilize specialized dual-fovea retina layouts to preserve high visual acuity indices across extended ranges. This structural adaptation facilitates instantaneous distance calibration on moving marine prey targets during high-speed descent phases.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/502/601/257/eagle-flying-bald-eagle-nature-wallpaper-preview.jpg"
  },
  {
    title: "Emperor Penguin",
    metrics: ["Thermal Clust", "Cryo Breeding", "Avian Diver"],
    summary: "The only penguin species that breeds during the harsh Antarctic winter.",
    context: "Emperor Penguins weather extreme Antarctic blizzards through continuous, highly cooperative huddling dynamics that minimize metabolic heat loss. Their physiological adaptations permit long-duration diving profiles to extract rich marine energy assets.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/875/676/839/penguins-family-cub-chick-wallpaper-preview.jpg"
  },
  {
    title: "Green Sea Turtle",
    metrics: ["Magnetic Nav", "Pelagic Migration", "Natal Nesting"],
    summary: "Returns to the same beach where it hatched to lay its own eggs many years later.",
    context: "Green Sea Turtles cross entire ocean basins by calibrating their internal navigation vectors with Earth's geomagnetic field matrices. This precise homing impulse ensures safe arrival back at natal nesting beaches for reproduction cycles.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/994/963/683/5bd3922aab473-wallpaper-preview.jpg"
  },
  {
    title: "Bornean Orangutan",
    metrics: ["Arboreal Intel", "Tool Manipulation", "Canopy Ecology"],
    summary: "Highly intelligent and known to use sticks and leaves as tools in the wild.",
    context: "Bornean Orangutans retain high spatial memory nodes to map dynamic fruit distributions throughout dense tropical canopies. Their physical morphology is optimized for long-duration arboreal transit and tool modification workflows.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/540/504/4/mammals-animals-apes-orangutans-wallpaper-preview.jpg"
  },
  {
    title: "Cheetah",
    metrics: ["Kinetic Vector", "Fast Acceleration", "Biomechanical Core"],
    summary: "The fastest land animal, capable of reaching speeds of around 110 km/h (68 mph).",
    context: "The cheetah's physical architecture incorporates a highly flexible spine, semi-retractable claws acting as specialized spikes, and an enlarged respiratory system to drive rapid oxygen-rich blood delivery during high-velocity pursuit sequences.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/477/577/232/animals-leopard-wallpaper-preview.jpg"
  },
  {
    title: "Gray Wolf",
    metrics: ["Pack Matrix", "Complex Audials", "Coordinated Hunt"],
    summary: "Lives in highly organized packs with complex social structures and coordinated hunting strategies.",
    context: "Gray Wolves utilize sophisticated behavioral and vocal signaling vectors to enforce family hierarchies and coordinate multi-tiered tracking maneuvers. This social synergy allows them to regularly bring down large migratory ungulates.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/98/376/967/animals-wolf-snow-wallpaper-preview.jpg"
  },
  {
    title: "Red Fox",
    metrics: ["Adaptive Canid", "Acoustic Hunting", "Global Boundary"],
    summary: "Found across Europe, Asia, North America, and parts of North Africa, making it one of the most widespread wild canids.",
    context: "The Red Fox possesses exceptional behavioral adaptability, easily navigating urban developments and extreme wilderness areas alike. Their acute low-frequency auditory targeting helps pinpoint micro-rodents burrowed deep beneath snow layers.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/748/392/5/untitled-wallpaper-preview.jpg"
  },
  {
    title: "Giraffe",
    metrics: ["Vascular Hydro", "Canopy Access", "High Blood Pres"],
    summary: "Has the highest blood pressure of any land animal, enabling blood to reach its brain through its long neck.",
    context: "To counteract intense gravitational hydro-pressure, the giraffe's vascular framework features unique check-valves and complex network webs that prevent dangerous cerebral fluid surges when lowering its head to drink.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/719/427/611/african-savanna-giraffes-two-giraffe-wallpaper-preview.jpg"
  },
  {
    title: "Koala",
    metrics: ["Metabolic Red", "Eucalyptus Tox", "Arboreal Static"],
    summary: "Sleeps up to 20 hours a day to conserve energy from its low-nutrient eucalyptus diet.",
    context: "Koalas handle toxic eucalyptus foliage via a highly specialized liver detoxification assembly. Because this fibrous diet yields limited structural energy, the species maintains a low basal metabolic rate supported by static arboreal resting cycles.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/487/627/792/animals-koalas-wallpaper-preview.jpg"
  },
  {
    title: "Jaguar",
    metrics: ["Cranial Crush", "Riparian Apex", "Melanistic Vectors"],
    summary: "Has the strongest bite of any big cat relative to its size, allowing it to crush turtle shells and caiman skulls.",
    context: "Unlike typical big cats that target jugular pathways, the jaguar utilizes massive jaw biomechanics to pierce armor shields or cranial targets directly, cementing its role as an apex predator in dense, complex tropical river basins.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/359/756/846/crocodile-jaguar-hunting-mining-wallpaper-preview.jpg"
  },
  {
    title: "Humpback Whale",
    metrics: ["Acoustic Comms", "Marine Migration", "Bubble Netting"],
    summary: "Famous for complex songs that can last for hours and travel vast distances underwater.",
    context: "Humpback Whales execute cooperative foraging tactics like bubble-net feeding, where columns of micro-bubbles herd pelagic schooling fish upward. Their structural acoustic sequences evolve dynamically across migrating oceanic populations.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/598/885/248/whale-humpback-whale-animals-wallpaper-preview.jpg"
  }
];

export default function Wildlife() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoCycle, setAutoCycle] = useState(true);

  useEffect(() => {
    if (!autoCycle || isExpanded) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wildlifeNodes.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [autoCycle, isExpanded]);

  const handleNext = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev + 1) % wildlifeNodes.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev - 1 + wildlifeNodes.length) % wildlifeNodes.length);
  };

  const activeNode = wildlifeNodes[currentIndex];

  return (
    <div className="bg-[#FAFAF8] text-[#181A2A] min-h-screen py-12 px-4 md:px-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:ital,wght@0,400;0,600;0,700;1,500;1,600&display=swap');
        .font-display { font-family: 'Baloo 2', system-ui, sans-serif; }
        .font-body { font-family: 'Nunito', system-ui, sans-serif; }
      `}</style>

      {/* Page Header */}
      <header className="max-w-5xl mx-auto mb-7">
        <span className="inline-block bg-[#FFE7D6] text-[#E64A00] font-display font-bold text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
          Global Wildlife Field Index
        </span>
        <h1 className="font-display font-extrabold text-3xl md:text-5xl leading-[1.05] text-[#181A2A] mb-3">
          Creatures Built for<br className="hidden md:block" /> the Extremes
        </h1>
        <p className="font-body italic text-[#6B6F80] text-sm md:text-base max-w-xl leading-relaxed">
          From infrasound-singing elephants to bite-crushing jaguars, meet the
          species evolution engineered to survive almost anything.
        </p>
      </header>

      {/* Main Showcase Panel */}
      <main className="max-w-5xl mx-auto relative">
        <div className="relative bg-linear-to-brrom-[#FF7A1A] to-[#FF4400] rounded-[2.25rem] p-3 md:p-5 overflow-hidden shadow-[0_18px_45px_-15px_rgba(255,68,0,0.45)]">

          {/* Decorative soft shapes */}
          <div className="pointer-events-none absolute -top-8 -right-8 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <svg className="pointer-events-none absolute top-8 right-20 w-14 h-14 text-white/15 hidden md:block" viewBox="0 0 100 100" fill="none">
            <path d="M20 80 L80 20 M55 20 L80 20 L80 45" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
          </svg>
          <svg className="pointer-events-none absolute -bottom-6 -left-6 w-36 h-36 text-white/10 hidden md:block" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="60" cy="60" r="35" />
            <circle cx="120" cy="50" r="22" />
            <circle cx="140" cy="110" r="30" />
            <circle cx="70" cy="130" r="26" />
          </svg>

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5 items-stretch">

            {/* Image Frame */}
            <div className="md:col-span-7 relative rounded-[1.75rem] overflow-hidden min-h-65 md:min-h-100">
              <img
                src={activeNode.imageUrl}
                alt={activeNode.title}
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 bg-white text-[#E64A00] font-display font-bold text-xs px-4 py-1.5 rounded-full shadow-sm">
                {String(currentIndex + 1).padStart(2, '0')} / {String(wildlifeNodes.length).padStart(2, '0')}
              </span>
            </div>

            {/* Floating White Card */}
            <div className="md:col-span-5 bg-white rounded-[1.75rem] p-6 md:p-7 flex flex-col justify-between shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)]">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeNode.metrics.map((metric, i) => (
                    <span key={i} className="font-body font-semibold text-[10px] uppercase tracking-wide bg-[#FFF1E6] text-[#E64A00] border border-[#FFD9BC] px-3 py-1 rounded-full">
                      {metric}
                    </span>
                  ))}
                </div>

                <h2 className="font-display font-extrabold text-xl md:text-2xl text-[#181A2A] mb-2.5">
                  {activeNode.title}
                </h2>
                <p className="font-body italic text-[#6B6F80] text-sm leading-relaxed mb-3">
                  {activeNode.summary}
                </p>

                <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-72 opacity-100 border-t border-dashed border-[#EFE3DA] pt-3 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="font-body text-[#4B4F5F] text-sm leading-relaxed">
                    {activeNode.context}
                  </p>
                </div>
              </div>

              {/* Icon control cluster */}
              <div className="mt-6 pt-5 border-t border-[#F1EBE5]">
                <p className="font-body font-semibold text-[10px] uppercase tracking-wider text-[#A8ACB8] mb-3">
                  Browse the field index
                </p>
                <div className="grid grid-cols-4 gap-2.5">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous species"
                    className="aspect-square rounded-2xl border-2 border-[#FFD9BC] text-[#E64A00] hover:bg-[#FF4400] hover:border-[#FF4400] hover:text-white transition-colors flex items-center justify-center"
                  >
                    <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next species"
                    className="aspect-square rounded-2xl border-2 border-[#FFD9BC] text-[#E64A00] hover:bg-[#FF4400] hover:border-[#FF4400] hover:text-white transition-colors flex items-center justify-center"
                  >
                    <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-label={isExpanded ? "Show less detail" : "Show more detail"}
                    className="aspect-square rounded-2xl border-2 border-[#FFD9BC] text-[#E64A00] hover:bg-[#FF4400] hover:border-[#FF4400] hover:text-white transition-colors flex items-center justify-center"
                  >
                    {isExpanded ? <Minus className="w-5 h-5" strokeWidth={2.5} /> : <Plus className="w-5 h-5" strokeWidth={2.5} />}
                  </button>
                  <button
                    onClick={() => setAutoCycle(!autoCycle)}
                    aria-label={autoCycle ? "Pause auto-play" : "Resume auto-play"}
                    className="aspect-square rounded-2xl border-2 border-[#FFD9BC] text-[#E64A00] hover:bg-[#FF4400] hover:border-[#FF4400] hover:text-white transition-colors flex items-center justify-center"
                  >
                    {autoCycle ? <Pause className="w-5 h-5" strokeWidth={2.5} /> : <Play className="w-5 h-5" strokeWidth={2.5} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Dot Navigation Footer */}
      <footer className="max-w-5xl mx-auto mt-6 flex flex-wrap justify-between items-center gap-4 px-1">
        <div className="flex gap-2 overflow-x-auto max-w-full py-1">
          {wildlifeNodes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrentIndex(idx); setIsExpanded(false); }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-7 bg-[#FF4400]' : 'w-2.5 bg-[#FFD9BC] hover:bg-[#FFB98A]'
              }`}
              aria-label={`Go to ${wildlifeNodes[idx].title}`}
            />
          ))}
        </div>
        <span className="font-body font-semibold text-xs text-[#A8ACB8] bg-white border border-[#F1EBE5] px-3 py-1.5 rounded-full">
          {currentIndex + 1} of {wildlifeNodes.length} species
        </span>
      </footer>
    </div>
  );
}