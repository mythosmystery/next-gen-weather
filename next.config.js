// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');
// const isProd = process.env.NODE_ENV === 'production';

// const __basepath__ = '';

// /**
//  * @type {import('next').NextConfig}
//  **/

// module.exports = withPWA({
//    images: {
//       loader: 'imgix',
//       path: isProd ? 'https://mythosmystery.github.io' : 'http://localhost:3000'
//    },
//    assetPrefix: isProd ? __basepath__ : '',
//    basePath: isProd ? __basepath__ : '',
//    pwa: {
//       dest: 'public',
//       runtimeCaching,
//       buildExcludes: [/middleware-manifest.json$/],
//       register: true,
//       skipWaiting: true
//    }
// });
