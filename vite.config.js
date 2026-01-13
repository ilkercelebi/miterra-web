import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages için base path
  // Repository adınızı buraya yazın (örn: '/miterra-web/')
  // Eğer custom domain kullanıyorsanız veya root domain'de yayınlayacaksanız '/' bırakın
  base: process.env.NODE_ENV === 'production' ? '/miterra/' : '/',
})
