import { defineConfig } from 'vite';
// import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),],
  server: {
    open:true,
    hmr: {
      overlay: false, // Temporarily disable error overlay to check logs
    }
  },
  build: {
    minify: false, // Disable minification for debugging
  }
});