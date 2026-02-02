import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { visualizer } from "rollup-plugin-visualizer";
import { compression } from "vite-plugin-compression2";

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    }),
    visualizer({
      filename: "dist/stats.html",
      open: false,
      title: "Bundle Size Visualizer",
    }),
    compression({
      algorithm: "gzip",
      exclude: [/\.(br)$/],
    }),
    compression({
      algorithm: "brotliCompress",
      exclude: [/\.(gz)$/],
    }),
  ],
});
