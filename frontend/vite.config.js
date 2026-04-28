import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // ✅ important for correct asset loading
  base: "/",

  // ✅ optional but useful for local dev with backend
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
