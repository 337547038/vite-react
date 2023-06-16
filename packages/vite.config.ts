/*当前打包使用tsup打包，也可使用此配置打包*/
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import optimizer from 'vite-plugin-optimizer'

// vite是不会将内置node打包的，
const getReplacer = () => {
  let externalModels = ["fs", "path", "crypto"]
  let result = {};
  for (let item of externalModels) {
    result[item] = () => ({
      find: new RegExp(`^${item}$`),
      code: `const ${item} = require('${item}');export { ${item} as default }`,
    })
  }
  return result
};
export default defineConfig({
  plugins: [
    vue(),
    optimizer(getReplacer())
  ],
  build: {
    //outDir: 'publish/dist',
    lib: {
      entry: path.resolve(__dirname, './src'),
      name: 'ak-vue',
      //fileName: format => `index.${format}.js`
      fileName: 'index'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'highlight.js', 'marked'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
