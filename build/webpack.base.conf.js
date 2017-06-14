const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

module.exports = {
  entry: utils.getEntries(utils.resolve(config.path.viewsPath, '**/*.js')),
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
      'static': utils.resolve(config.path.staticPath),
      '@': utils.resolve(config.path.appPath),
      '@lib': utils.resolve(config.path.assetsPath, 'js/Lib.js'),
      '@assets': utils.resolve(config.path.assetsPath),
      '@components': utils.resolve(config.path.componentsPath)
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
        use: [{
          loader: 'url-loader',
          query: {
            limit: 10240,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        },
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10240,
            publicPath: `../../`, // 修复引用文字字体路劲错误
            name: utils.assetsPath('font/[name].[hash:7].[ext]')
          }
        }
      }
    ]
  }
}

// 不是测试环境，则添加Dll依赖
if (process.env.BABEL_ENV !== 'test') {
  module.exports.plugins.push(
    new webpack.DllReferencePlugin({
      context: '/',
      manifest: require(utils.resolve(config.path.dllPath, `vendors.json`))
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [`${config.path.dllPath.replace(`${config.path.distPath}/`, '')}/vendors.js`],
      append: false,
      hash: true
    })
  )
}
