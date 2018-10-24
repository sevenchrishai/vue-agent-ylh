# vue-agent-ylh

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## [项目预览地址](https://sevenchrishai.github.io/vue-agent-ylh/dist/#/login)

## 踩坑记录

1. build之后css设置的背景图片不显示问题
+ 在build/webpack.prod.conf.js文件里output里面添加：publicPath：'./'
```
  output: {
    publicPath:'./',
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
```
+ 在build/utils.js文件里添加 publicPath:'../../'
```
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath:'../../'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
```
+ 在config/index.js文件里，添加assetsPublicPath:'./'
```
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
  } 
```
+ 设置完成，可正常使用背景图片样式了
```
  background: url(../assets/img/login_pic.png) no-repeat;
```

## 项目有些内容（如MOCK的api等）copy了其他大神的代码[vue2-admin-grace](https://github.com/alex-0407/vue2-admin-grace)，内容更丰富，可移步学习。
