/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Barlow Condensed", "sans-serif"],
        body: ["Barlow", "sans-serif"],
      },
      clipPath: {
        "diagonal-right": "polygon(0 0, 45% 0, 30% 100%, 0 100%)",
        "diagonal-section": "polygon(0 0, 100% 8%, 100% 100%, 0 92%)",
      },
    },
  },
  plugins: [],
};
