const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const common = require('../config/common')

module.exports = appEnv => ({
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
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/i,
        loader: 'vue-loader'
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 2 }
          },
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '../src/assets/scss/variables.scss')
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|ico|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
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
})
