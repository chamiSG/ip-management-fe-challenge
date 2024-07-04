import { defineConfig } from 'vite'
import * as path from 'path';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '@types': path.resolve(__dirname, './src/types'),
      '@': path.resolve(__dirname, './src'),
    }
  },
  define: {
    'process.env': {},
    global: {}
  },
  optimizeDeps: {
    include: ['react-router-dom']
  }
})
