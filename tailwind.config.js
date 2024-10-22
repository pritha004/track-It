/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "dark-green":"#16423C",
        "medium-green":"#6A9C89",
        "light-green":"#C4DAD2",
        "lighter-green":"#E9EFEC"
      },
    },
  },
  plugins: [],
}

