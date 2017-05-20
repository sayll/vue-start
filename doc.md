文件处理
- 相对URL，例如./assets/logo.png将被解释为模块依赖。它们将被基于Webpack输出配置的自动生成的URL替换。
- 非前缀URL，例如assets/logo.png将被视为与相对URL相同并被翻译成./assets/logo.png。
- 前缀的URL~被视为模块请求，类似于require('some-module/image.png')。如果要使用Webpack的模块解析配置，则需要使用此前缀。例如，如果您有一个解决别名assets，则需要使用<img src="~assets/logo.png">以确保别名得到尊重。
- 根本相关的URL，例如/assets/logo.png根本不处理。

> - static/应使用绝对URL引用任何放置的文件/static/[filename]。
> - 如果您更改assetSubDirectory为assets，那么这些URL将需要更改/assets/[filename]

css预处理

*.vue处理器使用标签上的lang属性<style>
- <style lang="scss">
- <style lang="less">
> 默认为postCss

公共样式使用static引入index.html
- <style src="./styles/global.less" lang="less"></style>

`npm run dev`

开发环境
- Webpack + vue-loader单文件Vue组件。
- 状态保存热重新加载
- 状态保存编译错误覆盖
- 使用ESLint轻松保存
- 源地图

`npm run build`

生产环境
- 用UglifyJS缩小了JavaScript 。
- HTML用html-minifier缩小。
- 将所有组件的CSS提取到单个文件中，并用cssnano进行缩小。
- 使用版本散列编辑的所有静态资源都可以进行高效的长期缓存，并index.html通过适当的URL对这些生成的资产进行自动生成。

`npm run unit`

使用Karma在PhantomJS中运行单元测试。
- 在测试文件中支持ES2015 +。
- 支持所有webpack加载器。

`npm run e2e`

使用NightWatch进行端到端测试。
- 在多个浏览器中并行运行测试。
- 开箱即用的一个命令：
  - Selenium 和 ChromeDriver 依赖关系自动处理。
  - 自动生成Selenium服务器。
