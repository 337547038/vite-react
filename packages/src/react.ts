/*添加对react支持核心代码，最后还需要使用babel将jsx转为js*/
const babel = require("@babel/core");
const jsx = require("@babel/plugin-transform-react-jsx");

export default (opt: any) => {
  return {
    name: 'vite:vueDocPreview',
    enforce: 'pre',
    transform(code, id) {
      const template = `
import React from 'react';
export default ()=>{
return (<div>html</div>)
}`
      const plugins = [
        // importMeta,
        jsx,
      ];
      const result = babel.transformSync(template, {
        babelrc: false,
        ast: true,
        plugins,
        sourceMaps: false,
        sourceFileName: "",
        configFile: false,
      });

      return {
        code: result.code,
        map: result.map,
      };
    }
  }
}
