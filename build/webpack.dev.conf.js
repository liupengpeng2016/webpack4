process.env.NODE_ENV = 'development'
const path = require('path')
const baseConf = require('./webpack.base.conf.js')
const conf = require('./config.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
conf.dev.devServer.openPage = conf.base.html[0].match(/\/[^\/]*$/)[0].replace(/^\//, '')
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
