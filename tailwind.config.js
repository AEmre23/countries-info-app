/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif']
      },
      colors: {
      'darkElbg': 'hsl(209, 23%, 22%)',
      'darkmodebg': 'hsl(207, 26%, 17%)',
      'lightmodetxt': 'hsl(200, 15%, 8%)',
      'lightmodeinput': 'hsl(0, 0%, 52%)',
      'lightmodebg': 'hsl(0, 0%, 98%)',
      },
    },
      screens: {
      'mobile': {'max':'1168px'},
      'bigscreen': {'min':'1680px'},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
