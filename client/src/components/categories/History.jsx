import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

const treasureImages = [
  {
    title: "Indus Valley Unicorn Seal",
    source: "Sepia Times / Universal Images Group via Getty Images",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-74yK7qsr5wmXjWt35mdpYz2ZwZg6zsAUkAnp8cvlg&s=10",
  },
  {
    title: "Pyramids of Kush at Meroë",
    source: "mtcurado / Getty Images",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj0vUa2GfMp-crHsTngUznPc87NbgPsK2whY5pIl4koQ&s=10",
  },
  {
    title: "Stele of Aksum",
    source: "travelview / Getty Images",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIgzimLQ8atQlbVRHV38BhTUouwMADkrQqYLKMzpehUw&s=10",
  },
  {
    title: "Nok Terracotta Sculpture",
    source: "Sepia Times / Universal Images Group via Getty Images",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcgiCL4VLaVJparroSaUl_XLp_4leIxVsQKlWcOcm_w&s=10%20warm%20museum%20lighting%2C%20neutral%20background%2C%2035mm%20photography%2C%20shallow%20depth%20of%20field&image_size=landscape_4_3",
  },
  {
    title: "Golden Rhino of Mapungubwe",
    source: "Heritage Images / Getty Images",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxu-aEZ6ts4uqY8-tRTCPd7MfwyPuj4XJHWdHiQii0w&s=10",
  },
];

const civilizations = [
  {
    id: "mesopotamia",
    name: "Mesopotamia",
    highlights: [
      {
        title: "The Sexagesimal System",
        description:
          "The Sumerians built a base-60 numerical system. That directly explains modern timekeeping (60 seconds, 60 minutes) and a 360° circle.",
      },
      {
        title: "The Epic of Gilgamesh",
        description:
          "One of the earliest epic literary works, exploring immortality, grief, and what it means to be human.",
      },
    ],
  },
  {
    id: "egypt",
    name: "Ancient Egypt",
    highlights: [
      {
        title: "Labor, Not Slavery",
        description:
          "Excavations of worker villages suggest the Great Pyramids were built by paid, organized laborers and artisans rather than mass slave armies.",
      },
      {
        title: "The Treaties of Kadesh",
        description:
          "A landmark international peace treaty with the Hittites (c. 1259 BCE), including mutual defense and extradition terms.",
      },
    ],
  },
  {
    id: "indus",
    name: "Indus Valley Civilization",
    highlights: [
      {
        title: "The Standardization Mystery",
        description:
          "Harappan cities used identically proportioned bricks (4:2:1) and uniform weights over a vast region, implying highly organized administration.",
      },
      {
        title: "Absence of Monumental Temples",
        description:
          "Archaeology shows few palaces, giant statues, or large military fortifications, suggesting an unusually egalitarian society focused on public utility and trade.",
      },
    ],
  },
  {
    id: "china",
    name: "Ancient China",
    highlights: [
      {
        title: "Oracle Bones",
        description:
          "The earliest verified Chinese writing appears on turtle shells and ox scapulae used for Shang royal divination.",
      },
      {
        title: "Dujiangyan Hydraulic Engineering",
        description:
          "Built around 256 BCE and still operating today, this system managed the Min River for irrigation and flood control without a conventional dam.",
      },
    ],
  },
  {
    id: "greece",
    name: "Ancient Greece",
    highlights: [
      {
        title: "Sortition over Voting",
        description:
          "In Athens, many public officials were chosen by lottery to reduce the influence of wealth and ensure broader civic participation.",
      },
      {
        title: "The Antikythera Mechanism",
        description:
          "Often described as the first analog computer, it used intricate bronze gears to model astronomical cycles and eclipses.",
      },
    ],
  },
  {
    id: "rome",
    name: "Ancient Rome",
    highlights: [
      {
        title: "Concrete Innovation",
        description:
          "Roman concrete mixed volcanic ash, creating structures that could strengthen over time in saltwater, which helps explain the longevity of Roman harbors.",
      },
      {
        title: "The Twelve Tables",
        description:
          "A foundational public legal code that helped establish the principle that laws must be written and visible to prevent arbitrary enforcement.",
      },
    ],
  },
  {
    id: "maya",
    name: "Maya Civilization",
    highlights: [
      {
        title: "The Concept of Absolute Zero",
        description:
          "Maya mathematicians fully integrated zero into a base-20 system by at least 36 BCE, enabling sophisticated calendar computation.",
      },
      {
        title: "Milpa Agroforestry",
        description:
          "A long-cycle polyculture farming system rotating fields across decades to sustain fertility in tropical environments.",
      },
    ],
  },
  {
    id: "aztec",
    name: "Aztec Empire",
    highlights: [
      {
        title: "Chinampas Engineering",
        description:
          "Artificial agricultural islands layered from lakebed mud and vegetation, producing extremely high yields for Tenochtitlan.",
      },
      {
        title: "Universal Education",
        description:
          "Mandatory schooling for all children regardless of class or gender, split across institutions for leadership/law and for military/trade training.",
      },
    ],
  },
  {
    id: "inca",
    name: "Inca Empire",
    highlights: [
      {
        title: "The Khipu Archive",
        description:
          "Administrative records stored in complex knotted, color-coded strings used to track census data, taxation, and narratives without an alphabet.",
      },
      {
        title: "Freeze-Drying Technology (ch'uñu)",
        description:
          "High-Andes freeze-thaw cycles were used to preserve potatoes into durable rations that could store for years.",
      },
    ],
  },
  {
    id: "kush",
    name: "Kingdom of Kush",
    highlights: [
      {
        title: "More Pyramids than Egypt",
        description:
          "Sudan contains roughly 350 ancient pyramids, often steeper and narrower, serving as royal tombs for Kushite elites.",
      },
      {
        title: "The Candaces (Kandakes)",
        description:
          "Warrior-queens frequently co-ruled or led Kush; Amanirenas famously resisted Roman invasion and secured favorable peace terms.",
      },
    ],
  },
  {
    id: "aksum",
    name: "Kingdom of Aksum",
    highlights: [
      {
        title: "Monolithic Steles",
        description:
          "Aksumites raised huge single-piece granite steles as elite grave markers, demonstrating remarkable quarrying and transport capability.",
      },
      {
        title: "Global Minting Power",
        description:
          "Aksum was one of only four major powers in the 3rd century CE to mint gold currency, using Greek inscriptions for international trade.",
      },
    ],
  },
  {
    id: "nok",
    name: "Nok Culture",
    highlights: [
      {
        title: "Direct Iron-Smelting",
        description:
          "Evidence suggests Nok communities transitioned directly into advanced iron smelting around 1000 BCE without a long Bronze Age sequence.",
      },
      {
        title: "Stylistic Continuity",
        description:
          "Nok terracotta aesthetics echo across later West African art traditions, including classical Ife and Benin bronze work.",
      },
    ],
  },
  {
    id: "carthage",
    name: "Carthage",
    highlights: [
      {
        title: "The Prefabricated Navy",
        description:
          "Carthaginian shipyards used standardized, numbered parts in an assembly-line model, allowing rapid fleet construction.",
      },
      {
        title: "The Apartment Blocks",
        description:
          "High-rise urban housing up to six stories with advanced interior plumbing, built to maximize limited space within fortified walls.",
      },
    ],
  },
  {
    id: "zimbabwe",
    name: "Great Zimbabwe",
    highlights: [
      {
        title: "Perfect Dry-Stone Architecture",
        description:
          "The Great Enclosure used an estimated one million evenly cut granite blocks stacked without mortar, reaching roughly 36 feet in height.",
      },
      {
        title: "Global Trade Nexus",
        description:
          "Excavations reveal Chinese celadon, Persian faience, and Indian-origin beads, proving deep integration into Indian Ocean trade routes.",
      },
    ],
  },
  {
    id: "mapungubwe",
    name: "Kingdom of Mapungubwe",
    highlights: [
      {
        title: "The Sacred Hill",
        description:
          "Landscape encoded hierarchy: rulers lived atop Mapungubwe Hill while the common population remained below, marking early class stratification in southern Africa.",
      },
      {
        title: "Metallurgical Mastery",
        description:
          "Gold artifacts such as the Golden Rhinoceros reveal exceptional skill in hammering delicate foil onto carved forms.",
      },
    ],
  },
];

