/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        hanken: ["Hanken Grotesk", "sans-serif"],
      },
      colors: {
        primaryColor: "#165648",
      },
      backgroundImage: {
        hero: "url(./assets/hero.png)",
      },
    },
  },
  plugins: [],
};
