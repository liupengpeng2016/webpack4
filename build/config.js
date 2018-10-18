const path = require('path')
module.exports = {
  base: {
    entry: ['./src/js/test.js'],
    html: ['./src/html/test.html'],
    outputPath: path.resolve(__dirname, '../dist'),
    assetsDir: 'static',
    isSinglePage: true, // 是否为单页面应用，true时将忽略enter， html选项
    pxToRem: {
      turnon: true, // 是否转换px为rem
      remUnit: 720, // 基准大小
      baseDpr:1,  // 输入尺寸的dpr
      remPrecision: 6 // 保留小数
    }
  },
  dev: {
    publicPath: './',
    devtool: 'source-map',
    devServer: {
      contentBase: false,
      quiet: true, // necessary for FriendlyErrorsPlugin
      publicPath: '/',
      host: 'localhost',// '0.0.0.0',
      port: 3000,
      headers: {},
      https: false,
      open: false,//'chrome',
      hot: true,
      proxy: {}
    }
  },
  build: {
    publicPath: './',
    devtool: false
  }
}
