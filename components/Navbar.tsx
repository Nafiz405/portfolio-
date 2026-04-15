
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-neutral-950/95 backdrop-blur-xl border-b border-red-500/20 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Unique Styled Brand Name */}
        <div className="group relative">
          <a href="#home" className="flex flex-col md:flex-row md:items-center space-y-0 md:space-x-4">
            <div className="flex items-center">
              <span className="text-xl md:text-3xl font-black tracking-[0.2em] uppercase leading-none">
                Md. Nafiz
              </span>
              <div className="h-8 w-[2px] bg-red-600 mx-4 hidden md:block group-hover:scale-y-125 transition-transform duration-500"></div>
            </div>
            <span className="text-xl md:text-3xl font-light tracking-[0.4em] uppercase text-red-500/80 group-hover:text-red-500 transition-colors duration-500">
              Iqbal
            </span>
          </a>
          <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-red-600 to-transparent group-hover:w-full transition-all duration-700"></div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-xs font-bold tracking-widest uppercase text-neutral-400 hover:text-red-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
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

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white focus:outline-none z-[110]"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} className="text-red-500" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 lg:hidden bg-neutral-950 z-[90] flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black tracking-[0.2em] uppercase text-neutral-400 hover:text-red-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-10 py-5 bg-red-600 text-white font-black tracking-widest uppercase rounded-full text-xl flex items-center space-x-3"
              >
                <span>Get in Touch</span>
                <ArrowRight size={24} />
              </motion.a>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10 pointer-events-none">
              <span className="text-[20vw] font-black text-red-600 uppercase tracking-tighter select-none">
                NAFIZ
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
