// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}",
    "./src/screens/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#333333',
        'dark-gray': '#4A4A4A',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      borderColor: ['dark'],
      textColor: ['dark'],
    },
  },
  
  plugins: [],

};
