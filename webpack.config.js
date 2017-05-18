var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/client/index.html',
  filename: 'index.html',
  inject: 'body'
});
var ExtractTextPluginConfig = new ExtractTextPlugin('styles.css');

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
       include: APP_DIR,
       loader: ExtractTextPlugin.extract({
         fallback:'style-loader',
         use:'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
       })
     }
   ]
 },
 plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
};

module.exports = config;
