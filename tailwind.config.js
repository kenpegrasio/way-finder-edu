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
        customCoursesContainer: "0 0px 5px -1px rgba(41, 51, 92, 0.5)",
        customLoginContainer: "0 0px 20px -1px rgba(24, 24, 24, 0.5)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '8xl': '5rem',
        '7xl': '4.5rem',
        '6xl': '3rem',
        '5xl': '2rem',
        '4xl': '1.75rem',
        '3xl': '1.5rem',
        '2xl': '1.2rem',
        'xl': '1.1rem',
        'lg': '1rem',
        'md': '0.9rem',
        'sm': '0.75rem',
        'xs': '0.7rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
}
