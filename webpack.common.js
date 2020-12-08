const path = require('path');
const exec = require('child_process').exec;
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let isCompiled = false;

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  // TODO: Explain Source Map
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    contentBase: path.resolve(__dirname, 'build', 'js'),
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env', {
                targets: {
                  esmodules: true
                }
              }],
              '@babel/preset-react']
          }
        }
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new Dotenv()],
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build', 'js'),
  },
};
