// This code is a Vite configuration file for a React project
// Vite is a fast development server and build tool that is designed to work with modern JavaScript frameworks, including React

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})