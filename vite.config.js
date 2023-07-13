import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  headers: {
    'Access-Control-Allow-Origin': '*', // Allow requests from any origin
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Specify the allowed HTTP methods
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token', // Specify the allowed request headers
  },
})
