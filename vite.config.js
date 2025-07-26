import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  test: {
    environment: 'jsdom', // ✅ c’est ce qu’il te manque
    globals: true,         // optionnel mais utile si tu veux éviter les imports `describe`, etc.
    exclude: [...configDefaults.exclude, 'node_modules'] // optionnel
  }
});
