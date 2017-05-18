var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/client/index.html',
  filename: 'index.html',
  inject: 'body'
});
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
   loaders : [
     {
       test : /\.jsx?/,
       include : APP_DIR,
       loader : 'babel-loader'
     },
     {
       test: /\.css$/,
       loader: 'style-loader'
     },
     {
       test: /\.css$/,
       loader: 'css-loader',
       query: {
         modules: true,
         localIdentName: '[name]__[local]___[hash:base64:5]'
       }
     }
   ]
 },
 plugins: [HtmlWebpackPluginConfig]
};

module.exports = config;
