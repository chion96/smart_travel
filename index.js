/**
 * Entry Script
 */

if (process.env.NODE_ENV === 'production') {
  process.env.webpackAssets = JSON.stringify(require('./dist/client/manifest.json'));
  try {
    process.env.webpackChunkAssets = JSON.stringify(require('./dist/client/chunk-manifest.json'));
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`Error reading ${file}:\n`, err.message);
      console.log('If this is for chunk-manifest.json, it probably means no chunking was used to split app into several bundles.')
      console.log('Defaulting to empty {} for manifest.')
    } else {
      throw err;
    }
  }
  
  // In production, serve the webpacked server file.
  require('./dist/server.bundle.js');
} else {
  // Babel polyfill to convert ES6 code in runtime
  require('babel-register')({
    "plugins": [
      [
        "babel-plugin-webpack-loaders",
        {
          "config": "./webpack.config.babel.js",
          "verbose": false
        }
      ]
    ]
  });
  require('babel-polyfill');

  require('./server/server');
}
