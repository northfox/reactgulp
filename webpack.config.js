'use strict';

const webpack = require("webpack");

module.exports = {
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: 'map/[name].map',
    publicPath: "/js/",
    jsonpFunction: 'fr'
  },
  devtool: '#source-map',
  resolve: {
    modulesDirectories: ["bower_components", "node_modules", 'src']
  },
  module: {
    preLoaders: [
      { test: /\.js$/, exclude:/Spec\.js$/i, loaders: ['eslint'] }
    ],
    loaders: [
      { test: /\.html$/, exclude:/node_modules/, loaders: ['html'] },
      { test: /Spec\.js$/i, exclude:/node_modules/, loaders: ['webpack-espower','babel?presets[]=es2015'] },
      { test: /\.jsx?$/, exclude:/node_modules/, loaders: ['babel?presets[]=es2015'] }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      exclude: /Spec\.js$/i,
      compress: {
        warnings: false
      }
    }),
    //new webpack.optimize.CommonsChunkPlugin('app','app.js'),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ],
  eslint: {
    configFile: '.eslintrc',
    failOnError: true
  }
};
