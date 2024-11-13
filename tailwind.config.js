/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'footer-bg': 'rgb(240, 240, 245)',
      },
    }
  },
  plugins: [],
}

