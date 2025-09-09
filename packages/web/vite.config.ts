import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@repo/shared": path.resolve(__dirname, "../shared/src"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/dls/index.ts"),
      name: "DLS",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
