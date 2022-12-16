/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './assets/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // pri: ['Clash Display'],
        // sec: ['DM Sans'],
      },
      colors: {
        darkBlue: '#152238',
        lightBlue: '#687C96',
        common: '#bed9fd',
        sec: '#fcf3ea',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    },
    require('@tailwindcss/line-clamp'),
  ],
}
