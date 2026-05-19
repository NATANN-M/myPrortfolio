import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Convene Smart Event Management System",
      description: "Event Management Platform designed to facilitate the creation, discovery, and management of events. It provides a robust backend API supporting features like ticketing, payments, real-time notifications, and personalized event recommendations using ML.NET.",
      image: "images/convene.png",
      tags: ["C#", "Vue.js", "ASP.NET", "PostgreSQL"],
      github: "https://github.com/NATANN-M/Convene-Backend.git",
      demo: "https://curious-buttercream-1ddd3a.netlify.app",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Personal Photography Portfolio",
      description: "A premium, cinematic photography portfolio with a custom admin dashboard. Features include dynamic galleries, optimized image management, seamless transitions, and a responsive dark-themed UI.",
      image: "images/image copy.png",
      tags: ["Next.js", "React", "Tailwind CSS", "Prisma"],
      github: "https://github.com/NATANN-M/photography-portfolio.git",
      demo: "https://photography-portfolio-ult4.vercel.app",
      category: "fullstack"
    },
    {
      id: 3,
      title: "Spare Part Inventory Management System",
      description: "A web-based inventory management system for spare parts, built using HTML, Bootstrap, PHP, JavaScript, and CSS, featuring stock tracking, staff management, and Report Generation.",
      image: "images/image.png",
      tags: ["HTML", "Bootstrap", "PHP", "JavaScript"],
      github: "https://github.com/NATANN-M",
      demo: "https://inventorytest.wuaze.com",
      category: "fullstack"
    },
    {
      id: 4,
      title: "EthioHomes Online Booking and Rental Platform",
      description: "A full-stack online booking and rental web platform for EthioHomes, built using C# as the backend and Bootstrap for the frontend, featuring user authentication, property management, and payment integration.",
      image: "images/ethomes.png",
      tags: ["C#", "Bootstrap", "ASP.NET", "SQL Server"],
      github: "https://github.com/NATANN-M/EthioHomes",
      demo: "",
      category: "fullstack"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with a modern, minimal design.",
      image: "images/portfolio.png",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      github: "",
      demo: "",
      category: "frontend"
    },
  ];

  const filters = [
    { name: 'All Projects', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' },
    { name: 'Full Stack', value: 'fullstack' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 drop-shadow-sm">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-emerald-400 dark:to-teal-400">Projects</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-amber-500 to-orange-500 dark:from-emerald-400 dark:to-teal-400 mx-auto rounded-full mb-8 shadow-sm"></div>
            <p className="text-lg text-zinc-600 dark:text-slate-300 drop-shadow-sm">
              A selection of my recent work
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.value
                ? 'bg-amber-500 dark:bg-emerald-500 text-white shadow-md dark:shadow-[0_0_15px_rgba(16,185,129,0.3)] transform scale-105'
                : 'bg-white/60 dark:bg-slate-900/50 backdrop-blur-md text-zinc-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800/80 border border-zinc-200 dark:border-slate-700/50'
                }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="group flex flex-col bg-white/70 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl overflow-hidden border border-zinc-200 dark:border-slate-700/50 transition-all duration-500 shadow-lg dark:shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:shadow-xl dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(20,184,166,0.1)] hover:-translate-y-2 hover:border-amber-300 dark:hover:border-teal-500/50"
              >
                <div className="relative h-64 overflow-hidden bg-zinc-100 dark:bg-slate-800">
                  <div className="absolute inset-0 bg-amber-500/10 dark:bg-teal-500/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 dark:opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                    }}
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md rounded-full text-zinc-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-teal-400 transition-colors border border-zinc-200 dark:border-slate-700/50 shadow-sm dark:shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md rounded-full text-zinc-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-teal-400 transition-colors border border-zinc-200 dark:border-slate-700/50 shadow-sm dark:shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-teal-300 transition-colors drop-shadow-sm">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-zinc-700 dark:text-slate-200 rounded-full text-xs font-semibold tracking-wide border border-zinc-200 dark:border-slate-600/50 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/NATANN-M"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white dark:bg-slate-200 dark:text-slate-900 font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-zinc-800 dark:hover:bg-white"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
