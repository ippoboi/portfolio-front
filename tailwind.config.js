/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      "button-spacing": "5px",
      "biggest-title": "14px",
      "big-title": "12px",
      "medium-big-title": "11px",
      "medium-title": "8px",
      "small-title": "7px",
      "smaller-title": "5px",
      text: "2px",
      "small-text": "1.5px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-black": "#171717",
        "secondary-white": "#ffffff",
        "highlight-purple": "#C51EFF",
        "light-gray": "#b8b8b8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
