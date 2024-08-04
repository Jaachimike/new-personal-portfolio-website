/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jaachiGray: {
          100: '#a1a1aa',
          200: '#252529',
          300: '#18181B',
        }
      }
    },
  },
  plugins: [],
}

