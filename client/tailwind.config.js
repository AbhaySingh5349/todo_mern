/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
      '2xl': '1400px',
    },
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#d3f2d7',
          300: '#87d4b1',
          500: '#74a17a',
          700: '#547a5a',
          900: '#36523a',
        },
        'accent-green': '#909e60',
      },
      boxShadow: {
        'light-100': '0 1px 4px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
