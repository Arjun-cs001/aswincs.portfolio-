import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center px-4">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/30 border border-red-900/50 text-red-400 text-xs font-semibold mb-8 animate-fade-in-up">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        Accepting New Clients
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
        I Make You <span className="text-white">Stand</span> <span className="text-[#E50914]">Out</span><br />
        On the <span className="text-white">YouTube</span> Homepage
      </h1>

      <p className="text-gray-400 max-w-xl mx-auto text-lg mb-10 leading-relaxed">
        I do not design art. I make thumbnails that force people to click on your video.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
        <a href="#contact" className="w-full sm:w-auto px-8 py-3 bg-[#E50914] text-white rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/20">
          Start a Project
        </a>
        <a href="#portfolio" className="w-full sm:w-auto px-8 py-3 bg-white/5 text-white border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;