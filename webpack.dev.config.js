var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpackMerge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = webpackMerge(config, {
  output: {
    path: './dest',
    filename: 'bundles.js'
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: ['./']
      }
    })
  ]
});
