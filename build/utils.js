const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const conf = require('./config.js')
exports.createHtmInstance = function (htmlList) {
  return htmlList.map((val, i) => {
    const chunks = [val, 'vendors', 'commons']
    return new HtmlWebpackPlugin({
      filename: val + '.html',
      template: './src/html/' + val + '.html',
      chunks: !conf.base.isSinglePage ? chunks : undefined
    })
  })
}

exports.createEntry = function (entryList) {
  const entry = {}
  entryList.forEach((val, i) => {
    entry[val] = './src/js/' + val + '.js'
  })
  return entry
}

exports.getNameList = function (path) {
  const fileList = fs.readdirSync(path)
  return fileList.map(val => val.match(/[^.]*/).toString())
}

exports.createEslintRule = function  () {
  return {
    test: /\.(js|vue)$/,
    enforce: 'pre',
    use: {
      loader: 'eslint-loader',
      options: {
        //formatter: require('eslint-friendly-formatter'),
        emitWarning: true
      }
    }
  }
}
