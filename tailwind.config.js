/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5200",
        "black-2": "rgba(2, 6, 12, 0.92)",
        "gray-2": "rgba(2, 6, 12, 0.6)",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
