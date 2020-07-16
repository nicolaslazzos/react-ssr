const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // inform webpack that we are building a bundle for node.js rather than for the browser
  target: 'node',

  // tell webpack the root file of our server application, the entry point
  entry: './src/index.js',

  // tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // tell webpack to not bundle any libraries from node_modules into de server-side bundle
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);