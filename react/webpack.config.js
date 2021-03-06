'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let NODE_ENV = process.env.NODE_ENV || 'development';

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-react']
  }
};

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    title: 'react',
    template: './src/index.html'
  })
];

let publicPath = '/';

if (NODE_ENV !== 'development') {
  publicPath = './';
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  );
}

module.exports = {
  mode: NODE_ENV,
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: publicPath
  },
  plugins: plugins,
  devtool: NODE_ENV == 'development' ? 'eval' : undefined,
  devServer: {
    hot: true,
    contentBase: './',
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8000'
    },
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: [
          babelLoader
        ],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};
