/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2CB3A2',
        secondary: '#FFD166',
        secondary_light: '#FFECC0',
        primary_light: '#B1E2DC',
        dark: '#555555',
        
        cancelado: '#EC4343',
        confirmo: '#F1C308',
        aceptado: '#47B971',
        table: '#FFFFF0'
      },
    },
  },
  plugins: [],
}

