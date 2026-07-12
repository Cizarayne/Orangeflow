import { useState, useEffect, useCallback, useRef } from 'react';

const generatePhotoData = () => {
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
  for (let i = 0; i < 100; i++) {
    const template = initialData[i % initialData.length];
    data.push({
      id: i,
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
  const [isPaused, setIsPaused] = useState(false);
  
  // Touch swipe refs
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage((prev) => Math.min(prev, totalPages - 1));
  }, [totalPages]);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  }, [totalPages]);
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  // --- Auto-Scroll Effect ---
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextPage();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentPage, isPaused, nextPage]);

  // --- Touch Swipe Handlers for Mobile ---
  const handleTouchStart = (e) => {
    setIsPaused(true); // Pause auto-scroll on touch
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Minimum drag depth to trigger change

    if (swipeDistance > minSwipeDistance) {
      nextPage();
    } else if (swipeDistance < -minSwipeDistance) {
      prevPage();
    }
    // Resume auto-scroll after a short delay
    setTimeout(() => setIsPaused(false), 2000);
  };

  // Mobile optimization: Limit pagination dots to a max of 7 to avoid cluttering screens
  const renderPaginationDots = () => {
    const maxDots = 7;
    if (totalPages <= maxDots) {
      return Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          aria-label={`Go to page ${i + 1}`}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === currentPage ? 'w-6 bg-neutral-900' : 'w-1.5 bg-neutral-300'
          }`}
        />
      ));
    }

    // Dynamic rendering window when dots exceed 7
    let startPage = Math.max(0, currentPage - 3);
    let endPage = Math.min(totalPages - 1, startPage + maxDots - 1);

    if (endPage - startPage < maxDots - 1) {
      startPage = Math.max(0, endPage - maxDots + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
      const i = startPage + index;
      return (
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          aria-label={`Go to page ${i + 1}`}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === currentPage ? 'w-6 bg-neutral-900' : 'w-1.5 bg-neutral-300'
          }`}
        />
      );
    });
  };

  return (
    <div 
      className="mx-auto max-w-7xl px-4 py-6 sm:p-8 font-sans text-neutral-900 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Responsive Header: Stacked on mobile, side-by-side on desktop */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 sm:mb-10">
        <div className="space-y-2 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Your Feed</h2>
          <p className="text-neutral-500 text-base sm:text-lg">
            Authentic experiences from creators building, inspiring, and making a difference.
          </p>
        </div>
        
        {/* Navigation Arrows: Hidden or redesigned layout footprint on small screens */}
        <div className="flex gap-3 self-end md:self-auto">
          <button 
            onClick={prevPage} 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center active:bg-neutral-100 sm:hover:bg-neutral-50 sm:hover:border-neutral-900 transition-all duration-200"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={nextPage} 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center active:bg-neutral-100 sm:hover:bg-neutral-50 sm:hover:border-neutral-900 transition-all duration-200"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      {/* Track wrapper with Touch Support */}
      <div 
        className="overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
          style={{
            transform: `translateX(calc(-${currentPage} * (100% + ${window.innerWidth < 640 ? '1rem' : '1.5rem'}) / ${itemsPerPage}))`,
          }}
        >
          {photos.map((photo) => (
            <div
              className="relative aspect-3/4 rounded-2xl sm:rounded-4xl overflow-hidden shadow-sm group cursor-pointer shrink-0"
              style={{ 
                width: `calc((100% - ${(itemsPerPage - 1) * (window.innerWidth < 640 ? 1 : 1.5)}rem) / ${itemsPerPage})` 
              }}
              key={photo.id}
            >
              <img src={photo.imageUrl} alt={photo.title} className="w-full h-full object-cover block sm:group-hover:scale-105 transition-transform duration-500" loading="lazy" />

              {/* Responsive Upper Right Action Circle Arrow */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 backdrop-blur-md border border-white/30 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>

              {/* Info Overlay optimized padding for mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-linear-to-t from-black/90 via-black/40 to-transparent text-white">
                <div className="text-amber-400 mb-1 text-xs sm:text-sm tracking-widest">
                  {Array.from({ length: photo.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <h4 className="font-semibold text-lg sm:text-xl mb-0.5 sm:mb-1 truncate">{photo.title}</h4>
                <p className="text-xs sm:text-sm text-white/80 truncate">{photo.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic, clean pagination layout */}
      <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8 min-h-3">
        {renderPaginationDots()}
      </div>
    </div>
  );
};

export default Carousel;