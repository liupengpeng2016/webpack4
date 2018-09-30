const conf = require('./webpack.prod.conf.js')
const webpack = require('webpack')
const path = require('path')
const rm = require('rimraf')
rm(path.resolve(__dirname, '../dist/'), function(err){
  if (err) throw err
  webpack(conf, function (err, stats) {
    if (err || stats.hasErrors()) {
      throw err
    }
    console.log(stats.toString())
    //process.stdout.write(stats.toString())
  })
})
