/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        yellow_text: "#EABF22",
        gray_card: "#474747",
        dark_text: "#292929",
        dark_background: "#151515",
        light_background: "#E7E7E7",
        background_text: "#1C1C1C",
      },
      fontFamily: {
        big_text: ["'Abril Fatface', cursive"],
      },
      plugins: [require("@tailwindcss/typography")],
    },
  },
};
