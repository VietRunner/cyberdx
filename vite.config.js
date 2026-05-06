import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/contact": {
        target: "https://form.cyberdx.tech",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
