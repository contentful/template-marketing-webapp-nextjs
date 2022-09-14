const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, '../src/'),
      '@pages': path.resolve(__dirname, '../pages/'),
      '@ctf-components': path.resolve(__dirname, '../src/ctf-components/'),
      '@sentry/node': '@sentry/browser',
    };
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
