/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{jsx,tsx}",
    "./src/index.{jsx,tsx}",
    "./public/*.html",
  ],
  theme: {
    colors:{
      WHITE: '#FFFeFe',
      BLACK: '#383f44',
      DARK_PINK: 'a1588a',
      LIGHT_PINK: 'ebd5d4'
    }
  },
  plugins: [],
};
