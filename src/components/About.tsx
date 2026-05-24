import React from 'react';
import { Server, BookOpen, ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "50px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 drop-shadow-sm">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-emerald-400 dark:to-teal-400">Me</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1.5 w-24 bg-gradient-to-r from-amber-500 to-orange-500 dark:from-emerald-400 dark:to-teal-400 mx-auto rounded-full mb-8 shadow-sm"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-zinc-600 dark:text-slate-300 drop-shadow-sm">
            Getting to know the person behind the code
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "50px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <div className="space-y-6 text-lg text-zinc-700 dark:text-slate-300 leading-relaxed font-light drop-shadow-sm">
              <motion.p variants={itemVariants}>
                I'm a computer science Graduate with a passion for web development and backend systems. 
                I believe in building clean, efficient, and scalable solutions that solve real-world problems.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                I've been constantly learning and expanding my skills across the full stack, 
                with a particular focus on backend technologies and modern architecture.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                Whether exploring new frameworks, contributing to open-source projects, or optimizing existing systems, I'm always looking for new challenges and opportunities to grow.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="group bg-white/60 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-zinc-200 dark:border-slate-700/50 hover:border-amber-400/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:-translate-y-2 text-center">
                <div className="mx-auto w-14 h-14 flex items-center justify-center bg-amber-100 dark:bg-slate-800/80 text-amber-600 dark:text-emerald-400 rounded-xl mb-5 group-hover:scale-110 group-hover:bg-amber-200 dark:group-hover:bg-slate-700/80 transition-all duration-300 shadow-sm dark:shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <Server size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Backend Architecture</h3>
                <p className="text-sm text-zinc-500 dark:text-slate-400">Scalable & Secure Systems</p>
              </div>
              
              <div className="group bg-white/60 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-zinc-200 dark:border-slate-700/50 hover:border-orange-400/50 dark:hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(20,184,166,0.1)] hover:-translate-y-2 text-center">
                <div className="mx-auto w-14 h-14 flex items-center justify-center bg-orange-100 dark:bg-slate-800/80 text-orange-600 dark:text-teal-400 rounded-xl mb-5 group-hover:scale-110 group-hover:bg-orange-200 dark:group-hover:bg-slate-700/80 transition-all duration-300 shadow-sm dark:shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <BookOpen size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Continuous Learning</h3>
                <p className="text-sm text-zinc-500 dark:text-slate-400">Always Growing</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-orange-500 dark:from-emerald-500 dark:to-teal-500 rounded-2xl blur-3xl opacity-20 transform scale-105 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/40 dark:border-slate-700/50 group">
              <img 
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Working on code" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 dark:opacity-80 dark:mix-blend-luminosity dark:hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 flex items-end p-8">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-semibold text-lg flex items-center drop-shadow-md">
                    Passion for coding <ChevronRight className="w-5 h-5 ml-1 text-amber-400 dark:text-emerald-400" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;