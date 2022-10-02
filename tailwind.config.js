/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      primary: "#36B29C"
    },
    extend: {
      fontFamily: {
        calligraffitti: ['Calligraffitti', 'cursive']
      }
    }
  },
  plugins: [],
}
