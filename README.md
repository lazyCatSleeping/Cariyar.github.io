# cariyar_blog

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 开发日记
### 2023年7月11日
1. 创建项目
   1. 创建`components`文件夹
      1. 创建`BlogContent.vue`
      2. 创建`BlogHeader.vue`
      3. 创建`BlogFooter.vue`
      4. `content`文件夹
         1. `NavList.vue`
         2. `main`文件夹
            1. `Index.vue`
2. 添加路由
   1. `yarn add vue-router`
3. 添加element-plus
   1. `yarn add element-plus`
   2. 按需引入组件
      1. 安装`yarn add unplugin-element-plus`
      2. 在`vue.config.js`中或按要求插入代码
```js
configureWebpack: {
	plugins:[
		require('unplugin-element-plus/webpack')({
			// options
		})
	]
}
```
### 2023年7月13日
1. 引入axios
   1. 安装
      1. `npm install axios`




