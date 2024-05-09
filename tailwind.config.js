/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#002E18',
        lightGreen: '#E8EEE7',
        beigeGreen: '#F5F5F5'
      }
    },
  },
  plugins: [],
}
