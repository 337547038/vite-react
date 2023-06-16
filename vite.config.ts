import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import viteDoc from "vite-plugin-doc-preview";
//import viteDoc from './packages/src'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteDoc({mode: 'react', previewId: 'jsx'}), react()],
  base: './',
  build: {
    outDir: 'docs'
  },
  resolve: {
    alias: {
      '@/': '/src/'
    }
  }
})
