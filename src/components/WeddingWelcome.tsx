import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import React from 'react';
import ExportedImage from "next-image-export-optimizer";
import bastide_landscape from "/public/images/bastide_landscape.jpg";
import name_banner from "/public/images/anais-tristan-names.png";

const WeddingWelcome = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);
  const router = useRouter();
  const { language, setLanguage, hasSelectedLanguage } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setAnimatingOut(true);
    
    setTimeout(() => {
      setAnimatingOut(false);
    }, 800);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const content = {
    en: {
      welcome: "Welcome to Our Wedding",
      subtitle: "Join us in celebrating our love story",
      selectLanguage: "Please select your language",
      english: "English",
      french: "Français",
      mainWelcome: "Anaïs & Tristan",
      mainSubtitle: "Together Forever • September 12, 2026",
      placeholderAlt: "Wedding couple photo",
      ceremony: "About",
      reception: "Details",
      faq: "FAQ", 
      thingsToDo: "Things to Do",
      rsvp: "RSVP"
    },
    fr: {
      welcome: "Bienvenue à Notre Mariage",
      subtitle: "Joignez-vous à nous pour célébrer notre histoire d'amour",
      selectLanguage: "Veuillez choisir votre langue",
      english: "English",
      french: "Français",
      mainWelcome: "Anaïs & Tristan",
      mainSubtitle: "Ensemble Pour Toujours • 12 Septembre, 2026",
      placeholderAlt: "Photo du couple marié",
      ceremony: "À Propos",
      reception: "Détails",
      faq: "FAQ",
      thingsToDo: "Choses à Faire", 
      rsvp: "RSVP"
    }
  };

  // If user has already selected a language, show the main page
  if (hasSelectedLanguage && !animatingOut) {
    const t = content[language];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-green-1 via-dark-green-2 to-dark-green-1 relative overflow-hidden">
        {/* Art Deco Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 art-deco-bg"></div>
        </div>

        {/* Language Toggle - Fixed at top */}
        <div className="fixed top-4 right-4 sm:top-8 sm:right-8 z-50">
          <button
            onClick={toggleLanguage}
            className="bg-dark-burgundy/70 backdrop-blur-sm border-2 border-sage-green hover:border-burgundy transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base min-h-[44px] min-w-[44px] cursor-pointer"
            style={{
              borderColor: '#aebea4',
              color: '#e8e6e3'
            }}
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </div>

        {/* Hero Banner Section */}
        <div className="relative w-full mb-8 sm:mb-12 z-20">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden border-t-4 border-b-4 shadow-2xl"
               style={{
                 borderColor: '#aebea4'
               }}>

            {/* Banner Image */}
            <div className="w-full h-full relative">
              <ExportedImage
                src={bastide_landscape}
                alt="La Bastide de Toursainte"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />

              {/* Dark overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-transparent to-gray-900/60 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-8 relative z-20">

          {/* Names with Fanciful Illustration - Responsive sizing */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="relative mb-3 sm:mb-4 flex justify-center">
              <div className="relative w-72 h-24 sm:w-96 sm:h-32 md:w-[480px] md:h-40 lg:w-[600px] lg:h-48">
                {/* PNG Image for Fanciful Names */}
                <div className="w-full h-full relative overflow-hidden rounded-lg">
                  <ExportedImage
                    src={name_banner}
                    alt={t.mainWelcome}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 768px) 384px, (max-width: 1024px) 480px, 600px"
                  />
                </div>
              </div>
            </div>
            
            {/* Art Deco Separator - Responsive sizing */}
            <div className="flex items-center justify-center mb-3 sm:mb-4 px-4">
              <div className="w-8 sm:w-12 lg:w-16 h-0.5 bg-gradient-to-r from-transparent via-sage-green to-transparent" style={{ background: 'linear-gradient(to right, transparent, #aebea4, transparent)' }}></div>
              <div className="mx-2 sm:mx-4 w-2 h-2 sm:w-3 sm:h-3 rotate-45 border-2 animate-pulse" style={{ borderColor: '#af6a28' }}></div>
              <div className="w-8 sm:w-12 lg:w-16 h-0.5 bg-gradient-to-r from-transparent via-burgundy to-transparent" style={{ background: 'linear-gradient(to right, transparent, #862733, transparent)' }}></div>
            </div>
            
            <p className="art-nouveau-text font-recoleta text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-wide px-4">
              {t.mainSubtitle}
            </p>
          </div>

          {/* Navigation Buttons - Mobile-first responsive layout, centered on desktop */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8 w-full max-w-md sm:max-w-none sm:justify-center relative z-30">
            <button
              onClick={() => router.push('/about')}
              className="group px-6 py-4 bg-dark-burgundy/70 border-2 border-sage-green hover:bg-sage-green hover:text-gray-900 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta cursor-pointer relative z-40 text-gray-200"
              style={{ borderColor: '#aebea4' }}
            >
              <span className="font-semibold text-base pointer-events-none">{t.ceremony}</span>
            </button>

            <button
              onClick={() => router.push('/details')}
              className="group px-6 py-4 bg-dark-burgundy/70 border-2 border-burgundy hover:bg-burgundy hover:text-gray-200 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta cursor-pointer relative z-40 text-gray-200"
              style={{ borderColor: '#862733' }}
            >
              <span className="font-semibold text-base pointer-events-none">{t.reception}</span>
            </button>

            <button
              onClick={() => router.push('/things-to-do')}
              className="group px-6 py-4 bg-dark-burgundy/70 border-2 border-burnt-orange hover:bg-burnt-orange hover:text-gray-200 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta cursor-pointer relative z-40 text-gray-200"
              style={{ borderColor: '#af6a28' }}
            >
              <span className="font-semibold text-base pointer-events-none">{t.thingsToDo}</span>
            </button>

            <button
              onClick={() => router.push('/faq')}
              className="group px-6 py-4 bg-dark-burgundy/70 border-2 border-sage-green hover:bg-sage-green hover:text-gray-900 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta cursor-pointer relative z-40 text-gray-200"
              style={{ borderColor: '#aebea4' }}
            >
              <span className="font-semibold text-base pointer-events-none">{t.faq}</span>
            </button>

            <button
              onClick={() => router.push('/rsvp')}
              className="group px-6 py-4 bg-burnt-orange/70 text-gray-200 hover:bg-opacity-80 transition-all duration-300 shadow-lg border-2 border-burnt-orange min-h-[48px] touch-manipulation font-recoleta cursor-pointer relative z-40"
              style={{ backgroundColor: 'rgba(175,106,40,0.5)', borderColor: '#af6a28' }}
            >
              <span className="font-semibold text-base pointer-events-none">{t.rsvp}</span>
            </button>
          </div>

          {/* Art Nouveau Flourish - Responsive sizing */}
          <div className="mt-8 sm:mt-12">
            <svg
              width="150"
              height="30"
              viewBox="0 0 200 40"
              className="mx-auto sm:w-[200px] sm:h-[40px]"
            >
              <path
                d="M10 20 Q50 5 100 20 Q150 35 190 20"
                stroke="#aebea4"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
              <circle cx="100" cy="20" r="4" fill="#af6a28" className="animate-pulse"/>
              <path
                d="M80 15 Q100 10 120 15 M80 25 Q100 30 120 25"
                stroke="#862733"
                strokeWidth="1"
                fill="none"
                opacity="0.7"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // Show language selection screen
  return (
    <div className={`min-h-screen bg-gradient-to-br from-dark-green-1 via-dark-green-2 to-dark-green-1 relative overflow-hidden transition-all duration-1000 ${animatingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      
      {/* Art Deco Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 art-deco-bg"></div>
      </div>

      {/* Art Nouveau Border Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-sage-green via-burnt-orange to-burgundy" style={{ background: 'linear-gradient(to right, #aebea4, #af6a28, #862733)' }}></div>
        
        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-burgundy via-burnt-orange to-sage-green" style={{ background: 'linear-gradient(to right, #862733, #af6a28, #aebea4)' }}></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 relative z-10 py-8">
        
        {/* Art Deco Header */}
        <div className={`text-center mb-8 sm:mb-12 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Decorative Top Element - Responsive sizing */}
          <div className="mb-6 sm:mb-8">
            <svg 
              width="150" 
              height="45" 
              viewBox="0 0 200 60" 
              className="mx-auto sm:w-[200px] sm:h-[60px]"
            >
              <path
                d="M20 30 Q60 10 100 30 Q140 50 180 30"
                stroke="#aebea4"
                strokeWidth="2"
                fill="none"
                className="sm:stroke-[3]"
              />
              <path
                d="M40 30 Q70 20 100 30 Q130 40 160 30"
                stroke="#862733"
                strokeWidth="1"
                fill="none"
                className="sm:stroke-[2]"
              />
              <circle cx="100" cy="30" r="6" fill="#af6a28" className="sm:r-8"/>
              <circle cx="100" cy="30" r="3" fill="white" opacity="0.8" className="sm:r-4"/>
            </svg>
          </div>

          <h1 className="art-deco-heading font-shango text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-4 sm:mb-6 tracking-wider px-2">
            <span style={{ color: '#aebea4' }}>Wedding</span>
            <span className="mx-2 sm:mx-4" style={{ color: '#af6a28' }}>•</span>
            <span className="text-gray-burgundy">Mariage</span>
          </h1>
          
          <div className="flex items-center justify-center mb-6 sm:mb-8 px-4">
            <div className="w-12 sm:w-16 lg:w-24 h-0.5 bg-sage-green" style={{ backgroundColor: '#aebea4' }}></div>
            <div className="mx-3 sm:mx-6 w-3 h-3 sm:w-4 sm:h-4 rotate-45 border-2 border-burnt-orange" style={{ borderColor: '#af6a28' }}></div>
            <div className="w-12 sm:w-16 lg:w-24 h-0.5 bg-burgundy" style={{ backgroundColor: '#862733' }}></div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4 px-4 font-recoleta">
            Welcome • Bienvenue
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-md mx-auto leading-relaxed px-4 font-recoleta">
            Join us in celebrating our love story
            <br />
            Joignez-vous à nous pour célébrer notre histoire d&#39;amour
          </p>
        </div>

        {/* Language Selection - Mobile-optimized buttons */}
        <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} w-full max-w-md sm:max-w-none`}>
          <p className="text-gray-400 text-center mb-6 sm:mb-8 text-base sm:text-lg px-4 font-recoleta">
            Please select your language • Veuillez choisir votre langue
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0 relative z-30">
            <button
              onClick={() => handleLanguageSelect('en')}
              className="group relative px-6 sm:px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white border-2 border-sage-green hover:border-burnt-orange transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px] touch-manipulation cursor-pointer z-40"
              style={{ 
                borderColor: '#aebea4',
                background: 'linear-gradient(135deg, #374151, #4b5563)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sage-green to-burnt-orange opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, #aebea4, #af6a28)' }}></div>
              <span className="relative text-lg sm:text-xl font-semibold font-recoleta pointer-events-none">English</span>
            </button>
            
            <button
              onClick={() => handleLanguageSelect('fr')}
              className="group relative px-6 sm:px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white border-2 border-burgundy hover:border-burnt-orange transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px] touch-manipulation cursor-pointer z-40"
              style={{ 
                borderColor: '#862733',
                background: 'linear-gradient(135deg, #374151, #4b5563)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-burgundy to-burnt-orange opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, #862733, #af6a28)' }}></div>
              <span className="relative text-lg sm:text-xl font-semibold font-recoleta pointer-events-none">Français</span>
            </button>
          </div>
        </div>

        {/* Art Deco Footer Decoration - Responsive sizing */}
        <div className={`mt-12 sm:mt-16 transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <svg 
            width="250" 
            height="30" 
            viewBox="0 0 300 40" 
            className="mx-auto sm:w-[300px] sm:h-[40px]"
          >
            <path
              d="M50 20 Q90 5 150 20 Q210 35 250 20"
              stroke="#aebea4"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M75 20 Q115 12 150 20 Q185 28 225 20"
              stroke="#862733"
              strokeWidth="1"
              fill="none"
              opacity="0.8"
            />
            <circle cx="150" cy="20" r="3" fill="#af6a28"/>
            <circle cx="120" cy="18" r="2" fill="#aebea4" opacity="0.7"/>
            <circle cx="180" cy="22" r="2" fill="#862733" opacity="0.7"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WeddingWelcome;