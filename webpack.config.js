var path = require('path');
var webpack = require('webpack');

var lost = require('lost');
var autoprefixer = require('autoprefixer-core');

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
    filename: 'bundle.js'
  },
  //devtool: 'source-map',
  resolve: {
    root: __dirname
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'app') },
      { test: /\.css$/, loaders: ['style', 'css?module', 'postcss'] },
      { test: /\.png$/, loader: "url?limit=100000" },
      { test: /\.jpg$/, loader: "file" }
    ]
  },
  postcss: [
    lost,
    autoprefixer({ browsers: ['last 2 version', 'chrome 25'] })
  ]
};
