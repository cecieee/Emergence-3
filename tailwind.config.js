/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        "deep-orange": "#E9441D",
        "deep-black": "#0c0c0c",
        "dark-grey": "#AFAFAF",
        "soft-grey": "#F7F7F7",
        white: "#ffffff",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
