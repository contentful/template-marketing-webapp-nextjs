/* eslint-disable no-param-reassign */
const withImages = require('next-images');
const SentryWebpackPlugin = require('@sentry/webpack-plugin');

require('dotenv').config();

const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
} = process.env;

process.env.SENTRY_DSN = SENTRY_DSN;

const path = require('path');

module.exports = withImages({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
  pageExtensions: ['mdx', 'jsx', 'tsx'],
  webpack(config, { isServer, buildId }) {
    config.resolve.alias['@src'] = path.join(__dirname, 'src');
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['@ctf-components'] = path.join(
      __dirname,
      'src/ctf-components',
    );

    const originalEntry = config.entry;

    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./client/polyfills.ts')
      ) {
        entries['main.js'].unshift('./client/polyfills.ts');
      }

      return entries;
    };

    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    if (
      SENTRY_DSN &&
      SENTRY_ORG &&
      SENTRY_PROJECT &&
      SENTRY_AUTH_TOKEN &&
      NODE_ENV === 'production'
    ) {
      config.plugins.push(
        new SentryWebpackPlugin({
          include: '.next',
          ignore: ['node_modules'],
          urlPrefix: '~/_next',
          release: buildId,
        }),
      );
    }

    return config;
  },
  cssLoaderOptions: {
    url: false,
  },
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
  env: {
    CONFIG_CONTENTFUL_MAIN_SPACE_ID:
      process.env.CONFIG_CONTENTFUL_MAIN_SPACE_ID,
    CONFIG_CONTENTFUL_MAIN_SPACE_TOKEN:
      process.env.CONFIG_CONTENTFUL_MAIN_SPACE_TOKEN,
    CONFIG_CONTENTFUL_MAIN_SPACE_PREVIEW_TOKEN:
      process.env.CONFIG_CONTENTFUL_MAIN_SPACE_PREVIEW_TOKEN,
    CONFIG_CONTENTFUL_LEGAL_SPACE_ID:
      process.env.CONFIG_CONTENTFUL_LEGAL_SPACE_ID,
    CONFIG_CONTENTFUL_LEGAL_SPACE_TOKEN:
      process.env.CONFIG_CONTENTFUL_LEGAL_SPACE_TOKEN,
    CONFIG_CONTENTFUL_DEFAULT_LOCALE:
      process.env.CONFIG_CONTENTFUL_DEFAULT_LOCALE,
    CONFIG_CONTENTFUL_AVAILABLE_LOCALES:
      process.env.CONFIG_CONTENTFUL_AVAILABLE_LOCALES,
    CONFIG_CONTENTFUL_META_TITLE: process.env.CONFIG_CONTENTFUL_META_TITLE,
    CONFIG_CONTENTFUL_META_DESCRIPTION:
      process.env.CONFIG_CONTENTFUL_META_DESCRIPTION,
    CONFIG_CONTENTFUL_META_URL: process.env.CONFIG_CONTENTFUL_META_URL,
    VERCEL_URL: process.env.VERCEL_URL,
    CONFIG_CONTENTFUL_HEADER_LOGO: process.env.CONFIG_CONTENTFUL_HEADER_LOGO,
    CONFIG_CONTENTFUL_HEADER_LOGO_WIDTH:
      process.env.CONFIG_CONTENTFUL_HEADER_LOGO_WIDTH,
    CONFIG_CONTENTFUL_HEADER_LOGO_HEIGHT:
      process.env.CONFIG_CONTENTFUL_HEADER_LOGO_HEIGHT,
    CONFIG_CONTENTFUL_HEADER_MENU: process.env.CONFIG_CONTENTFUL_HEADER_MENU,
    CONFIG_CONTENTFUL_FOOTER_LOGO: process.env.CONFIG_CONTENTFUL_FOOTER_LOGO,
    CONFIG_CONTENTFUL_FOOTER_LOGO_WIDTH:
      process.env.CONFIG_CONTENTFUL_FOOTER_LOGO_WIDTH,
    CONFIG_CONTENTFUL_FOOTER_LOGO_HEIGHT:
      process.env.CONFIG_CONTENTFUL_FOOTER_LOGO_HEIGHT,
    CONFIG_CONTENTFUL_FOOTER_MENU: process.env.CONFIG_CONTENTFUL_FOOTER_MENU,
    CONFIG_CONTENTFUL_FOOTER_SOCIAL:
      process.env.CONFIG_CONTENTFUL_FOOTER_SOCIAL,
    CONFIG_CONTENTFUL_FOOTER_GOOGLE_PLAY_LOGO:
      process.env.CONFIG_CONTENTFUL_FOOTER_GOOGLE_PLAY_LOGO,
    CONFIG_CONTENTFUL_FOOTER_APP_STORE_LOGO:
      process.env.CONFIG_CONTENTFUL_FOOTER_APP_STORE_LOGO,
    CONFIG_CONTENTFUL_FOOTER_LEGAL: process.env.CONFIG_CONTENTFUL_FOOTER_LEGAL,
    CONFIG_CONTENTFUL_FOOTER_COPYRIGHT:
      process.env.CONFIG_CONTENTFUL_FOOTER_COPYRIGHT,
    CONFIG_CONTENTFUL_FOOTER_DISCLAIMER:
      process.env.CONFIG_CONTENTFUL_FOOTER_DISCLAIMER,
    CONFIG_CONTENTFUL_ICON_LIGHT: process.env.CONFIG_CONTENTFUL_ICON_LIGHT,
    CONFIG_CONTENTFUL_ICON_DARK: process.env.CONFIG_CONTENTFUL_ICON_DARK,
    CONFIG_CONTENTFUL_ICON_WIDTH: process.env.CONFIG_CONTENTFUL_ICON_WIDTH,
    CONFIG_CONTENTFUL_ICON_HEIGHT: process.env.CONFIG_CONTENTFUL_ICON_HEIGHT,
    CONFIG_CONTENTFUL_DE_META_TITLE: process.env.CONFIG_CONTENTFUL_META_TITLE,
    CONFIG_CONTENTFUL_DE_META_DESCRIPTION:
      process.env.CONFIG_CONTENTFUL_META_DESCRIPTION,
    CONFIG_CONTENTFUL_DE_HEADER_MENU:
      process.env.CONFIG_CONTENTFUL_DE_HEADER_MENU,
    CONFIG_CONTENTFUL_DE_FOOTER_MENU:
      process.env.CONFIG_CONTENTFUL_DE_FOOTER_MENU,
    CONFIG_CONTENTFUL_DE_FOOTER_LEGAL:
      process.env.CONFIG_CONTENTFUL_DE_FOOTER_LEGAL,
    CONFIG_CONTENTFUL_DE_FOOTER_DISCLAIMER:
      process.env.CONFIG_CONTENTFUL_DE_FOOTER_DISCLAIMER,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  },
});
