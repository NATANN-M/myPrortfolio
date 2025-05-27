import React from 'react';
import { Calendar, Award,Briefcase } from 'lucide-react';

const Education: React.FC = () => {
  const educationItems = [
    {
      id: 1,
      title: "Bachelor of Science in Computer Science",
      institution: "St Mary' Universty",
      period: "2022 - Present",
      description: "Focusing on software engineering and web development.",
      type: "education"
    },

    {
      id: 2,
      title: "Junior Web Developer",
      institution: "TechStart Solutions",
      period: "2022 - Present",
      description: "Developing and maintaining web applications using HTML and PHP. Collaborating with design and backend teams.",
      type: "experience"
    },
    {
      id: 3,
      title: "Freelance Developer",
      institution: "Self-employed",
      period: "2023 - present",
      description: "Built websites and web applications for small businesses and startups. Managed client relationships and project timelines.",
      type: "experience"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education & Experience</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            My academic background and  journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-8">
              <Award size={24} className="text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-8">
              {educationItems
                .filter(item => item.type === 'education')
                .map(item => (
                  <div 
                    key={item.id}
                    className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-900"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                    <div className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{item.institution}</p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span>{item.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-8">
              <Briefcase size={24} className="text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
            </div>
            <div className="space-y-8">
              {educationItems
                .filter(item => item.type === 'experience')
                .map(item => (
                  <div 
                    key={item.id}
                    className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-900"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                    <div className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{item.institution}</p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span>{item.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Education;