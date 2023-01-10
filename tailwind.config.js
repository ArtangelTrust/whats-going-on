/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'blue': '#2A4194',
      'yellow': '#FFDF6A',
      'light-grey': '#ECEAE5',
      'dark-grey': '#717070'
    },
    extend: {
      fontFamily: {
        'sans': ['Fold Grotesque', ...defaultTheme.fontFamily.sans],
        'display': ['EH Normal', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'flat': '0 0 5px 0 rgb(0 0 0 / 0.1), 0 0 2px -1px rgb(0 0 0 / 0.1);'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
