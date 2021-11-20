const withPWA = require('next-pwa');
const { __basepath__ } = require('./pages/_document');
const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 **/

module.exports = withPWA({
   images: {
      loader: 'imgix',
      path: isProd ? 'https://mythosmystery.github.io' : 'http://localhost:3000'
   },
   assetPrefix: isProd ? __basepath__ : '',
   basePath: isProd ? __basepath__ : '',
   pwa: {
      dest: 'public'
   }
});
