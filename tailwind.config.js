/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './src/index.html'],
  theme: {
    extend: {
      fontFamily: {
        neueMontreal: ['Neue Montreal', 'sans-serif'],
      },
      fontSize: {
        sm: [
          '0.875rem',
          {
            lineHeight: '1.575rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
        base: [
          '1rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        xl: [
          '1.125rem',
          {
            lineHeight: '2.03rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
        '2xl': [
          '1rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        '3xl': [
          '2rem',
          {
            lineHeight: '3rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
        '4xl': [
          '1rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        '5xl': [
          '3.75rem',
          {
            lineHeight: '5.62rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
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
      container: {
        // center: true,
        padding: {
          DEFAULT: '1.25rem',
          // sm: '2rem',
          // md: '3rem',
          lg: '3.75rem',
          // xl: '5rem',
        },
      },
      // screens: {
      //   'xs': '480px',
      //   sm: '640px',
      //   md: '768px',
      //   lg: '1024px',
      //   xl: '1320px',
      //   '2xl': '1440px',
      // },
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
      objectPosition: {
        'hero-img-md': '36% 50%',
        'hero-img-lg': '40% 50%',
        'hero-img-xl': '30% 50%',
        'hero-img-2xl': '20% 50%',
      },
    },
  },
  plugins: [],
};
