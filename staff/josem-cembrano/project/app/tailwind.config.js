/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.jsx',//(**)todas las subcarpetas, (*)cualquier archivo jsx con estilos
    './src/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

