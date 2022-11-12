/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ["Playfair Display", "serif"],
        inter: ["inter"],
      },
    },
    colors: {
      PB_white: "#fff",
      PB_background: "#FFF5EB",
      PB_black: "#000",
      PB_skin: "#f3e9db",
      PB_yellow: "#f5d69b",
      PB_lightBrown: "#a77a95",
      PB_darkBrown: "#735366",
      PB_gray: "#c3c3d5",
      PB_blue: "#887dee",
      PB_darkBlue: "#6458e6",
    },
  },
  plugins: [],
};
