# vue-start

> A Vue.js Start
> - 适用于单页与多页应用.

----
<b>ie9+ 用户请转至：[avalon-webpack-start](https://github.com/sayll/avalon-webpack-start)</b>

<b>React 用户请转至：[react-webpack-start](https://github.com/sayll/react-webpack-start)</b>

<b>低版本IE 用户请转至：[ie-webpack-start](https://github.com/sayll/ie-webpack-start)</b>

## Build Setup

``` bash
$ npm install                  # Install project dependencies
$ npm start                    # open server
$ npm run deploy               # Compile and launch
```

## Script Explain

|`npm run <script>`|解释|
|------------------|-----------|
|`start`|第一次运行启用。生成DLL文件，服务启动在3000端口。|
|`dev`|与`npm start`类似相同,只有当DLL文件存在时可用,加快开发速度。|
|`build`|同`dev`在DLL文件存在时，加快打包速度。|
|`deploy`|发布：清空目录>生成生产环境的Dll>eslint检测>单元测试>打包|
|`dll:dev`|生成开发环境的DLL文件。|
|`dll:build`|生成生产环境的DLL文件。|
|`test`|开启Karma测试并生成覆盖率报告。|
|`report`|打包资源分析|
|`clean`|清除打包的文件|
|`cnpm`|安装淘宝镜像|
