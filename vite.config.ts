import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: "/binary-lover.github.io",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
