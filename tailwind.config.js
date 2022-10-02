/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#36B29C"
      },
      fontFamily: {
        calligraffitti: ['Calligraffitti', 'cursive'],
        cormorant: ['Cormorant', 'serif'],
        cormorantSc: ['Cormorant SC', 'serif']
      }
    }
  },
  plugins: [],
}
