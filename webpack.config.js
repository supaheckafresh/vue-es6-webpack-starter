const path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: path.resolve('./app/js/index.js'),
  output: {
    filename: 'js/app.bundle.js',
    path: path.resolve(__dirname, 'www')
  },
  watch: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        stats: {
          colors: true
        },
        devtool: 'source-map'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new LiveReloadPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
};