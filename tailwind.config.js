/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      },
      colors: {
        background: {
          DEFAULT: "#F9FAFB",
          dark: "#1F2937"
        },
        primary: {
          DEFAULT: "#3B82F6",
          dark: "#3B82F6"
        },
        primaryText: {
          DEFAULT: "#111827",
          dark: "#F9FAFB"
        },
        secundaryText: {
          DEFAULT: "#6B7280",
          dark: "#9CA3AF"
        },
        card: {
          DEFAULT: "#FFFFFF",
          dark: "#374151"
        },
        backlog: {
          DEFAULT: "#b8b8b8",
          dark: "#1a1a1a"
        },
        todo: {
          DEFAULT: "#cae5ff",
          dark: "#181f2f",
          border: "#3B82F6" 
        },
        inProgress: {
          DEFAULT: "#FEF3C7",
          dark: "#99a646",
          border: "#F59E0B",
          borderDark: "#FBBF24"
        },
        done: {
          DEFAULT: "#c7fcda",
          dark: "#064E3B",
          border: "#10B981",
        },
      }
    },
  },
  plugins: [],
}

