const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const conf = require('./config.js')
const path = require('path')
exports.createHtmInstance = function (htmlList) {
  return htmlList.map(val => {
    const chunks = [val, 'vendors', 'commons']
    const basePath = conf.base.isSinglePage ? './src/' : './src/html/'
    return new HtmlWebpackPlugin({
      filename: val + '.html',
      template: basePath + val + '.html',
      chunks: !conf.base.isSinglePage ? chunks : undefined
    })
  })
}

exports.createEntry = function (entryList) {
  const entry = {}
  const basePath = conf.base.isSinglePage ? './src/' : './src/js/'
  entryList.forEach(val => {
    entry[val] =  basePath + val + '.js'
  })
  return entry
}

exports.getFileList = function (type) {
  let result;
  if (!conf.base.isSinglePage) {
    const fileList = fs.readdirSync(path.resolve(__dirname, '../src/' + type))
    return fileList.map(val => val.match(/[^.]*/).toString())
  } else {
    return ['index']
  }
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
