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
      entry: "src/entry.ts",
      name: 'React-UI-Teaching',
      formats: ["esm"],
      fileName: 'react-ui-teaching',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        },
        extend: true,
        assetFileNames:()=> 'style.css',
        manualChunks(id: any) {
          // 将 node_modules 中的代码单独打包成一个 JS 文件
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        } 
      },
      outDir: "./dist"
    }
  }
})
export default defineConfig(config as UserConfig);
