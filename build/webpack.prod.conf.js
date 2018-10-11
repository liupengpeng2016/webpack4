process.env.NODE_ENV = 'production'
const path = require('path')
const conf = require('./config.js')
const baseConf = require('./webpack.base.conf.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
module.exports = merge.smart(baseConf, {
  mode: 'production',
  output: {
    publicPath: conf.build.publicPath,
    chunkFilename: conf.base.assetsDir + '/js/[name].[chunkhash].js'
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
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  devtool: conf.build.devtool,
  optimization: {
    splitChunks: {
      chunks: 'all',
      //minSize: 0,
      //name: 'common'
      cacheGroups: {
        vendors: {
          test: /[\/\\]node_modules[\/\\]/,
          chunks: 'all',
          name: true
        },
        // commons: {
        //   test: /[\\\/]src[\\\/]js[\\\/]/,
        //   name: true,
        //   chunks: 'all'
        // }
      }
    },
    minimizer: [new OptimizeCssAssetsPlugin({}), new UglifyjsPlugin()],
    runtimeChunk: true
  }
})
