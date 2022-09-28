const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: '@storybook/react',
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-react-i18next',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js'),
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  // TODO: remove once getServerSideTranslations is properly importer in each gSSP Next.js method
  webpackFinal: async config => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false }; // https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application

    return config;
  },
};
