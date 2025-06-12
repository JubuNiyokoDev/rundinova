import React, { useEffect, useState } from 'react';
import { translations } from './data/translations';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import ProjectsSection from './components/ProjectsSection';
import { History, Target, Lightbulb, Heart, Handshake, Star, Code, Server, Smartphone, GraduationCap, Globe, Brain, Wifi, MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || key;
  };

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
        isScrolled={isScrolled}
        t={t}
        scrollToSection={scrollToSection}
      />

      <HeroSection t={t} scrollToSection={scrollToSection} />

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('about.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('about.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                <History className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-green-800">{t('about.history.title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('about.history.description')}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                <Target className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-green-800">{t('about.mission.title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('about.mission.description')}</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-800">{t('about.values.title')}</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: t('about.values.innovation.title'), desc: t('about.values.innovation.description') },
              { icon: Heart, title: t('about.values.impact.title'), desc: t('about.values.impact.description') },
              { icon: Handshake, title: t('about.values.collaboration.title'), desc: t('about.values.collaboration.description') },
              { icon: Star, title: t('about.values.excellence.title'), desc: t('about.values.excellence.description') }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2 text-green-800">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">{t('services.title')}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t('services.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'Développement Logiciel', desc: 'Plateformes web, applications mobiles, solutions cloud et logiciels métiers sur mesure.' },
              { icon: Server, title: 'Systèmes IT & Infrastructure', desc: 'Performance et sécurité de votre infrastructure informatique garanties.' },
              { icon: Smartphone, title: 'Transformation Digitale', desc: 'Guidage expert à travers le paysage numérique moderne.' },
              { icon: GraduationCap, title: 'Formation & Certification', desc: 'Renforcement des compétences avec nos programmes sur mesure.' },
              { icon: Globe, title: 'Services Internationaux', desc: 'Délocalisez vos projets IT en toute confiance avec nos équipes.' }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 hover:border-green-500 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection t={t} />

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">{t('solutions.title')}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t('solutions.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { 
                icon: '⛓️', 
                title: 'Blockchain', 
                desc: 'Pour une transparence accrue, une traçabilité inviolable et une sécurité des transactions sans précédent.',
                gradient: 'from-blue-500 to-purple-600'
              },
              { 
                icon: Brain, 
                title: 'Intelligence Artificielle', 
                desc: 'Pour l\'automatisation des tâches, l\'analyse prédictive et une prise de décision intelligente.',
                gradient: 'from-pink-500 to-red-600'
              },
              { 
                icon: Wifi, 
                title: 'Internet des Objets', 
                desc: 'Pour connecter intelligemment les objets, optimisant les ressources et améliorant l\'efficacité.',
                gradient: 'from-cyan-500 to-blue-600'
              }
            ].map((solution, index) => (
              <div key={index} className="text-center group">
                <div className={`w-32 h-32 bg-gradient-to-r ${solution.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  {typeof solution.icon === 'string' ? (
                    <span className="text-6xl">{solution.icon}</span>
                  ) : (
                    <solution.icon className="text-white w-16 h-16" />
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                <p className="text-gray-300 leading-relaxed">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection t={t} />

      {/* Partnerships Section */}
      <section id="partnerships" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">{t('partnerships.title')}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t('partnerships.subtitle')}</p>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Rejoignez notre Écosystème d'Innovation</h3>
            <p className="text-xl mb-8 opacity-90">
              Que vous soyez investisseur, ONG, université, ou acteur public/privé, collaborons pour développer des technologies transformatrices.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 mx-auto"
            >
              <Handshake className="w-5 h-5" />
              <span>Devenir Partenaire</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Votre nom *" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Votre email *" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    required
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Sujet" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <textarea 
                  rows={6} 
                  placeholder="Votre message *" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  required
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Envoyer le Message</span>
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-green-800">Nos Bureaux</h5>
                    <p className="text-gray-600 mb-2">
                      <strong>Siège Social:</strong><br />
                      Avenue Lac Rweru No. 7, Kabondo, Bujumbura, Burundi
                    </p>
                    <p className="text-gray-600">
                      <strong>Bureau Secondaire:</strong><br />
                      Université Polytechnique de Gitega (UPG), Gitega, Burundi
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-green-800">Email</h5>
                    <a href="mailto:contact@rundinova.tech" className="text-green-600 hover:text-green-700">
                      contact@rundinova.tech
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-green-800">Téléphones</h5>
                    <p className="text-gray-600">
                      <a href="tel:+25768497372" className="text-green-600 hover:text-green-700">+257 68 49 73 72</a> (Gitega)
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:+25762850225" className="text-green-600 hover:text-green-700">+257 62 85 02 25</a> (Bujumbura)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <img 
                    src="./rundinovatech_cropped_wbg.png" 
                    alt="Logo" 
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling!.classList.remove('hidden');
                    }}
                  />
                  <span className="text-white text-xs font-bold hidden">RN</span>
                </div>
                <span className="text-xl font-bold">RundiNova Tech</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Navigation</h5>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-green-400 transition-colors">{t('nav.home')}</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-green-400 transition-colors">{t('nav.about')}</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-green-400 transition-colors">{t('nav.services')}</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-green-400 transition-colors">{t('nav.projects')}</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Entreprise</h5>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-green-400 transition-colors">{t('nav.team')}</button></li>
                <li><button onClick={() => scrollToSection('partnerships')} className="text-gray-300 hover:text-green-400 transition-colors">{t('nav.partnerships')}</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-green-400 transition-colors">{t('nav.contact')}</button></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Carrières</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;