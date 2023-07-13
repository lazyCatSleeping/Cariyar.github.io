const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins:[
      // 按需引入element ui
      require('unplugin-element-plus/webpack')({
        // options
      })
    ]
  }
})
