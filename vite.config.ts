/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [
    vue(), // 支持vue
    vueJsx() // 支持jsx
  ],
  // 单元测试
  test: {
    globals: true, // global API
    environment: "happy-dom", // 模拟真实DOM
    transformMode: {
      web: [/.[tj]sx$/] // 支持jsx语法
    }
  },
  build: {
    minify: false, // 压缩代码
    lib: {
      entry: "./packages/components/index.ts", // 打包文件入口
      name: "FancyUI", // 包名
      fileName: "fancy-ui", //打包文件名
      formats: ["es", "umd", "iife"] // 打包模式
    }
  }
})
