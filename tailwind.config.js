/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purpleBtn': "#6C63FF"
      }, fontFamily:{
        'poppins': 'Poppins, sans-serif'
      }, spacing:{
        '1/6':'11%'
      }
    },
  },
  plugins: [],
}

