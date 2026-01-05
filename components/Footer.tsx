import React from 'react';
import { useTransition } from './PixelTransition';

const Footer: React.FC = () => {
  const { navigate } = useTransition();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    navigate(target);
  };

  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center overflow-hidden">
             <img src="https://picsum.photos/seed/sohayb/200" alt="Logo" className="w-full h-full object-cover"/>
          </div>
          <span className="font-bold text-sm">Sohayb29</span>
        </div>

        <div className="flex gap-6 text-xs text-gray-500 font-medium">
          <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="hover:text-white transition-colors">Portfolio</a>
          <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="hover:text-white transition-colors">Process</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-xs text-gray-600">
          © 2025 Sohayb29. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;