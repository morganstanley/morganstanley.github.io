const { plugins } = require('./src/config/base-gatsby-plugins');

module.exports = {
  siteMetadata: {
    title: `Morgan Stanley Open Source Software`,
    description: `Morgan Stanley Open Source Software`,
    siteUrl: 'http://opensource.morganstanley.com',
    contributeUrl: false,
  },
  pathPrefix: `/`, // include subdirectory
  flags: {
    DEV_SSR: true,
  },
  plugins,
};
