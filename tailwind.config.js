const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/themes/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "gradient-from": "hsl(192, 100%, 67%)",
        "gradient-to": "hsl(280, 87%, 65%)",
        light: {
          100: "hsl(0, 0%, 98%)",
          200: "hsl(236, 33%, 92%)",
          300: "hsl(233, 11%, 84%)",
          400: "hsl(236, 9%, 61%)",
          500: "hsl(235, 19%, 35%)",
        },
        dark: {
          100: "hsl(236, 33%, 92%)",
          200: "hsl(234, 39%, 85%)",
          300: "hsl(234, 11%, 52%)",
          400: "hsl(233, 14%, 35%)",
          500: "hsl(237, 14%, 26%)",
          600: "hsl(235, 24%, 19%)",
          700: "hsl(235, 21%, 11%)",
        },
      },
      height: {
        76: "19rem",
      },
      width: {
        "1/8": "12.5%",
        "2/8": "25%",
        "3/8": "47.5%",
        "4/8": "50%",
        "5/8": "62.5%",
        "6/8": "75%",
        "7/8": "87.5%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
