const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const HappyPack = require('happypack')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
function cHappypack (id, loaders) {
  return new HappyPack({
    id: id,
    debug: false,
    verbose: false,
    cache: true,
    threads: 4,
    cacheContext: {
      env: process.env.NODE_ENV
    },
    loaders: loaders
  })
}

module.exports = {
  entry: utils.getEntries('./src/module/**/*.js'),
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
      '@': resolve('src')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    cHappypack('ESLint', [{
      loader: 'eslint-loader',
      query: {
        formatter: require('eslint-friendly-formatter')
      }
    }]),
    cHappypack('Js', ['babel-loader'])
  ],
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: ['happypack/loader?id=ESLint'],
        enforce: 'pre',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.js$/,
        use: ['happypack/loader?id=Js'],
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          query: vueLoaderConfig
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }
      }
    ]
  }
}
