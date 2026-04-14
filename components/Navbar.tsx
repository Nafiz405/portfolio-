
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-neutral-950/90 backdrop-blur-xl border-b border-red-500/10 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Unique Styled Brand Name */}
        <div className="group relative">
          <a href="#home" className="flex flex-col md:flex-row md:items-center space-y-0 md:space-x-4">
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-black tracking-[0.2em] uppercase leading-none">
                Md. Nafiz
              </span>
              <div className="h-8 w-[2px] bg-red-600 mx-4 hidden md:block group-hover:scale-y-125 transition-transform duration-500"></div>
            </div>
            <span className="text-2xl md:text-3xl font-light tracking-[0.4em] uppercase text-red-500/80 group-hover:text-red-500 transition-colors duration-500">
              Iqbal
            </span>
          </a>
          {/* Subtle Accent Line */}
          <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-red-600 to-transparent group-hover:w-full transition-all duration-700"></div>
        </div>

        {/* Action Button - Still helpful for UX, but separated from main nav links */}
        <div className="flex items-center">
          <a 
            href="#contact" 
            className="relative px-8 py-3 overflow-hidden group rounded-full border border-red-500/30 bg-neutral-900/50 backdrop-blur-sm"
          >
            <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative text-xs font-black tracking-widest text-white group-hover:text-white uppercase">
              Get in Touch
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
