import { defineConfig } from 'vite' //importo defineConfig de vite (que es una ayuda para proporcionar autocompletado y validación)
import react from '@vitejs/plugin-react' //importamos un plugin de vite para react. Mejora el desarrollo de aplicaciones React con Vite

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

//se configura vite para usar el plugin de react