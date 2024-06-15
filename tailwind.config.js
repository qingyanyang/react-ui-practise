/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: {
        light: '#6d28d9',
        DEFAULT: '#5b21b6',
        dark: '#4c1d95',
      },
      secondary: {
        light: '#0ea5e9',
        DEFAULT: '#0284c7',
        dark: '#0369a1',
      },
      accent: {
        light: '#f43f5e',
        DEFAULT: '#e11d48',
        dark: '#be123c',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.25rem',
        lg: '.5rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
