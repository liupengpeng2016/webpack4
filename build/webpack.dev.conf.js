process.env.NODE_ENV = 'development'
const path = require('path')
const baseConf = require('./webpack.base.conf.js')
const conf = require('./config.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const chalk = require('chalk')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const openHtml = conf.base.isSinglePage ? './index.html' : conf.base.html[0]
const port = conf.dev.devServer.port
conf.dev.devServer.openPage = openHtml.match(/\/[^\/]*$/)[0].replace(/^\//, '')
if (!conf.dev.useProxy) {
  delete conf.dev.devServer.proxy
}
console.log(
  chalk.cyan('The application is running at localhost:' + port + '/ + "path" or localIp:' + port + '/ + "path"\n')
)
module.exports = merge(baseConf, {
  mode: 'development',
  output: {
    publicPath: conf.dev.publicPath
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ],
  devtool: conf.dev.devtool,
  devServer: conf.dev.devServer
})
