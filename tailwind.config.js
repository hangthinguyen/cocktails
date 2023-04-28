/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "2px 5px 3px 0px rgba(0, 0, 0, 0.5)",
        "4xl": "4px 10px 5px 0px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
