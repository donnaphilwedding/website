/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#36B29C",
        primaryDark: "#1E6457",
        background: "#FFFAF6"
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
