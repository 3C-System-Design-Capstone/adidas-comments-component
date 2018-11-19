const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './client/src/'),
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ['react', 'env'],
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.HOSTNAME': JSON.stringify(process.env.HOSTNAME),
      'process.env.PORT_FOR_XHR': JSON.stringify(process.env.PORT_FOR_XHR),
    }),
  ],
};
