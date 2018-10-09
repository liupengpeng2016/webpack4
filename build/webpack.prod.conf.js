process.env.NODE_ENV = 'production'
const path = require('path')
const conf = require('./config.js')
const baseConf = require('./webpack.base.conf.js')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge.smart(baseConf, {
  mode: 'development',
  //mode: 'production',
  entry: {
    chunkFilename: '[name].js'
  },
  output: {
    publicPath: conf.build.publicPath
  },
  module: {
    rules: [{
      test: /(png|jpe?g|gif)$/,
      use: {
        loader: 'image-webpack-loader',
        options: {
          disable: true
        }
      }
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: conf.base.assetsDir + '/css/[name].[contenthash].css'
    })
  ],
  devtool: conf.build.devtool
})
