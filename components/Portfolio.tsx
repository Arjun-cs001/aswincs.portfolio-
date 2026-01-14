import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioItemProps {
  item: { id: number; src: string; alt: string };
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => (
  <div className="flex-shrink-0 w-[300px] md:w-[400px] aspect-video relative group rounded-xl overflow-hidden border border-white/10 bg-zinc-900 mx-3 cursor-none">
    <img 
      src={item.src} 
      alt={item.alt} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const Portfolio: React.FC = () => {
  const [skew, setSkew] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Velocity Skew Effect
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let rafId: number;
    let currentSkew = 0;

    const loop = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;
      const targetSkew = diff * 0.15; // Sensitivity
      
      // Linear interpolation for smoothness
      currentSkew = currentSkew * 0.9 + targetSkew * 0.1;
      
      setSkew(currentSkew);
      lastScrollY = currentScrollY;
      rafId = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Custom Cursor Logic
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Creating a larger array of placeholders for the slider
  const items = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/seed/${i + 45}/800/450`,
    alt: `Thumbnail project ${i + 1}`
  }));

  const itemsRow2 = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 8,
    src: `https://picsum.photos/seed/${i + 123}/800/450`,
    alt: `Thumbnail project ${i + 9}`
  }));

  const itemsRow3 = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 16,
    src: `https://picsum.photos/seed/${i + 789}/800/450`,
    alt: `Thumbnail project ${i + 17}`
  }));

  return (
    <section 
      id="portfolio" 
      ref={containerRef}
      className="py-24 bg-black overflow-hidden relative cursor-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor Element */}
      <div 
        className="pointer-events-none absolute z-50 flex items-center justify-center bg-[#E50914] text-white rounded-full w-24 h-24 font-bold text-sm uppercase tracking-wider transition-opacity duration-200 mix-blend-difference"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0})`,
          opacity: isHovering ? 1 : 0
        }}
      >
        View <ArrowUpRight size={16} className="ml-1" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Take a look at what I'm capable of.</h2>
          <p className="text-gray-500 text-sm md:text-base">Real projects designed for maximum CTR. Hover to pause.</p>
        </div>
      </div>

      <div 
        className="relative w-full space-y-8 transition-transform duration-100 ease-linear"
        style={{ transform: `skewY(${skew}deg)` }}
      >
        
        {/* Row 1 - Sliding Left */}
        <div className="flex w-full overflow-hidden mask-linear-fade">
          <div className="flex animate-scroll pause-on-hover">
            {/* Original Set */}
            {items.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
            {/* Duplicate Set for Loop */}
            {items.map((item) => (
              <PortfolioItem key={`dup-${item.id}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 - Sliding Right */}
        <div className="flex w-full overflow-hidden mask-linear-fade">
          <div className="flex animate-scroll-reverse pause-on-hover">
            {/* Original Set */}
            {itemsRow2.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
            {/* Duplicate Set for Loop */}
            {itemsRow2.map((item) => (
              <PortfolioItem key={`dup-${item.id}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 3 - Sliding Left */}
        <div className="flex w-full overflow-hidden mask-linear-fade">
          <div className="flex animate-scroll pause-on-hover">
            {/* Original Set */}
            {itemsRow3.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
            {/* Duplicate Set for Loop */}
            {itemsRow3.map((item) => (
              <PortfolioItem key={`dup-${item.id}`} item={item} />
            ))}
          </div>
        </div>

      </div>

      {/* Fade overlay on sides for smooth look */}
      <style>{`
        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Portfolio;