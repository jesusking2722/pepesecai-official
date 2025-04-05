/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        boxShadow: {
          custom: "0px 0px 4px 3px rgba(0, 0, 0, 0.25)",
        },
      },
    },
  },
  plugins: [],
};
