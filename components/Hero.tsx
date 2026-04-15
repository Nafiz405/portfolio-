
import React from 'react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Abstract Background Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-900/10 rounded-full blur-[100px] pointer-events-none"
      ></motion.div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-600 shrink-0"
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/1DynNKbzMFL7nO2XNEnrlUbZarWnr9s7l" 
                  alt="Md. Nafiz Iqbal" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <span className="text-red-500 font-bold tracking-widest uppercase text-xs md:text-sm block">
                Md. Nafiz Iqbal | Creative Director
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Designing <br />
              the <span className="text-red-600">Future of Brand</span>
            </h1>
            <p className="text-neutral-400 text-base md:text-xl max-w-lg mt-6">
              I specialize in high-end brand identity and cinematic content. Helping businesses like <span className="text-white font-semibold">Yummy Bake's Villa</span> stand out with premium visual storytelling.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio" 
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
            >
              View My Work
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 border border-white/20 hover:border-red-500 hover:text-red-500 font-bold rounded-lg transition-all"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-red-600 rounded-3xl blur-[80px] opacity-10 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            {/* Skill Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-neutral-900/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-red-500/40 transition-all duration-500 group/skill"
            >
              <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover/skill:bg-red-600/20 transition-colors">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Graphic Design</h3>
              <p className="text-neutral-500 text-xs mt-2 leading-relaxed">Branding, Logos & Social Media Content</p>
              <a 
                href="https://lh3.googleusercontent.com/d/11xixht3-QPXZVvIX5p4c0pWMcKFZQmDn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-[10px] font-bold text-red-500 hover:text-red-400 transition-colors uppercase tracking-widest"
              >
                View Certificate
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>

            {/* Skill Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-neutral-900/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-red-500/40 transition-all duration-500 group/skill"
            >
              <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover/skill:bg-red-600/20 transition-colors">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Video Editing</h3>
              <p className="text-neutral-500 text-xs mt-2 leading-relaxed">Cinematic Motion & Visual Storytelling</p>
            </motion.div>

            {/* Skill Card 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-neutral-900/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-red-500/40 transition-all duration-500 group/skill"
            >
              <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover/skill:bg-red-600/20 transition-colors">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">AI Workflow</h3>
              <p className="text-neutral-500 text-xs mt-2 leading-relaxed">Leveraging AI for Modern Creative Edge</p>
              <a 
                href="https://lh3.googleusercontent.com/d/1s-XIf1LY1prIptTbYxVJeBplze0P3K8Q" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-[10px] font-bold text-red-500 hover:text-red-400 transition-colors uppercase tracking-widest"
              >
                View Certificate
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>

            {/* Skill Card 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-neutral-900/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-red-500/40 transition-all duration-500 group/skill"
            >
              <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover/skill:bg-red-600/20 transition-colors">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">C Programming</h3>
              <p className="text-neutral-500 text-xs mt-2 leading-relaxed">Logical Structure & Problem Solving</p>
              <a 
                href="https://lh3.googleusercontent.com/d/1TFtZs3z6WBb3fTk3bJ_rHHhWVPPsH0-x" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-[10px] font-bold text-red-500 hover:text-red-400 transition-colors uppercase tracking-widest"
              >
                View Certificate
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>

            {/* Wide Skill Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="col-span-1 sm:col-span-2 p-6 bg-neutral-900/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-red-500/40 transition-all duration-500 group/skill flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center shrink-0 group-hover/skill:bg-red-600/20 transition-colors">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">Mobile Photography</h3>
                <p className="text-neutral-500 text-sm mt-1">Capturing Perspective, Composition & Lighting</p>
              </div>
              <a 
                href="https://lh3.googleusercontent.com/d/1qkuI5VbQTdCaJ2r9d5pSeescQLVghRYa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[10px] font-bold text-red-500 hover:text-red-400 transition-colors uppercase tracking-widest"
              >
                View Certificate
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
      >
        <a href="#about" className="text-white/40 hover:text-red-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
