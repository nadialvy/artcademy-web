/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
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
    require('tw-elements/dist/plugin')
  ],
}
