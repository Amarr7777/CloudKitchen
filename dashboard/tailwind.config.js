/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a2a193',
      },
      backgroundImage: {
        'mainBg': "url('/src/assets/bg.svg')"
      }
    },

  },
  plugins: [],
}