import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import KumaUI from '@kuma-ui/vite';

export default defineConfig({
  plugins: [react(), KumaUI()],
  resolve: {
    alias: {
      '@/': 'src/',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup.ts'],
  },
});
