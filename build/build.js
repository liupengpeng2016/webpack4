const conf = require('./webpack.prod.conf.js')
const webpack = require('webpack')
const path = require('path')
const rm = require('rimraf')
const chalk = require('chalk')
const fs = require('fs')
rm(path.resolve(__dirname, '../dist/'), function(err){
  if (err) throw err
  webpack(conf, function (err, stats) {
    process.stdout.write(stats.toString({
    //console.log(stats.toString({ assets.publicPath
      colors: true,
      errors: true,
      errorDetails: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
  })
})
