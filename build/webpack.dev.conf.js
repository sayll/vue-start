const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})

const pages = utils.getEntries(utils.resolve(config.path.viewsPath, '**/*.html'))

for (let page in pages) {
  // 配置生成的html文件，定义路径等
  const conf = {
    filename: page + '.html',
    template: pages[page],
    chunks: ['main', page],
    inject: true,
    excludeChunks: Object.keys(pages).filter(item => {
      return (item !== page)
    })
  }
  conf.chunksSortMode = function (a, b) { // 按照配置排序
    let index = {}, i = 1,
      len           = conf.chunks.length;
    for (; i <= len; i++) {
      index[conf.chunks[len - i]] = i;
    }
    let aI = index[a.origins[0].name],
      bI = index[b.origins[0].name];
    return aI && bI ? bI - aI : -1;
  };
  module.exports.plugins.push(new HtmlWebpackPlugin(conf))
}
