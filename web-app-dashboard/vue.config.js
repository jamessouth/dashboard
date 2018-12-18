const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/Vue-Project-9/'
    : '/',
  configureWebpack: {
    plugins: [
      new MomentLocalesPlugin(),
    ]
  }
}
