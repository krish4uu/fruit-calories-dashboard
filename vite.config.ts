import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: '/fruit-calories-dashboard/',
  server: {
    proxy: {
      "/api/proxy": {
        target: "https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/proxy/, ""),
      },
    }
  },
  
  define: {
    'process.env.VITE_API_URL': command === 'serve'
      ? JSON.stringify('/api/proxy')
      : JSON.stringify('https://krish4uu.github.io/api/proxy'),
  },
}));