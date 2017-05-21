const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

module.exports = {
  entry: utils.getEntries(utils.resolve(config.path.viewsPath,'**/*.js')),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': utils.resolve(config.path.appPath),
      'assets': utils.resolve(config.path.assetsPath),
      'components': utils.resolve(config.path.componentsPath)
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    utils.cHappypack('ESLint', [{
      loader: 'eslint-loader',
      query: {
        formatter: require('eslint-friendly-formatter')
      }
    }]),
    utils.cHappypack('Js', ['babel-loader'])
  ],
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: ['happypack/loader?id=ESLint'],
        enforce: 'pre',
        include: [utils.resolve(config.path.appPath), utils.resolve(config.path.testPath)]
      },
      {
        test: /\.js$/,
        use: ['happypack/loader?id=Js'],
        include: [utils.resolve(config.path.appPath), utils.resolve(config.path.testPath)]
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          query: vueLoaderConfig
        },
        include: [utils.resolve(config.path.appPath)]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 1000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 1000,
            name: utils.assetsPath('font/[name].[hash:7].[ext]')
          }
        }
      }
    ]
  }
}
