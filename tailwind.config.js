/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        md: "875px",
        lg: "1080px",
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
      },
      lineHeight: {
        paragraph: "1.67",
        title: "1.22",
        stats: "1.42",
      },
      
      colors: {
        "dark-blue": "#090b1a",
        "blueish": "#1b1938",
        "light-violet": "#aa5cdb",
        violet: "#AB5CDB",
      },
    },
  },
  plugins: [],
}

