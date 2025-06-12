import React from 'react';
import { Rocket, Phone, Brain, Wifi } from 'lucide-react';

interface HeroSectionProps {
  t: (key: string) => string;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ t, scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-green-400/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-green-600/10 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                RundiNova Tech
              </span>
              <span className="block text-2xl lg:text-3xl text-gray-300 font-normal mt-2">
                {t('hero.subtitle')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Rocket className="w-5 h-5" />
                <span>{t('hero.discover')}</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-green-500 hover:bg-green-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-white"
              >
                <Phone className="w-5 h-5" />
                <span>{t('hero.contact')}</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400">4</div>
                <div className="text-sm text-gray-400">{t('hero.stats.projects')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">3</div>
                <div className="text-sm text-gray-400">{t('hero.stats.technologies')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">1</div>
                <div className="text-sm text-gray-400">{t('hero.stats.country')}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Floating Cards */}
              <div className="absolute top-0 right-0 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-4 animate-float">
                <Brain className="text-green-400 w-8 h-8 mb-2" />
                <div className="text-sm text-white">{t('hero.cards.ai')}</div>
              </div>
              
              <div className="absolute top-32 left-0 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-4 animate-float-delayed">
                <div className="text-green-400 text-2xl mb-2">⛓️</div>
                <div className="text-sm text-white">{t('hero.cards.blockchain')}</div>
              </div>
              
              <div className="absolute bottom-0 right-8 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-4 animate-float">
                <Wifi className="text-green-400 w-8 h-8 mb-2" />
                <div className="text-sm text-white">{t('hero.cards.iot')}</div>
              </div>

              {/* Central Logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
                <img 
                  src="./rundinovatech_cropped_wbg.png" 
                  alt="RundiNova Tech Logo" 
                  className="w-20 h-20 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling!.classList.remove('hidden');
                  }}
                />
                <Rocket className="w-12 h-12 text-white hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="w-0.5 h-12 bg-gradient-to-b from-green-400 to-transparent mx-auto mb-2"></div>
        <div className="text-sm text-gray-400 animate-bounce">{t('hero.scroll')}</div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;