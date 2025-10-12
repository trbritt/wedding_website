import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import ExportedImage from "next-image-export-optimizer";
import save_the_date from "public/images/save_the_date.png";

const AnnouncementPage = () => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const translations = {
    en: {
      title: 'Announcement',
      passwordPrompt: 'Enter the secret phrase to view our announcement',
      passwordPlaceholder: 'Secret phrase',
      submit: 'Enter',
      invalidPassword: 'Incorrect phrase. Please try again.',
      announcement: 'We\'re Getting Married!',
      date: 'September 12, 2026',
      location: 'La Bastide de Lussan, France',
      message: 'We are thrilled to announce our upcoming wedding and hope you can join us for this special celebration. More details about the venue, accommodation, and schedule can be found throughout this website.',
      exploreWebsite: 'Explore Wedding Website',
      saveTheDate: 'Save the Date'
    },
    fr: {
      title: 'Annonce',
      passwordPrompt: 'Entrez la phrase secrète pour voir notre annonce',
      passwordPlaceholder: 'Phrase secrète',
      submit: 'Entrer',
      invalidPassword: 'Phrase incorrecte. Veuillez réessayer.',
      announcement: 'Nous nous marions!',
      date: '12 Septembre, 2026',
      location: 'La Bastide de Lussan, France',
      message: 'Nous sommes ravis d\'annoncer notre prochain mariage et espérons que vous pourrez vous joindre à nous pour cette célébration spéciale. Plus de détails sur le lieu, l\'hébergement et le programme sont disponibles sur ce site.',
      exploreWebsite: 'Explorer le Site Web',
      saveTheDate: 'Réservez la Date'
    }
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === 'bastide') {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  const handleExploreWebsite = () => {
    router.push('/');
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-green-1 via-dark-green-2 to-dark-green-1 flex items-center justify-center px-4">
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

        <div className="relative z-10 max-w-md w-full">
          {/* Password Form Card */}
          <div className="bg-dark-burgundy/70 backdrop-blur-sm rounded-lg shadow-2xl border-4 p-8 sm:p-10" style={{ borderColor: '#aebea4' }}>
            <h1 className="art-deco-heading text-2xl sm:text-3xl text-center mb-6" style={{ color: '#af6a28' }}>
              {t.title}
            </h1>

            {/* Art Deco Separator */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-transparent" style={{ background: 'linear-gradient(to right, transparent, #aebea4, transparent)' }}></div>
              <div className="mx-4 w-2 h-2 rotate-45 border-2" style={{ borderColor: '#af6a28' }}></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-transparent" style={{ background: 'linear-gradient(to right, transparent, #862733, transparent)' }}></div>
            </div>

            <p className="font-recoleta text-gray-300 text-center mb-8">
              {t.passwordPrompt}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder}
                  className="w-full px-4 py-3 bg-gray-700/50 border-2 rounded-lg font-recoleta text-gray-200 placeholder-gray-500 focus:outline-none focus:border-opacity-100 transition-all"
                  style={{ borderColor: error ? '#862733' : '#aebea4' }}
                  autoFocus
                />
                {error && (
                  <p className="mt-2 text-sm font-recoleta" style={{ color: '#862733' }}>
                    {t.invalidPassword}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg font-shango text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-2"
                style={{ backgroundColor: '#af6a28', borderColor: '#af6a28', color: '#181a1b' }}
              >
                {t.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-gradient-to-br from-dark-green-1 via-dark-green-2 to-dark-green-1">
      {/* Top Navbar with green background */}
      <div className="relative z-50 w-full bg-gradient-to-br from-dark-green-1 via-dark-green-2 to-dark-green-1 border-b-2" style={{ borderColor: '#aebea4' }}>
        <div className="flex items-center justify-between px-4 py-4 sm:px-8 sm:py-6 max-w-7xl mx-auto">
          {/* Explore Website Button */}
          <button
            onClick={handleExploreWebsite}
            className="py-3 px-6 sm:px-8 bg-dark-burgundy/70 rounded-lg font-shango text-base sm:text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-2 text-gray-200"
            style={{ borderColor: '#af6a28' }}
          >
            {t.exploreWebsite}
          </button>

          {/* Language Toggle */}
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
      </div>

      {/* Full-page background image below navbar */}
      <div className="relative flex-1 w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <ExportedImage
            src={save_the_date}
            alt="Save the Date"
            fill
            className="object-contain"
            priority
            sizes="100vw"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
