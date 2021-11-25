/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
  swcMinify: true,
  trailingSlash: true,
  reactStrictMode: true,
  // experimental: {
  //   concurrentFeatures: true,
  // },

  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },

  images: {
    domains: ['i.ytimg.com'],
    // deviceSizes: [320, 500, 768, 1024, 1200, 1680, 2560],
    // deviceSizes: [320, 500, 640, 750, 828, 1080, 1200, 1680, 1920, 2048, 2560, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    path: '/_next/image',
    loader: 'default',
  },

  eslint: { dirs: ['src'] },
})
