import React from 'react';
import { Globe, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
  isScrolled: boolean;
  t: (key: string) => string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentLanguage,
  onLanguageChange,
  isScrolled,
  t,
  scrollToSection
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' },
    { code: 'kr', name: 'Kirundi', flag: '🇧🇮' }
  ];

  const navItems = [
    { key: 'home', section: 'home' },
    { key: 'about', section: 'about' },
    { key: 'services', section: 'services' },
    { key: 'projects', section: 'projects' },
    { key: 'solutions', section: 'solutions' },
    { key: 'team', section: 'team' },
    { key: 'partnerships', section: 'partnerships' },
    { key: 'contact', section: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-green-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <img 
                src="./rundinovatech_cropped_wbg.png" 
                alt="RundiNova Tech" 
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling!.classList.remove('hidden');
                }}
              />
              <span className="text-white text-xs font-bold hidden">RN</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              RundiNova Tech
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className="text-white hover:text-green-400 transition-colors duration-300 font-medium"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </div>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-md border border-gray-600 rounded-lg px-3 py-2 text-white hover:border-green-500 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLanguage.toUpperCase()}</span>
              </button>
              <div className="absolute right-0 top-full mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px]">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-700 transition-colors ${
                      currentLanguage === lang.code ? 'bg-green-600 text-white' : 'text-gray-300'
                    } ${lang === languages[0] ? 'rounded-t-lg' : ''} ${lang === languages[languages.length - 1] ? 'rounded-b-lg' : ''}`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-green-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-green-500/20">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(item => (
                <button
                  key={item.key}
                  onClick={() => {
                    scrollToSection(item.section);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-white hover:text-green-400 transition-colors py-2 font-medium"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;