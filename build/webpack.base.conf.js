const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const conf = require('./config.js')
function createHtmInstance (htmlList) {
  return htmlList.map((val, i) => {
    const name = val.match(/[^/]\w*(?=\.html$)/)[0]
    return new HtmlWebpackPlugin({
      filename: name + '.html',
      template: val,
      chunks: [name]
    })
  })
}
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    invite: './src/js/invite.js'
  },
  output: {
    path: conf.base.outputPath,
    filename: conf.base.assetsDir + '/js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8 * 1024,
            name: 'static/images/[hash].[ext]',
            publicPath: '../../'
          }
        }
      }
    ]
  },
  plugins: [
    ...createHtmInstance(conf.base.html || ['./src/index.html']),
    new MiniCssExtractPlugin({
      filename: conf.base.assetsDir + '/css/[name].[contenthash].css'
    })
  ]
}
