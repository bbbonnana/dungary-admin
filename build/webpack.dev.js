const getCommonWebpack = require('./webpack.common')
const { merge } = require('webpack-merge')
const mode = 'development'

module.exports = appEnv => {
  const config = {
    mode,
    devtool: 'cheap-module-eval-source-map'
  }
  return merge(getCommonWebpack(appEnv), config)
}
