import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  build: {
    minify: false,
    lib: {
      entry: "./packages/components/index.ts",
      name: "FancyUI",
      fileName: "fancy-ui",
      formats: ["es", "umd", "iife"]
    }
  }
})
