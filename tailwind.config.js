module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: '#121212',
        yellow:'#F5C518',
        stell:"#1a1a1a",
        stell400:"rgb(133, 133, 133))"
      }, 
      height:{
        "hero":550,
        "r-hero":880,
        "prime":462,
        "prime-lg":412

      }, 
      width:{
        "hero":880,
        "hero-lg":650,
        "item":420,
        "item-lg":305,
        "prime":210,
        "prime-lg":150,
        "explore":640,
        "explore-lg":400

      }
    },
  },
  plugins: [],
}