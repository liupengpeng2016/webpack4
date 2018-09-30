const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  //entry: ['./src/js/invite.js', './src/js/test.js'],
  mode: 'production',
  entry: {
    invite: './src/js/invite.js',
    // test: './src/js/test.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'static/js/[name].[chunkhash].js',
    publicPath: './'
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
        test: /(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8 * 1024,
            name: 'static/images/[hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    //new ExtractTextPlugin('static/css/hhh.css'),
    new HtmlWebpackPlugin({
      filename: 'invite.html',
      template: './src/html/invite.html',
      chunks: ['invite']
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash].css',
      chunkFilename: '[id].css'
    })
  ]
}
