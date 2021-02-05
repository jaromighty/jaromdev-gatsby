const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'light-blue': colors.lightBlue,
        orange: colors.orange,
      },
      fontFamily: {
        logo: ['Roboto Slab'],
        sans: ['Inter', ...fontFamily.sans],
      },
      maxWidth: {
        'xxs': '18rem',
      },
      spacing: {
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
