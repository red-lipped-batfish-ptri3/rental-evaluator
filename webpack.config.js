// const webpack = require('webpack');
import webpack from "webpack";
// const path = require('path');
import path from "path";
const dirname = import.meta.dirname;
const filename = import.meta.filename;
// const HtmlWebPackPlugin = require('html-webpack-plugin');
import HtmlWebpackPlugin from "html-webpack-plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import Dotenv from "dotenv-webpack";

console.log(' ## path ##');
console.log(dirname + '/index.html');
console.log("dirname ", dirname);
const htmlPlugin = new HtmlWebpackPlugin({
  // path to build index.html in /build
  template: './index.html',
});

export default {
  devtool: 'eval-source-map',
  mode: 'production',
  entry: ['./index.js'],

  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
     splitChunks: {
       chunks: 'all',
     },
   },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        // test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.png|svg|jpg|otf|gif$/,
        use: [
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'svg-url-loader',
            options: {
              limit: 1000,
            },
          },
        ],
      },
      {
        // test: /\.css$/,
        test: /.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new webpack.HotModuleReplacementPlugin({
      // Options...
    }),
    new NodePolyfillPlugin(),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser.js"
    }),
    new Dotenv({
      path: "./.env"
    }),
  ],
  devServer: {
    // host: 'localhost',
    port: 8080,
    // contentBase: path.resolve(__dirname, '/dist'),
    compress: true,
    // publicPath: '/',
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    // fallback to root for other urls
    historyApiFallback: true,
    client: {
      logging: 'info',
    },
    proxy: [
      {
        context: ['/api'],
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        secure: false,
      }
    ]
  },
};

/**
 * //setup proxy to access BE server
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true,
      },
    },
 */