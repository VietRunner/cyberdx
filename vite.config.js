import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 2500,
  },
  server: {
    // Honour PORT when a launcher assigns one; plain `npm run dev` still defaults to 5173.
    ...(process.env.PORT ? { port: Number(process.env.PORT) } : {}),
    proxy: {
      "/api/contact": {
        target: "https://form.apexdx.tech",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
