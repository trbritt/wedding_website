import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import arms from "/public/images/arms.jpg";
import bastide_landscape from "/public/images/bastide_landscape.jpg";

const DetailsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const goHome = () => {
    router.push('/');
  };

  const content = {
    en: {
      title: "Wedding Reception",
      subtitle: "Celebrate with us into the night",
      backHome: "← Back to Home",
      date: "Saturday, 12 September, 2026",
      time: "5:00 PM - Late",
      location: "Bastide du Lussan",
      address: "D143 Route de Verfeuil, Lussan, France, 30580",
      details: "Reception Details",
      description: "Come back soon while we finalize the details.",
      schedule: "Evening Schedule",
      scheduleItems: [
        // { time: "6:00 PM", event: "Cocktail Hour & Canapés" },
        // { time: "7:00 PM", event: "Welcome Speeches" },
        // { time: "7:30 PM", event: "Dinner Service" },
        // { time: "9:00 PM", event: "First Dance" },
        // { time: "9:30 PM", event: "Dancing & Festivities" },
        // { time: "12:00 AM", event: "Last Dance" }
      ],
      menu: "Dinner Menu",
      menuDescription: "After various stations and canapés during the cocktail hour, our chef will focus on Provençal and French cuisine for everyone to enjoy.",
      gifts: "Gifts & Registry",
      giftsDetails: "Your presence is the greatest gift of all. For those who wish to honor us with a gift, we would greatly appreciate contributions to our honeymoon fund.",
      transport: "Accommodation",
      transportDetails: "The village of Lussan has many provincial hotels and great stays, only a 10 minute walk through the French countryside."
    },
    fr: {
      title: "Réception de Mariage",
      subtitle: "Célébrez avec nous toute la nuit",
      backHome: "← Retour à l'accueil",
      date: "Samedi, 15 juin 2025",
      time: "17h00 - Tard",
      location: "Bastide du Lussan",
      address: "D143 Route de Verfeuil, Lussan, France, 30580",
      details: "Détails de la Réception",
      description: "Revenez plus tard, nous finalisons les détails.",
      schedule: "Programme de la Soirée",
      scheduleItems: [
        // { time: "18h00", event: "Cocktail et Canapés" },
        // { time: "19h00", event: "Discours de Bienvenue" },
        // { time: "19h30", event: "Service du Dîner" },
        // { time: "21h00", event: "Première Danse" },
        // { time: "21h30", event: "Danse et Festivités" },
        // { time: "00h00", event: "Dernière Danse" }
      ],
      menu: "Menu du Dîner",
      menuDescription: "Notre chef a préparé un menu spécialement sélectionné mettant en vedette la cuisine française et d'Amerique du Nord, honorant les deux côtés de notre héritage.",
      gifts: "Cadeaux et Liste de Mariage",
      giftsDetails: "Votre présence est le plus grand cadeau de tous. Pour ceux qui souhaitent nous honorer avec un cadeau, nous apprécierions grandement les contributions à notre fonds de lune de miel.",
      transport: "Lodgement",
      transportDetails: "Le village du Lussan a plusieurs des hôtels, un petit marche du 10 min vers la compagne française."
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-green-1 via-dark-green-2 to-dark-green-1 relative overflow-hidden">
      <div className="bg-image-wrapper">
        <ExportedImage
            src={arms}
            alt="test"
            fill
            className="object-cover"
            priority
            sizes="100vw"
        />
      </div>
      {/* Art Deco Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 art-deco-bg"></div>
      </div>

      {/* Navigation Bar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-dark-green-1/80 backdrop-blur-sm border-b border-gray-700/50">
        <div className="flex justify-between items-center p-4 sm:p-6 max-w-7xl mx-auto">
          <button
            onClick={goHome}
            className="bg-dark-burgundy/70 backdrop-blur-sm border-2 border-sage-green hover:border-burgundy transition-all duration-300 px-4 py-2 rounded-full shadow-lg hover:shadow-xl font-recoleta font-semibold text-sm sm:text-base min-h-[44px]"
            style={{
              borderColor: '#aebea4',
              color: '#e8e6e3'
            }}
          >
            {t.backHome}
          </button>

          <button
            onClick={toggleLanguage}
            className="bg-dark-burgundy/70 backdrop-blur-sm border-2 border-sage-green hover:border-burgundy transition-all duration-300 px-4 py-2 rounded-full shadow-lg hover:shadow-xl font-recoleta font-semibold text-sm sm:text-base min-h-[44px] min-w-[44px]"
            style={{
              borderColor: '#aebea4',
              color: '#e8e6e3'
            }}
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-20 sm:h-24"></div>

      {/* Main Content */}
      <div className={`container mx-auto px-4 sm:px-8 py-8 sm:py-16 max-w-6xl transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="art-deco-heading font-shango text-4xl sm:text-5xl md:text-6xl mb-4 tracking-wider"
              style={{
                background: 'linear-gradient(135deg, #af6a28 0%, #af6a28 50%, #aebea4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            {t.title}
          </h1>
          
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-burgundy to-transparent" style={{ background: 'linear-gradient(to right, transparent, #af6a28, transparent)' }}></div>
            <div className="mx-4 w-3 h-3 rotate-45 border-2 animate-pulse" style={{ borderColor: '#af6a28' }}></div>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-sage-green to-transparent" style={{ background: 'linear-gradient(to right, transparent, #aebea4, transparent)' }}></div>
          </div>
          
          <p className="art-nouveau-text font-recoleta text-xl sm:text-2xl text-gray-300 font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Event Information Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Venue & Basic Info */}
          <div className="bg-dark-burgundy/70 backdrop-blur-sm rounded-lg shadow-xl p-6 sm:p-8 border-2" style={{ borderColor: '#4b5563' }}>
            <h2 className="font-shango text-2xl sm:text-3xl mb-4 text-gray-200">{t.date}</h2>
            <p className="font-recoleta text-lg text-gray-400 mb-4">{t.time}</p>

            <h3 className="font-shango text-xl sm:text-2xl mb-2" style={{ color: '#ecb179' }}>{t.location}</h3>
            <p className="font-recoleta text-gray-400 mb-6">{t.address}</p>
            
            <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
              <div className="w-full h-full relative">
                <ExportedImage
                    src={bastide_landscape}
                    alt="Bastide du Lussan"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
                />

                {/* Subtle overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            <h3 className="font-shango text-xl mb-4" style={{ color: '#ecb179' }}>{t.details}</h3>
            <p className="font-recoleta text-gray-300 leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Schedule */}
          <div className="bg-dark-burgundy/70 backdrop-blur-sm rounded-lg shadow-xl p-6 sm:p-8 border-2" style={{ borderColor: '#4b5563' }}>
            <h3 className="font-shango text-xl sm:text-2xl mb-6" style={{ color: '#ecb179' }}>{t.schedule}</h3>
            <div className="space-y-4">
              <div className="text-xl sm:text-2xl mb-6 text-gray-300">
                {language == "en" ? "Coming Soon..." : "Bientôt ..."}
              </div>
              {/*{t.scheduleItems.map((item, index) => (*/}
              {/*  <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700/70 transition-colors">*/}
              {/*    <div className="bg-burnt-orange text-white px-3 py-1 rounded-full text-sm font-recoleta font-semibold whitespace-nowrap" style={{ backgroundColor: '#af6a28' }}>*/}
              {/*      {item.time}*/}
              {/*    </div>*/}
              {/*    <div className="font-recoleta text-gray-300">*/}
              {/*      {item.event}*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*))}*/}
            </div>
          </div>
        </div>

        {/* Additional Information Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Menu */}
          <div className="bg-dark-burgundy/70 backdrop-blur-sm rounded-lg shadow-xl p-6 sm:p-8 border-2 flex flex-col" style={{ borderColor: '#4b5563' }}>
            <h3 className="font-shango text-xl sm:text-2xl mb-4" style={{ color: '#ecb179' }}>{t.menu}</h3>
            <p className="font-recoleta text-gray-300 leading-relaxed mb-6">
              {t.menuDescription}
            </p>

            <div className="bg-gray-700/50 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <svg className="w-8 h-8 mx-auto mb-2 text-sage-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                  </svg>
                  <p className="font-recoleta text-sm text-gray-400">{language == "en" ? "French Cuisine" : "Cuisine Française"}</p>
                </div>
                <div>
                  <svg className="w-10 h-10 mx-auto mb-0 text-sage-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2 C 10 6, 6 10, 8 14 C 10 12, 14 12, 12 2 Z" fill="none" stroke="#2e8b57" stroke-width="1.5"/>
                    <circle cx="12" cy="12" r="3" fill="#6b8e23"/>
                  </svg>
                  <p className="font-recoleta text-sm text-gray-400">{language == "en" ? "Provencal Cuisine" : "Cuisine Provençale"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transport & Practical Info */}
          <div className="space-y-6">
            <div className="bg-dark-burgundy/70 backdrop-blur-sm rounded-lg shadow-xl p-6 border-2" style={{ borderColor: '#4b5563' }}>
              <h4 className="font-shango text-lg mb-3" style={{ color: '#ecb179' }}>{t.transport}</h4>
              <p className="font-recoleta text-gray-400 text-sm leading-relaxed">
                {t.transportDetails}
              </p>
            </div>

            <div className="bg-dark-burgundy/70 backdrop-blur-sm rounded-lg shadow-xl p-6 border-2" style={{ borderColor: '#4b5563' }}>
              <h4 className="font-shango text-lg mb-3" style={{ color: '#ecb179' }}>{t.gifts}</h4>
              <p className="font-recoleta text-gray-400 text-sm leading-relaxed">
                {t.giftsDetails}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation to other pages */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <button
            onClick={() => router.push('/about')}
            className="group px-6 py-4 bg-dark-burgundy/80 text-gray-200 border-2 border-sage-green hover:bg-sage-green hover:text-white transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta"
            style={{ borderColor: '#aebea4' }}
          >
            <span className="font-semibold text-base">{language === 'en' ? 'About' : 'À Propos'}</span>
          </button>
          <button
            onClick={() => router.push('/things-to-do')}
            className="group px-6 py-4 bg-dark-burgundy/80 text-gray-200 border-2 border-burgundy hover:bg-burgundy hover:text-white transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta"
            style={{ borderColor: '#862733' }}
          >
            <span className="font-semibold text-base">{language === 'en' ? 'Things to Do' : 'Choses à Faire'}</span>
          </button>
          <button
            onClick={() => router.push('/faq')}
            className="group px-6 py-4 bg-dark-burgundy/80 text-gray-200 border-2 border-burnt-orange hover:bg-burnt-orange hover:text-white transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta"
            style={{ borderColor: '#af6a28' }}
          >
            <span className="font-semibold text-base">FAQ</span>
          </button>
          <button
            onClick={() => router.push('/rsvp')}
            className="group px-6 py-4 bg-burnt-orange/80 text-white hover:bg-burnt-orange transition-all duration-300 shadow-lg border-2 border-burnt-orange min-h-[48px] touch-manipulation font-recoleta"
            style={{ backgroundColor: 'rgba(175,106,40,0.5)', borderColor: '#af6a28' }}
          >
            <span className="font-semibold text-base">RSVP</span>
          </button>
        </div>

        {/* Art Nouveau Flourish */}
        <div className="mt-12 sm:mt-16">
          <svg 
            width="200" 
            height="40" 
            viewBox="0 0 200 40" 
            className="mx-auto"
          >
            <path
              d="M10 20 Q50 5 100 20 Q150 35 190 20"
              stroke="#af6a28"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <circle cx="100" cy="20" r="4" fill="#af6a28" className="animate-pulse"/>
            <path
              d="M80 15 Q100 10 120 15 M80 25 Q100 30 120 25"
              stroke="#aebea4"
              strokeWidth="1"
              fill="none"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;