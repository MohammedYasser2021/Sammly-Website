import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#344CB7",
        secondary: "#050560",
        accent: "#1DBFFE",
        menuBlue: "#0B60B0",
        darkBg: "#020710"
      },
      fontFamily: {
        'post-bills': ['"Post No Bills Colombo"', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
