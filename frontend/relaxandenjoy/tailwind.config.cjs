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
      redBg :"#FFE1E1",
      grayColor: "#4F4F50",
      white: "#fff",
    },
    fontFamily: {
      poppins: ['Poppins']
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
      boxShadow:{
        'customI': '0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 2px 6px 2px rgba(60, 64, 67, 0.15)'
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
