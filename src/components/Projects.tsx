import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

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
title: "EthioHomes Online Booking and Rental Web Platform",
description: "A full-stack online booking and rental web platform for EthioHomes, built using C# as the backend and Bootstrap for the frontend, featuring user authentication, property management, and payment integration.",
image: "src/images/ethomes.png",
tags: ["C#", "Bootstrap", "ASP.NET", "SQL Server"],
github: "https://github.com/NATANN-M/EthioHomes",
demo: "#",
category: "fullstack"
    },
    {
    id: 2,
title: "Spare Part Inventory Management System",
description: "A web-based inventory management system for spare parts, built using HTML, Bootstrap, PHP, JavaScript, and CSS, featuring stock tracking, staff management, and Report Generation.",
image: "/images/image.png",
tags: ["HTML", "Bootstrap", "PHP", "JavaScript", "CSS"],
github: "https://github.com/NATANN-M",
demo: "https://inventorytest.wuaze.com",
category: "fullstack"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with a modern, minimal design.",
      image: "/images/portfolio.png",
      tags: ["React", "Tailwind CSS"],
      github: "",
      demo: "#",
      category: "frontend"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application that displays current and forecasted weather data from a third-party API.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["JavaScript", "API Integration", "CSS"],
      github: "https://github.com/NATANN-M",
      demo: "#",
      category: "frontend"
    },
    {
      id: 5,
      title: "Product API",
      description: "Backend service for testing local Apps for product data and Using APIS.",
      image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["C#"],
      github: "#",
      demo: "#",
      category: "backend"
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            A selection of my recent work
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between pt-2">
                  <a 
                    href={project.github}
                    className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/NATANN-M"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            <Github size={18} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
