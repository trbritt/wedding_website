import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { StaticImageData } from "next/image";
import ExportedImage from "next-image-export-optimizer";
import ring from "/public/images/ring.jpg";
import village_de_lussan from "/public/images/village_de_lussan.jpg";
import concluses_de_lussan from "/public/images/concluses_de_lussan.jpg";
import pont_du_gard from "/public/images/pont_du_gard.jpg";
import gorges_du_gardon from "/public/images/gorges_du_gardon.jpg";
import vallon_pont_darc from "/public/images/vallon_pont_darc.jpg";
import nimes from "/public/images/nimes.jpg";
import avignon from "/public/images/avignon.jpg";
import bedoin from "/public/images/bedoin.jpg";
import fontaine_de_vaucluse from "/public/images/fontaine_de_vaucluse.jpg";

interface Activity {
  name: string;
  description: string;
  category: string;
  location: string;
  duration: string;
  price: string;
  image: StaticImageData;
  website?: string;
}

const ThingsToDoPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
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

  const content = {
    en: {
      title: "Things to Do",
      subtitle: "Discover the beauty of Provence during your visit",
      backHome: "← Back to Home",
      categories: {
        all: "All Activities",
        villages: "Historic Villages",
        nature: "Nature & Outdoors",
        culture: "Culture & Heritage",
        activities: "Activities",
        personal: "Places Close to Our Hearts"
      },
      duration: "Duration",
      price: "Price",
      location: "Location",
      website: "Visit Website",
      activities: [
        {
          name: "Lussan Village",
          description: "Just a 15-minute walk from our venue! One of France's 'Most Beautiful Villages,' this medieval hilltop village is car-free and surrounded by ancient ramparts. Explore narrow cobbled lanes, old silk mills, local artisan shops, and enjoy peaceful panoramic views.",
          category: "villages",
          location: "15-minute walk",
          duration: "2-3 hours",
          price: "Free",
          image: village_de_lussan,
          website: "https://www.tourismegard.com/destination/villes-villages/les-plus-beaux-villages-du-gard/lussan/"
        },
        {
          name: "Les Concluses de Lussan",
          description: "A hidden geological wonder featuring dramatic gorges carved over millions of years by the Aiguillon River. This otherworldly site offers sculpted limestone cliffs, natural rock arches, hiking paths with panoramic views, and visible geological strata.",
          category: "nature",
          location: "5 km north of Lussan",
          duration: "2-4 hours",
          price: "Free",
          image: concluses_de_lussan,
          website: "https://lesvillagesdugard.org/activites/concluses-lussan/"
        },
        {
          name: "Pont du Gard",
          description: "A UNESCO World Heritage masterpiece of Roman engineering and one of the world's best-preserved ancient aqueducts. Perfect for sightseeing, guided tours, swimming, picnicking by the river, and exploring surrounding trails and museum.",
          category: "culture",
          location: "35-minute drive",
          duration: "Half day",
          price: "€8",
          image: pont_du_gard,
          website: "https://pontdugard.fr"
        },
        {
          name: "Gorges du Gardon",
          description: "A UNESCO Biosphere Reserve offering pristine natural beauty and outdoor adventures. Enjoy kayaking and swimming in crystal-clear waters, hiking through Mediterranean landscapes, plus climbing, cycling, and horseback riding opportunities.",
          category: "activities",
          location: "30-minute drive",
          duration: "Half-Full day",
          price: "Activities vary",
          image: gorges_du_gardon,
          website: "https://www.tourismegard.com/destination/sites-emblematiques/gorges-du-gardon/"
        },
        {
          name: "Vallon-Pont-d'Arc",
          description: "Gateway to the breathtaking Ardèche Gorges, famous for its impressive natural stone arch. Activities include canoeing through gorges, visiting the UNESCO Chauvet Cave with prehistoric art (fun fact: Anaïs worked as a hostess at its inauguration with President Hollande!), and riverside swimming.",
          category: "nature",
          location: "40-minute drive",
          duration: "Half-Full day",
          price: "Varies by activity",
          image: vallon_pont_darc,
          website: "https://gorges-ardeche-pontdarc.fr/vallon-pont-darc-ardeche/"
        },
        {
          name: "Nîmes - 'French Rome'",
          description: "A vibrant city filled with ancient Roman heritage and Provençal charm. Visit the spectacular Roman Arena and Maison Carrée, stroll through beautiful gardens and markets, explore museums, and wander charming streets perfect for shopping and dining.",
          category: "culture",
          location: "50-minute drive",
          duration: "Half-Full day",
          price: "Entry fees vary",
          image: nimes,
          website: "https://nimes-tourisme.com"
        },
        {
          name: "Avignon - City of the Popes",
          description: "Historic city on the Rhône River and former seat of Catholic popes in the 14th century. Special to us as Tristan's father Kenneth worked extensively here. See the magnificent Palais des Papes, the famous Pont d'Avignon, medieval ramparts, and enjoy the rich cultural scene.",
          category: "personal",
          location: "55-minute drive",
          duration: "Full day",
          price: "Entry fees vary",
          image: avignon,
          website: "https://www.avignon-et-provence.com/tourisme-provence/avignon"
        },
        {
          name: "Bédoin & Mont Ventoux",
          description: "A picturesque Provençal village at the base of Mont Ventoux, the iconic Tour de France mountain. Very special to us - Anaïs spent childhood summers here with her sister Ambre and mother Nadine. Perfect for mountain hikes, cycling routes, local markets, cafés, and authentic Provençal life.",
          category: "personal",
          location: "1-hour drive",
          duration: "Full day",
          price: "Free village visit",
          image: bedoin,
          website: "https://www.bedoin-mont-ventoux.fr/accueil.html"
        },
        {
          name: "Fontaine-de-Vaucluse",
          description: "A beautiful natural site where the Sorgue River emerges dramatically from a spring at the base of towering cliffs. Known for crystal-clear waters, peaceful riverside walking paths, charming village atmosphere, and serene setting perfect for a day trip.",
          category: "nature",
          location: "1.5-hour drive",
          duration: "Full day",
          price: "Free",
          image: fontaine_de_vaucluse,
          website: "https://islesurlasorguetourisme.com/decouvrir/terre-de-patrimoine/nos-villages/fontaine-de-vaucluse"
        }
      ]
    },
    fr: {
      title: "Choses à Faire",
      subtitle: "Découvrez la beauté de la Provence pendant votre visite",
      backHome: "← Retour à l'accueil",
      categories: {
        all: "Toutes les Activités",
        villages: "Villages Historiques",
        nature: "Nature et Plein Air",
        culture: "Culture et Patrimoine",
        activities: "Activités",
        personal: "Lieux Chers à Nos Cœurs"
      },
      duration: "Durée",
      price: "Prix",
      location: "Emplacement",
      website: "Visiter le Site Web",
      activities: [
        {
          name: "Village de Lussan",
          description: "À seulement 15 minutes à pied de notre lieu ! L'un des 'Plus Beaux Villages de France', ce village médiéval perché est entièrement piétonnier et entouré de remparts anciens. Explorez les ruelles pavées étroites, les anciennes filatures de soie, les boutiques d'artisans locaux et profitez des vues panoramiques paisibles.",
          category: "villages",
          location: "15 minutes à pied",
          duration: "2-3 heures",
          price: "Gratuit",
          image: village_de_lussan,
          website: "https://www.tourismegard.com/destination/villes-villages/les-plus-beaux-villages-du-gard/lussan/"
        },
        {
          name: "Les Concluses de Lussan",
          description: "Un joyau géologique caché avec des gorges spectaculaires creusées au fil des millénaires par la rivière Aiguillon. Ce site sauvage offre des falaises calcaires sculptées, des arches naturelles, des sentiers de randonnée avec vues panoramiques et des strates géologiques visibles.",
          category: "nature",
          location: "5 km au nord de Lussan",
          duration: "2-4 heures",
          price: "Gratuit",
          image: concluses_de_lussan,
          website: "https://lesvillagesdugard.org/activites/concluses-lussan/"
        },
        {
          name: "Pont du Gard",
          description: "Chef-d'œuvre de l'ingénierie romaine classé au patrimoine mondial UNESCO et l'un des aqueducs antiques les mieux conservés au monde. Parfait pour les visites touristiques, visites guidées, baignade, pique-niques au bord de la rivière et exploration des sentiers et musées environnants.",
          category: "culture",
          location: "35 minutes en voiture",
          duration: "Demi-journée",
          price: "8 €",
          image: pont_du_gard,
          website: "https://pontdugard.fr"
        },
        {
          name: "Gorges du Gardon",
          description: "Réserve de biosphère UNESCO offrant une beauté naturelle et des aventures en plein air. Profitez du kayak et de la baignade dans des eaux cristallines, de la randonnée à travers des paysages méditerranéens, plus l'escalade, le vélo et l'équitation.",
          category: "activities",
          location: "30 minutes en voiture",
          duration: "Demi-journée ou journée complète",
          price: "Activités variées",
          image: gorges_du_gardon,
          website: "https://www.tourismegard.com/destination/sites-emblematiques/gorges-du-gardon/"
        },
        {
          name: "Vallon-Pont-d'Arc",
          description: "Porte d'entrée des Gorges de l'Ardèche, célèbre pour son impressionnante arche de pierre naturelle. Les activités incluent le canoë dans les gorges, la visite de la Grotte Chauvet UNESCO avec art préhistorique (anecdote: Anaïs a travaillé comme hôtesse lors de l'inauguration avec le Président Hollande !), et la baignade en rivière.",
          category: "nature",
          location: "40 minutes en voiture",
          duration: "Demi-journée ou journée complète",
          price: "Varie selon activité",
          image: vallon_pont_darc,
          website: "https://gorges-ardeche-pontdarc.fr/vallon-pont-darc-ardeche/"
        },
        {
          name: "Nîmes - 'Rome Française'",
          description: "Une ville dynamique remplie de patrimoine romain antique et de charme provençal. Visitez les spectaculaires Arènes romaines et Maison Carrée, promenez-vous dans de beaux jardins et marchés, explorez les musées et déambulez dans les rues charmantes parfaites pour le shopping et la gastronomie.",
          category: "culture",
          location: "50 minutes en voiture",
          duration: "Demi-journée ou journée complète",
          price: "Entrées variées",
          image: nimes,
          website: "https://nimes-tourisme.com"
        },
        {
          name: "Avignon - Cité des Papes",
          description: "Ville historique sur le Rhône et ancien siège des papes catholiques au XIVe siècle. Spéciale pour nous car Kenneth, le père de Tristan, y a beaucoup travaillé. Visitez le magnifique Palais des Papes, le célèbre Pont d'Avignon, les remparts médiévaux et profitez de la riche scène culturelle.",
          category: "personal",
          location: "55 minutes en voiture",
          duration: "Journée complète",
          price: "Entrées variées",
          image: avignon,
          website: "https://www.avignon-et-provence.com/tourisme-provence/avignon"
        },
        {
          name: "Bédoin & Mont Ventoux",
          description: "Un village provençal pittoresque au pied du Mont Ventoux, la montagne emblématique du Tour de France. Très spécial pour nous - Anaïs y passait ses étés d'enfance avec sa sœur Ambre et leur mère Nadine. Parfait pour les randonnées en montagne, parcours cyclistes, marchés locaux, cafés et vie provençale authentique.",
          category: "personal",
          location: "1 heure en voiture",
          duration: "Journée complète",
          price: "Visite village gratuite",
          image: bedoin,
          website: "https://www.bedoin-mont-ventoux.fr/accueil.html"
        },
        {
          name: "Fontaine-de-Vaucluse",
          description: "Un beau site naturel où la Sorgue émerge de façon spectaculaire d'une source au pied de falaises imposantes. Réputé pour ses eaux cristallines, sentiers paisibles au bord de l'eau, ambiance charmante du village et cadre serein parfait pour une excursion d'un jour.",
          category: "nature",
          location: "1h30 en voiture",
          duration: "Journée complète",
          price: "Gratuit",
          image: fontaine_de_vaucluse,
          website: "https://islesurlasorguetourisme.com/decouvrir/terre-de-patrimoine/nos-villages/fontaine-de-vaucluse"
        }
      ]
    }
  };

  const t = content[language];
  const categories = Object.keys(t.categories) as Array<keyof typeof t.categories>;

  const filteredActivities = selectedCategory === 'all'
    ? t.activities
    : t.activities.filter(activity => activity.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const icons = {
      attractions: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      villages: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/>
        </svg>
      ),
      nature: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.75C2,15.75 3,16.75 4,16.75C4.22,16.75 4.6,16.55 5,16.25C5.4,16.8 6,17 6.5,17C7.66,17 8.15,16.1 8,15C8.65,14.75 9.75,14.5 10.5,14.25C11.25,14 12.33,13.8 13,13.5C13.67,13.2 14.33,12.75 15,12.25C15.67,11.75 16.33,11.17 17,10.5C17.67,9.83 18.33,9.08 19,8.25C19.67,7.42 20.5,6.5 21,5.75C20.5,6.5 19.67,7.42 19,8.25"/>
        </svg>
      ),
      culture: (
        <svg className="w-6 h-6 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
        </svg>
      ),
      activities: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.45 21.77,11.95 21.41,11.58Z"/>
        </svg>
      ),
      personal: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
        </svg>
      )
    };
    return icons[category as keyof typeof icons] || icons.attractions;
  };

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
      <div className={`container mx-auto px-4 sm:px-8 py-8 sm:py-16 max-w-7xl transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="art-deco-heading font-shango text-4xl sm:text-5xl md:text-6xl mb-4 tracking-wider"
              style={{
                background: 'linear-gradient(135deg, #aebea4 0%, #af6a28 50%, #862733 100%)',
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
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-recoleta font-semibold transition-all duration-300 min-h-[44px] ${
                    selectedCategory === category
                      ? 'text-gray-200 shadow-lg transform scale-105'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category ? '#af6a28' : undefined,
                    borderColor: selectedCategory === category ? '#af6a28' : undefined
                  }}
                >
                  {category !== 'all' && (
                    <span className={selectedCategory === category ? 'text-gray-200' : 'text-gray-400'}>
                      {getCategoryIcon(category)}
                    </span>
                  )}
                  {t.categories[category]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredActivities.map((activity: Activity, index) => (
            <div
              key={index}
              className="bg-dark-burgundy/70 rounded-lg shadow-xl border-2 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col will-change-transform"
              style={{ borderColor: '#4b5563' }}
            >
              {/* Activity Image */}
              <div className="h-48 bg-gradient-to-br from-sage-green to-burnt-orange relative overflow-hidden"
                   style={{
                     background: `linear-gradient(135deg, #aebea4 0%, #af6a28 100%)`
                   }}>
                <ExportedImage
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-shango text-2xl mb-3" style={{ color: '#ecb179' }}>
                  {activity.name}
                </h3>

                <p className="font-recoleta text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {activity.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-sage-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="font-recoleta text-gray-400">{activity.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-burnt-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                    </svg>
                    <span className="font-recoleta text-gray-400">{activity.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-burgundy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/>
                    </svg>
                    <span className="font-recoleta text-gray-400 font-semibold">{activity.price}</span>
                  </div>
                </div>
                {activity.website && (
                    <button
                        className="w-full px-4 py-2 bg-sage-green text-gray-900 transition-all duration-300 shadow-md border-2 border-sage-green min-h-[44px] touch-manipulation font-recoleta font-semibold text-sm rounded-lg hover:bg-opacity-90"
                        style={{ backgroundColor: '#aebea4', borderColor: '#aebea4' }}
                        onClick={() => {
                          // @ts-ignore
                          language == "en" ? window.open(`https://translate.google.com/translate?sl=fr&tl=en&u=${encodeURIComponent(activity.website)}`, '_blank', 'noopener,noreferrer')
                           :
                          window.open(activity.website, '_blank', 'noopener,noreferrer')
                        }}
                    >
                      {t.website}
                    </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Travel Tips Section */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-dark-burgundy/70 backdrop-blur-sm rounded-lg shadow-xl p-6 sm:p-8 border-2" style={{ borderColor: '#862733' }}>
            <h2 className="font-shango text-2xl sm:text-3xl mb-6 text-center" style={{ color: '#ecb179' }}>
              {language === 'en' ? 'Travel Tips for Provence' : 'Conseils de Voyage pour la Provence'}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#aebea4' }}>
                  <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92,6.01C18.72,5.42 18.16,5 17.5,5H15L13.5,3.5C13.1,3.1 12.55,2.9 12,2.9C11.45,2.9 10.9,3.1 10.5,3.5L9,5H6.5C5.84,5 5.28,5.42 5.08,6.01L5,6.5V17.5C5,18.33 5.67,19 6.5,19H17.5C18.33,19 19,18.33 19,17.5V6.5L18.92,6.01M12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9Z"/>
                  </svg>
                </div>
                <h3 className="font-shango text-lg mb-2" style={{ color: '#ecb179' }}>
                  {language === 'en' ? 'Best Time to Visit' : 'Meilleur Moment pour Visiter'}
                </h3>
                <p className="font-recoleta text-gray-300 text-sm">
                  {language === 'en'
                    ? 'September offers perfect weather for exploring - warm, sunny days ideal for outdoor activities and sightseeing.'
                    : 'Le mois de septembre offre un temps parfait pour explorer - des journées chaudes et ensoleillées idéales pour les activités de plein air et le tourisme.'
                  }
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#af6a28' }}>
                  <svg className="w-8 h-8 mx-auto mb-2 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <h3 className="font-shango text-lg mb-2" style={{ color: '#ecb179' }}>
                  {language === 'en' ? 'Getting Around' : 'Se Déplacer'}
                </h3>
                <p className="font-recoleta text-gray-300 text-sm">
                  {language === 'en'
                    ? 'A car is recommended for exploring the region. Some sites are within walking distance or short drives from our venue.'
                    : 'Une voiture est recommandée pour explorer la région. Certains sites sont à distance de marche ou à courte distance en voiture de notre lieu.'
                  }
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#862733' }}>
                  <svg className="w-6 h-6 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                  </svg>
                </div>
                <h3 className="font-shango text-lg mb-2" style={{ color: '#ecb179' }}>
                  {language === 'en' ? 'Local Culture' : 'Culture Locale'}
                </h3>
                <p className="font-recoleta text-gray-300 text-sm">
                  {language === 'en'
                    ? 'Embrace the Provençal art de vivre - take time to savor local markets, cafés, and the leisurely pace of life.'
                    : 'Profitez de l\'art de vivre provençal - prenez le temps de savourer les marchés locaux, les cafés et le rythme de vie tranquille.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to other pages */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8">
          <button
            onClick={() => router.push('/about')}
            className="group px-6 py-4 bg-dark-burgundy/80 border-2 border-sage-green hover:bg-sage-green hover:text-gray-900 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta text-gray-200"
            style={{ borderColor: '#aebea4' }}
          >
            <span className="font-semibold text-base">{language === 'en' ? 'About' : 'À Propos'}</span>
          </button>
          <button
            onClick={() => router.push('/details')}
            className="group px-6 py-4 bg-dark-burgundy/80 border-2 border-burgundy hover:bg-burgundy hover:text-gray-200 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta text-gray-200"
            style={{ borderColor: '#862733' }}
          >
            <span className="font-semibold text-base">{language === 'en' ? 'Details' : 'Détails'}</span>
          </button>
          <button
            onClick={() => router.push('/faq')}
            className="group px-6 py-4 bg-dark-burgundy/80 border-2 border-burnt-orange hover:bg-burnt-orange hover:text-gray-200 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation font-recoleta text-gray-200"
            style={{ borderColor: '#af6a28' }}
          >
            <span className="font-semibold text-base">FAQ</span>
          </button>
          <button
            onClick={() => router.push('/rsvp')}
            className="group px-6 py-4 bg-burnt-orange/80 text-gray-200 hover:bg-opacity-80 transition-all duration-300 shadow-lg border-2 border-burnt-orange min-h-[48px] touch-manipulation font-recoleta"
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

export default ThingsToDoPage;