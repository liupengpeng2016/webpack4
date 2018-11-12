const path = require('path')
module.exports = {
  base: {
    outputPath: path.resolve(__dirname, '../dist'),
    assetsDir: 'static',
    isSinglePage: false, // 是否为单页面应用，单页面应用使用src目录下index.js作为主入口,index.html作为模板文件
    pxToRem: {
      turnon: true, // 是否转换px为rem
      remUnit: 720, // 基准大小
      baseDpr:1,  // 输入尺寸的dpr
      remPrecision: 6 // 保留小数
    },
    useEslint: true,
    encode: 'utf-8'
  },
  dev: {
    publicPath: './',
    devtool: 'source-map',
    useProxy: true,
    devServer: {
      contentBase: false,
      quiet: true,
      publicPath: '/',
      host: 'localhost',// '0.0.0.0',
      port: 8080,
      headers: {},
      https: false,
      open: true,//'chrome',
      openPage: 'index.html',
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
