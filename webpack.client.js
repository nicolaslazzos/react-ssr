const path = require('path');

module.exports = {
  // tell webpack the root file of our client side application, the entry point
  entry: './src/client/client.js',

  // tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  // tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        // only run babel on js files
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,

        // options to pass to the babel-loader
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ]
        }
      }
    ]
  }
};