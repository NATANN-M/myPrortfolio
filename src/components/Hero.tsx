import React from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-transparent">
      <motion.div 
        style={{ y, opacity }}
        className="container relative z-10 mx-auto px-4 md:px-6 py-12 md:py-24"
      >
        <div className="flex flex-col items-center justify-center text-center" style={{ perspective: 1000 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md text-amber-700 dark:text-emerald-300 text-sm font-semibold tracking-wide border border-amber-200/50 dark:border-emerald-700/50 shadow-sm inline-flex items-center">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 dark:bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 dark:bg-emerald-100"></span>
              </span>
              Available for work
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4 drop-shadow-sm dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-emerald-400 dark:to-teal-300">Natanim</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-zinc-700 dark:text-slate-300 mb-6 drop-shadow-sm">
              Software Developer
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed font-light"
          >
            A computer science student focused on building modern web applications
            and robust backend systems. Always learning, always building.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#projects" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-amber-500 dark:bg-emerald-500/20 text-white dark:text-emerald-300 font-medium rounded-xl border border-transparent dark:border-emerald-400/30 overflow-hidden transition-all hover:bg-amber-600 dark:hover:bg-emerald-500/30 shadow-lg hover:shadow-amber-500/30 dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/60 dark:bg-transparent backdrop-blur-md text-zinc-800 dark:text-slate-300 font-medium rounded-xl border border-zinc-300/50 dark:border-transparent transition-all hover:bg-white dark:hover:text-white dark:hover:border-slate-500/30 shadow-sm hover:shadow-md dark:shadow-none hover:-translate-y-1"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, bottom: 0 }}
          animate={{ opacity: 1, bottom: 40 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center"
        >
          <a 
            href="#about" 
            className="animate-bounce p-3 bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm rounded-full shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-amber-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={20} className="text-amber-600 dark:text-slate-300" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;