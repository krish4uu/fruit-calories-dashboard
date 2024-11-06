import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {

  
  return {
    plugins: [react()],
    base: '/fruit-calories-dashboard/',
    define: {
      __API_URL__: JSON.stringify(
        mode === 'production' 
          ? 'https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws'
          : '/api'
      ),
    },
    
    server: {
      proxy: command === 'serve' ? {
        "/api": {
          target: "https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      } : undefined,
    },
  };
});