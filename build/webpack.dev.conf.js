const path = require('path')
const baseConf = require('./webpack.base.conf.js')
const conf = require('./config.js')
const merge = require('webpack-merge')
module.exports = merge(baseConf, {
  mode: 'development',
  output: {
    publicPath: conf.dev.publicPath
  },
  devtool: conf.dev.devtool,
  devServer: conf.dev.devServer
})
