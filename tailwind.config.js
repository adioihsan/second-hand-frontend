/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#E2D4F0",
          200: "#D0B7E6",
          300: "#A06ECE",
          400: "#7126B5",
          500: "#4B1979",
        },
        cream: {
          100: "#FFF8ED",
          200: "#FFE9C9",
          300: "#FFE9CA",
          400: "#D4C2A8",
          500: "#AA9B87",
        },
      },
    },
  },
  plugins: [],
};
