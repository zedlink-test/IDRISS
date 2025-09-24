import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    programmes: 'Programmes',
    visas: 'Visas',
    aboutUs: 'About Us',
    contact: 'Contact',
    heroTitle: 'Discover The World With Us',
    heroSubtitle: 'Your journey begins here',
    aboutTitle: 'About Our Travel Agency',
    aboutText: 'With our numerous years of experience, we are recognized as one of the most distinguished travel agencies that can come up with the most amazing trips. Our staff is committed to providing top-notch service and creating bespoke travel experiences that match each traveler’s distinctive tastes. We take care of every step of the process starting from the booking of your flights and accommodations and going as far as providing you with a tailor-made itinerary and giving you access to the local culture so that you can have a trip that is both easy and unforgettable. We do our best to present enchanting destinations and cultural experiences to eager travelers not only from Algeria but also from all over the earth. In our agency, every trip is designed with the utmost care, the highest standards of professionalism, and a desire to make travel genuinely fabulous.. Our team is dedicated to providing exceptional service and personalized travel experiences.',
    happyClients: 'Happy Clients',
    yearsExperience: 'Years of Experience',
    destinations: 'Destinations',
    trustScore: 'Costumers Trust',
    contactTitle: 'Contact Information',
    partnersTitle: 'Our Trusted Partners',
    bookNow: 'BOOK NOW',
    proceder: 'PROCEED',
    name: 'Name',
    surname: 'Surname',
    travelers: 'Number of Travelers',
    phone: 'Phone Number',
    wilaya: 'Wilaya',
    submit: 'Submit',
    selectWilaya: 'Select a Wilaya',
    bookingTitle: 'Book Your Journey',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode'
  },
  fr: {
    home: 'Accueil',
    programmes: 'Programmes',
    visas: 'Visas',
    aboutUs: 'À Propos',
    contact: 'Contact',
    heroTitle: 'Découvrez Le Monde Avec Nous',
    heroSubtitle: 'Votre voyage commence ici',
    aboutTitle: 'À Propos de Notre Agence de Voyage',
    aboutText: 'Avec nos nombreuses années d`expérience, nous sommes reconnus comme étant l`une des agences de voyages les plus distinguées pouvant réaliser les plus beaux voyages. Notre équipe met un point d`honneur à fournir un service de qualité et à concevoir des voyages sur mesure qui correspondent aux goûts de chaque voyageur. Nous nous occupons de tout le processus depuis la réservation de vos vols et de vos hôtels en passant par vous concevoir un itinéraire fait spécialement pour vous jusqu`à même vous ouvrir les portes de la culture locale pour que vous puissiez vivre un voyage à la fois simple et inoubliable. Nous nous employons à faire découvrir des destinations de rêve et des expériences culturelles à des voyageurs non seulement venus d`Algérie mais aussi provenant du monde entier. Dans notre agence, chaque voyage est pensé jusqu`au moindre détail, dans le plus grand des professionnels et toujours avec l envie de rendre le voyage tout simplement fabuleux.',
    happyClients: 'Clients Satisfaits',
    yearsExperience: 'Années d`Expérience',
    destinations: 'Destinations',
    trustScore: 'Confiance De Nos Clients',
    contactTitle: 'Informations de Contact',
    partnersTitle: 'Nos Partenaires',
    bookNow: 'Réserver',
    proceder: 'PROCÉDER',
    name: 'Nom',
    surname: 'Prénom',
    travelers: 'Nombre de Voyageurs',
    phone: 'Numéro de Téléphone',
    wilaya: 'Wilaya',
    submit: 'Envoyer',
    selectWilaya: 'Sélectionner une Wilaya',
    bookingTitle: 'Réservez Votre Voyage',
    darkMode: 'Mode Sombre',
    lightMode: 'Mode Clair'
  },
  ar: {
    home: 'الرئيسية',
    programmes: 'البرامج',
    visas: 'التأشيرات',
    aboutUs: 'من نحن',
    contact: 'اتصل بنا',
    heroTitle: 'اكتشف العالم معنا',
    heroSubtitle: 'رحلتك تبدأ هنا ',
    aboutTitle: 'حول وكالة السفر لدينا',
    aboutText: 'نحن وكالة سفر رائدة مع سنوات من الخبرة في إنشاء رحلات لا تُنسى. فريقنا مكرس لتقديم خدمة استثنائية وتجارب سفر شخصية.',
    happyClients: 'العملاء السعداء',
    yearsExperience: 'سنوات الخبرة',
    destinations: 'الوجهات',
    trustScore: 'نقاط الثقة',
    contactTitle: 'معلومات الاتصال',
    partnersTitle: 'شركاؤنا الموثوقون',
    bookNow: 'احجز الآن',
    proceder: 'المتابعة',
    name: 'الاسم',
    surname: 'اللقب',
    travelers: 'عدد المسافرين',
    phone: 'رقم الهاتف',
    wilaya: 'الولاية',
    submit: 'إرسال',
    selectWilaya: 'اختر ولاية',
    bookingTitle: 'احجز رحلتك',
    darkMode: 'الوضع المظلم',
    lightMode: 'الوضع المضيء'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};