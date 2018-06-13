const path = require('path');
function resolve( dir ) {
  return path.join(__dirname, dir );
}

module.exports = {
  // 基本路径
  baseUrl: "/",
  // 输出文件目录
  outputDir: "dist",
  chainWebpack: ( config ) => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    open: process.platform === 'darwin',
    host: "0.0.0.0",
    port: 18000,
    https: false,
    hotOnly: false,
    proxy: null,    // 设置反向代理
    before: app => {}
  },
  pluginOptions: {
    
  }
}