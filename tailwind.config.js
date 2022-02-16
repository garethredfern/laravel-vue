module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
