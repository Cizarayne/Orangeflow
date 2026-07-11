import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const projects = [
  {
    title: "Burj Khalifa",
    category: "Super-Tall Skyscrapers",
    location: "Dubai, United Arab Emirates",
    description: "The world's tallest building at 828 meters, featuring a sleek, tapering design inspired by the regional desert flower, Hymenocallis. It stands as a monument to vertical engineering and wind-tunnel aerodynamics.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCH1y0E27QX7OaDnvynwmyZGeqPY0Qyn8zdpALu2n4g&s=10"
  },
  {
    title: "Marina Bay Sands",
    category: "Cultural & Public Spaces",
    location: "Singapore",
    description: "An iconic urban masterpiece famous for its three structural towers unified by a massive cantilevered rooftop SkyPark, which hosts a world-famous infinity pool floating above the city skyline.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tPyvLPFnH9_ZpEiVJNTzlVND5qxiyumo0bgb8zgjHQ&s=10"
  },
  {
    title: "The Shard",
    category: "Super-Tall Skyscrapers",
    location: "London, United Kingdom",
    description: "A spire-like glass skyscraper designed by Renzo Piano to resemble a shard of crystal piercing the London skyline, incorporating advanced energy-efficient double-skin glass façades.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2fuhdqBoXxUtUt-uLluk9JHCt5es6BWnW67Wm3lfb3w&s=10"
  },
  {
    title: "Apple Park",
    category: "Ecosystem Integration",
    location: "Cupertino, California",
    description: "Apple's monolithic circular headquarters, widely known as 'the spaceship.' Designed by Foster + Partners, it emphasizes open spaces, green energy, and the world's largest curved glass panels.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudYTX9l5coB7P1iBubHl8SfteqQHe5xAjIFRiWzdObQ&s=10"
  },
  {
    title: "Louvre Abu Dhabi",
    category: "Cultural & Public Spaces",
    location: "Abu Dhabi, United Arab Emirates",
    description: "An exceptional cultural oasis featuring a floating geometric dome that filters sunlight into a kinetic, multi-layered 'rain of light' across the minimalist seaside galleries beneath.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMYD1RryFQ6g19cR28z8QwoEdtdYgOrlnKiAGVSZizgA&s=10"
  },
  {
    title: "Beijing Daxing International Airport",
    category: "Cultural & Public Spaces",
    location: "Beijing, China",
    description: "A futuristic star-fish shaped transit hub designed by Zaha Hadid Architects. Its fluid configuration minimizes walking distances, optimizing passenger transitions through a column-free core.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVY-wx5XD7eIPMTQppgGQzOQjPup-DwIqyO0QWYYgcg&s=10"
  },
  {
    title: "Heydar Aliyev Center",
    category: "Cultural & Public Spaces",
    location: "Baku, Azerbaijan",
    description: "Renowned for its flowing, wave-like organic form that sweeps seamlessly from the ground landscape into the walls and roof, completely defying rigid classical architecture angles.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnxbbq5pMMtvMKJp9A6UpT_Lx2gnyShmalSsvdesk-Q&s=10"
  },
  {
    title: "Museum of the Future",
    category: "Cultural & Public Spaces",
    location: "Dubai, United Arab Emirates",
    description: "A torus-shaped architectural landmark covered entirely in intricate Arabic calligraphy. It utilizes a pillarless structural design, serving as a live exhibition for global innovation.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71eGmRhR7RMwHOC78w0t8ydI9YQzCH9SpYrfFcOsw_Q&s=10"
  },
  {
    title: "Gardens by the Bay",
    category: "Ecosystem Integration",
    location: "Singapore",
    description: "An ecological sanctuary featuring iconic vertical Supertrees and massive climate-controlled conservatories that perfectly integrate landscape architecture with technical carbon-capture methods.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQidDRbcOqEqgNvPFJLIy7Ad_oe2_jeVtXIboto2S2PQw&s=10"
  },
  {
    title: "Vessel",
    category: "Cultural & Public Spaces",
    location: "New York City, New York",
    description: "A honeycomb-inspired interactive installation at Hudson Yards. Composed of 154 interconnected staircases and 80 distinct landings, it forms an elevated, immersive public viewing maze.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBFr19XITFTclEuuo7Jfd-J_Wdo9YjKIYRtmL5X0UpeQ&s=10"
  },
  {
    title: "Harpa Concert Hall",
    category: "Cultural & Public Spaces",
    location: "Reykjavík, Iceland",
    description: "A striking cultural center featuring a geometric crystalline glass façade. Inspired by Iceland's volcanic basalt landscapes, it dynamically refracts changing northern light.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxou0ycrlwzJBUiaEdAhD1ppAPR4Z8hGcKXb881vyKw&s=10"
  },
  {
    title: "CCTV Headquarters",
    category: "Super-Tall Skyscrapers",
    location: "Beijing, China",
    description: "A gravity-defying structural loop formed by two leaning towers connected at the top by a 75-meter cantilevered section, offering an alternative to standard linear skyscrapers.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/802/679/814/cmg-headquarters-neon-architecture-cityscape-wallpaper-preview.jpg"
  },
  {
    title: "The Twist",
    category: "Cultural & Public Spaces",
    location: "Jevnaker, Norway",
    description: "A bridge, museum, and sculpture all in one. It twists 90 degrees across the Randselva river, forming a continuous closed loop that redefines traditional structural art galleries.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6XGSFy6HL-4roXlXm6oveGKZqtV1iSieqoUHxZIDSA&s=10"
  },
  {
    title: "Bosco Verticale",
    category: "Ecosystem Integration",
    location: "Milan, Italy",
    description: "Twin metropolitan residential towers supporting thousands of living trees and shrubs on cantilevered concrete balconies, filtering city dust and creating a dynamic microclimate.",
    imageUrl: "https://c1.wallpaperflare.com/preview/481/144/52/building-architecture-plant-urban.jpg"
  },
  {
    title: "National Museum of Qatar",
    category: "Cultural & Public Spaces",
    location: "Doha, Qatar",
    description: "Designed by Jean Nouvel, this sweeping structural ecosystem is composed of interlocking concrete disks modeled after the complex natural formations of the desert rose crystal.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfqpFPVp-FogmtLwDRycYJaPwr_q7PhMGeZh4B2oPVV3MZKhoP5qxx015j&s=10"
  },
  {
    title: "Elbphilharmonie",
    category: "Cultural & Public Spaces",
    location: "Hamburg, Germany",
    description: "A complex hybrid monument combining a gritty historic brick warehouse base with a striking, wave-shaped glass crown that reflects Hamburg's continuous relationship with its waterways.",
    imageUrl: "https://c0.wallpaperflare.com/preview/36/929/258/hamburg-germany-elbphilharmonie-hamburg-philarmony.jpg"
  },
  {
    title: "Morpheus Hotel",
    category: "Super-Tall Skyscrapers",
    location: "Macau",
    description: "The world's first free-form high-rise exoskeleton skyscraper. Designed by Zaha Hadid Architects, its complex external matrix allows for interior volumes free from structural pillars.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/649/839/813/glass-line-bending-architecture-macau-hd-wallpaper-preview.jpg"
  },
  {
    title: "One World Trade Center",
    category: "Super-Tall Skyscrapers",
    location: "New York City, New York",
    description: "A monumental symbol of architectural resilience. Standing at a symbolic 1,776 feet, its crystalline, tapering form serves as a focal point of the lower Manhattan landscape.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/261/550/396/daytime-purple-sky-united-states-usa-wallpaper-preview.jpg"
  },
  {
    title: "The Sphere",
    category: "Cultural & Public Spaces",
    location: "Las Vegas, Nevada",
    description: "The world's largest spherical structure, pushing the limits of immersive digital architecture with an immense programmable external LED skin and interior spatial acoustics.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9IsuViL9v6EB-KxBy8n470fTvALHK8cBqPOnPUbNfg&s=10"
  },
  {
    title: "Sydney Opera House",
    category: "Cultural & Public Spaces",
    location: "Sydney, Australia",
    description: "A timeless masterpiece of modern expressionist design, featuring a series of large, interlocking precast concrete shells that evoke the imagery of sails navigating the harbor.",
    imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Opus",
    category: "Super-Tall Skyscrapers",
    location: "Dubai, United Arab Emirates",
    description: "A striking mixed-use building designed by Zaha Hadid. Its distinctive cube-like form features a dramatic void carved through the center, creating the illusion that the building has been sculpted by nature while showcasing advanced engineering and futuristic design.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXi19bm3MCkp-AuGxQanTc_rqJWxbQs_e0j0xIonwFDg&s=10"
  }
];

