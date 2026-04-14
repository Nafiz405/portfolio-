
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
}

interface Project {
  title: string;
  category: string;
  client: string;
  image: string; // Thumbnail image
  media: ProjectMedia[]; // Full gallery media
  description: string;
  technologies: string[];
  liveUrl: string;
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setCurrentMediaIndex(0); // Reset carousel on open
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      title: "Yummy Bake's Villa",
      category: 'Brand Identity',
      client: "Yummy Bake's Villa",
      image: 'https://lh3.googleusercontent.com/d/1BsBEIi8yZT15fNreXbckhWH3tSulbuCZ',
      media: [
        { type: 'image', url: 'https://lh3.googleusercontent.com/d/1BsBEIi8yZT15fNreXbckhWH3tSulbuCZ' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200' }
      ],
      description: 'A premium visual identity for a high-end bakery. The design centers around a golden tower motif, symbolizing the "Villa" aspect, paired with elegant typography and star-studded detailing to evoke a sense of luxury and enchantment.',
      technologies: ['Vector Illustration', 'Gold Foil Texturing', 'Brand Strategy', 'Logo Design'],
      liveUrl: '#'
    }
  ];

  const closeModal = () => setSelectedProject(null);

  const nextMedia = () => {
    if (!selectedProject) return;
    setCurrentMediaIndex((prev) => (prev + 1) % selectedProject.media.length);
  };

  const prevMedia = () => {
    if (!selectedProject) return;
    setCurrentMediaIndex((prev) => (prev - 1 + selectedProject.media.length) % selectedProject.media.length);
  };

  return (
    <div className="container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-red-500 font-bold uppercase tracking-widest text-sm">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Selected Works</h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
      </motion.div>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-1 lg:grid-cols-1 max-w-2xl w-full">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 hover:border-red-500/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(239,68,68,0.1)]"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="p-8">
                <span className="text-red-500 text-xs font-bold uppercase tracking-wider">{project.category}</span>
                <h3 className="text-2xl font-bold mt-2 group-hover:text-red-500 transition-colors">{project.title}</h3>
                <p className="text-neutral-500 text-sm mt-1">Client: {project.client}</p>
                
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 flex items-center text-sm font-bold text-white/50 group-hover:text-white transition-colors cursor-pointer focus:outline-none"
                >
                  VIEW PROJECT DETAILS 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7-7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
          >
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
              onClick={closeModal}
            ></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-neutral-900 w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 z-30 p-2 bg-black/50 hover:bg-red-600 rounded-full text-white transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Carousel Area */}
              <div className="relative w-full md:w-[60%] bg-black flex items-center justify-center min-h-[300px] md:min-h-full group/carousel">
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    {selectedProject.media[currentMediaIndex].type === 'image' ? (
                      <motion.img 
                        key={currentMediaIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        src={selectedProject.media[currentMediaIndex].url} 
                        alt={`${selectedProject.title} ${currentMediaIndex + 1}`} 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <motion.video 
                        key={currentMediaIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        src={selectedProject.media[currentMediaIndex].url} 
                        className="w-full h-full object-contain"
                        controls
                        autoPlay
                      />
                    )}
                  </AnimatePresence>
                </div>

                {selectedProject.media.length > 1 && (
                  <>
                    <button onClick={prevMedia} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-red-600 text-white rounded-full transition-all md:opacity-0 group-hover/carousel:opacity-100 backdrop-blur-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={nextMedia} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-red-600 text-white rounded-full transition-all md:opacity-0 group-hover/carousel:opacity-100 backdrop-blur-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </>
                )}
              </div>

              {/* Content Area */}
              <div className="w-full md:w-[40%] p-8 md:p-12 overflow-y-auto space-y-8 bg-neutral-900/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <span className="text-red-500 font-bold uppercase tracking-widest text-xs inline-block px-3 py-1 bg-red-600/10 rounded-full">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center space-x-2 text-neutral-500 font-medium">
                     <span>Client: {selectedProject.client}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest">About the Work</h4>
                  <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest">Expertise Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-4 py-1.5 bg-neutral-800 border border-white/5 rounded-lg text-xs font-semibold text-neutral-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <a href={selectedProject.liveUrl} className="w-full inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition-all">
                    View Full Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
