var webpack = require('webpack');
var path = require('path');

// config
module.exports = {
  context: __dirname + '/src',
  entry: "./js/app.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js',
    publicPath: './dist/',
    chunkFilename: 'js/async/[name].js'
    // path: __dirname + "/src/",
    // filename: "bundle.js"
  }
}
