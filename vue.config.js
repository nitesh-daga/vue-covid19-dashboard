module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader')
      .tap(options => {
        return {attributes: true}
      })
  },
  "transpileDependencies": [
    "vuetify"
  ]
}