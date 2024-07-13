/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-purple': '#300924',
        'main-green': '#83c445',
        'main-blue': '#4b5897',
        'main-yellow': '#dbd492',
      },
      fontFamily: {
        sans: ['Source Code Pro', 'sans-serif'],
      },
      animation: {
        blink: 'pulse 1s infinite alternate;',
      },
    },
  },
  plugins: [],
};
