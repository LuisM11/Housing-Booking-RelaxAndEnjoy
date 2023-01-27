/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainColor: "#FBC02D",
      secundaryColor: "#263238",
      thirdColor: "#607D8B",
      fourthColor: "#FFFBE2",
      redWarning: ' #df3614 '
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      tablet: "450px",
      // => @media (min-width: 640px) { ... }

      desktop: "1367px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      spacing: {
        128: "31rem",
      },
    },
  },
  plugins: [],
};
