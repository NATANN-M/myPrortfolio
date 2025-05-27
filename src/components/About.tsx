import React from 'react';
import { Code, Server, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Getting to know the person behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a computer science student with a passion for web development and backend systems. 
              I believe in building clean, efficient, and scalable solutions that solve real-world problems.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             
              I've been constantly learning and expanding my skills across the full stack, 
              with a particular focus on backend technologies and architecture.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Always exploring new technologies, contributing to open-source 
              projects, or mentoring other aspiring developers. I'm always looking for new challenges 
              and opportunities to grow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-lg mb-4">
                  <Code size={24} />
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">Frontend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400"> UI/UX</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-lg mb-4">
                  <Server size={24} />
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">Backend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400"> Systems</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-lg mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">Learning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Always Growing</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Working on code" 
                className="w-full h-full object-cover"
              />
            </div>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;