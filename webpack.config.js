var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    // './src/styles/main.scss',
    'webpack/hot/only-dev-server',
    './src/main'
  ],
  output: {
      // path: path.resolve(__dirname, "build"),
      publicPath: '/',
      filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // transpile all js files from ES6 to ES5
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel-loader?presets[]=es2015'],
        // exclude: /node_modules/
      }, 

      //jsx, es6
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src/react'),
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
        // exclude: /node_modules/
      },
      // compile scss to css
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: "style!css!autoprefixer!scss"
      }
    ]
  },
  devServer: {
    contentBase: "./src"
  },
  debug: true
};