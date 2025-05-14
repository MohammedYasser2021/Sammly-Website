import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-chartjs-2', 'chart.js'],
  },
  build: {
    rollupOptions: {
      external: ['lodash/isEqual'],
    },
  },
  server: {
    port: 4000,
    host: '0.0.0.0',
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
});
