/** @type {import('next').NextConfig} */

// node
const fs = require('fs')
const path = require('path')
// next extention
const withPWA = require('next-pwa')
// constants
const {
  NOTION_TOKEN,
  PAGE_INDEX_ID,
} = require('./src/constants/notion/server-constants')

try {
  fs.unlinkSync(path.resolve('./cache/.page_index_data'))
} catch (_) {
  /* non fatal */
}
try {
  fs.unlinkSync(path.resolve('./cache/.page_index_data_previews'))
} catch (_) {
  /* non fatal */
}

const warnOrError =
  process.env.NODE_ENV !== 'production'
    ? console.warn
    : (msg) => {
        throw new Error(msg)
      }

if (!NOTION_TOKEN) {
  // We aren't able to build or serve images from Notion without the
  // NOTION_TOKEN being populated
  warnOrError(
    `\nNOTION_TOKEN is missing from env, this will result in an error\n` +
      `Make sure to provide one before starting Next.js`
  )
}

if (!PAGE_INDEX_ID) {
  // We aren't able to build or serve images from Notion without the
  // NOTION_TOKEN being populated
  warnOrError(
    `\nPAGE_INDEX_ID is missing from env, this will result in an error\n` +
      `Make sure to provide one before starting Next.js`
  )
}

module.exports = withPWA({
  swcMinify: false,
  trailingSlash: true,
  reactStrictMode: true,
  // experimental: {
  //   reactRoot: true,
  //   concurrentFeatures: true,
  // },

  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },

  images: {
    domains: ['i.ytimg.com', '**'],
    // deviceSizes: [320, 500, 768, 1024, 1200, 1680, 2560],
    // deviceSizes: [320, 500, 640, 750, 828, 1080, 1200, 1680, 1920, 2048, 2560, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    path: '/_next/image',
    loader: 'default',
  },

  eslint: { dirs: ['src'] },

  webpack(cfg, { dev, isServer }) {
    // only compile build-rss in production server build
    if (dev || !isServer) return cfg

    // we're in build mode so enable shared caching for Notion data
    process.env.USE_CACHE = 'true'

    const originalEntry = cfg.entry
    cfg.entry = async () => {
      const entries = { ...(await originalEntry()) }

      entries['build-rss'] = './src/lib/notion/build-rss.ts'
      return entries
    }
    return cfg
  },
})
