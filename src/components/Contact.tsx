import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, MessageSquare } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Contact: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 drop-shadow-sm">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-emerald-400 dark:to-teal-400">Touch</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-amber-500 to-orange-500 dark:from-emerald-400 dark:to-teal-400 mx-auto rounded-full mb-8 shadow-sm"></div>
          <p className="text-lg text-zinc-600 dark:text-slate-300 drop-shadow-sm">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-zinc-200 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="space-y-10">
            <div>
              <motion.h3 variants={itemVariants} className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 flex items-center drop-shadow-sm">
                <MessageSquare className="mr-3 text-amber-500 dark:text-emerald-400" /> Let's Connect
              </motion.h3>
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="flex items-start group">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-white/90 dark:bg-slate-800/80 backdrop-blur-md text-amber-600 dark:text-slate-200 rounded-xl shadow-sm border border-zinc-200 dark:border-slate-600/50 mr-5 group-hover:scale-110 group-hover:shadow-md dark:group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:bg-amber-50 dark:group-hover:bg-slate-700 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-zinc-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:Natanimmasresha18@gmail.com" className="text-lg text-zinc-900 dark:text-white hover:text-amber-600 dark:hover:text-emerald-400 transition-colors font-medium">
                      Natanimmasresha18@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start group">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-white/90 dark:bg-slate-800/80 backdrop-blur-md text-amber-600 dark:text-slate-200 rounded-xl shadow-sm border border-zinc-200 dark:border-slate-600/50 mr-5 group-hover:scale-110 group-hover:shadow-md dark:group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:bg-amber-50 dark:group-hover:bg-slate-700 transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-zinc-500 dark:text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+251937898518" className="text-lg text-zinc-900 dark:text-white hover:text-amber-600 dark:hover:text-emerald-400 transition-colors font-medium">
                      +251937898518
                    </a>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start group">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-white/90 dark:bg-slate-800/80 backdrop-blur-md text-amber-600 dark:text-slate-200 rounded-xl shadow-sm border border-zinc-200 dark:border-slate-600/50 mr-5 group-hover:scale-110 group-hover:shadow-md dark:group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:bg-amber-50 dark:group-hover:bg-slate-700 transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-zinc-500 dark:text-slate-400 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-lg text-zinc-900 dark:text-white font-medium">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <motion.div variants={itemVariants} className="bg-white/40 dark:bg-[#020617]/50 backdrop-blur-md p-8 rounded-3xl border border-white/60 dark:border-slate-800/80 text-center shadow-[inset_0_0_20px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Social Profiles</h3>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://github.com/NATANN-M" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center bg-white/90 dark:bg-slate-800/80 text-zinc-700 dark:text-slate-200 hover:bg-zinc-900 hover:text-white dark:hover:bg-slate-200 dark:hover:text-slate-900 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-[0_5px_15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] border border-zinc-200 dark:border-slate-700/50"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/natanim-masresha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center bg-white/90 dark:bg-slate-800/80 text-zinc-700 dark:text-slate-200 hover:bg-[#0077b5] hover:text-white rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-[0_5px_15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_15px_rgba(0,119,181,0.6)] border border-zinc-200 dark:border-slate-700/50 hover:border-[#0077b5]"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://t.me/natan13" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center bg-white/90 dark:bg-slate-800/80 text-zinc-700 dark:text-slate-200 hover:bg-[#0088cc] hover:text-white rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-[0_5px_15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_15px_rgba(0,136,204,0.6)] border border-zinc-200 dark:border-slate-700/50 hover:border-[#0088cc]"
                  aria-label="Telegram"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;