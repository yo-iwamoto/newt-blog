const { withKumaUI } = require('@kuma-ui/next-plugin');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withKumaUI({
  swcMinify: true,
  output: 'standalone',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    typedRoutes: true,
    turbo: true,
  },
});
