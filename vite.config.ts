import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src"),
      "@styles": path.resolve(__dirname, "./src/app/styles"),
    },
  },
  plugins: [react()],
});
