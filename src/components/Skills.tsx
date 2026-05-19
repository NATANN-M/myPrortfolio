import React from 'react';
import { motion, Variants } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion"]
    },
    {
      title: "Backend Development",
      skills: ["PHP", "C#", "Node.js", "Express.js", "ASP.NET", "SQL Server", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git & GitHub", "Postman", "Android Studio", "Linux", "Docker", "Agile/Scrum"]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, rotateX: 15 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
  };

  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden" style={{ perspective: 1000 }}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 drop-shadow-sm">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-emerald-400 dark:to-teal-400">Expertise</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-amber-500 to-orange-500 dark:from-emerald-400 dark:to-teal-400 mx-auto rounded-full mb-8 shadow-sm"></div>
          <p className="text-lg text-zinc-600 dark:text-slate-300 drop-shadow-sm">
            A comprehensive toolkit for building robust, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9, rotateY: index === 0 ? 15 : index === 2 ? -15 : 0 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl border border-zinc-200 dark:border-slate-700/50 shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-xl dark:hover:shadow-[0_15px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(20,184,166,0.1)] hover:border-amber-400/50 dark:hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-2"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 pb-4 border-b border-zinc-200 dark:border-slate-700/50 drop-shadow-sm">
                {category.title}
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2, rotateX: 10 }}
                    className="px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-zinc-200 dark:border-slate-600/50 text-zinc-700 dark:text-slate-200 rounded-xl text-sm font-medium shadow-sm hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] hover:border-amber-400/50 dark:hover:border-teal-400/50 hover:text-amber-600 dark:hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 max-w-4xl mx-auto text-center"
        >
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-amber-400 to-orange-500 dark:from-emerald-400 dark:to-teal-500 mb-8 shadow-sm dark:shadow-[0_0_15px_rgba(20,184,166,0.1)]">
            <div className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-md px-8 py-3 rounded-full">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-emerald-400 dark:to-teal-400">
                Currently Exploring
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Cloud Architecture (AWS/Azure)", "Microservices", "GraphQL", "Go (Golang)", "Machine Learning Integration"].map((item, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md text-zinc-700 dark:text-slate-200 border border-zinc-200 dark:border-slate-600/50 rounded-2xl text-sm font-semibold tracking-wide shadow-sm hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:border-amber-400/50 dark:hover:border-teal-400/50 hover:-translate-y-1 transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;