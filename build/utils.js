const getDevWebpack = require('./webpack.dev')
const getProdWebpack = require('./webpack.prod')
const { devServer } = require('../config/devServerConfig')
// const { merge } = require('webpack-merge')
const {
  magentaBright: magenta,
  yellowBright: yellow,
  cyanBright: cyan
} = require('chalk')

module.exports = {
  getWebpackConfig,
  showBuildInfo
}

function getWebpackConfig(mode, appEnv) {
  if (mode === 'dev') {
    return getDevWebpack(appEnv)
  } else {
    return getProdWebpack(appEnv)
  }
}

function showBuildInfo(mode, appEnv, isServer = false) {
  const modeMap = {
    dev: '开发环境打包',
    prod: '生产环境打包'
  }
  console.log(cyan('** 构建任务信息如下 **'))
  console.log(magenta('运行模式：') + yellow(`${isServer ? 'devServer运行' : '远端服务运行'}`))
  console.log(magenta('打包模式：') + yellow(modeMap[mode]))
  console.log(magenta('运行环境：') + yellow(appEnv))
  isServer && console.log(magenta('运行端口：') + yellow(devServer.port))
  console.log(cyan('*********************'))
}
