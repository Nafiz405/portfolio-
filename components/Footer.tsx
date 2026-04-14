
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-[0.2em] uppercase">
                Md. Nafiz <span className="text-red-500 font-light tracking-[0.4em]">Iqbal</span>
              </span>
              <p className="text-neutral-600 text-xs mt-2 uppercase tracking-widest font-bold">Graphic Designer & Video Editor</p>
            </div>
          </div>

          <div className="text-neutral-500 text-sm font-medium">
            © {new Date().getFullYear()} All Rights Reserved.
          </div>

          <div className="text-neutral-500 text-sm flex items-center">
            Designed with <span className="text-red-600 mx-2 flex items-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span> by Md. Nafiz Iqbal
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
