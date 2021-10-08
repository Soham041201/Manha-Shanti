module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
       'hero-pattern': "url('https://image.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg')",
       'back-pattern': "url('https://image.freepik.com/free-vector/village-nature-watercolor-painting-art_452261-278.jpg')" 
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
     '50%': '50%',
     '16': '4rem',
    }
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
}