export default function History() {
  const [openId, setOpenId] = useState(civilizations[0]?.id ?? null);

  const orderedCivilizations = useMemo(
    () => civilizations.map((item, index) => ({ ...item, index: index + 1 })),
    [],
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-orange-500 selection:text-white">
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="border-b border-slate-200 pb-8">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.28em] text-orange-500">
            Orangeflow History Briefings
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Civilizations That Built the World
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Your list maps the milestones. This page adds deeper context with
            architectural achievements, social structures, and specialized
            innovations that made each civilization distinct.
          </p>
        </header>

        <main className="mt-10 space-y-12">
          <section>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-slate-400">
                  Archaeological Treasures
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                  A visual anchor before the deep facts
                </h2>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {treasureImages.map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Source: {item.source}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-slate-400">
                Deep Context
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                Innovations, systems, and hidden details
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                Tap a civilization to expand two high-signal facts that explain
                how its infrastructure, governance, and technical mastery shaped
                everything that followed.
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {orderedCivilizations.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    className="border-b border-slate-100 last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenId((prev) => (prev === item.id ? null : item.id))
                      }
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-4">
                        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-xs font-black text-orange-600">
                          {item.index}
                        </span>
                        <div>
                          <p className="text-sm font-semibold tracking-tight text-slate-950">
                            {item.name}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            Two key facts worth remembering
                          </p>
                        </div>
                      </div>

                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-slate-500 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        strokeWidth={2.25}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 pt-0">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                          {item.highlights.map((highlight) => (
                            <div
                              key={highlight.title}
                              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                            >
                              <p className="text-xs  font-semibold text-slate-950">
                                {highlight.title}
                              </p>
                              <p className="mt-2 text-sm font-fugaz leading-7 text-slate-600">
                                {highlight.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}
