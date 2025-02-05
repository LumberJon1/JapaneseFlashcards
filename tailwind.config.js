/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'], // Set Noto Sans as default sans-serif
        noto: ['"Noto Sans JP"', 'sans-serif'], // Optional custom class
      },
    },
  },
  plugins: [],
}
