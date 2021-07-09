module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      gridTemplateColumns: {
       'kozep': '1fr 5fr 1fr',
      }
     },
   },
   variants: {},
   plugins: [],
 }