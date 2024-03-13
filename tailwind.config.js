/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#E6C744",
      },
      screens: {
        sm: "480px",
      },
      content: {
        oval: 'url("../images/banner-image-2.png")',
      },
    },
  },
  plugins: [],
};