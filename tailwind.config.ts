import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontWeight: {
      light: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      '3xs': ['8px', { lineHeight: '12px' }],
      '2xs': ['10px', { lineHeight: '12px' }],
      'xs': ['12px', { lineHeight: '14px' }],
      'sm': ['14px', { lineHeight: '16px' }],
      'md': ['16px', { lineHeight: '20px' }],
      'lg': ['18px', { lineHeight: '22px' }],
      'xl': ['20px', { lineHeight: '24px' }],
      '2xl': ['24px', { lineHeight: '28px' }],
      '3xl': ['28px', { lineHeight: '34px' }],
      '4xl': ['32px', { lineHeight: '38px' }],
      '5xl': ['36px', { lineHeight: '44px' }],
      '6xl': ['40px', { lineHeight: '48px' }],
    },

    extend: {
      fontFamily: {
        montreal: ['PP Neue Montreal', 'sans-serif'],
      },
      colors: {
        'brand': {
          main: '#FF5900',
          secondary: {
            soSunny: '#f78104',
            kindaYellow: '#faab36',
            teal: '#005f60',
            grey: '#f5f3ee',
            black: '#000000',
            white: '#ffffff',
          },
        },
        'grey-700': '#797670',
        'grey-800': '#4D4B46',
      },
    },
  },

  plugins: [],
};
export default config;
