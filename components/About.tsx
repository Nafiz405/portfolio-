
import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="space-y-24">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3 shrink-0"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
                <img 
                  src="https://lh3.googleusercontent.com/d/1DynNKbzMFL7nO2XNEnrlUbZarWnr9s7l" 
                  alt="Md. Nafiz Iqbal" 
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-50"></div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-6 flex-1"
          >
            <span className="text-red-500 font-bold uppercase tracking-[0.3em] text-sm">The Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Turning Ideas Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Compelling Realities</span>
            </h2>
            <p className="text-lg md:text-2xl text-neutral-300 font-light leading-relaxed">
              I am a multidisciplinary Graphic Designer and Video Editor driven by a single mission: to turn abstract ideas into compelling visual realities. I am a creator who understands the logic behind the art.
            </p>
          </motion.div>
        </div>

        {/* Detailed Narrative Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Creative Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group space-y-4 p-8 bg-neutral-900/30 rounded-3xl border border-white/5 hover:border-red-500/20 transition-all duration-500"
          >
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-white">Where Creativity Meets Motion</h3>
            <p className="text-neutral-400 leading-relaxed">
              My primary expertise lies in the world of visuals. As a Graphic Designer, I don’t just fill spaces; I create identities. Whether it’s a logo that defines a brand or a social media post that stops the scroll, I ensure every pixel serves a purpose. 
            </p>
            <p className="text-neutral-400 leading-relaxed">
              In Video Editing, I focus on rhythm and flow, transforming raw footage into engaging stories that resonate with audiences.
            </p>
          </motion.div>

          {/* Technical Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group space-y-4 p-8 bg-neutral-900/30 rounded-3xl border border-white/5 hover:border-red-500/20 transition-all duration-500"
          >
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-2xl font-bold text-white">The Technical Edge: Logic & AI</h3>
            <p className="text-neutral-400 leading-relaxed">
              I possess a solid understanding of <span className="text-white font-semibold">Basic C Programming</span>, which gives me a structured approach to problem-solving.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I actively leverage <span className="text-red-500">Artificial Intelligence (AI)</span> tools to enhance my creative workflow, ensuring that my designs are not only artistic but also modern and efficient. This blend of "Art + Tech" delivers work that is innovative and future-ready.
            </p>
          </motion.div>

          {/* Perspective Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group space-y-4 p-8 bg-neutral-900/30 rounded-3xl border border-white/5 hover:border-red-500/20 transition-all duration-500"
          >
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-2xl font-bold text-white">The Lens & The Perspective</h3>
            <p className="text-neutral-400 leading-relaxed">
              My creativity extends beyond the computer screen. I am an avid <span className="text-white font-semibold">Mobile Photographer</span>. 
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Photography teaches me the nuances of lighting, composition, and framing—skills that I directly translate into my graphic design and video editing projects. Capturing the world through my lens helps me stay inspired and sharp.
            </p>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group space-y-4 p-8 bg-neutral-900/30 rounded-3xl border border-white/5 hover:border-red-500/20 transition-all duration-500"
          >
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
            <p className="text-neutral-400 leading-relaxed">
              Notably, I worked extensively with <span className="text-white font-bold italic">"Yummy Bake's Villa"</span>, where I played a key role in shaping their visual content.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              This experience, along with numerous other collaborations, has taught me the importance of meeting deadlines, understanding client needs, and delivering excellence under pressure.
            </p>
          </motion.div>
        </div>

        {/* Final Vision Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-8 md:p-20 bg-neutral-900 rounded-[40px] border border-white/5 overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px]"></div>
          <div className="relative z-10 space-y-8">
            <div className="text-4xl">🚀</div>
            <h3 className="text-3xl md:text-5xl font-black">The Vision</h3>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              I believe that design is a language, and I am here to help you speak it fluently. Whether you need a high-energy video, a brand-new identity, or a creative partner who understands both code and canvas—I am ready to collaborate.
            </p>
            <div className="pt-4">
              <p className="text-xl md:text-2xl font-bold italic text-red-500">Let’s create something extraordinary together.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
