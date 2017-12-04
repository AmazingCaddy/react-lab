var path = require('path');
var config = require('./webpack/config');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
    library: 'ReactLaboratory',
    libraryTarget: 'umd'
  },
  module: {
    rules: config.rules
  },
  devtool: 'inline-source-map'
}