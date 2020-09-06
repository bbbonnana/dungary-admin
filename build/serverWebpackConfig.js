const { getWebpackConfig, showBuildInfo } = require('./utils')
const devServerConfig = require('../config/devServerConfig')
const { merge } = require('webpack-merge')

const mode = process.env.MODE
const appEnv = process.env.APP_ENV
const webpackConfig = getWebpackConfig(mode, appEnv)

showBuildInfo(mode, appEnv, true)

module.exports = merge(webpackConfig, devServerConfig)
