/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary' : 'var(--color-primary)',
      'secondary' : 'var(--color-secondary)',
      'highlight' : 'var(--color-highlight)',
      'active' : 'var(--color-active)',
      'white': 'var(--white)',
      'black': 'var(--black)',
      'blue': 'var(--blue)',
      'yellow': 'var(--yellow)',
      'light-grey': 'var(--light-grey)',
      'dark-grey': 'var(--dark-grey)',
    },
    extend: {
      textColor: {
        'primary' : 'var(--color-primary)',
        'secondary' : 'var(--color-secondary)',
        'highlight' : 'var(--color-highlight)',
        'active' : 'var(--color-active)',
      },
      backgroundColor: {
        'primary' : 'var(--color-primary)',
        'secondary' : 'var(--color-secondary)',
        'highlight' : 'var(--color-highlight)',
        'active' : 'var(--color-active)',
      },
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
            color: 'var(--color-primary)',
          },
        },
        '2xl': {
          css: {
            fontSize: '1.5rem',
            lineHeight: '1.5',
            p: {
              fontSize: '1.5rem',
              lineHeight: '1.5',
              marginTop: '1.3em',
              marginBottom: '1.3em',
            }
          }
        }
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
