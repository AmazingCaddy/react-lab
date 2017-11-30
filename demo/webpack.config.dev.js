var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './index.dev.js'
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      ReactLaboratory: path.resolve(__dirname, '../dist/bundle'),
    },
  },
  devtool: 'inline-source-map',
};