process.env.NODE_ENV = 'development'
const path = require('path')
const baseConf = require('./webpack.base.conf.js')
const conf = require('./config.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
module.exports = merge(baseConf, {
  mode: 'development',
  output: {
    publicPath: conf.dev.publicPath
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: conf.dev.devtool,
  devServer: conf.dev.devServer
})
