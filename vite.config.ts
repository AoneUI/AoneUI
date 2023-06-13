import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

export const config=({
  plugins: [
    react()
  ],
  build: {
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    cssCodeSplit: true,
    lib: {
      entry: "./packages/entry.ts",
      name: 'React-UI-Teaching',
      formats: ["esm", "umd","iife"],
      fileName: 'react-ui-teaching',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        },
        extend: true,
        assetFileNames:()=> 'style.css'
      }
    },
    outDir: "./dist"
  }
})
export default defineConfig(config as UserConfig);
