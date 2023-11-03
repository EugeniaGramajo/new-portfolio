/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-text": "#2F210D",
        "secondary": "#C7A066",
        "blur":"#D9C8A5"
      },
      fontFamily: {
        header1: "AmericanCaptain.ttf"
      }
    },
  },
  plugins: [],
};
