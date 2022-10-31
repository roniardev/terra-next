/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextConfig = withBundleAnalyzer({
  env: {
    NEXT_PUBLIC_ENV: 'PRODUCTION', //your next configs goes here
  },
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['id'],
    defaultLocale: 'id',
  },
});

module.exports = nextConfig;
