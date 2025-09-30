/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // all React components
    "./public/index.html",        // HTML file
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F6FEB",
        accent: "#F59E0B",
        soft: "#E6F0FF",
      },
      fontSize: {
        xl2: "1.5rem",
      },
    },
  },
  plugins: [],
  darkMode: "class", // enable class-based dark mode
};
