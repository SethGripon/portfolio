/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#207bff",
        secondary: "#4ea5ff",
        darkOne: "#181A1F",
        darkTwo: "#21242C",
        darkThree: "#19191D",
        lightOne: "#FFFFFF",
        lightTwo: "#f5f7fa",
        lightThree: "#f3f3f5"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "loop-scroll": "loop-scroll 40s linear infinite",
        "pulse-size": "pulse-size 1s infinite",
        'fade-heart': 'fade-heart .6s linear infinite',
      },
      keyframes: {
        "loop-scroll": {
          '0%': { transform: "translateX(0)"},
          '100%': { transform: "translateX(-100%)"}
        },
        "pulse-size": {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.55)' },
        },
        'fade-heart': {
          '0%': { transform: 'rotate(-45deg)', transform: 'scale(1.07)' },
          '80%': { transform: 'rotate(-45deg)', transform: 'scale(1)' },
          '100%': { transform: 'rotate(-45deg)', transform: 'scale(.8)' },
        },
      }
    },
  },
  plugins: [],
};
