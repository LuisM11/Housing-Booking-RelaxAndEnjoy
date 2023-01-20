/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainColor: "#FBC02D",
      secundaryColor: "#263238",
      thirdColor: "#607D8B",
      fourthColor: "#FFFBE2",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "31rem",
      },
    },
  },
  plugins: [],
};
