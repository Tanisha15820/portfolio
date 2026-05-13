/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#fd5f05",   // your orangish brand color
        secondary: "#f5efe6", // whitish / warm beige tone
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },

  plugins: [],
};