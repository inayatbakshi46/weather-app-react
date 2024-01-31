/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        day: '#5CE1E6',
        night: '#002B65',
        dark: '#E7E4E6',
        grad: "#2D3250"


      },
      fontFamily: {
        custom: ['Cabin','sans-serif']
      }
    },
  },
  plugins: [],
}