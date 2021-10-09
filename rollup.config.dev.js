/**
 * rollup.js编译源码中的模块引用默认只支持 ES6+的模块方式import/export。
 * 然而大量的npm模块是基于CommonJS模块方式，这就导致了大量 npm 模块不能直接编译使用。
 * 所以辅助rollup.js编译支持 npm模块和CommonJS模块方式的插件就应运而生。
 * '@rollup/plugin-node-resolve'：插件允许加载第三方模块
 * '@rollup/plugin-commonjs'：插件将第三方插件转换为ES6版本
*/
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';  // 引入rollup的babel插件
import postcss from 'rollup-plugin-postcss'     // 编译css文件
import serve from 'rollup-plugin-serve'     // 本地服务
import livereload from 'rollup-plugin-livereload'     // 开启热更新

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.cjs.js', // 输出文件位置，以及文件名称
    // format: 'iife',              // 生成包的格式[amd | es6 | iife | umd | cjs | system]。 见：https://www.rollupjs.com/guide/big-list-of-options
    format: 'umd',
    name: 'bundleName',         // 生成包名称
    sourcemap: true,            // 生成sourcemap文件
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    postcss({
      plugins: [],
      // extract: true
    }),
    livereload(),
    serve({
      open: true,
      port: 8888,
      contentBase: ''
    })
  ],
  external: ['lodash'],     // 不打第三方库，通过引入在script引入
}