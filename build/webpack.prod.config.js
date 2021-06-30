const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const baseWebpackConfig = require('./webpack.base.config');
const config = require('./config.js');

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: config.prod.assetsPublicPath,
    filename: '[name].[contenthash].bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, '../src/static'),
        to: 'static',
      },
    ]),
    new OptimizeCSSAssetsPlugin(),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,
    stats: "errors-only",
    port: config.prod.port,
    compress: true,
  },
});
