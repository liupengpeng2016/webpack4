const path = require('path')
module.exports = {
  base: {
    entry: ['./src/js/test.js'],
    html: ['./src/html/test.html'],
    outputPath: path.resolve(__dirname, '../dist'),
    assetsDir: 'static'
  },
  dev: {
    publicPath: './',
    devtool: 'source-map',
    devServer: {
      contentBase: false,
      publicPath: '/',
      host: 'localhost',// '0.0.0.0',
      port: 3000,
      headers: {},
      https: false,
      open: 'chrome',
      hot: true,
      proxy: {}
    }
  },
  build: {
    publicPath: './',
    devtool: false
  }
}
