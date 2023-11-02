// 引入 path
const path = require('path')
// 引入
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
  // 入口文件
  entry: './src/index.ts',
  // 打包文件所在的目录
  output: {
    // 指定打包文件目录
    // path: './dist',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',

    // 告诉webpack 不使用箭头函数
    environment: {
      arrowFunction: false,
    },
  },
  // webpack 打包时使用的模块
  module: {
    // 指定要使用的loader规则
    rules: [
      {
        // /test 指定规则生效的文件
        // 表示去匹配所有的以ts结尾的文件
        test: /\.ts$/,
        // 要使用的loader
        // !执行顺序为从后往前, 先将ts文件转化为js 再将js转为低级js
        use: [
          // 配置 babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设置预定义的环境
              // 代码在那些浏览器运行
              presets: [
                [
                  // 指定环境插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      // 88 比较新 支持 const
                      chrome: '88',
                      // 开启 IE 调试 %systemroot%\system32\f12\IEChooser.exe
                      ie: '11',
                    },
                    // 指定 corejs 版本
                    corejs: '3',
                    // 使用 corejs 的方式 "usage" 按需加载
                    useBuiltIns: 'usage',
                  },
                ],
              ],
            },
          },
          'ts-loader',
        ],
        // 要排除的文件
        exclude: /node-modules/,
      },
    ],
  },
  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    // 生成HTML文件
    new HTMLWebpackPlugin({
      //   title: '自定义title',
      template: './src/index.html',
    }),
  ],
  // 用来设置引用模块
  resolve: {
    // 凡是 以ts js 结尾的文件 都可以作为模块使用
    extensions: ['.ts', '.js'],
  },
}
