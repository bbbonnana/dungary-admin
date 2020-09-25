const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const common = require('../config/common')
const getLoader = require('./getLoader')
const { DefinePlugin } = require('webpack')

module.exports = appEnv => {
  const define = require(`../config/env/${appEnv}.env.js`).define
  const envDefine = {}
  Object.keys(define).forEach(key => {
    envDefine[`process.env.${key}`] = JSON.stringify(define[key])
  })

  return {
    entry: {
      app: path.resolve(__dirname, '../src/main.js')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        templateParameters: {
          appName: common.appName || 'App',
          title: common.title || 'App'
        },
        favicon: 'public/favicon.png'
      }),
      new VueLoaderPlugin(),
      new DefinePlugin(envDefine)
    ],
    module: {
      rules: getLoader(appEnv)
    },
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: common.publicPath
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src')
      }
    }
  }
}
