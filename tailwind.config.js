
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {

        ".bg-hero": {
          "background-image": "url(/wave.png)",
          // "width": '500',
          "background-size": "cover",
          "background-repeat": "no-repeat",
          "layout":"fill"
        },
        ".bg-eco": {
          "background-image": "url(/eco-bg.png)",
          // "width": '500',
          "background-size": "cover",
          "background-repeat": "no-repeat",
          "layout":"fill"
        },

        ".bg-taget": {
          "background-image": "url(/target.png)",
          // "width": '500',
          "background-size": "cover",
          "background-repeat": "no-repeat",
          "layout":"fill"
          
        }
      };

      addUtilities(utilities);
    })
  ],
}