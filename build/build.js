const webpack = require('webpack')
const rimraf = require('rimraf')
const path = require('path')
const { getWebpackConfig, showBuildInfo } = require('./utils')
// const { merge } = require('webpack-merge')
const mode = process.env.MODE
const appEnv = process.env.APP_ENV
const webpackConfig = getWebpackConfig(mode, appEnv)

showBuildInfo(mode, appEnv)

rimraf(path.resolve(__dirname, '../dist/*'), rmErr => {
  if (rmErr) {
    throw rmErr
  }

  webpack(webpackConfig, (err, stats) => {
    if (err) {
      throw err
    }

    process.stdout.write(
      stats.toString({
        colors: true, // 增加控制台颜色开关
        modules: false, // 不增加内置模块信息
        children: false, // 不增加子级信息
        chunks: false, // 允许较少的输出
        chunkModules: false // 不将内置模块的信息加到包信息
      }) + '\n\n'
    )
  })
})
