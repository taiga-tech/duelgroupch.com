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

  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_GA_ID: process.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_NOTION_API_KEY: process.NEXT_PUBLIC_NOTION_API_KEY,
    NEXT_PUBLIC_NOTION_DATABASE_ID: process.NEXT_PUBLIC_NOTION_DATABASE_ID,
  },

  eslint: {
    dirs: ['src', 'next.config.js'],
  },
})
