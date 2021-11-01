const path = require('path')
const package = require('./package.json')
const packageName = package.name
const WEB_INF = path.resolve(__dirname, 'WEB-INF')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = () => {
  return {
    publicPath: process.env.VUE_APP_ENV === 'development' ? `/${packageName}` : `./`,
    transpileDependencies: ['common'],
    chainWebpack: config => config.resolve.symlinks(false),
    configureWebpack: {
      output: {
        // 把子应用打包成 umd 库格式
        library: packageName,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${packageName}`
      },
      performance: {
        hints: false
      },
      plugins: [new CopyWebpackPlugin([{ from: WEB_INF, to: 'WEB-INF' }])]
    },
    devServer: {
      port: 10001,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    },
    css: {
      loaderOptions: {
        less: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#ED6D1F',
              'link-color': '#3355FF', //链接色
              'success-color': '#52c41a', //成功色
              'warning-color': '#faad14', //警告色
              'error-color': '#f5222d', //错误色
              'font-size-base': '12px', //主字号
              'heading-color': '#1B1C33', //标题色
              'text-color': '#1B1C33', //主文本色
              'text-color-secondary': '#8D8E99', //次文本色
              'disabled-color': '#8D8E99', //失效色
              'border-radius-base': '4px', //组件/浮层圆角
              'border-color-base': '#D7D7DB', //边框色
            },
            javascriptEnabled: true,
          },
        },
      },
    }
  }  
}