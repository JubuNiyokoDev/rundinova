import React from 'react';
import { Linkedin, Twitter, Github, Facebook, Instagram } from 'lucide-react';
import { foundersData, developersData } from '../data/teamData';
import { TeamMember } from '../types';

interface TeamSectionProps {
  t: (key: string) => string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ t }) => {
  const renderSocialLinks = (social?: TeamMember['social']) => {
    if (!social) return null;

    const iconMap = {
      linkedin: Linkedin,
      twitter: Twitter,
      github: Github,
      facebook: Facebook,
      instagram: Instagram
    };

    return (
      <div className="flex justify-center space-x-3 mt-4">
        {Object.entries(social).map(([platform, url]) => {
          const Icon = iconMap[platform as keyof typeof iconMap];
          if (!Icon || !url) return null;
          
          return (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors group"
            >
              <Icon className="w-4 h-4 text-gray-600 group-hover:text-white" />
            </a>
          );
        })}
      </div>
    );
  };

  const renderTeamCard = (member: TeamMember, index: number) => (
    <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.nextElementSibling!.classList.remove('hidden');
          }}
        />
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hidden">
          <span className="text-green-600 font-bold text-lg">
            {member.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
      </div>
      <h4 className="font-semibold mb-2 text-green-800">{member.name}</h4>
      <p className="text-gray-600 text-sm mb-4">{member.role}</p>
      {renderSocialLinks(member.social)}
    </div>
  );

  return (
    <section id="team" className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('team.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('team.subtitle')}</p>
        </div>

        {/* Founders Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-green-800">Fondateurs & Responsables</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foundersData.map((member, index) => renderTeamCard(member, index))}
          </div>
        </div>

        {/* Developers Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-green-800">Équipe de Développement</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developersData.map((member, index) => renderTeamCard(member, index + foundersData.length))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;