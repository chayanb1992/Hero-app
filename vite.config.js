import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  server: {
    historyApiFallback: true, // ensures reloads work properly
  },
  plugins: [react(), tailwindcss()],
});
