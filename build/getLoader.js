const path = require('path')

module.exports = appEnv => [
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
