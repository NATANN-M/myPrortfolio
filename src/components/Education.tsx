import React from 'react';
import { Calendar, Award, Briefcase } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Education: React.FC = () => {
  const educationItems = [
    {
      id: 1,
      title: "Bachelor of Science in Computer Science",
      institution: "St. Mary's University",
      period: "2022 - 2026",
      description: "Focusing on software engineering, modern web development, and architecture.",
      type: "education"
    },
    {
      id: 2,
      title: "Backend Developer Intern",
      institution: "ArifPay",
      period: "2025",
      description: "Developing and maintaining robust backend systems, collaborating with cross-functional teams to build secure financial software.",
      type: "experience"
    },
    {
      id: 3,
      title: "Freelance Developer",
      institution: "Self-employed",
      period: "2024 - Present",
      description: "Building responsive websites and web applications for small businesses. Managing end-to-end client relationships, requirements, and project timelines.",
      type: "experience"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20, rotateY: -10 },
    visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="education" className="py-24 bg-transparent" style={{ perspective: 1200 }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 drop-shadow-sm">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-emerald-400 dark:to-teal-400">Experience</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-amber-500 to-orange-500 dark:from-emerald-400 dark:to-teal-400 mx-auto rounded-full mb-8 shadow-sm"></div>
          <p className="text-lg text-zinc-600 dark:text-slate-300 drop-shadow-sm">
            My academic background and professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-amber-100 dark:bg-slate-800/80 backdrop-blur-md rounded-xl flex items-center justify-center mr-4 shadow-sm dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-amber-200/50 dark:border-slate-700/50">
                <Award size={24} className="text-amber-600 dark:text-slate-200" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white drop-shadow-sm">Education</h3>
            </div>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-amber-300 dark:before:via-slate-500 before:to-transparent">
              {educationItems
                .filter(item => item.type === 'education')
                .map(item => (
                  <motion.div
                    variants={itemVariants}
                    key={item.id}
                    className="relative pl-10 md:pl-0"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="md:hidden absolute left-3 w-4 h-4 rounded-full bg-amber-400 dark:bg-slate-300 ring-4 ring-amber-50 dark:ring-[#020617] mt-1.5 shadow-sm dark:shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                    <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-md p-6 lg:p-8 rounded-2xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-xl dark:hover:shadow-[0_15px_40px_rgba(0,0,0,0.5),0_0_15px_rgba(255,255,255,0.1)] border border-zinc-200 dark:border-slate-700/50 transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/50 dark:hover:border-teal-500/50 group">
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-slate-200 transition-colors">{item.title}</h4>
                      <p className="text-zinc-600 dark:text-slate-300 font-medium mb-3 text-lg">{item.institution}</p>
                      <div className="flex items-center text-sm text-zinc-500 dark:text-slate-400 mb-4 bg-white/80 dark:bg-slate-800/80 w-fit px-3 py-1 rounded-full border border-zinc-200 dark:border-slate-700/50 shadow-sm">
                        <Calendar size={14} className="mr-2 text-amber-500 dark:text-slate-400" />
                        <span className="font-medium">{item.period}</span>
                      </div>
                      <p className="text-zinc-600 dark:text-slate-400 leading-relaxed font-light">{item.description}</p>
                    </div>
                  </motion.div>
                ))
              }
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-orange-100 dark:bg-slate-800/80 backdrop-blur-md rounded-xl flex items-center justify-center mr-4 shadow-sm dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-orange-200/50 dark:border-slate-700/50">
                <Briefcase size={24} className="text-orange-600 dark:text-slate-200" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white drop-shadow-sm">Experience</h3>
            </div>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-orange-300 dark:before:via-slate-500 before:to-transparent">
              {educationItems
                .filter(item => item.type === 'experience')
                .map(item => (
                  <motion.div
                    variants={itemVariants}
                    key={item.id}
                    className="relative pl-10 md:pl-0"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="md:hidden absolute left-3 w-4 h-4 rounded-full bg-orange-400 dark:bg-slate-300 ring-4 ring-amber-50 dark:ring-[#020617] mt-1.5 shadow-sm dark:shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                    <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-md p-6 lg:p-8 rounded-2xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-xl dark:hover:shadow-[0_15px_40px_rgba(0,0,0,0.5),0_0_15px_rgba(255,255,255,0.1)] border border-zinc-200 dark:border-slate-700/50 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/50 dark:hover:border-teal-500/50 group">
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-slate-200 transition-colors">{item.title}</h4>
                      <p className="text-zinc-600 dark:text-slate-300 font-medium mb-3 text-lg">{item.institution}</p>
                      <div className="flex items-center text-sm text-zinc-500 dark:text-slate-400 mb-4 bg-white/80 dark:bg-slate-800/80 w-fit px-3 py-1 rounded-full border border-zinc-200 dark:border-slate-700/50 shadow-sm">
                        <Calendar size={14} className="mr-2 text-orange-500 dark:text-slate-400" />
                        <span className="font-medium">{item.period}</span>
                      </div>
                      <p className="text-zinc-600 dark:text-slate-400 leading-relaxed font-light">{item.description}</p>
                    </div>
                  </motion.div>
                ))
              }
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Education;