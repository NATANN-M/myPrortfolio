import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Natanim Masresha
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-gray-600 dark:text-gray-300">
                Web & Backend Developer
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              A  computer science student focused on building modern web applications
              and  backend systems. Always learning, always building.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 font-medium rounded-lg transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          {/* <div className="lg:col-span-2 order-first lg:order-last mx-auto">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Natanim Masresha" 
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}
        </div>
        
        <div className="mt-16 flex justify-center">
          <a 
            href="#about" 
            className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} className="text-indigo-600 dark:text-indigo-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;