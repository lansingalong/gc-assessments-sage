import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/gc-assessments-sage/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8085,
    watch: {
      include: ['public/**'],
    },
    proxy: {
      '/m-unauthenticated': {
        target: 'http://localhost:5174',
        changeOrigin: true,
      },
    },
  },
})
