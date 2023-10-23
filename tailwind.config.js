/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        xl: '768px',
        '2xl': '1024px',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: '#091a4b',
        secondary: '#005aa8',
        muted: '#636363',
        success: '#13b981',
      },
    },
  },
  plugins: [],
};
