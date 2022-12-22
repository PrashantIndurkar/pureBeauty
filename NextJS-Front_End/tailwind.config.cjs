/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ["Playfair Display", "serif"],
        inter: ["inter"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
      },
    },
    colors: {
      PB_white: "#fff",
      PB_background: "#FFF5EB",
      PB_black: "#0f172a",
      PB_skin: "#f3e9db",
      PB_yellow: "#f5d69b",
      PB_lightBrown: "#a77a95",
      PB_darkBrown: "#735366",
      PB_gray: "#c3c3d5",
      PB_blue: "#887dee",
      PB_darkBlue: "#6458e6",
      PB_darkGreen: "#66815b",
      PB_green: "#c0cab4",
      PB_gray: "#e8eaed",
      PB_darkGray: "#7d7d7d",
    },
  },
  plugins: [],
};
