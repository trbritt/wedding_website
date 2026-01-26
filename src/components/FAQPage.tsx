import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import background from "/public/images/website_background.jpg";

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
          question: "When is the ceremony?",
          answer: " Saturday, September 12, 2026. The ceremony begins promptly at 5:00 pm, so plan to arrive a little earlier to ensure you’re seated when the ceremony begins.",
          category: "ceremony"
        },
        {
          question: "Will the ceremony be held outdoors?",
          answer: "Yes, the ceremony will be held under a beautiful canopy of trees. There will be approximately 150m to walk on a gravel path, and the cocktail hour will be held on the terrasse outside the Bastide, so wear the appropriate shoes.",
          category: "ceremony"
        },
        {
          question: "Is there parking available at the venues?",
          answer: "Yes, there will be parking available for free at the venue, which is where both the ceremony and reception will happen.",
          category: "logistics"
        },
        {
          question: "What should I wear?",
          answer: "Cocktail attire / Formal attire: think elegant and celebratory!\n" +
              "For men: Suits and ties For women: Floor-length or knee-length dresses, or dressy jumpsuits.",
          category: "attire"
        },
        {
          question: "What are the wedding colors?",
          answer: "Sage green, terracotta, and burgundy. You're absolutely not required to wear these colors, but if you'd like to coordinate, feel free!",
          category: "attire"
        },
        {
          question: "What about shoes?",
          answer: "The ceremony is outdoors on grass and gravel paths, and there will be walking (~150m to ceremony, ~150m to cocktail). Stiletto heels are not recommended! We recommend wedges, block heels, flats, sandals, or bring a backup pair of comfortable shoes for walking between spaces.",
          category: "attire"
        },
        {
          question: "What is the weather like in September?",
          answer: "Provence in September is typically warm and sunny (although a bit windy at times), with average temperatures around 20-25°C (68-77°F) during the day and cooler evenings around 15°C (59°F). The ceremony, cocktail and dinner are outdoors, so bring a light wrap or jacket for the evening!",
          category: "logistics"
        },
        {
          question: "Can I bring a plus-one?",
          answer: "Plus-ones are included by invitation only. If your invitation includes a guest, their name will appear. Due to venue capacity, we're unable to accommodate additional guests beyond those listed on your invitation.",
          category: "logistics"
        },
        {
          question: "Will there be vegetarian options?",
          answer: "Absolutely! Our catering includes vegetarian and other dietary accommodation options. Please specify any dietary restrictions in your RSVP.",
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
          question: "Can I bring my children?",
          answer: "We love your little ones, but this is an adults-only celebration. We hope you'll take this as an opportunity for a child-free weekend in beautiful Provence! If you need childcare assistance and cannot find a babysitter, please email us and we'll help connect you with local babysitting services.",
          category: "logistics"
        },
        {
          question: "What if I have food allergies?",
          answer: "Please indicate any food allergies or dietary restrictions in your RSVP. Our catering team will try to accommodate most dietary needs with advance notice.",
          category: "reception"
        },
        {
          question: "Can I take photos during the ceremony?",
          answer: "We're having an unplugged ceremony, please put away phones and cameras during the ceremony itself so you can be fully present (and so you're not blocking our photographer's shots!). After the ceremony, feel free to snap away!",
          category: "ceremony"
        },
        {
          question: "What hotels do you recommend?",
          answer: "There are several options for accommodations near Bastide de Lussan. You can stay in Lussan itself (walking distance to the venue, perfect for celebrating as hard as you wish!), stay in nearby villages within 5–10 minutes' drive, or stay in Uzès, a beautiful town about 20 minutes away. We've put together a comprehensive list of ~30 options at all price points to help you find the perfect fit. We strongly encourage you to book as soon as possible. September is peak season in Provence, and properties fill up quickly. Most accommodations require 2+ night minimum stays, which is standard for rural France. Most bookings must be done directly through the property's website or listing (VRBO, Airbnb, Booking.com). We've included direct links in the list.",
          category: "travel"
        },
        {
          question: "How can I get to the venue?",
          answer: "Getting to the Venue: \n Most accommodations are within a 10-minute drive of Bastide de Lussan. \n" +
              "Car Rental: The venue is in rural Provence with limited public transport and taxi service. We strongly recommend renting a car for the weekend. \n" +
              "Taxi Service: Taxi service in the area is limited. Closer to the wedding date, we'll send a survey to evaluate interest in arranging a shared taxi service for the evening to ensure everyone gets home safely. Stay tuned! \n" +
              "Nearest Airports: \n" +
              "• Marseille (MRS) — 1.5 hours\n • Lyon (LYS) — 2.5 hours \n• Nîmes (FNI) — 45 min (small regional airport, limited flights)",
          category: "travel"
        },
        {
          question: "Will the wedding be in English or French?",
          answer: "Both! The ceremony and key speeches will be bilingual (English and French).",
          category: "logistics"
        },
        {
          question: "What time should I eat before the ceremony?",
          answer: "The ceremony begins at 5:00pm, followed by a cocktail celebration with lots of food, a sit-down dinner, cheese course and dessert + late night snacks. We recommend having a light lunch earlier in the day.",
          category: "logistics"
        },
        {
          question: "When do I need to RSVP?",
          answer: "Please respond by May 30, 2026 via our online form.",
          category: "logistics"
        },
        {
          question: "I need to change my RSVP. What should I do?",
          answer: "You can edit your RSVP response anytime before May 30 using the same link. After June 30, please email us directly at anastan.wed@gmail.com.",
          category: "logistics"
        },
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
          question: "Quand a lieu la cérémonie ?",
          answer: "Samedi 12 septembre 2026. La cérémonie commence à 17h00 précises, donc prévoyez d’arriver un peu en avance pour être assis avant le début de la cérémonie.",
          category: "ceremony"
        },
        {
          question: "La cérémonie aura-t-elle lieu à l'extérieur?",
          answer: "Oui, la cérémonie se déroulera sous une magnifique canopée d'arbres. Il faudra marcher environ 150 mètres sur un chemin de gravier, et le cocktail aura lieu sur la terrasse à l'extérieur de la Bastide. Veuillez donc porter des chaussures adaptées.",
          category: "ceremony"
        },
        {
          question: "Y a-t-il un stationnement disponible aux lieux?",
          answer: "Oui, un parking gratuit sera disponible sur le lieu où se dérouleront la cérémonie et la réception.",
          category: "logistics"
        },
        {
          question: "Que dois-je porter?",
          answer: "Tenue cocktail / Tenue formelle: pensez élégant et festif !\n" +
              "Pour les hommes : Costumes et cravates Pour les femmes : Robes longues ou mi-longues, ou combinaisons habillées.",
          category: "attire"
        },
        {
          question: "Quelles sont les couleurs du mariage ?",
          answer: "Vert sauge, terracotta et bordeaux. Vous n'êtes absolument pas obligé(e) de porter ces couleurs, mais si vous souhaitez vous coordonner, n'hésitez pas !",
          category: "attire"
        },
        {
          question: "Pour les chaussures ?",
          answer: "La cérémonie a lieu en extérieur sur gazon et chemins de gravier, et il y aura de la marche (~150m jusqu'à la cérémonie, ~150m jusqu'au cocktail). Les talons aiguilles se sont pas recommandés ! Nous recommandons des compensées, des talons carrés, des ballerines, sandales ou apportez une paire de chaussures confortables de rechange pour marcher entre les espaces.",
          category: "attire"
        },
        {
          question: "Quel temps fail-il en septembre ?",
          answer: "La Provence en septembre est généralement chaude et ensoleillée (parfois un peu venteuse), avec des températures moyennes autour de 20-25°C en journée et des soirées plus fraîches autour de 15°C. La cérémonie et le cocktail sont en extérieur, alors apportez un châle léger ou une veste pour la soirée !",
          category: "logistics"
        },
        {
          question: "Puis-je amener un(e) accompagnateur/trice ?",
          answer: "Les accompagnateurs/trices sont inclus sur invitation uniquement. Si votre invitation inclut un invité, son nom apparaîtra. En raison de la capacité du lieu, nous ne pouvons pas accueillir d'invités supplémentaires au-delà de ceux indiqués sur votre invitation.",
          category: "logistics"
        },
        {
          question: "Y aura-t-il des options de repas végétariens?",
          answer: "Absolument ! Notre service traiteur propose des options végétariennes et autres options alimentaires adaptées. Veuillez préciser toute restriction alimentaire dans votre réponse.",
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
          question: "Puis-je amener mes enfants ?",
          answer: "Nous adorons vos petits, mais il s'agit d'une célébration réservée aux adultes. Nous espérons que vous profiterez de cette occasion pour un week-end sans enfants en belle Provence ! Si vous avez besoin d'aide pour la garde d'enfants, envoyez-nous un e-mail et nous vous aiderons à trouver des services de garde locaux.",
          category: "logistics"
        },
        {
          question: "Que faire si j'ai des allergies alimentaires?",
          answer: "Veuillez indiquer toute allergie alimentaire ou restriction alimentaire dans votre réponse. Notre équipe de restauration s'efforcera de répondre à la plupart des besoins alimentaires si elle en est informée à l'avance.",
          category: "reception"
        },
        {
          question: "Puis-je prendre des photos pendant la cérémonie?",
          answer: "Nous organisons une cérémonie « unplugged », veuillez ranger vos téléphones et appareils photo pendant la cérémonie elle-même afin d'être pleinement présent (et pour ne pas bloquer les prises de vue de notre photographe !). Après la cérémonie, photographiez à volonté !",
          category: "ceremony"
        },
        {
          question: "Quels hôtels recommandez-vous?",
          answer: "Plusieurs options d’hébergement sont disponibles à proximité de la Bastide de Lussan.\n" +
              "Vous pouvez loger directement à Lussan (à distance de marche du lieu, parfait pour faire la fête sans contrainte !), dans les villages voisins à 5–10 minutes en voiture, ou à Uzès, une très belle ville située à environ 20 minutes.\n" +
              "Nous avons préparé une liste complète d’environ 30 hébergements, dans toutes les gammes de prix, pour vous aider à trouver l’option qui vous convient le mieux. \nNous vous recommandons vivement de réserver le plus tôt possible. Septembre est une période de forte affluence en Provence et les hébergements se remplissent rapidement. La plupart des logements exigent un séjour minimum de 2 nuits, ce qui est courant en zone rurale en France. Les réservations doivent généralement se faire directement via le site de l’établissement ou via les plateformes (VRBO, Airbnb, Booking.com). Les liens directs sont inclus dans la liste.",
          category: "travel"
        },
        {
          question: "Le mariage sera-t-il en anglais ou en français ?",
          answer: "Les deux ! La cérémonie et les discours principaux seront bilingues (anglais et français).",
          category: "logistics"
        },
        {
          question: "Transport",
          answer: "Accès au lieu :\n" +
              "La majorité des hébergements se trouvent à moins de 10 minutes en voiture de la Bastide de Lussan.\n" +
              "Location de voiture :\n" +
              "Le lieu se situe en pleine campagne provençale, avec peu de transports en commun et peu de taxis. Nous vous recommandons fortement de louer une voiture pour le week-end.\n" +
              "Taxis :\n" +
              "Les services de taxi sont limités dans la région. À l’approche du mariage, nous enverrons un questionnaire afin d’évaluer l’intérêt pour la mise en place d’un service de taxi partagé le soir, pour que chacun puisse rentrer en toute sécurité. Restez à l’écoute !\n" +
              "Aéroports les plus proches :\n" +
              "•Marseille (MRS) — 1h30\n" +
              "•Lyon (LYS) — 2h30\n" +
              "•Nîmes (FNI) — 45 min (petit aéroport régional, vols limités)",
          category: "travel"
        },
        {
          question: "À quelle heure faut-il manger avant la cérémonie ?",
          answer: "La cérémonie commence à 17h00, et sera suivie d’un cocktail dinatoire très généreux, d’un dîner assis, d’un plateau de fromages, de desserts et de collations de fin de soirée.\n" +
              "Nous vous recommandons de prendre un déjeuner léger plus tôt dans la journée afin d’être à l’aise jusqu’au début des festivités.",
          category: "logistics"
        },
        {
          question: "Quand dois-je répondre ?",
          answer: "Veuillez répondre avant le 30 mai 2026 via notre formulaire en ligne.",
          category: "logistics"
        },
        {
          question: "Je dois modifier mon RSVP. Que dois-je faire ?",
          answer: "Vous pouvez modifier votre réponse RSVP à tout moment avant le 30 mai en utilisant le même lien. Après le 30 mai, envoyez-nous un e-mail directement à anastan.wed@gmail.com",
          category: "logistics"
        },
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
          
          <p className="art-nouveau-text font-recoleta text-xl sm:text-2xl text-burgundy font-light">
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
                  ? 'max-h-180 opacity-100'
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2">
                  <div className="w-full h-0.5 mb-4" style={{ backgroundColor: '#4b5563' }}></div>
                  <p className="font-recoleta text-gray-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                    {faq.answer}
                  </p>
                  {/* 15th is the hotel faq with the special link */}
                  {(index == 14 || (selectedCategory == 'travel' && index == 0)) ? (
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
                  {
                    (index == 18 || (selectedCategory == 'logistics' && index == 7)) ? (
                        <button
                            className="mt-2 mb-2 transition-all duration-300 shadow-md min-h-[22px] touch-manipulation font-recoleta font-semibold text-sm rounded-lg hover:bg-opacity-90"
                            // style={{ backgroundColor: '#aebea4', borderColor: '#aebea4' }}
                            onClick={() => {
                              window.open(" https://forms.gle/jnGR2MfEZPGrdEwm6", '_blank', 'noopener,noreferrer')
                            }}
                        >
                          {language == "en" ? "Click here for the RSVP." : "Cliquez ici pour le RSVP."}
                        </button>
                    ) : (
                        <div/>
                    )
                  }
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