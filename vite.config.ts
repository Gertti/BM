import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    strictPort: false,
    allowedHosts: ['bm-sv7s.onrender.com', 'localhost', '.onrender.com'],
  },
  server: {
    host: true,
    port: 5173,
  }
})
