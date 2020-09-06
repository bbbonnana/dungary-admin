// webpackDevServer配置
const { publicPath } = require('../config/common')

module.exports = {
  devServer: {
    port: 9000,
    noInfo: true,
    hot: true,
    publicPath
  }
}
