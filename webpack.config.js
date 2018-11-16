const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'];
const cssConfig = isProd ? cssProd : cssDev;

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-class-properties'],
        },
      },
      {
        test: /\.scss$/,
        use: cssConfig,
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        loader: 'file-loader?name=img/[name].[ext]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: !isProd ? '[name].css' : '/css/[name].[hash].css',
      chunkFilename: !isProd ? '[id].css' : '/css/[id].[hash].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    noInfo: true,
    overlay: true,
    hot: true,
    historyApiFallback: true,
    open: true,
  },
};

module.exports = (env, options) => {
  const production = options.mode === 'production';
  config.devtool = production ? false : 'eval';
  return config;
};
