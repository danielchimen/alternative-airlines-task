/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '768px',
          md: '1024px',
          lg: '1180px',
        },
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
