// const webpack = require('webpack')
const getCommonWebpack = require('./webpack.common')
const { merge } = require('webpack-merge')
const mode = 'development'

module.exports = appEnv => {
  const config = {
    mode,
    devtool: 'cheap-module-eval-source-map',
    // plugins: [
    //   new webpack.DefinePlugin({
    //     'process.env.NODE_ENV': JSON.stringify(mode)
    //   })
    // ]
  }
  return merge(getCommonWebpack(appEnv), config)
}
