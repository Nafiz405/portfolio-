
import React from 'react';

const Contact: React.FC = () => {
  const socials = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/nafiz.1234567890.nafiz',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: 'hover:bg-[#1877F2]'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nafiz-iqbal-41080934b/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: 'hover:bg-[#0077b5]'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/nafiz____09/?next=%2F',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Nafiz405',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      color: 'hover:bg-[#333]'
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold">Get In <span className="text-red-500">Touch</span></h2>
              <p className="text-neutral-400 mt-4 leading-relaxed">
                Have a project in mind? Or just want to say hello? 
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:nafiz7664@gmail.com"
                className="group flex items-center space-x-4 p-4 bg-neutral-900 rounded-xl border border-white/5 hover:border-red-500/30 transition-all block relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-red-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center text-red-500 relative z-10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Email Me</p>
                  <p className="text-lg font-medium">nafiz7664@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="pt-6">
              <div className="flex items-center space-x-3 mb-6 group cursor-default">
                <div className="h-[2px] w-8 bg-red-600 group-hover:w-16 transition-all duration-500"></div>
                <h3 className="text-sm font-black text-white uppercase tracking-[0.3em]">
                  Social <span className="text-red-500">Media</span>
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-5">
                {socials.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-14 h-14 bg-neutral-900 border border-white/5 rounded-2xl flex items-center justify-center transition-all duration-500 text-neutral-400 overflow-hidden hover:text-white hover:scale-110 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
                    title={social.name}
                  >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${social.color}`}></div>
                    <div className="relative z-10 transform group-hover:rotate-[360deg] transition-transform duration-700">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-8 rounded-3xl border border-white/5 relative group">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-red-600 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-700"></div>
            <form className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-500 tracking-wider">YOUR NAME</label>
                <input 
                  type="text" 
                  placeholder="Md. Nafiz Iqbal" 
                  className="w-full bg-neutral-800/50 border border-white/5 rounded-xl px-4 py-4 focus:outline-none focus:border-red-500 focus:bg-neutral-800 transition-all text-white placeholder:text-neutral-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-500 tracking-wider">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full bg-neutral-800/50 border border-white/5 rounded-xl px-4 py-4 focus:outline-none focus:border-red-500 focus:bg-neutral-800 transition-all text-white placeholder:text-neutral-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-500 tracking-wider">HOW CAN I HELP?</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project or vision..." 
                  className="w-full bg-neutral-800/50 border border-white/5 rounded-xl px-4 py-4 focus:outline-none focus:border-red-500 focus:bg-neutral-800 transition-all text-white placeholder:text-neutral-600 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="group w-full py-5 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest rounded-xl transition-all relative overflow-hidden shadow-xl"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
