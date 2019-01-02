const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  configureWebpack: {
    plugins: [
      new MomentLocalesPlugin(),
    ],
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/nodata\.\w*\.?png$/],
    },
  },
};
// Vue-Project-9/
