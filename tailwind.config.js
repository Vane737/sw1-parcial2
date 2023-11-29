/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2CB3A2',
        secondary: '#F28648',
        secondary_light: '#F6D7C5',
        primary_light: '#B1E2DC',
        dark: '#555555',
        
        cancelado: '#EC4343',
      },
    },
  },
  plugins: [],
}