export default function Architecture() {
  const [filter, setFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "All Projects"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Close the expanded view on Escape
  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <div className="bg-white text-gray-900 font-sans antialiased selection:bg-orange-500 selection:text-white min-h-screen pb-24">
      
      {/* Structural Minimalist Header Block */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="border-b-4 border-gray-900 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500 block mb-2">
              GLOBAL PRACTICE // CASE ARCHIVES
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
              Architectural <br />Marvels
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed">
              A curated evaluation of 21 modern structures showcasing revolutionary breakthroughs across technical engineering, digital geometry, materials science, and macro urban planning.
            </p>
          </div>
        </div>

        {/* Dynamic Filter Strip */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["All Projects", "Super-Tall Skyscrapers", "Cultural & Public Spaces", "Ecosystem Integration"].map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(tab)}
              className={`text-[11px] font-mono font-bold uppercase tracking-wider px-4 py-2 border transition-all duration-200 ${
                filter === tab
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white text-gray-400 border-gray-200 hover:text-gray-900 hover:border-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* 3-Column Grid Matching Screenshot 2026-07-06 222952.jpg Exactly */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="flex flex-col group cursor-pointer"
            >
              
              {/* Asset Box with clean bounding boxes */}
              <div className="w-full aspect-16/10 overflow-hidden bg-gray-100 mb-5 relative rounded-xs">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 bg-gray-950/90 text-white font-mono text-[9px] tracking-widest px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                  View Detail +
                </div>
              </div>

              {/* Title Block with strict hierarchy alignment */}
              <h2 className="text-lg font-extrabold text-gray-900 tracking-tight leading-snug group-hover:text-orange-500 transition-colors">
                {project.title}
              </h2>
              
              {/* Location Tag */}
              <span className="text-xs font-medium text-gray-400 tracking-normal mt-0.5 mb-3 block">
                {project.location}
              </span>

              {/* Narrative Summary Body */}
              <p className="text-xs md:text-sm text-gray-500 font-normal leading-relaxed line-clamp-4 group-hover:text-gray-600 transition-colors">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Expanded Project Modal */}
      {selectedProject && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
          className="fixed inset-0 z-50 bg-gray-950/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.2s_ease-out]"
        >
          <style>{`
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes scaleIn {
              from { opacity: 0; transform: scale(0.96) translateY(8px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
            @media (prefers-reduced-motion: reduce) {
              .modal-scale-in { animation: none !important; }
            }
          `}</style>

          <div
            className="modal-scale-in bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xs relative animate-[scaleIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-colors"
            >
              <X size={18} className="text-gray-900" />
            </button>

            <div className="w-full aspect-16/10 bg-gray-100 overflow-hidden">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-10">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-orange-500 block mb-2">
                {selectedProject.category}
              </span>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 leading-tight mb-2">
                {selectedProject.title}
              </h2>
              <span className="text-sm font-medium text-gray-400 block mb-6">
                {selectedProject.location}
              </span>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}