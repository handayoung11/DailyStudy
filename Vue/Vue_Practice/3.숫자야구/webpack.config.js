const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path'); // 현재 경로를 얻어오는 코드
module.exports = {
  mode: 'development',
    devtool: 'eval',
    resolve: {
      extensions: ['.js', '.vue'],
    },
  entry: {
    app: './main.js',
  },
  module: {
      rules: [{
          test: /\.vue$/,
          loader: 'vue-loader',
      }],
  },
  plugins: [
      new VueLoaderPlugin(),
  ],
  output: {
      filename: 'app.js',
      path: path.join(__dirname, 'dist'),
  },
};