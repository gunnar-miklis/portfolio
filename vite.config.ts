import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@data': '/src/data',
      '@components': '/src/components',
      '@styles': '/src/styles',
    },
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: { targets: browserslistToTargets(browserslist('>= 0.25%')) },
  },
  build: { cssMinify: 'lightningcss' },
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text'],
    },
  },
});
