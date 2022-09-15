import withBundleAnalyzer from '@next/bundle-analyzer';
import withPWA from 'next-pwa';

const plugins = [
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV !== 'production',
        dest: `public`,
        register: false,
        swSrc: './service-worker.js',
        publicExcludes: ['!favicon/**/*'],
      },
    },
  ],
  [
    withBundleAnalyzer,
    {
      enabled: process.env.BUNDLE_ANALYZE !== 'true',
    },
  ],
];

export { plugins };
