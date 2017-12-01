var webpack = require('webpack');
var path = require('path');
var rules = require('./webpack/rules');

module.exports = {
  entry: [
    './src/index.dev.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: rules
  },
  devtool: 'inline-source-map'
}