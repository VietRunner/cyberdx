import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api/contact": {
        target: "https://form.apexdx.tech",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
