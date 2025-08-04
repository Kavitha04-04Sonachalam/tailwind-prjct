/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        palanquin: ['Palanquin', 'sans-serif'],
      },
      colors: {
        'coral-red': '#FF6452',
        'slate-gray': '#5A6473',
        primary: "#fff", // Optional, used in hero section bg
      },
      backgroundImage: {
        hero: "url('/src/assets/images/hero-background.png')", // adjust if needed
      }
    },
  },
  plugins: [],
}



