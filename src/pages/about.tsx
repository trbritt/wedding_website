import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import background from "/public/images/website_background.jpg";

const CeremonyPage = () => {
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
      title: "About the Wedding",
      subtitle: "Join us as we say 'I Do'",
      backHome: "← Back to Home",
      details: "A Wedding with French & Anglo Traditions",
      description: "Our wedding is a celebration of two rich cultures coming together: Anaïs' French heritage and Tristan's British-American background. We've thoughtfully blended elements from both traditions to create a celebration that honours our roots while feeling uniquely ours. This guide will help you know what to expect and how to join us in making this day truly special.",
      attire: "Dress Code",
      attireDetails: "Formal attire requested. Ladies, please avoid wearing white or ivory. Gentlemen, dark suits preferred.",
      parking: "Parking Information",
      parkingDetails: "Complimentary valet parking will be available. Street parking is also available on Cathedral Street and surrounding areas.",
      accessibility: "Accessibility",
      accessibilityDetails: "The cathedral is fully wheelchair accessible with elevator access to all levels.",
      cultural_traditions: "Cultural Traditions We're Blending",
      weddingPartyTitle: "Wedding Party",
      weddingPartyText: "Reflecting the American tradition, we'll have a wedding party with bridesmaids and groomsmen: dear friends and family who have supported us throughout our journey. In France, the equivalent is a group of témoins (witnesses), who serve as legal witnesses and often assist with planning, but without the coordinated attire or extended ceremonial roles. To honour French tradition, our wedding party has no hierarchy: no 'best man' or 'maid of honor.' Each member holds equal importance in our hearts and in the celebration. They'll serve in both symbolic and celebratory capacities, witnessing our vows and helping us celebrate.",
      receptionTitle: "Reception Invitation",
      receptionText: "French weddings often have tiered invitations: some guests attend only the vin d'honneur (post-ceremony cocktail), while others are invited to the full dinner reception. We've chosen the American approach: everyone invited to our wedding is invited to the entire celebration, from ceremony through the late-night dancing. We want to share every moment of this special day with all of you. Everyone is also welcome to the post-wedding brunch on the Sunday morning.",
      dancingTitle: "Dancing Into The Night",
      dancingText: "True to French tradition, our celebration will continue well into the early morning hours. The party begins after dinner with plenty of dancing, and we'll be right there celebrating with you, no early exits for the newlyweds! Our DJs will play a carefully curated mix of French classics, American favorites, and music designed to keep the dance floor alive until the very last song.",
      giftTitle: "Gifts & Registry",
      giftText: "French weddings traditionally do not include bridal showers, focusing instead on the wedding celebration itself. We've chosen to follow this custom. Your presence, especially for those traveling from afar, is truly the greatest gift we could ask for. If you wish to honour us with a gift, you're warmly invited to contribute to our honeymoon fund, but please know that your presence at the wedding is more than enough.",
      conclusionText: "This wedding represents not just the union of two people, but the beautiful blending of two cultures, two families, and two communities we love dearly. Every tradition we've chosen—whether French, British, American, or uniquely ours—has been selected to honor the love and support you've shown us. We can't wait to celebrate with you and create memories that will last a lifetime. Thank you for being part of our story.",
    },
    fr: {
      title: "Détails du Mariage",
      subtitle: "Joignez-vous à nous pour notre 'Oui'",
      backHome: "← Retour à l'accueil",
      details: "Un Mariage aux Traditions Françaises et Anglo-Saxonnes",
      description: "Notre mariage est une célébration de deux riches cultures qui s'unissent : l'héritage français d'Anaïs et les racines britanniques-américaines de Tristan. Nous avons soigneusement mélangé des éléments des deux traditions pour créer une célébration qui honore nos origines tout en nous ressemblant. Ce guide vous aidera à savoir à quoi vous attendre et comment vous joindre à nous pour rendre cette journée vraiment spéciale.",
      attire: "Code Vestimentaire",
      attireDetails: "Tenue de soirée demandée. Mesdames, veuillez éviter de porter du blanc ou de l'ivoire. Messieurs, costumes sombres préférés.",
      parking: "Informations de Stationnement",
      parkingDetails: "Un service de voiturier gratuit sera disponible. Le stationnement dans la rue est également disponible sur la rue de la Cathédrale et dans les environs.",
      accessibility: "Accessibilité",
      accessibilityDetails: "La cathédrale est entièrement accessible en fauteuil roulant avec un accès par ascenseur à tous les niveaux.",
      cultural_traditions: "Traditions Culturelles que Nous Mélangeons",
      weddingPartyTitle: "Cortège de Mariage",
      weddingPartyText: "Reflétant la tradition américaine, nous aurons un cortège de mariage avec demoiselles d'honneur et garçons d'honneur: de chers amis et membres de la famille qui nous ont soutenus tout au long de notre parcours. En France, l'équivalent est un groupe de témoins, qui servent de témoins légaux et aident souvent avec la planification, mais sans les tenues coordonnées ou les rôles étendus. Pour honorer la tradition française, notre cortège de mariage n'a pas de hiérarchie: pas de 'best man' ou de 'maid of honor'. Chaque membre occupe une place égale dans nos cœurs et dans la célébration. Ils serviront dans des capacités à la fois symboliques et festives, témoignant de nos vœux et nous aidant à célébrer.",
      receptionTitle: "Invitation à la Réception",
      receptionText: "Les mariages français ont souvent des invitations à plusieurs niveaux : certains invités n'assistent qu'au vin d'honneur, tandis que d'autres sont invités à la réception-dîner complète. Nous avons choisi l'approche américaine: toute personne invitée à notre mariage est invitée à toute la célébration, de la cérémonie jusqu'aux danses de fin de soirée. Nous voulons partager chaque moment de cette journée spéciale avec vous tous.",
      dancingTitle: "Danser Jusqu'au Bout de la Nuit",
      dancingText: "Fidèles à la tradition française, notre célébration continuera bien jusqu'aux premières heures du matin. La fête commence après le dîner avec beaucoup de danse, et nous serons là pour célébrer avec vous: pas de sortie anticipée pour les nouveaux mariés ! Nos DJs joueront un mélange soigneusement sélectionné de classiques français, de favoris en anglais, et de musique conçue pour maintenir la piste de danse vivante jusqu'à la toute dernière chanson.",
      giftTitle: "Cadeaux et Liste de Mariage",
      giftText: "Les mariages français n'incluent traditionnellement pas de 'bridal shower', se concentrant plutôt sur la célébration du mariage elle-même. Nous avons choisi de suivre cette coutume. Votre présence, surtout pour ceux qui voyagent de loin, est vraiment le plus grand cadeau que nous puissions demander. Si vous souhaitez nous honorer avec un cadeau, vous êtes chaleureusement invités à contribuer à notre fonds de lune de miel, mais sachez que votre présence au mariage est plus que suffisante.",
      conclusionText: "Ce mariage représente non seulement l'union de deux personnes, mais le beau mélange de deux cultures, deux familles, et deux communautés que nous chérissons. Chaque tradition que nous avons choisie—qu'elle soit française, britannique, américaine, ou uniquement nôtre—a été sélectionnée pour honorer l'amour et le soutien que vous nous avez montrés. Nous avons hâte de célébrer avec vous et de créer des souvenirs qui dureront toute une vie. Merci de faire partie de notre histoire.",
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

      {/* Decorative Elements */}

      {/* Main Content */}
      <div className={`container mx-auto px-4 sm:px-8 py-8 sm:py-16 max-w-4xl transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="art-deco-heading font-shango text-4xl sm:text-5xl md:text-6xl mb-4 tracking-wider"
              style={{ 
                background: 'linear-gradient(135deg, #aebea4 0%, #a3474a 50%, #af6a28 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            {t.title}
          </h1>
          
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-sage-green to-transparent" style={{ background: 'linear-gradient(to right, transparent, #aebea4, transparent)' }}></div>
            <div className="mx-4 w-3 h-3 rotate-45 border-2 animate-pulse" style={{ borderColor: '#af6a28' }}></div>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-burgundy to-transparent" style={{ background: 'linear-gradient(to right, transparent, #862733, transparent)' }}></div>
          </div>
          
          <p className="art-nouveau-text font-recoleta text-xl sm:text-2xl text-burgundy font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Event Information Card */}
        <div className="bg-dark-burgundy/70 backdrop-blur-sm rounded-lg shadow-xl p-6 sm:p-8 mb-8 border-2" style={{ borderColor: '#4b5563' }}>
          <div className="grid md:grid-cols-1 gap-8">
            <div>
              <h2 className="font-shango text-xl sm:text-2xl mb-4" style={{ color: '#af6a28' }}>{t.details}</h2>
              <p className="font-recoleta text-gray-300 leading-relaxed mb-6">
                {t.description}
              </p>

              <div className="space-y-6 mb-6">
                <div>
                  <h3 className="font-shango text-xl mb-2" style={{ color: '#ecb179' }}>{t.cultural_traditions}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-shango text-lg mb-2" style={{ color: '#ecb179' }}>{t.weddingPartyTitle}</h4>
                      <p className="font-recoleta text-lg text-gray-300 text-sm leading-relaxed">
                        {t.weddingPartyText}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-shango text-lg mb-2" style={{ color: '#ecb179' }}>{t.receptionTitle}</h4>
                      <p className="font-recoleta text-gray-300 text-sm leading-relaxed">
                        {t.receptionText}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-shango text-lg mb-2" style={{ color: '#ecb179' }}>{t.dancingTitle}</h4>
                      <p className="font-recoleta text-gray-300 text-sm leading-relaxed">
                        {t.dancingText}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-shango text-lg mb-2" style={{ color: '#ecb179' }}>{t.giftTitle}</h4>
                      <p className="font-recoleta text-gray-300 text-sm leading-relaxed">
                        {t.giftText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-recoleta text-md text-gray-300 leading-relaxed mb-6">
                {t.conclusionText}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation to other pages */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <button
            onClick={() => router.push('/things-to-do')}
            className="group px-6 py-4 bg-dark-burgundy/80 border-2 border-sage-green hover:bg-sage-green transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta text-gray-200"
            style={{ borderColor: '#aebea4' }}
          >
            <span className="font-semibold text-base">{language === 'en' ? 'Things to Do' : 'Choses à Faire'}</span>
          </button>
          <button
            onClick={() => router.push('/details')}
            className="group px-6 py-4 bg-dark-burgundy/80 border-2 border-burgundy hover:bg-burgundy transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta text-gray-200"
            style={{ borderColor: '#862733' }}
          >
            <span className="font-semibold text-base">{language === 'en' ? 'Details' : 'Détails'}</span>
          </button>
          <button
            onClick={() => router.push('/faq')}
            className="group px-6 py-4 bg-dark-burgundy/80 border-2 border-burnt-orange hover:bg-burnt-orange transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta text-gray-200"
            style={{ borderColor: '#af6a28' }}
          >
            <span className="font-semibold text-base">FAQ</span>
          </button>
          <button
            onClick={() => router.push('/rsvp')}
            className="group px-6 py-4 bg-burnt-orange/80 text-white hover:bg-burnt-orange transition-all duration-300 shadow-lg border-2 border-burnt-orange min-h-[48px] touch-manipulation font-recoleta"
            style={{ backgroundColor: 'rgba(175,106,40,0.7)', borderColor: '#af6a28' }}
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
};

export default CeremonyPage;