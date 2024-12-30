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
        customDarkBlue: "#29335C",
        customCream: "#F1EADA",
        customBlack: "#181818",
      },
      boxShadow: {
        customDarkBlue: "0 2px 10px -2px rgba(41, 51, 92, 0.2)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '8xl': '4.5rem',
        '5xl': '2rem',
        '4xl': '1.75rem',
        '3xl': '1.5rem',
        '2xl': '1.2rem',
        'xl': '1.1rem',
        'lg': '1rem',
        'md': '0.9rem',
      },
    },
  },
  plugins: [],
}
