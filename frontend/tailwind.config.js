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
        "primary": "#96CEB4",
        "secondary": "#FFEEAD",
        "thirdColor": "#FFAD60",
        "fourthColor": "#A66E38",
      }

    },
  },
  plugins: [],
}