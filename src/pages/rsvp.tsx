import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import ExportedImage from "next-image-export-optimizer";
import background from "/public/images/website_background.jpg";

const RSVPPage = () => {
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

  const GOOGLE_FORM_URL = "https://forms.gle/jnGR2MfEZPGrdEwm6";

  const content = {
    en: {
      title: "RSVP",
      subtitle: "Let us know if you can join us",
      backHome: "← Back to Home",
      heading: "Save the Date",
      date: "September 12, 2026",
      message: "We would love to celebrate with you at Bastide de Lussan in the heart of Provence.",
      instructions: "Please fill out our RSVP form to let us know if you can make it. The form will open in a new window.",
      buttonText: "Open RSVP Form",
      noteTitle: "What to include:",
      noteItems: [
        "Your full name and contact information",
        "Number of guests attending",
        "Any dietary restrictions or allergies",
        "Song requests for the dance floor!"
      ]
    },
    fr: {
      title: "RSVP",
      subtitle: "Faites-nous savoir si vous pouvez nous rejoindre",
      backHome: "← Retour à l'accueil",
      heading: "Réservez la Date",
      date: "12 septembre 2026",
      message: "Nous aimerions célébrer avec vous à la Bastide de Lussan au cœur de la Provence.",
      instructions: "Veuillez remplir notre formulaire RSVP pour nous faire savoir si vous pouvez venir. Le formulaire s'ouvrira dans une nouvelle fenêtre.",
      buttonText: "Ouvrir le Formulaire RSVP",
      noteTitle: "À inclure :",
      noteItems: [
        "Votre nom complet et coordonnées",
        "Nombre d'invités présents",
        "Restrictions alimentaires ou allergies",
        "Demandes de chansons pour la piste de danse !"
      ]
    }
  };

  const t = content[language];

  return (
      <div className="min-h-screen bg-gradient-to-br from-dark-green-1 via-dark-green-2 to-dark-green-1 relative overflow-hidden">
        <div className="bg-image-wrapper">
          <ExportedImage
              src={background}
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
        <div className={`container mx-auto px-4 sm:px-8 py-8 sm:py-16 max-w-2xl transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="art-deco-heading font-shango text-4xl sm:text-5xl md:text-6xl mb-4 tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, #af6a28 0%, #862733 50%, #aebea4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
              {t.title}
            </h1>

            <div className="flex items-center justify-center mb-6">
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-burnt-orange to-transparent" style={{ background: 'linear-gradient(to right, transparent, #af6a28, transparent)' }}></div>
              <div className="mx-4 w-3 h-3 rotate-45 border-2 animate-pulse" style={{ borderColor: '#af6a28' }}></div>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-sage-green to-transparent" style={{ background: 'linear-gradient(to right, transparent, #aebea4, transparent)' }}></div>
            </div>

            <p className="art-nouveau-text font-recoleta text-xl sm:text-2xl text-burgundy font-light">
              {t.subtitle}
            </p>
          </div>

          {/* RSVP Redirect Card */}
          <div className="bg-dark-burgundy/70 backdrop-blur-sm rounded-lg shadow-xl p-8 sm:p-12 border-2" style={{ borderColor: '#4b5563' }}>
            {/* Heading */}
            <h2 className="font-shango text-3xl sm:text-4xl text-center mb-4" style={{ color: '#ecb179' }}>
              {t.heading}
            </h2>

            {/* Date */}
            <p className="font-shango text-2xl sm:text-3xl text-center mb-6" style={{ color: '#af6a28' }}>
              {t.date}
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-sage-green to-transparent" style={{ background: 'linear-gradient(to right, transparent, #aebea4, transparent)' }}></div>
              <div className="mx-4 w-3 h-3 rotate-45 border-2 animate-pulse" style={{ borderColor: '#af6a28' }}></div>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-sage-green to-transparent" style={{ background: 'linear-gradient(to right, transparent, #aebea4, transparent)' }}></div>
            </div>

            {/* Message */}
            <p className="font-recoleta text-lg text-gray-300 text-center mb-6 leading-relaxed">
              {t.message}
            </p>

            {/* Instructions */}
            <p className="font-recoleta text-base text-gray-400 text-center mb-8 italic">
              {t.instructions}
            </p>

            {/* Button */}
            <div className="flex justify-center mb-8">
              <button
                  onClick={() => window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')}
                  className="group px-8 py-4 bg-burnt-orange text-white hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-burnt-orange min-h-[48px] touch-manipulation font-recoleta font-semibold text-lg rounded-lg flex items-center gap-3"
                  style={{ backgroundColor: '#af6a28', borderColor: '#af6a28' }}
              >
                {t.buttonText}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* What to include section */}
            <div className="bg-gray-700/50 rounded-lg p-6">
              <h3 className="font-shango text-lg mb-4 text-center" style={{ color: '#ecb179' }}>
                {t.noteTitle}
              </h3>
              <ul className="space-y-2">
                {t.noteItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 font-recoleta text-gray-300">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#aebea4' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation to other pages */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8">
            <button
                onClick={() => router.push('/about')}
                className="group px-6 py-4 bg-dark-burgundy border-2 border-sage-green hover:bg-gray-700/50 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta text-gray-200"
                style={{ borderColor: '#aebea4' }}
            >
              <span className="font-semibold text-base">{language === 'en' ? 'About' : 'À Propos'}</span>
            </button>
            <button
                onClick={() => router.push('/details')}
                className="group px-6 py-4 bg-dark-burgundy border-2 border-burgundy hover:bg-gray-700/50 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta text-gray-200"
                style={{ borderColor: '#862733' }}
            >
              <span className="font-semibold text-base">{language === 'en' ? 'Details' : 'Détails'}</span>
            </button>
            <button
                onClick={() => router.push('/things-to-do')}
                className="group px-6 py-4 bg-dark-burgundy border-2 border-burnt-orange hover:bg-gray-700/50 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta text-gray-200"
                style={{ borderColor: '#af6a28' }}
            >
              <span className="font-semibold text-base">{language === 'en' ? 'Things to Do' : 'Choses à Faire'}</span>
            </button>
            <button
                onClick={() => router.push('/faq')}
                className="group px-6 py-4 bg-dark-burgundy border-2 border-burnt-orange hover:bg-gray-700/50 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta text-gray-200"
                style={{ borderColor: '#af6a28' }}
            >
              <span className="font-semibold text-base">FAQ</span>
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

export default RSVPPage;