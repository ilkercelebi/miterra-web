import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (miterracoffee.com) için
export default defineConfig({
  plugins: [react()],
  base: '/',
})
