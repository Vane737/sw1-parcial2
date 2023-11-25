/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2CB3A2',
        secondary: '#DD4B39',
        primary_light: '#B1E2DC',
        dark: '#555555',
      },
    },
  },
  plugins: [],
}

