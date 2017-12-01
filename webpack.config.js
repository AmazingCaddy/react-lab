var path = require('path');
var rules = require('./webpack/rules');

module.exports = {
  devtool: 'inline-source-map',
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
    rules: rules
  }
}