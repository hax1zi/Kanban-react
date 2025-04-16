/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#F9FAFB",
          dark: "#1F2937"
        }
      }
    },
  },
  plugins: [],
}

