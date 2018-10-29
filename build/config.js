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
    },
    useProxy: true
  },
  dev: {
    publicPath: './',
    devtool: 'source-map',
    devServer: {
      contentBase: false,
      quiet: true,
      publicPath: '/',
      host: 'localhost',// '0.0.0.0',
      port: 8080,
      headers: {},
      https: false,
      open: false,//'chrome',
      hot: true,
      proxy: [
        {
          context: [],
          target: '',
          secure: false
        }
      ]
    }
  },
  build: {
    publicPath: './',
    devtool: false
  }
}
