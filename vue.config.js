const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/arvid_portfolio/' : '/'
}