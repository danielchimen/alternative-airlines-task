import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/alternative-airlines-task/',
  resolve: {
    alias: {
      '@components': '/src/components',
      '@images': '/src/assets/images',
      '@icons': '/src/assets/icons',
      '@utils': '/src/utils',
    },
  },
});
