/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}", // Include UI package
  ],
  presets: [
    require("../../packages/ui/tailwind.config.js")
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

