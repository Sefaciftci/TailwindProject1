/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  //defaul tüm conteinerlarda istediğmiz için theme içine yazarız
  theme: {
    container: {
      center:true
    },
    extend: {
      fontFamily: {
        loto : ['Lato', 'sans-serif']
      },
      
      colors : {
        'darkPurple' : '#82456C'
      }
    },
  },
  plugins: [],
}