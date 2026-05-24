import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Vercel injects process.env.VERCEL, so if we are on Vercel we use '/', otherwise we use '/myPrortfolio/' for GitHub Pages
  base: process.env.VERCEL ? '/' : '/myPrortfolio/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
