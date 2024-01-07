/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light",
    "dark",
    "synthwave",
    "retro",
    "cyberpunk",
    "forest",
    "aqua",
    "lofi",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "business",
    "night",
    "coffee",
    "dim",
    "nord",
    "sunset",],
  },
  theme: {
    extend: {
      fontFamily: {
        arab: ["LPMQ Isep Misbah", "Amiri Quran"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
}

