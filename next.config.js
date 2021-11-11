const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
   images: {
      loader: 'imgix',
      path: isProd ? 'https://mythosmystery.github.io' : 'http://localhost:3000'
   },
   assetPrefix: isProd ? '/next-gen-weather' : '',
   basePath: isProd ? '/next-gen-weather' : ''
};
