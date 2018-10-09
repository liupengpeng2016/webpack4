const path = require('path')
module.exports = {
  base: {
    entry: ['./src/js/invite.js'],
    html: ['./src/html/invite.html'],
    outputPath: path.resolve(__dirname, '../dist'),
    assetsDir: 'static',
    inseryChunkByName: true
  },
  dev: {
    publicPath: './',
    devtool: 'source-map',
    devServer: {
      contentBase: false,
      publicPath: '/',
      host: '0.0.0.0',
      port: 3000,
      headers: {},
      https: false,
      open: false,
      hot: true,
      openPage: '/invite.html',
      proxy: {}
    }
  },
  build: {
    publicPath: './',
    devtool: false
  }
}
