/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'raw-siena': '#D87D4A',
        'hit-pink': '#FBAF85',
        'cod-gray': '#101010',
        'seaShell': '#F1F1F1',
        'lotion': '#FAFAFA'
      },
      screens: {
        'lg': '1440px'
      }
    },
  },
  plugins: [],
}

