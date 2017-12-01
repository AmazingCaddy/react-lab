var path = require('path');

module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader'
    }]
  },
  {
    test: /\.css$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" }
    ]
  },
  {
    test: /\.scss$/,
    use: [
      { loader: "style-loader" },
      {
        loader: "css-loader",
        options: {
          alias: {
            "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
          }
        }
      },
      {
        loader: "sass-loader",
        options: {
          includePaths: [
            path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
          ]
        }
      }
    ]
  },
  {
    test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
    use: [{
      loader: "file-loader"
    }]
  }
];