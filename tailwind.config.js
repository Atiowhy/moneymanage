/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#201E43",
        secondary: "#134B70",
        third: "#508C9B",
        text: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
