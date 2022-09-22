/** @type {import('next').NextConfig} */

import dotenv from 'dotenv';
import nextComposePlugins from 'next-compose-plugins';

import { headers } from './config/headers.mjs';
import { includePolyfills } from './config/includePolyfills.mjs';
import { plugins } from './config/plugins.mjs';
import i18nConfig from './next-i18next.config.js';

const { i18n } = i18nConfig;

/**
 * https://github.com/cyrilwanner/next-compose-plugins/issues/59
 */
const { withPlugins } = nextComposePlugins.extend(() => ({}));

dotenv.config();

/**
 * Next config
 * documentation: https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
export default withPlugins(plugins, {
  i18n,
  /**
   * add the environment variables you would like exposed to the client here
   * documentation: https://nextjs.org/docs/api-reference/next.config.js/environment-variables
   */
  env: {
    ENVIRONMENT_NAME: process.env.ENVIRONMENT_NAME,
  },

  /**
   * The experimental option allows you to enable future/experimental options
   * like React 18 concurrent features.
   */
  experimental: {
    // urlImports: true,
    // concurrentFeatures: true,
    // serverComponents: true,
  },

  /**
   * SWC minification opt-in
   * Please note that while not in experimental, the swcMinification may cause issues in your build.
   * example: https://github.com/vercel/next.js/issues/30429 (Yup email validation causes an exception)
   */
  // swcMinify: true,

  poweredByHeader: false,
  reactStrictMode: false,
  compress: true,

  /**
   * add the headers you would like your next server to use
   * documentation: https://nextjs.org/docs/api-reference/next.config.js/headers
   *                https://nextjs.org/docs/advanced-features/security-headers
   */
  headers,

  /**
   * https://nextjs.org/docs/basic-features/image-optimization
   * Settings are the defaults
   */
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1600],
    domains: ['images.ctfassets.net'],
    path: '/_next/image',
    loader: 'default',
  },

  webpack(config, options) {
    if (!options.isServer) {
      import('circular-dependency-plugin').then(({ default: CircularDependencyPlugin }) => {
        config.plugins.push(
          new CircularDependencyPlugin({
            exclude: /a\.js|node_modules/,
            failOnError: false,
            allowAsyncCycles: false,
            cwd: process.cwd(),
          }),
        );
      });
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve.fallback = { ...config.resolve.fallback, fs: false }; // https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application

    includePolyfills(config);

    return config;
  },
});
