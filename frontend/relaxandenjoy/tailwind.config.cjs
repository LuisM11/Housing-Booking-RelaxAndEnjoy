/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      mainColor: "#FBC02D",
      secundaryColor: "#263238",
      thirdColor: "#607D8B",
      fourthColor: "#FFFBE2",
      redWarning: "#df3614 ",
      grayColor: "#4F4F50",
      white: "#fff",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      tablet: "768px",
      // => @media (min-width: 640px) { ... }

      desktop: "1024px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      spacing: {
        128: "31rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
