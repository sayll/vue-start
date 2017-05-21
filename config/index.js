const path = require('path')

module.exports = {
  path: {
    appPath: 'src',
    testPath: 'test',
    staticPath: 'static',
    viewsPath: 'src/views',
    assetsPath: 'src/assets',
    componentsPath: 'src/components'
  },
  build: {
    env: require('./prod.env'),
    // 入口
    index: path.resolve(__dirname, '../dist/index.html'),
    // 服务根目录
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 指向静态资源
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    // 是否生成用于生产构建的源映射
    productionSourceMap: true,
    // Gzip 默认关闭如需开启请安装下列依赖
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // `npm run report ： 查看捆绑分析器报表
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.report
  },
  dev: {
    env: require('./dev.env'),
    port: 3000,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // see https://github.com/chimurai/http-proxy-middleware
    proxyTable: {
      /*'/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }*/
    },
    cssSourceMap: false
  }
}
