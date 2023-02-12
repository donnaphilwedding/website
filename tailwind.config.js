/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#6A57B6",
        primaryDark: "#3E3E3E",
        secondary: "#0C9980",
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
