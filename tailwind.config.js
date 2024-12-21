/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customLightBlue: "#2E3E87",
        customDarkBlue: "#2A355C",
        customCream: "#F1EADA"
      }
    },
  },
  plugins: [],
}

