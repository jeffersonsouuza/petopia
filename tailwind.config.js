/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './src/index.html'],
  theme: {
    extend: {
      fontFamily: {
        neueMontreal: ['Neue Montreal', 'sans-serif'],
      },
      colors: {
        'white-100': '#FFFFFF',
        'white-200': '#F5F5F5',
        'white-300': 'rgba(255, 255, 255, 0.7)',
        'muted-100': '#E0E8E0',
        'muted-200': '#8C8C8C',
        'green-100': '#1C4A2A',
        'green-200': '#0E2515',
      },
      padding: {
        16: '1rem',
        20: '1.25rem',
        32: '2rem',
        36: '2.25rem',
        40: '2.5rem',
        48: '3rem',
        60: '3.75rem',
        80: '5rem',
        120: '7.5rem',
        160: '10rem',
        200: '12.5rem',
      },
      gap: {
        16: '1rem',
        24: '1.5rem',
        40: '2.5rem',
        48: '3rem',
      },
    },
  },
  plugins: [],
};
