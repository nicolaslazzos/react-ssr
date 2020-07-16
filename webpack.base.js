module.exports = {
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
}