const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const webpackConfig = () => ({
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'build.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
},
  module: {
    rules: [
     { test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
});

module.exports = webpackConfig;