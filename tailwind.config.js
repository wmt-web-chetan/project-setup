/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E0991C', // Replace with your desired primary color
        secondary: '#50C8F2', // Replace with your desired secondary color
      },
    },
  },
  plugins: [],
}