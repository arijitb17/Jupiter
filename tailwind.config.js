/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#FEF1B8",
        secondary: "#e1ad01",
      },
      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm: "3rem",
        },
      }
    },
  },
  plugins: [],
}

