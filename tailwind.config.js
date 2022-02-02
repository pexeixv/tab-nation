module.exports = {
  content: ['./**/*.{html,njk}'],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],

  "tailwindCSS.includeLanguages": {
    "plaintext": "njk"
  }

}
