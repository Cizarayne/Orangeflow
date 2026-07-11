import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const autoResources = [
  {
    title: "Nissan GT-R Propulsion Systems Break Thermal Efficiency Benchmarks",
    source: "Automotive Engineering International",
    summary:
      "Next-generation twin-turbocharged platforms implement specialized cylinder-bore coatings to achieve unprecedented thermal efficiency ratios in high-output track environments.",
    context:
      "The updated powertrain architecture introduces an advanced plasma-sprayed bore film that minimizes frictional drag across internal piston sleeves.\n\nBy optimizing thermal dissipation vectors along the cylinder wall, engineering nodes have systematically eliminated hot spots, allowing higher baseline ignition pressures without triggering pre-detonation cycles. This directly yields a tighter, more uniform torque profile across high-velocity cornering states.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/956/868/1012/car-nissan-race-cars-road-wallpaper-preview.jpg",
    author: "Blake Star",
    role: "Creator, performance.com",
    rating: 5,
  },
  {
    title:
      "Lamborghini Aventador Geometry Refined via Active Vector Aerodynamics",
    source: "Supercar Dynamics Quarterly",
    summary:
      "Structural composite body configurations leverage real-time airflow redirection channels to maximize downforce matrices during high-speed directional changes.",
    context:
      "The computational fluid dynamics grid integrates automated variable-actuation micro-flaps embedded within the rear quarter paneling arrays.\n\nWhen onboard telemetry registers high lateral G-forces, these aerodynamic nodes modulate airflow across the underbody diffuser. This establishes localized low-pressure pockets that pull the carbon chassis closer to the asphalt, ensuring high mechanical grip without increasing drag coefficients.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/323/372/925/lamborghini-car-lamborghini-aventador-vehicle-wallpaper-preview.jpg",
    author: "David Gilmore",
    role: "Creator, supercar.com",
    rating: 5,
  },
  {
    title: "BMW M4 Monocoque Optimization Integrates High-Stiffness Composites",
    source: "Bavarian Performance Analytics",
    summary:
      "Engineers deploy hybrid carbon-fiber reinforced plastics across the structural chassis core to enhance torsional rigidity while lowering total unladen mass.",
    context:
      "The structural architecture focuses weight reduction targets around the vehicle's upper roof assembly and central driveshaft tunnel corridor.\n\nBy lowering the absolute center of gravity, this localized composite integration reduces body-roll angles by measured double-digit margins. The resulting geometric platform responds with immediate steering precision under intense racetrack deceleration loads.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/392/133/116/car-bmw-bmw-m4-wallpaper-preview.jpg",
    author: "Gerard White",
    role: "Creator, bmwtech.com",
    rating: 5,
  },
  {
    title: "Mercedes-Benz Luxury Coupes Advance Neural Damping Frameworks",
    source: "Stuttgart Tech Briefings",
    summary:
      "Algorithmic chassis control systems scan road topography metrics milliseconds ahead of tire contact to continuously modulate hydraulic pressure values.",
    context:
      "Stereoscopic optical sensors positioned behind the windshield feed elevation metadata directly into an active predictive dampening matrix.\n\nThe suspension nodes adaptively alter wheel travel properties to isolate the passenger cabin from multi-frequency surface vibrations. This provides near-instantaneous leveling transitions across variable asphalt textures without degrading dynamic high-speed vehicle stability.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/29/1013/318/black-car-car-mercedes-benz-mercedes-wallpaper-preview.jpg",
    author: "Gourmet Delight",
    role: "Creator, luxury.com",
    rating: 5,
  },
  {
    title: "Dodge Challenger Powertrains Advance High-Volume Supercharging",
    source: "Hemispherical Power Lab",
    summary:
      "Forced-induction architectures transition to larger twin-screw displacement configurations, optimizing internal charge-air cooling layouts.",
    context:
      "To feed high displacement chambers safely, engineering teams re-engineered the intake plenum to integrate a dual-stage liquid-to-air intercooler module.\n\nThis drop in induction temperature spikes ambient air density inside the combustion chamber, maintaining peak volumetric efficiency curves even under sustained high-heat drag-strip operations.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/595/739/604/car-vehicle-outdoors-dodge-challenger-wallpaper-preview.jpg",
    author: "Sarah Mitchell",
    role: "Creator, muscle.com",
    rating: 5,
  },
  {
    title: "Porsche 911 Mechanical Layout Refines Rear-Engine Balance Metrics",
    source: "Weissach Development Logs",
    summary:
      "Evolutionary structural adjustments alter powertrain engine mounting configurations to neutralize historical pendular weight reactions.",
    context:
      "By shifting the entire transmission and internal combustion layout forward along the horizontal axis, designers optimized the polar moment of inertia.\n\nThis structural modification enables more aggressive throttle entry sequencing out of low-speed apexes, balancing rear-end traction dynamics with neutral mid-corner behavior.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/390/369/293/photography-car-porsche-911-carrera-s-porsche-wallpaper-preview.jpg",
    author: "Michael Chen",
    role: "Creator, porsche.com",
    rating: 5,
  },
  {
    title:
      "Bugatti Chiron Quad-Turbo Assemblies Standardize Carbon-Titanium Ducts",
    source: "Molsheim Engineering Records",
    summary:
      "Aero-space grade material deployment across internal exhaust paths prevents structural deformation under extreme kinetic thermal stress.",
    context:
      "The quad-turbocharger exhaust paths generate thermal states exceeding extreme manufacturing parameters. To prevent housing expansion, the structural paths use 3D-printed titanium matrices over-braided with continuous carbon fibers.\n\nThis specialized thermal shield maintains internal flow velocities, minimizing turbo lag across the high-output performance band.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/906/926/543/bugatti-chiron-sport-bugatti-supercars-car-wallpaper-preview.jpg",
    author: "Bugatti",
    role: "Creator, bugatti.com",
    rating: 5,
  },
  {
    title:
      "Mercedes-Benz G-Class Architecture Audits Multi-Link Offroad Geometry",
    source: "Graz Technical Insights",
    summary:
      "Heavy-duty boxed ladder frames receive structural structural reinforcements to support high-articulation portal axle configurations.",
    context:
      "The off-road drivetrain utilizes electronic locking differentials combined with updated long-travel trailing arms.\n\nThis arrangement ensures maximum vertical wheel displacement over extreme terrain irregularities while protecting structural drive axles from torsional fatigue during high-torque boulder climbing routines.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/563/755/792/mercedes-benz-mercedes-benz-g63-black-car-car-mercedes-benz-g-class-hd-wallpaper-preview.jpg",
    author: "Mercedes-Benz",
    role: "Creator, mercedes.com",
    rating: 5,
  },
  {
    title: "High-Performance Endurance Chassis Validate Downforce Optimization",
    source: "LeMans Telemetry Review",
    summary:
      "Closed-cockpit race platforms adopt passive low-drag vortex generators to clean detachment boundary layers across the upper trailing spine.",
    context:
      "Wind tunnel telemetry shows that keeping airflow attached to the rear decklid longer minimizes the low-pressure wake zone directly behind the car.\n\nThis reduction in aerodynamic drag raises overall straight-line top velocity metrics while maximizing rear wing efficiency fields.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/459/419/761/car-luxury-vehicle-race-car-performance-car-wallpaper-preview.jpg",
    author: "LeMans Telemetry Review",
    role: "Creator, lemans.com",
    rating: 5,
  },
  {
    title:
      "Vintage Archival Restoration Adopts Advanced Cold-Chemical Metal Sealing",
    source: "Classic Motoring Gazette",
    summary:
      "Heritage preservation standardizes non-invasive protective coats to isolate historic molecular alloys from oxidation vectors.",
    context:
      "Traditional solvent finishes degrade rare vintage paneling via chemical interactions. Modern conservation groups deploy low-viscosity fluoropolymer matrices that bond directly to bare metal at room temperature.\n\nThis creates a microscopically thin barrier against moisture and atmospheric contaminants without changing original structural paint applications.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/864/603/582/blue-car-car-vintage-car-automotive-design-wallpaper-preview.jpg",
    author: "Classic Motoring Gazette",
    role: "Creator, classicmotoring.com",
    rating: 5,
  },
  {
    title:
      "Ferrari Haute-Performance powertrains Advance Dual-Clutch Shift Cadences",
    source: "Maranello Trackside Feed",
    summary:
      "Electro-hydraulic transmission software shortens gear-engagement sequencing down to near-instantaneous millisecond actuation baselines.",
    context:
      "The updated transmission mapping tracks throttle positioning data alongside active steering input angles. By anticipating the driver's next shifts, the computer pre-stages the next matching gear tier.\n\nThis keeps power delivery continuous across intense racetrack acceleration runs, minimizing torque loss during fast upshifts.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/150/745/283/car-ferrari-red-car-luxury-vehicle-wallpaper-preview.jpg",
    author: "Ferrari",
    role: "Creator, ferrari.com",
    rating: 5,
  },
  {
    title:
      "Ford Mustang Mechanical Layout Optimizes High-RPM Valvetrain Trajectories",
    source: "Detroit Powertrain Labs",
    summary:
      "Naturally aspirated dual-overhead-cam configurations integrate lightweight valvetrain components to safely scale operating thresholds.",
    context:
      "Replacing heavy steel valvetrain components with low-inertia titanium alloys prevents valve float at extreme high engine speeds.\n\nThis allows engine tuners to alter combustion durations and lift profiles, resulting in sustained top-end horsepower scaling without compromising mechanical components.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/209/682/379/ford-mustang-boss-302-wallpaper-preview.jpg",
    author: "Ford",
    role: "Creator, ford.com",
    rating: 5,
  },
  {
    title:
      "Honda NSX Hybrid Electric Layout Refines Torque-Vectoring Hub Arrays",
    source: "Suzuka Electro-Mechanical Review",
    summary:
      "Front-mounted multi-motor assemblies deliver independent rotational torque values to extract razor-sharp yaw rates during cornering.",
    context:
      "Instead of relying solely on physical brake dragging to pivot the car into tight turns, the front electric motors apply positive drive force to the outer tire while using regenerative drag on the inner corner.\n\nThis dynamic adjustments pull the front tracking line directly toward the apex, mitigating understeer before mechanical slip begins.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/183/72/28/honda-nsx-wallpaper-preview.jpg",
    author: "Suzuka Electro-Mechanical Review",
    role: "Creator, suzuka.com",
    rating: 5,
  },
  {
    title:
      "Audi RS7 Sportback Platforms Deploy Dynamic All-Wheel Steering Matrix",
    source: "Ingolstadt Chassis Intelligence",
    summary:
      "Electromechanical actuators turn rear wheel toe values dynamically to optimize high-speed highway tracking and low-speed urban turning circles.",
    context:
      "At low speeds, the rear tracking actuators counter-steer up to five degrees relative to the front axle, shrinking the vehicle's turning arc.\n\nWhen highway cruise speeds are reached, the system pivots the rear wheels in phase with the front, allowing flat lane changes that preserve passenger comfort.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/731/41/144/audi-rs7-car-wallpaper-preview.jpg",
    author: "Ingolstadt Chassis Intelligence",
    role: "Creator, ingolstadt.com",
    rating: 5,
  },
  {
    title:
      "Lamborghini Urus Active Anti-Roll Bars Stabilize High-Chassis Inertia",
    source: "Sant'Agata Vehicle Dynamics",
    summary:
      "48-volt electromechanical decoupling units counter body roll forces under cornering loads while preserving off-road wheel travel parameters.",
    context:
      "The high-voltage active anti-roll system applies up to 1,200 Newton-meters of counter-torque directly across the stabilizer bars within milliseconds of corner entry.\n\nThis keeps the tall utility cabin flat during aggressive canyon driving, yet automatically decouples the bars off-road to allow maximum suspension articulation over broken terrain.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/914/835/625/lamborghini-lamborghini-urus-car-luxury-car-red-car-hd-wallpaper-preview.jpg",
    author: "Sant'Agata Vehicle Dynamics",
    role: "Creator, santagata.com",
    rating: 5,
  },
];

