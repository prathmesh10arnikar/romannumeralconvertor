import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    alias: {
      '@react-spectrum/theme-dark': '@react-spectrum/theme-dark/dist/spectrum-dark.e5783241.css',
    },
    setupFiles: './setup.js'
  },
});


