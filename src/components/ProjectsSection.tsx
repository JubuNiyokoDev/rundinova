import React from 'react';
import { ExternalLink, Users, Shield, ShoppingCart } from 'lucide-react';
import { projectsData } from '../data/projectsData';

interface ProjectsSectionProps {
  t: (key: string) => string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ t }) => {
  const iconMap = {
    Users,
    Shield,
    ShoppingCart
  };

  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('projects.subtitle')}</p>
        </div>

        <div className="space-y-16">
          {projectsData.map((project, index) => {
            const Icon = iconMap[project.icon as keyof typeof iconMap];
            const isEven = index % 2 === 0;

            return (
              <div key={project.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`p-12 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className={`inline-block bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit`}>
                      {project.badge}
                    </div>
                    <h3 className="text-3xl font-bold mb-6 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {project.website && (
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 w-fit space-x-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Visiter {project.id === 'comlab' ? 'ComLab' : 'le projet'}</span>
                      </a>
                    )}
                  </div>
                  
                  <div className={`bg-gradient-to-br ${project.gradient} flex items-center justify-center p-12 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="w-32 h-32 bg-white/20 rounded-3xl flex items-center justify-center">
                      {Icon && <Icon className="text-white w-16 h-16" />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;