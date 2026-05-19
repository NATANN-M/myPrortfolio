import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SunrayBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const ySun = useTransform(scrollY, [0, 2000], [0, 200]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-slate-50 dark:bg-zinc-950 pointer-events-none transition-colors duration-1000">
      {/* The Sun */}
      <motion.div 
        style={{ y: ySun, willChange: "transform" }}
        className="absolute top-[-15%] right-[-20%] md:top-[-25%] md:right-[-10%] w-[600px] h-[600px] rounded-full opacity-70 mix-blend-normal dark:mix-blend-screen dark:opacity-60"
      >
        <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.4) 0%, rgba(253,230,138,0.2) 50%, transparent 70%)' }}></div>
        <div className="absolute inset-20 rounded-full opacity-90 dark:opacity-100" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)' }}></div>
        
        {/* Rotating Sun Rays */}
        <div className="absolute inset-[-50%] rounded-full opacity-50 dark:opacity-60" style={{ animation: 'spin 60s linear infinite', willChange: 'transform' }}>
          <div className="absolute top-1/2 left-0 w-full h-12 bg-gradient-to-r from-transparent via-amber-200/50 dark:via-amber-300/30 to-transparent transform -translate-y-1/2 rotate-[0deg]" style={{ filter: 'blur(10px)' }}></div>
          <div className="absolute top-1/2 left-0 w-full h-12 bg-gradient-to-r from-transparent via-amber-200/50 dark:via-amber-300/30 to-transparent transform -translate-y-1/2 rotate-[45deg]" style={{ filter: 'blur(10px)' }}></div>
          <div className="absolute top-1/2 left-0 w-full h-12 bg-gradient-to-r from-transparent via-amber-200/50 dark:via-amber-300/30 to-transparent transform -translate-y-1/2 rotate-[90deg]" style={{ filter: 'blur(10px)' }}></div>
          <div className="absolute top-1/2 left-0 w-full h-12 bg-gradient-to-r from-transparent via-amber-200/50 dark:via-amber-300/30 to-transparent transform -translate-y-1/2 rotate-[135deg]" style={{ filter: 'blur(10px)' }}></div>
        </div>
      </motion.div>

      {/* Floating Dust/Light Particles */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20" style={{ willChange: 'transform' }}>
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-amber-100 dark:bg-amber-200 rounded-full animate-pulse shadow-[0_0_8px_rgba(253,230,138,0.8)] dark:shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Ambient Light Blooms - optimized with radial gradients instead of heavy css blur */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full pointer-events-none mix-blend-normal dark:mix-blend-screen" style={{ background: 'radial-gradient(circle, rgba(253,230,138,0.2) 0%, transparent 60%)' }}></div>
      <div className="absolute top-[40%] left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none mix-blend-normal dark:mix-blend-screen" style={{ background: 'radial-gradient(circle, rgba(254,240,138,0.15) 0%, transparent 60%)' }}></div>
    </div>
  );
};

export default SunrayBackground;
