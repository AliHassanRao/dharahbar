import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
});
