const path = require('path')

const filesPath = {
  appPath: 'app', // 资源根目录
  testPath: 'test', // 测试文件
  distPath: 'dist', // 打包文件
  dllPath: 'dist/vendors', // dll打包文件
  staticPath: 'static', // 静态文件目录
  viewsPath: 'app/views', // 视图目录
  assetsPath: 'app/assets', // 资源目录
  componentsPath: 'app/components' // 组件目录
}

module.exports = {
  path: filesPath,
  vendors: [ // 添加依赖
    'vue/dist/vue.esm.js'
  ],
  build: {
    env: require('./prod.env'),
    // 入口
    index: path.resolve(process.cwd(), filesPath.distPath, '/index.html'),
    // 服务根目录
    assetsRoot: path.resolve(process.cwd(), filesPath.distPath),
    // 指向静态资源
    assetsSubDirectory: 'src',
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
    assetsSubDirectory: 'src',
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
