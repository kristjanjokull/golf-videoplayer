// import { defineConfig } from "vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";

// https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      $components: path.resolve(__dirname, "./src/components"),
      $utils: path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
