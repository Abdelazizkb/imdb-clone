module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: '#121212',
        yellow:'#F5C518'
      }, 
      height:{
        "hero":550,
        "r-hero":880
      }, 
      width:{
        "hero":880,
        "r-hero":550
      }
    },
  },
  plugins: [],
}