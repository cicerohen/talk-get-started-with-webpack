const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseWebpackConfig = require('./webpack.base.config');
const config = require('./config.js');
const pkgJson = require('../package.json');

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname, '../src'),
    publicPath: config.dev.assetsPublicPath,
    filename: '[name].bundle.js',
  },
  devtool: 'eval-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new BundleAnalyzerPlugin(),
    new DashboardPlugin({
      title: pkgJson.name,
    }), 
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    historyApiFallback: true,
    stats: "errors-only",
    port: config.dev.port,
    compress: true,
  },
});
