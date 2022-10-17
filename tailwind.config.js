module.exports = {
  content: ["./index.html"],
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myColor: {
          300: "#d5d5d5",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
