const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/primis',
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    allowedHosts: [".tw"],
    proxy: {
      '/api/auth': {
        target: 'http://localhost:8000/'
      },
      '/api': {
        target: 'http://localhost:8000/'
      },
    }
  },
})
