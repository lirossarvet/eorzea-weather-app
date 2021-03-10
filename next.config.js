const withMDX = require('@next/mdx')();

const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    localeDetection: false,
    locales: ['en', 'ja'],
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  rewrites: () => [
    {
      destination: '/api/ads',
      source: '/ads.txt',
    },
  ],
};

module.exports = withMDX(nextConfig);
