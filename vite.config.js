import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components')
    }
  }
};

export default config;
