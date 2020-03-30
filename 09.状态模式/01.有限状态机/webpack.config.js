const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './01.有限状态机.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env']]
        }
      }
    ]
  },
  plugins: [
    //处理html资源
    new HtmlWebpackPlugin({
      template: './01.有限状态机.html'
    })
  ],
  mode: 'development'
};
