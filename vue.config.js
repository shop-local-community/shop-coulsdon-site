module.exports = {
  runtimeCompiler: true,

  css: {
    sourceMap: true
  },

  chainWebpack: config => {
    config.externals({
      mapkit: 'mapkit'
    })
  }
}
