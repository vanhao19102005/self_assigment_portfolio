/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Exact demo blue
        secondary: "#4B5563", // Gray for text
      },
      fontFamily: {
        sans: ['"Inter", sans-serif'], // Match demo's font
      },
    },
  },
  plugins: [],
};
