const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const conf = require('./config.js')
const isProd = process.env.NODE_ENV === 'production'
function createHtmInstance (htmlList) {
  return htmlList.map((val, i) => {
    const name = val.match(/[^/]\w*(?=\.html$)/)[0]
    // const chunks = [name,
    //  'runtime~' + name,
    //   name + '~runtime',
    //   'vendors~' + name,
    //   name + '~vendors'
    // ]
    const chunks = ['*']
    return new HtmlWebpackPlugin({
      filename: name + '.html',
      template: val,
      chunks: htmlList.length !== 1 ? chunks : undefined
    })
  })
}
function createEntry (entryList) {
  const entry = {}
  entryList.forEach((val, i) => {
    const name = val.match(/[^/]\w*(?=\.js$)/)[0]
    entry[name] = val
  })
  return entry
}
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: createEntry(conf.base.entry),
  output: {
    path: conf.base.outputPath,
    filename: conf.base.assetsDir + '/js/[name].' +  (isProd ? '[chunkhash].' : '') + 'js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            options: {
              sourceMap: true,
              publicPath: '../../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8 * 1024,
            name: 'static/images/' + (isProd ? '[hash]' : '[name]') + '.[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    ...createHtmInstance(conf.base.html || ['./src/index.html']),
  ]
}
