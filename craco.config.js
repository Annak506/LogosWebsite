// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Set the output directory to `dist`
      webpackConfig.output.path = path.resolve(__dirname, 'dist');
      return webpackConfig;
    },
  },
};
