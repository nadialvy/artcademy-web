/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'xxs': '10px',
      }
    },
  },
  variants: {
    extend: {
      colors: {
        blue: {
          500: '#0096C7',
          600: '#0784AC',
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    plugin(function({ addUtilities }){
      const utilities = {
        ".bg-dashboard": {
          "background-image": "url(./public/rectangle-bg-dashboard.svg)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
          "padding": "2.2rem 0",
        },
      }
      addUtilities(utilities);
    })
  ],
}
