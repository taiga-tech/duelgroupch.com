module.exports = {
  // target: "serverless",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    // domains: ['https://sourceexample.com/image'],
    deviceSizes: [320, 500, 768, 1024, 1200, 1680, 2560],
    imageSizes: [60, 220],
    domains: [],
    path: "/_next/image",
    loader: "default",
  },

  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_GA_ID: process.NEXT_PUBLIC_GA_ID
  },

  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },
}
