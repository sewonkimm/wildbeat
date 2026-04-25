import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        foreground: '#EDEDED',
        primary: {
          DEFAULT: '#D4A843',
          light: '#E4C06A',
          dark: '#B8912E',
        },
        surface: {
          DEFAULT: '#111118',
          light: '#1A1A24',
        },
        muted: '#9CA3AF',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      maxWidth: {
        container: '80rem',
      },
    },
  },
  plugins: [],
};
export default config;
