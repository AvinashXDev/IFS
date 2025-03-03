/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF7A00', // Orange from logo
          dark: '#E56E00',
          light: '#FF9633',
        },
        secondary: {
          DEFAULT: '#4A4A9C', // Purple/blue from logo
          dark: '#3A3A7C',
          light: '#6A6ABC',
        },
        dark: {
          DEFAULT: '#121212',
          lighter: '#1E1E1E',
          light: '#2A2A2A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};