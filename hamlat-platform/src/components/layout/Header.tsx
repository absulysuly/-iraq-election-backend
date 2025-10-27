import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [language, setLanguage] = useState<'ar' | 'en'>('en');
  
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const isOnSocial = location.pathname.startsWith('/social');
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#CE1126] via-[#007A3D] to-[#000000] flex items-center justify-center">
                <span className="text-white font-bold text-xl">🇮🇶</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">
                {language === 'ar' ? 'منصة الانتخابات' : 'Election Platform'}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link
              to="/social"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isOnSocial
                  ? 'bg-[#CE1126] text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {language === 'ar' ? 'المنصة الاجتماعية' : 'Social'}
            </Link>
            <Link
              to="/civic"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                !isOnSocial && location.pathname.startsWith('/civic')
                  ? 'bg-[#007A3D] text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {language === 'ar' ? 'لوحة المعلومات' : 'Civic Dashboard'}
            </Link>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Switch language"
            >
              <Globe size={20} />
              <span className="font-medium text-sm">
                {language === 'en' ? 'AR' : 'EN'}
              </span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
