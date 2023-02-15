/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/]
    }
  },
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
