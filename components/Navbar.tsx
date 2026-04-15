
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
          className="lg:hidden p-2.5 bg-neutral-900 border border-white/10 rounded-lg text-red-500 z-[110] shadow-lg active:scale-95 transition-transform"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 lg:hidden bg-neutral-950 z-[105] flex flex-col justify-center items-center h-screen w-screen px-6"
          >
            <div className="flex flex-col space-y-4 w-full max-w-sm text-center">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative py-4 px-6 bg-neutral-900/50 border border-white/5 rounded-2xl text-xl font-bold tracking-[0.2em] uppercase text-white hover:text-red-500 hover:border-red-500/30 transition-all flex items-center justify-center space-x-4"
                >
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 px-8 py-5 bg-red-600 text-white font-black tracking-widest uppercase rounded-2xl text-lg flex items-center justify-center space-x-3 shadow-[0_10px_30px_rgba(220,38,38,0.3)] active:scale-95 transition-transform"
              >
                <span>Get in Touch</span>
                <ArrowRight size={22} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
