process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ]
      },
      {
        test: /\.(scss)?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
          loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/images',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      modules: path.resolve(__dirname, '../src/scripts/modules/'),
      utils: path.resolve(__dirname, '../src/scripts/utils/'),
      styles: path.resolve(__dirname, '../src/styles/'),
      images: path.resolve(__dirname, '../src/static/images/'),
    },
  },
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new webpack.DefinePlugin({
      VARIABLE: JSON.stringify('VARIABLE VALUE'),
    }),
  ],
  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: "all",
          enforce: true,
        },
      }
    }
  },
}
