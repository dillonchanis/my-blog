module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "hot-rush-sans": ["Hot Rush Sans", "sans-serif"],
        "hot-rush-sans-striped": ["Hot Rush Sans Striped", "sans-serif"],
        "hot-rush-script": ["Hot Rush Script", "script"],
      },
      colors: {
        synthPurple: "#231437",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
