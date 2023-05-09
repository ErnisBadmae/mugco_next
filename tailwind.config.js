/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors');

const colors = {
  transparent: twColors.transparent,
  black: twColors.black,
  white: twColors.white,
  primary: '#FF9902',
  secondary: '#161D25',
  'bg-color': '#F2F2F5',
  aqua: '#268697',
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{ks,ts,jsx,tsx}'],
  theme: {
    colors,
    extend: {
      fontSize: {
        xs: '0.82rem',
        base: '1.15rem',
      },
    },
    keyframes: {
      animationOpacity: {
        from: {
          opacity: 0.2,
        },
        to: {
          opacity: 1,
        },
      },
      scaleIn: {
        '0%': {
          opacity: 0,
          transform: 'scale(0.9)',
        },
        '50%': {
          opacity: 0.3,
        },
        '100%': {
          opacity: 1,
          transform: 'scale(1)',
        },
      },
    },
  },
  plugins: [],
};
