import React, { useState, useEffect } from 'react';
import { useTransition } from './PixelTransition';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { navigate } = useTransition();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    navigate(target);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('#top')}>
          {/* Logo Placeholder */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
             <img src="https://picsum.photos/seed/sohayb/200" alt="Logo" className="w-full h-full object-cover"/>
          </div>
          <span className="font-bold text-lg tracking-tight">Sohayb29</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="hover:text-white transition-colors">Portfolio</a>
          <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="hover:text-white transition-colors">Process</a>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="hover:text-white transition-colors">Testimonials</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-white transition-colors">Contact</a>
        </div>

        <button onClick={() => navigate('#contact')} className="bg-[#E50914] hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(229,9,20,0.3)] hover:shadow-[0_0_30px_rgba(229,9,20,0.5)]">
          Start a Project
        </button>
      </div>
    </nav>
  );
};

export default Navbar;