module.exports = {
  content: ["./index.html"],
  mode: "jit",
  purge: ["./index.html"],
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
