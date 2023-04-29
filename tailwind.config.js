/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container:{
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem', 
      }
    },
    extend: {},
  },
  plugins: [],
}

