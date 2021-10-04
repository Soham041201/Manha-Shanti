module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
       'hero-pattern': "url('https://image.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
