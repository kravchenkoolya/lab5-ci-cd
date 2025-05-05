import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/lab5-ci-cd/', // назва вашого репозиторію
  build: {
    outDir: 'dist', // <- ця частина обов’язкова для GitHub Pages
  },
});