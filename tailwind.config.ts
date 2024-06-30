import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange-dark': '#FF4405',
        'gray-text': '#667085',
        'orange-light': '#FF692E',
      },
      boxShadow: {
        'custom-shadow':
          '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
