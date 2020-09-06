// const webpack = require('webpack')
const getCommonWebpack = require('./webpack.common')
const { merge } = require('webpack-merge')
const mode = 'production'

module.exports = appEnv => {
  const config = {
    mode,
    devtool: appEnv !== 'prod' ? 'cheap-module-source-map' : 'none', // 生产环境关闭source-map
    // plugins: [
    //   new webpack.DefinePlugin({
    //     'process.env.NODE_ENV':JSON.stringify(mode)
    //   })
    // ]
  }
  return merge(getCommonWebpack(appEnv), config)
}
