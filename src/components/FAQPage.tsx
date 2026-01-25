import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import arms from "/public/images/arms.jpg";

const FAQPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
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

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const content = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our special day",
      backHome: "← Back to Home",
      categories: {
        all: "All Questions",
        ceremony: "Ceremony",
        reception: "Reception",
        travel: "Travel & Accommodation",
        attire: "Attire & Gifts",
        logistics: "Logistics"
      },
      faqs: [
        {
          question: "What time should I arrive for the ceremony?",
          answer: "We're still finalizing details, but aim to arrive before 5:00pm.",
          category: "ceremony"
        },
        {
          question: "Will the ceremony be held outdoors?",
          answer: "Yes, the ceremony will be held under a beautiful canopy of trees. There will be approximately 100m to walk on a gravel path, and the cocktail hour will be held on the terrasse outside the Bastide, so wear the appropriate shoes.",
          category: "ceremony"
        },
        {
          question: "Is there parking available at the venues?",
          answer: "Yes, there will be parking available for free at the venue, which is where both the ceremony and reception will happen.",
          category: "logistics"
        },
        {
          question: "What is the dress code?",
          answer: "We kindly request cocktail to formal attire for our guests. Ladies, please refrain from wearing white or ivory. If you need help figuring out anything regarding the dress code, feel free to ask us.",
          category: "attire"
        },
        {
          question: "Can I bring a plus-one?",
          answer: "Plus-ones will be by invitation only. If you received an invitation that includes a guest, please fill out a separate RSVP for your guest.",
          category: "logistics"
        },
        {
          question: "Will there be vegetarian/vegan meal options?",
          answer: "Absolutely! Our catering includes vegetarian, vegan, and other dietary accommodation options. Please specify any dietary restrictions in your RSVP.",
          category: "reception"
        },
        {
          question: "What time does the reception end?",
          answer: "The reception ends in the early morning. We will provide late night snacks and coffee.",
          category: "reception"
        },
        {
          question: "Do you have a gift registry?",
          answer: "Your presence is the greatest gift! For those who wish to give a gift, we would appreciate contributions to our honeymoon fund.",
          category: "attire"
        },
        {
          question: "Are children welcome?",
          answer: "We love children, but we've chosen to have an adults-only celebration to allow all our guests to relax and enjoy the evening. We appreciate your understanding.",
          category: "logistics"
        },
        {
          question: "What if I have food allergies?",
          answer: "Please indicate any food allergies or dietary restrictions in your RSVP. Our catering team will try to accommodate most dietary needs with advance notice.",
          category: "reception"
        },
        {
          question: "Can I take photos during the ceremony?",
          answer: "We kindly request an unplugged ceremony - no phones or cameras during the service. Our professional photographer will capture all the special moments to share with you later.",
          category: "ceremony"
        },
        {
          question: "What hotels do you recommend?",
          answer: "There are two options for accommodations: staying in Lussan which is accessible by foot, and allows you to celebrate as hard as you wish, or staying in Uzes, which is a 20min drive away. If you wish to stay in Lussan, we put together a list of accommodations available around the village. Kindly note that we encourage you to book them as soon as possible, because they will fill up. Most bookings have to be done through the property’s website, although we also added some VRBO links.",
          category: "travel"
        },
        {
          question: "Why did I receive a Save the Date and not an official invitation?",
          answer: "This Save the Date is just a heads-up so you can mark your calendars, and start making plans to celebrate with us. You will receive the official invitation later with all the timeline details and RSVP info.",
          category: "logistics"
        }
      ]
    },
    fr: {
      title: "Foire Aux Questions",
      subtitle: "Tout ce que vous devez savoir sur notre jour spécial",
      backHome: "← Retour à l'accueil",
      categories: {
        all: "Toutes les Questions",
        ceremony: "Cérémonie",
        reception: "Réception",
        travel: "Voyage et Hébergement",
        attire: "Tenue et Cadeaux",
        logistics: "Logistique"
      },
      faqs: [
        {
          question: "À quelle heure dois-je arriver pour la cérémonie?",
          answer: "Nous sommes encore en train de finaliser les détails, mais prévoyez d'arriver avant 17 h.",
          category: "ceremony"
        },
        {
          question: "La cérémonie aura-t-elle lieu à l'extérieur?",
          answer: "Oui, la cérémonie se déroulera sous une magnifique canopée d'arbres. Il faudra marcher environ 100 mètres sur un chemin de gravier, et le cocktail aura lieu sur la terrasse à l'extérieur de la Bastide. Veuillez donc porter des chaussures adaptées.",
          category: "ceremony"
        },
        {
          question: "Y a-t-il un stationnement disponible aux lieux?",
          answer: "Oui, un parking gratuit sera disponible sur le lieu où se dérouleront la cérémonie et la réception.",
          category: "logistics"
        },
        {
          question: "Quel est le code vestimentaire?",
          answer: "Nous demandons à nos invités de porter une tenue de cocktail ou une tenue de soirée. Mesdames, veuillez éviter de porter du blanc ou de l'ivoire. Si vous avez besoin d'aide pour déterminer la tenue appropriée, n'hésitez pas à nous demander conseil.",
          category: "attire"
        },
        {
          question: "Puis-je amener un accompagnateur?",
          answer: "Les accompagnateurs seront admis uniquement sur invitation. Si vous avez reçu une invitation incluant un invité, veuillez remplir un formulaire de réponse séparé pour votre invité.",
          category: "logistics"
        },
        {
          question: "Y aura-t-il des options de repas végétariens/végétaliens?",
          answer: "Absolument ! Notre service traiteur propose des options végétariennes, végétaliennes et autres options alimentaires adaptées. Veuillez préciser toute restriction alimentaire dans votre réponse.",
          category: "reception"
        },
        {
          question: "À quelle heure se termine la réception?",
          answer: "La réception se termine tôt le matin. Nous vous proposerons des collations et du café tard dans la nuit.",
          category: "reception"
        },
        {
          question: "Avez-vous une liste de cadeaux?",
          answer: "Votre présence est le plus beau des cadeaux ! Pour ceux qui souhaitent offrir un cadeau, nous vous serions reconnaissants de bien vouloir contribuer à notre fonds de lune de miel.",
          category: "attire"
        },
        {
          question: "Les enfants sont-ils les bienvenus?",
          answer: "Nous aimons les enfants, mais nous avons choisi d'organiser une fête réservée aux adultes afin que tous nos invités puissent se détendre et profiter pleinement de la soirée. Nous vous remercions de votre compréhension.",
          category: "logistics"
        },
        {
          question: "Que faire si j'ai des allergies alimentaires?",
          answer: "Veuillez indiquer toute allergie alimentaire ou restriction alimentaire dans votre réponse. Notre équipe de restauration s'efforcera de répondre à la plupart des besoins alimentaires si elle en est informée à l'avance.",
          category: "reception"
        },
        {
          question: "Puis-je prendre des photos pendant la cérémonie?",
          answer: "Nous demandons gentiment une cérémonie débranchée - pas de téléphones ou appareils photo pendant le service. Notre photographe professionnel capturera tous les moments spéciaux à partager avec vous plus tard.",
          category: "ceremony"
        },
        {
          question: "Quels hôtels recommandez-vous?",
          answer: "Il y a deux options d’hébergement : séjourner à Lussan, accessible à pied et qui vous permettra de faire la fête sans modération, ou à Uzès, situé à environ 20 minutes en voiture. Si vous souhaitez loger à Lussan, nous avons préparé une liste d’hébergements disponibles autour du village. Nous vous invitons à réserver dès que possible, car les places partent rapidement. La plupart des réservations doivent être effectuées directement sur le site web de l’établissement, mais nous avons également ajouté quelques liens VRBO.",
          category: "travel"
        },
        {
          question: "Pourquoi ai-je reçu un Save the Date et non une invitation officielle ?",
          answer: "Ce Save the Date est simplement là pour vous permettre de réserver la date et de commencer à planifier votre venue pour célébrer avec nous. Vous recevrez l’invitation officielle un peu plus tard, avec tous les détails du programme et les informations pour confirmer votre présence (RSVP).",
          category: "logistics"
        }
      ]
    }
  };

  const t = content[language];
  const categories = Object.keys(t.categories) as Array<keyof typeof t.categories>;
  
  const filteredFAQs = selectedCategory === 'all' 
    ? t.faqs 
    : t.faqs.filter(faq => faq.category === selectedCategory);

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
      <div className={`container mx-auto px-4 sm:px-8 py-8 sm:py-16 max-w-4xl transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="art-deco-heading font-shango text-4xl sm:text-5xl md:text-6xl mb-4 tracking-wider"
              style={{ 
                background: 'linear-gradient(135deg, #af6a28 0%, #aebea4 50%, #862733 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            FAQ
          </h1>
          
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-burnt-orange to-transparent" style={{ background: 'linear-gradient(to right, transparent, #af6a28, transparent)' }}></div>
            <div className="mx-4 w-3 h-3 rotate-45 border-2 animate-pulse" style={{ borderColor: '#862733' }}></div>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-sage-green to-transparent" style={{ background: 'linear-gradient(to right, transparent, #aebea4, transparent)' }}></div>
          </div>
          
          <p className="art-nouveau-text font-recoleta text-xl sm:text-2xl text-gray-300 font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-dark-burgundy/70 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-6 border-2" style={{ borderColor: '#aebea4' }}>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-recoleta font-semibold transition-all duration-300 min-h-[44px] ${
                    selectedCategory === category
                      ? 'text-gray-200 shadow-lg transform scale-105'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category ? '#af6a28' : undefined,
                    borderColor: selectedCategory === category ? '#af6a28' : undefined
                  }}
                >
                  {t.categories[category]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-6">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-dark-burgundy/70 backdrop-blur-sm rounded-lg shadow-lg border-2 overflow-hidden transition-all duration-300 hover:shadow-xl"
              style={{ borderColor: '#4b5563' }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-300 min-h-[44px]"
              >
                <h3 className="font-recoleta font-semibold text-base sm:text-lg text-gray-200 pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                  style={{ borderColor: '#af6a28' }}
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    style={{ color: '#af6a28' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div className={`transition-all duration-300 ease-in-out ${
                openItems.includes(index)
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2">
                  <div className="w-full h-0.5 mb-4" style={{ backgroundColor: '#4b5563' }}></div>
                  <p className="font-recoleta text-gray-300 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                  {/* 11th is the hotel faq with the special link */}
                  {index == 11 ? (
                      <button
                          className="mt-2 mb-2 transition-all duration-300 shadow-md min-h-[22px] touch-manipulation font-recoleta font-semibold text-sm rounded-lg hover:bg-opacity-90"
                          // style={{ backgroundColor: '#aebea4', borderColor: '#aebea4' }}
                          onClick={() => {
                            window.open(" https://docs.google.com/spreadsheets/d/1kOH4fVPYb6EaE6yqFFzcBIjINjoF-rpohRtbjBuLhLo/edit?gid=0#gid=0", '_blank', 'noopener,noreferrer')
                          }}
                      >
                        {language == "en" ? "Click here for a list of recommended stays." : "Cliquez ici pour une liste des séjours recommandés."}
                      </button>
                  ) : (
                      <div/>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-dark-burgundy/70 backdrop-blur-sm rounded-lg shadow-xl p-6 sm:p-8 border-2 text-center" style={{ borderColor: '#862733' }}>
            <h3 className="font-shango text-xl sm:text-2xl mb-4" style={{ color: '#af6a28' }}>
              {language === 'en' ? 'Still Have Questions?' : 'Vous Avez Toujours des Questions?'}
            </h3>
            <p className="font-recoleta text-gray-300 mb-6 leading-relaxed">
              {language === 'en'
                ? "Don't hesitate to reach out! We're here to help make sure you have all the information you need for our special day."
                : "N'hésitez pas à nous contacter! Nous sommes là pour vous aider à vous assurer d'avoir toutes les informations nécessaires pour notre jour spécial."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:anastan.wed@gmail.com"
                className="group px-6 py-3 bg-burnt-orange text-gray-200 hover:bg-opacity-90 transition-all duration-300 shadow-lg border-2 border-burnt-orange min-h-[48px] touch-manipulation font-recoleta font-semibold rounded-lg"
                style={{ backgroundColor: '#af6a28', borderColor: '#af6a28' }}
              >
                {language === 'en' ? 'Email Us' : 'Nous Écrire'}
              </a>
            </div>
          </div>
        </div>

        {/* Navigation to other pages */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8">
          <button
            onClick={() => router.push('/about')}
            className="group px-6 py-4 bg-dark-burgundy border-2 border-sage-green hover:bg-sage-green hover:text-gray-900 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta text-gray-200"
            style={{ borderColor: '#aebea4' }}
          >
            <span className="font-semibold text-base">{language === 'en' ? 'About' : 'À Propos'}</span>
          </button>
          <button
            onClick={() => router.push('/details')}
            className="group px-6 py-4 bg-dark-burgundy border-2 border-burgundy hover:bg-burgundy hover:text-gray-200 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta text-gray-200"
            style={{ borderColor: '#862733' }}
          >
            <span className="font-semibold text-base">{language === 'en' ? 'Details' : 'Détails'}</span>
          </button>
          <button
            onClick={() => router.push('/things-to-do')}
            className="group px-6 py-4 bg-dark-burgundy border-2 border-burnt-orange hover:bg-burnt-orange hover:text-gray-200 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta text-gray-200"
            style={{ borderColor: '#af6a28' }}
          >
            <span className="font-semibold text-base">{language === 'en' ? 'Things to Do' : 'Choses à Faire'}</span>
          </button>
          <button
            onClick={() => router.push('/rsvp')}
            className="group px-6 py-4 bg-burnt-orange text-gray-200 hover:bg-opacity-80 transition-all duration-300 shadow-lg border-2 border-burnt-orange min-h-[48px] touch-manipulation font-recoleta"
            style={{ backgroundColor: '#af6a28', borderColor: '#af6a28' }}
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
            <circle cx="100" cy="20" r="4" fill="#862733" className="animate-pulse"/>
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

export default FAQPage;