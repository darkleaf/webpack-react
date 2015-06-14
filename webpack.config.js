var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'app/main.js')
    ]
  },
  output: {
    publicPath: '/assets/',
    path: path.join(__dirname, 'build'),
    filename: "bundle.js"
  },
  resolve: {
    root: __dirname
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'app')
      }
    ]
  }
};
