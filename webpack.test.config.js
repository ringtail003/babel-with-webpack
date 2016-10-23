var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpackMerge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = webpackMerge(config, {
});
