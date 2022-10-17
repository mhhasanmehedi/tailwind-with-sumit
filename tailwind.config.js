const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html"],
  mode: "jit",
  purge: ["./index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "540px",
      lg: "1000px",
      "4k": "2560px",
    },
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
