const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
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
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    port: 3000,
    open:true,
    proxy: {
      // 一旦devserver5000服务器接受到/api/xxx的请求，就会把请求转发到另一个服务器3000
      '/api/*': {
        target: 'http://localhost:8080',
      }
    }
}
};
