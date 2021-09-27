import babel from 'rollup-plugin-babel';  // 引入rollup的babel插件
export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.cjs.js', // 输出文件位置，以及文件名称
    format: 'cjs',              // 生成包的格式[amd | es6 | iife | umd | cjs | system]。 见：https://www.rollupjs.com/guide/big-list-of-options
    name: 'bundleName',         // 生成包名称
    sourcemap: true,            // 生成sourcemap文件
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    })
  ]
}