import { useEffect, useState } from 'react';
import React from 'react';

interface FontLoaderProps {
  children: React.ReactNode;
}

const FontLoader: React.FC<FontLoaderProps> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        // Check if FontFace API is supported
        if ('fonts' in document) {
          // Create font faces
          const shangoFont = new FontFace(
            'Shango',
            'url(/fonts/Shango.otf) format("opentype")',
            {
              weight: 'normal',
              style: 'normal',
              display: 'swap'
            }
          );

          const recoletaFont = new FontFace(
            'Recoleta',
            'url(/fonts/Recoleta.otf) format("opentype")',
            {
              weight: 'normal',
              style: 'normal',
              display: 'swap'
            }
          );

          // Load the fonts
          await Promise.all([
            shangoFont.load(),
            recoletaFont.load()
          ]);

          // Add fonts to document
          document.fonts.add(shangoFont);
          document.fonts.add(recoletaFont);

          // Wait for fonts to be ready
          await document.fonts.ready;
          
          setFontsLoaded(true);
        } else {
          // Fallback for browsers without FontFace API
          // Use a timeout to assume fonts are loaded
          setTimeout(() => {
            setFontsLoaded(true);
          }, 100);
        }
      } catch (error) {
        console.warn('Font loading failed, using fallback fonts:', error);
        setFontsLoaded(true);
      }
    };

    loadFonts();
  }, []);

  return (
    <div className={`transition-opacity duration-300 ${fontsLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
};

export default FontLoader;