module.exports = {
  content: ["./**/*.{html,njk}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],

  "tailwindCSS.includeLanguages": {
    plaintext: "njk",
  },
};