export default function AutoMobile() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeDetail, setActiveDetail] = useState(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const visibleCount = 4;

  const activeSlideIndex = Math.floor(startIndex / visibleCount);
  const totalDots = Math.ceil(autoResources.length / visibleCount);
  const visibleItems = autoResources.slice(
    startIndex,
    startIndex + visibleCount,
  );

  useEffect(() => {
    if (!activeDetail) return;

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;
      if (isImageExpanded) {
        setIsImageExpanded(false);
        return;
      }
      setActiveDetail(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeDetail, isImageExpanded]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!activeDetail) setIsImageExpanded(false);
  }, [activeDetail]);

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= autoResources.length ? 0 : prev + visibleCount,
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - visibleCount < 0
        ? autoResources.length - visibleCount
        : prev - visibleCount,
    );
  };


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-orange-500 selection:text-white">
      <style>{`
        .orangeflow-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(249, 115, 22, 0.65) rgba(226, 232, 240, 0.95);
        }

        .orangeflow-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .orangeflow-scrollbar::-webkit-scrollbar-track {
          background: rgba(241, 245, 249, 0.95);
          border-radius: 999px;
        }

        .orangeflow-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.85);
          border-radius: 999px;
          border: 2px solid rgba(241, 245, 249, 0.95);
        }

        .orangeflow-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 1);
        }
      `}</style>
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="border-b border-slate-200 pb-8">
          <div className="flex flex-col gap-4">
            <div className="max-w-4xl">
              <span className="block text-xs font-mono font-bold uppercase tracking-[0.28em] text-orange-500">
                Automotive Systems
              </span>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                2026 Automobile Performance Index
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition-colors hover:border-orange-500 hover:text-orange-500"
                aria-label="Previous"
              >
                <ChevronLeft size={18} strokeWidth={2} />
              </button>
              <button
                onClick={handleNext}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white transition-colors hover:bg-orange-600"
                aria-label="Next"
              >
                <ChevronRight size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
        </header>

        <main className="mt-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {visibleItems.map((item, idx) => (
              <button
                key={`${item.title}-${idx}`}
                onClick={() => setActiveDetail(item)}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition-all duration-200 hover:border-orange-300"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-base font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-orange-500">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.summary}
                  </p>
                  <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400">
                    {item.source}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: totalDots }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx * visibleCount)}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  activeSlideIndex === idx
                    ? "w-8 bg-orange-500"
                    : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </main>

        {activeDetail && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) setActiveDetail(null);
            }}
          >
            <div className="orangeflow-scrollbar relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-xl">
              <button
                onClick={() => setActiveDetail(null)}
                aria-label="Close detail panel"
                className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200"
              >
                <X size={16} strokeWidth={2} />
              </button>

              <button
                type="button"
                onClick={() => setIsImageExpanded(true)}
                className="relative aspect-video overflow-hidden cursor-zoom-in"
                aria-label="View full image"
              >
                <img
                  src={activeDetail.imageUrl}
                  alt={activeDetail.title}
                  className="h-full w-full object-cover"
                />
              </button>

              <div className="p-6 sm:p-8">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-orange-500">
                  {activeDetail.source}
                </p>
                <h4 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {activeDetail.title}
                </h4>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {activeDetail.summary}
                </p>
                <div className="mt-6 border-t border-slate-100 pt-6 whitespace-pre-line text-sm leading-7 text-slate-600">
                  {activeDetail.context}
                </div>
              </div>
            </div>

            {isImageExpanded && (
              <div
                className="fixed inset-0 z-60 flex items-center justify-center bg-slate-950/95 p-4"
                onClick={() => setIsImageExpanded(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsImageExpanded(false)}
                  aria-label="Close full image"
                  className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <X size={18} strokeWidth={2} />
                </button>

                <img
                  src={activeDetail.imageUrl}
                  alt={activeDetail.title}
                  className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain"
                />
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
