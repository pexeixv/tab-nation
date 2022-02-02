module.exports = {
  content: ['./**/*.{html,njk}'],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],

  "tailwindCSS.includeLanguages": {
    "plaintext": "njk"
  }

}
