import React from 'react';

const Portfolio: React.FC = () => {
  // Creating a larger array of placeholders for the slider
  const items = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/seed/${i + 55}/800/450`,
    alt: `Thumbnail project ${i + 1}`
  }));

  const itemsRow2 = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 8,
    src: `https://picsum.photos/seed/${i + 155}/800/450`,
    alt: `Thumbnail project ${i + 9}`
  }));

  const PortfolioItem = ({ item }: { item: { id: number; src: string; alt: string } }) => (
    <div className="flex-shrink-0 w-[300px] md:w-[400px] aspect-video relative group rounded-xl overflow-hidden border border-white/10 bg-zinc-900 mx-3 cursor-pointer">
      <img 
        src={item.src} 
        alt={item.alt} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="px-4 py-2 border border-white/30 text-white rounded-full text-sm font-medium backdrop-blur-md">View Case Study</span>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Take a look at what I'm capable of.</h2>
          <p className="text-gray-500 text-sm md:text-base">Real projects designed for maximum CTR. Hover to pause.</p>
        </div>
      </div>

      <div className="relative w-full space-y-8">
        
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