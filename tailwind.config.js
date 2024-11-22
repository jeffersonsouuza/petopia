/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './src/index.html'],
  theme: {
    extend: {
      colors: {
        'white-100': '#FFFFFF',
        'white-200': '#F5F5F5',
        'white-300': 'rgba(255, 255, 255, 0.7)',
        'muted-100': '#E0E8E0',
        'muted-200': '#8C8C8C',
        'green-100': '#1C4A2A',
        'green-200': '#0E2515',
      },
    },
  },
  plugins: [],
};
