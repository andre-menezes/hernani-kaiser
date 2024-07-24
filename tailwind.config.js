/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#E8E5E6",
        'variant-g': "#ACAD9E",
        'variant-g-txt': "#6D6E65",
        'variant-r': "#9B7284",
        'variant-bg': '#F7F5F1',
        whatsapp: '#57AB7A'
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        'open-sans': ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      keyframes: {
        slideToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideToTop: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideToBottom: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        show: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        slideToLeft: 'slideToLeft 700ms linear',
        slideToRight: 'slideToRight 700ms linear',
        slideToTop: 'slideToTop 700ms linear',
        slideToBottom: 'slideToBottom 700ms linear',
        show: 'show 700ms linear',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
