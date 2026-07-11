import { useState, useEffect, useCallback } from 'react';

const generatePhotoData = () => {
  // 1. Group the exact matching combinations together
  const initialData = [
    { id: 1108099, title: 'Blake Star', category: 'Nature' },
    { id: 276724, title: 'David Gilmore', category: 'City' },
    { id: 247431, title: 'Gerard White', category: 'Animals' },
    { id: 235621, title: 'Gourmet Delight', category: 'Food' },
    { id: 290595, title: 'Digital Dream', category: 'Technology' },
    { id: 1118873, title: 'Runway Glam', category: 'Fashion' },
    { id: 7562249, title: 'Concrete Poetry', category: 'Architecture' },
    { id: 169647, title: 'Human Connection', category: 'People' },
    { id: 459203, title: 'Extreme Edge', category: 'Sports' },
    { id: 417344, title: 'Abstract Flow', category: 'Art' },
    { id: 34661673, title: 'Nature of Life', category: 'Nature' },
    { id: 14354493, title: 'Cityscape', category: 'City' },
    { id: 36712685, title: 'Animals', category: 'Animals' },
    { id: 34960799, title: 'Food', category: 'Food' },
    { id: 8412311, title: 'Technology', category: 'Technology' },
    { id: 34054502, title: 'Fashion', category: 'Fashion' },
    { id: 32845670, title: 'Architecture', category: 'Architecture' },
    { id: 17807294, title: 'People', category: 'People' },
    { id: 31335989, title: 'Sports', category: 'Sports' },
    { id: 8539457, title: 'Art', category: 'Art' },
    { id: 3811108, title: 'Nature of Life', category: 'Nature' },
    { id: 37811262, title: 'Cityscape', category: 'City' },
    { id: 36958057, title: 'Animals', category: 'Animals' },
    { id: 32119136, title: 'Food', category: 'Food' },
    { id: 31387200, title: 'Technology', category: 'Technology' },
    { id: 15160252, title: 'Fashion', category: 'Fashion' },
    { id: 24244667, title: 'Architecture', category: 'Architecture' },
    { id: 2970225, title: 'People', category: 'People' },
    { id: 19664876, title: 'Sports', category: 'Sports' },
    { id: 30479386, title: 'Art', category: 'Art' },
    { id: 5439398, title: 'Nature of Life', category: 'Nature' },
    { id: 6770775, title: 'Cityscape', category: 'City' },
    { id: 3264504, title: 'Animals', category: 'Animals' },
    { id: 5656715, title: 'Food', category: 'Food' },
    { id: 19251913, title: 'Technology', category: 'Technology' }
  ];

  const data = [];
  
  // 2. Safely loop up to 100 times using the single source of truth
  for (let i = 0; i < 100; i++) {
    const template = initialData[i % initialData.length];
    
    data.push({
      id: i, // Maintains a unique key for React loops
      title: template.title,
      role: `Creator, ${template.category.toLowerCase()}.com`,
      imageUrl: `https://images.pexels.com/photos/${template.id}/pexels-photo-${template.id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop`,
      rating: 5,
    });
  }
  
  return data;
};


const Carousel = () => {
  const [photos] = useState(generatePhotoData());
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isPaused, setIsPaused] = useState(false); // Controls auto-scroll state on hover

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerPage(1);
      else if (width < 1024) setItemsPerPage(2);
      else if (width < 1400) setItemsPerPage(3);
      else setItemsPerPage(4);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(photos.length / itemsPerPage);

  // Keep currentPage in range if itemsPerPage changes (e.g. on resize)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage((prev) => Math.min(prev, totalPages - 1));
  }, [totalPages]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0)); // Loops back to start
  });
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1)); // Loops back to end
  };

  // --- Auto-Scroll Effect ---
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextPage();
    }, 4000); // Scrolls every 4 seconds

    return () => clearInterval(interval);
  }, [currentPage, isPaused, nextPage, totalPages]);

  return (
    <div 
      className="mx-auto max-w-350 p-8 font-sans text-neutral-900 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header section */}
      <div className="flex items-end justify-between mb-10">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold tracking-tight">Your Feed</h2>
          <p className="text-neutral-500 text-lg">Authentic experiences from creators building, inspiring, and making a difference.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={prevPage} 
            className="w-12 h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-900 transition-all duration-200"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={nextPage} 
            className="w-12 h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-900 transition-all duration-200"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      {/* Sliding Track: all cards laid out in a row, transform-translated for a smooth scroll effect */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform"
          style={{
            transform: `translateX(calc(-${currentPage} * (100% + 1.5rem) / ${itemsPerPage}))`,
          }}
        >
          {photos.map((photo) => (
            <div
              className="relative aspect-3/4 rounded-4xl overflow-hidden shadow-sm group cursor-pointer shrink-0"
              style={{ width: `calc((100% - ${(itemsPerPage - 1) * 1.5}rem) / ${itemsPerPage})` }}
              key={photo.id}
            >
              <img src={photo.imageUrl} alt={photo.title} className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105" loading="lazy" />

              {/* Upper Right Action Circle Arrow */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/25 backdrop-blur-md border border-white/30 flex items-center justify-center transition-colors group-hover:bg-white/40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>

              {/* Frosted Glass Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 via-black/40 to-transparent backdrop-blur-xl text-white">
                <div className="text-amber-400 mb-2 text-sm tracking-widest">
                  {Array.from({ length: photo.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <h4 className="text-fa font-semibold text-xl mb-1">{photo.title}</h4>
                <p className="text-sm text-white/80">{photo.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Page indicator dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            aria-label={`Go to page ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentPage ? 'w-6 bg-neutral-900' : 'w-1.5 bg-neutral-300 hover:bg-neutral-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;