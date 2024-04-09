/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'jetBrains' : ['JetBrains Mono']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

