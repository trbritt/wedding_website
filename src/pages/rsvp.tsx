import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import Image from "next/image";
import emailjs from '@emailjs/browser';
import ExportedImage from "next-image-export-optimizer";
import ring from "/public/images/ring.jpg";

const RSVPPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    dietaryRestrictions: '',
    songRequest: '',
    message: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name == '' || formData.email == '' || formData.attendance == '' || formData.phone == '') {
      alert("Please fill in all required fields");
      return;
    }

    emailjs
        .send(
            'service_8qtfpae',
            'template_tetz7jn',
            {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              attendance: formData.attendance,
              dietaryRestrictions: formData.dietaryRestrictions,
              songRequest: formData.songRequest,
              message: formData.message
            },
            'SR-yfRRk2iss-w4qh'
        )
        .then(
            () => {
              console.log('RSVP submitted:', formData);
              setShowThankYou(true);

              // Reset form after a delay
              setTimeout(() => {
                setShowThankYou(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  attendance: '',
                  dietaryRestrictions: '',
                  songRequest: '',
                  message: ''
                });
              }, 3000);
            },
            (error) => {
              console.error(error);
              alert("Something went wrong. Please try again.");
            }
        );
  };

  const content = {
    en: {
      title: "RSVP",
      subtitle: "",
      backHome: "← Back to Home",
      formTitle: "Wedding Response",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      attendance: "Will you be attending?",
      attendanceYes: "Yes, I'll be there!",
      attendanceNo: "Sorry, I can't make it",
      guestName: "Guest Name (if applicable)",
      dietaryRestrictions: "Dietary Restrictions or Allergies",
      songRequest: "Song Request for Dancing",
      message: "Special Message for the Couple",
      submit: "Submit RSVP",
      thankYou: "Thank you for your response!",
      thankYouMessage: "We can't wait to celebrate with you!",
      required: "Required",
      optional: "Optional",
      phoneOptional: "Phone (for WhatsApp Group)"
    },
    fr: {
      title: "RSVP",
      subtitle: "",
      backHome: "← Retour à l'accueil",
      formTitle: "Réponse de Mariage",
      name: "Nom Complet",
      email: "Adresse Email",
      phone: "Numéro de Téléphone",
      attendance: "Serez-vous présent(e)?",
      attendanceYes: "Oui, je serai là!",
      attendanceNo: "Désolé(e), je ne peux pas venir",
      guestName: "Nom de l'Invité (si applicable)",
      dietaryRestrictions: "Restrictions Alimentaires ou Allergies",
      songRequest: "Demande de Chanson pour la Danse",
      message: "Message Spécial pour le Couple",
      submit: "Envoyer RSVP",
      thankYou: "Merci pour votre réponse!",
      thankYouMessage: "Nous avons hâte de célébrer avec vous!",
      required: "Requis",
      optional: "Optionnel",
      phoneOptional: "Téléphone (pour la groupe WhatsApp)"
    }
  };

  const t = content[language];

  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-green-1 via-dark-green-2 to-dark-green-1 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 art-deco-bg"></div>
        </div>

        <div className="text-center p-8">
          <div className="mb-8">
            <svg className="w-24 h-24 mx-auto text-sage-green animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h1 className="font-shango text-4xl sm:text-5xl mb-4" style={{ color: '#af6a28' }}>
            {t.thankYou}
          </h1>
          <p className="font-recoleta text-xl text-gray-300">
            {t.thankYouMessage}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-green-1 via-dark-green-2 to-dark-green-1 relative overflow-hidden">
      <div className="bg-image-wrapper">
        <ExportedImage
            src={ring}
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
          
          <p className="art-nouveau-text font-recoleta text-xl sm:text-2xl text-gray-300 font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-dark-burgundy/70 backdrop-blur-sm rounded-lg shadow-xl p-8 sm:p-12 lg:p-16 border-2 text-center" style={{ borderColor: '#af6a28' }}>
          <div className="mb-8">
            <svg className="w-24 h-24 mx-auto text-burnt-orange opacity-80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
            </svg>
          </div>

          <h2 className="font-shango text-3xl sm:text-4xl md:text-5xl mb-6" style={{ color: '#af6a28' }}>
            {language === 'en' ? 'Coming Soon' : 'Bientôt Disponible'}
          </h2>

          <div className="flex items-center justify-center mb-6">
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-sage-green to-transparent" style={{ background: 'linear-gradient(to right, transparent, #aebea4, transparent)' }}></div>
            <div className="mx-4 w-3 h-3 rotate-45 border-2 animate-pulse" style={{ borderColor: '#af6a28' }}></div>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-burgundy to-transparent" style={{ background: 'linear-gradient(to right, transparent, #862733, transparent)' }}></div>
          </div>

          <p className="font-recoleta text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto">
            {language === 'en'
              ? "The RSVP form will be available soon. We'll send you an email when it's ready!"
              : "Le formulaire RSVP sera bientôt disponible. Nous vous enverrons un e-mail quand il sera prêt!"}
          </p>

          <p className="font-recoleta text-base text-gray-400 italic">
            {language === 'en'
              ? "Please save the date: September 12, 2026"
              : "Veuillez réserver la date : 12 septembre 2026"}
          </p>
        </div>

        {/* Hidden form - keeping for when you want to re-enable */}
        <div className="hidden">
          <h2 className="font-shango text-2xl sm:text-3xl mb-8 text-center" style={{ color: '#af6a28' }}>
            {t.formTitle}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block font-recoleta font-semibold text-gray-300 mb-2">
                {t.name} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-sage-green focus:outline-none transition-colors font-recoleta bg-gray-700 text-gray-200"
                style={{ borderColor: '#4b5563' }}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-recoleta font-semibold text-gray-300 mb-2">
                {t.email} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-sage-green focus:outline-none transition-colors font-recoleta bg-gray-700 text-gray-200"
                style={{ borderColor: '#4b5563' }}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-recoleta font-semibold text-gray-300 mb-2">
                {t.phoneOptional} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-sage-green focus:outline-none transition-colors font-recoleta bg-gray-700 text-gray-200"
                style={{ borderColor: '#4b5563' }}
              />
            </div>

            {/* Attendance */}
            <div>
              <label className="block font-recoleta font-semibold text-gray-300 mb-2">
                {t.attendance} <span className="text-red-500">*</span>
              </label>
              <select
                name="attendance"
                value={formData.attendance}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-sage-green focus:outline-none transition-colors font-recoleta bg-gray-700 text-gray-200"
                style={{ borderColor: '#4b5563' }}
              >
                <option value="">{ language == "en" ? "Please select..." : "Veuillez choisir..."}</option>
                <option value="yes">{t.attendanceYes}</option>
                <option value="no">{t.attendanceNo}</option>
              </select>
            </div>

            {/* Dietary Restrictions - Only show if attending */}
            {formData.attendance === 'yes' && (
              <div>
                <label className="block font-recoleta font-semibold text-gray-300 mb-2">
                  {t.dietaryRestrictions}
                </label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:border-sage-green focus:outline-none transition-colors font-recoleta bg-gray-700 text-gray-200"
                  style={{ borderColor: '#4b5563' }}
                />
              </div>
            )}

            {/* Song Request - Only show if attending */}
            {formData.attendance === 'yes' && (
              <div>
                <label className="block font-recoleta font-semibold text-gray-300 mb-2">
                  {t.songRequest}
                </label>
                <input
                  type="text"
                  name="songRequest"
                  value={formData.songRequest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:border-sage-green focus:outline-none transition-colors font-recoleta bg-gray-700 text-gray-200"
                  style={{ borderColor: '#4b5563' }}
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block font-recoleta font-semibold text-gray-300 mb-2">
                {t.message}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-sage-green focus:outline-none transition-colors font-recoleta resize-vertical bg-gray-700 text-gray-200"
                style={{ borderColor: '#4b5563' }}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-8 py-4 bg-burnt-orange text-white hover:bg-opacity-90 transition-all duration-300 shadow-lg border-2 border-burnt-orange min-h-[48px] touch-manipulation font-recoleta font-semibold text-lg rounded-lg"
                style={{ backgroundColor: '#af6a28', borderColor: '#af6a28' }}
              >
                {t.submit}
              </button>
            </div>
          </form>
        </div>
        {/* End hidden form */}

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