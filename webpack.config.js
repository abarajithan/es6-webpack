// Imports
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
require("babel-register");
// Webpack Configuration
const config = {
  // Entry
  entry: './src/index.js',
  
  // Output
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // CSS Files
      {
        test:/\.(s*)css$/,
        loaders: ['style-loader','css-loader', 'sass-loader']
      },
      //File Loader to refer images
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: "file-loader"
      }
    ]
  },
  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  watch: true,
  // Development Tools (Map Errors To Source File)
  devtool: 'source-map',
};
// Exports
module.exports = config;