const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-Project-9/'
    : '/',
  configureWebpack: {
    plugins: [
      new MomentLocalesPlugin(),
    ],
  },
  // chainWebpack: config => {
  //   config.plugins.delete('prefetch')
  // },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/nodata\.\w*\.?png$/],
    },
    themeColor: '#7377bf',
    msTileColor: '#7377bf',
  },
};
