const path = require('path')
const conf = require('./config.js')
const baseConf = require('./webpack.base.conf.js')
const merge = require('webpack-merge')
module.exports = merge(baseConf, {
  mode: 'development',
  output: {
    publicPath: conf.build.publicPath
  },
  devtool: conf.build.devtool
})
