/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        max: "2000px",
      },
      fontFamily: { 
        primary: ["Rubik", "sans-serif"],
        secondary: ["krub", "sans-serif"],
        tertiary:["League Spartan', sans-serif"]
      },
      colors: {
        'blacked': '#1C1F35',
        "yellowed":"#FFB629"
      },
    },
  },
  plugins: [],
}
