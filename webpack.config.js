module.exports = {
  entry: './src/index.js',
  output: {
    path: './dest',
    filename: 'bundles.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
