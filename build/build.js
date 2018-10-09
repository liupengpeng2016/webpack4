const conf = require('./webpack.prod.conf.js')
const webpack = require('webpack')
const path = require('path')
const rm = require('rimraf')
rm(path.resolve(__dirname, '../dist/'), function(err){
  if (err) console.log(err)
  webpack(conf, function (err, stats) {
    process.stdout.write(stats.toString({
      color:true
    }))
    if (err || stats.hasErrors()) {
      throw err
    }
  })
})
