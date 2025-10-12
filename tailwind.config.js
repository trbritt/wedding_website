/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Updated font families using local OTF files
        serif: ['Recoleta', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Recoleta', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Shango', 'Playfair Display', 'Georgia', 'serif'],
        // Specific font classes for better control
        'shango': ['Shango', 'Playfair Display', 'Georgia', 'serif'],
        'recoleta': ['Recoleta', 'Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        'sage-green': '#aebea4',
        'burgundy': '#862733',
        'burnt-orange': '#af6a28',
        'dark-green-1': '#3a4a3b',
        'dark-green-2': '#4a5a4b',
        'dark-burgundy': '#371015',
        'gray-burgundy': '#512b31',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'art-deco-pattern': `
          linear-gradient(45deg, #aebea4 25%, transparent 25%),
          linear-gradient(-45deg, #862733 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #af6a28 75%),
          linear-gradient(-45deg, transparent 75%, #aebea4 75%)
        `,
      },
    },
  },
  plugins: [],
}