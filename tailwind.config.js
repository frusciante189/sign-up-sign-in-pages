const colors = require('tailwindcss/colors')


module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        circles: "url('./Assets/bg.png')"
      },
      blur: {
        35: "35px"
      },
      screens: {
        "signUp": "900px"
      },
      fontFamily: {
        "roboto": ["'Roboto', sans-serif"]
      },
      colors: {
        trueGray: colors.trueGray,
        amber: colors.amber,
        sky: colors.sky
      },
      boxShadow: {
        custom: "0px 14px 9px -15px rgba(0,0,0,0.25)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
