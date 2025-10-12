import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  hasSelectedLanguage: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(false);

  // Load language preference on mount
  useEffect(() => {
    try {
      // Try to get from sessionStorage first (works in most environments)
      const savedLanguage = sessionStorage.getItem('wedding-language') as Language;
      const hasSelected = sessionStorage.getItem('wedding-language-selected') === 'true';
      
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
        setLanguageState(savedLanguage);
        setHasSelectedLanguage(hasSelected);
      }
    } catch (error) {
      // If sessionStorage fails, we'll just use the default state
      console.log('SessionStorage not available, using default language');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setHasSelectedLanguage(true);
    
    try {
      // Save to sessionStorage if available
      sessionStorage.setItem('wedding-language', lang);
      sessionStorage.setItem('wedding-language-selected', 'true');
    } catch (error) {
      // If sessionStorage fails, the state will still work for the session
      console.log('SessionStorage not available, language will reset on page reload');
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, hasSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};