import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/40 dark:bg-[#020617]/80 backdrop-blur-xl text-zinc-700 dark:text-slate-300 py-16 border-t border-zinc-200 dark:border-slate-800/50 relative z-10 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-extrabold tracking-tighter text-zinc-900 dark:text-white flex items-center gap-1 mb-6 drop-shadow-sm">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-emerald-400 dark:to-teal-300">Natanim</span>
            </a>
            <p className="text-zinc-600 dark:text-slate-400 mb-6 max-w-md leading-relaxed">
              A passionate computer science student and web developer, 
              building modern web applications and robust backend systems. Let's create something amazing together.
            </p>
            <p className="text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} Natanim Masresha. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-zinc-900 dark:text-white drop-shadow-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-zinc-600 hover:text-amber-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 transform duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-zinc-900 dark:text-white drop-shadow-sm">Let's Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/NATANN-M" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-amber-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 transform duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/natanim-masresha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-amber-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 transform duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/natan13" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-amber-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 transform duration-300"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Natanimmasresha18@gmail.com"
                  className="text-zinc-600 hover:text-amber-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 transform duration-300"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
