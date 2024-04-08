/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-footer': '600px', // Añade un nuevo tamaño máximo de ancho personalizado
      },
      spacing: {
        'footer-height': '100px', // Ejemplo de altura personalizada para el footer
      },
      // Si deseas añadir nuevos colores:
      colors: {
        'custom-purple': '#5F5784',
      },
    },
  },
  plugins: [],
}