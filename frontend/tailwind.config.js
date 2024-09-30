/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Quicksand": ["Quicksand", "sans-serif"],
        "Raleway": ["Raleway", "sans-serif"]
      },
      // backgroundImage:{
      //    'mainBg': "url('/src/assets/main.svg')"
      // },
      colors: {
        "primary": "#ffffff",
        "secondary": "#C8C4B5FF",
        "thirdColor": "#A79889FF",
        "fourthColor": "#A66E38",
      }

    },
  },
  plugins: [],
}