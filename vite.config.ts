import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import viteDoc from "vite-plugin-doc";
// https://www.npmjs.com/package/vite-plugin-doc
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteDoc({
    mode: "pc", // 默认值 mobile
    className: "docs-demo", // 自定义文档类名
  }),react()],
  base: './',
  build: {
    outDir: 'docs'
  },
  resolve: {
    alias: {
      '@/': '/src/'
    }
  },
});
