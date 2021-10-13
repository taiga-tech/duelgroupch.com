const BaseUrl = process.env.BASE_URL

export const SEO = {
  titleTemplate: 'DUEL GROUP - %s',
  defaultTitle: 'DUEL GROUP oficial',
  // outputs: Next SEO
  description: 'DUEL GROUP oficial',
  canonical: BaseUrl,
  additionalMetaTags: [
    {
      property: 'dc:creator',
      content: 'DUEL GROUP oficial',
    },
    {
      name: 'application-name',
      content: 'DUEL GROUP oficial',
    },
  ],
  openGraph: {
    title: 'DUEL GROUP oficial',
    site_name: 'DUEL GROUP oficial',
    type: 'website',
    url: BaseUrl,
    images: [
      {
        url: `${BaseUrl}/images/logo.png`,
        alt: 'DUEL GROUP oficial',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@DuelGroup',
    site: '@DuelGroup',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'apple-touch-icon',
      href: `/favicons/apple-touch-icon-57x57.png`,
      sizes: '57x57',
    },
    {
      rel: 'apple-touch-icon',
      href: `/favicons/apple-touch-icon-72x72.png`,
      sizes: '72x72',
    },
    {
      rel: 'apple-touch-icon',
      href: `/favicons/apple-touch-icon-76x76.png`,
      sizes: '76x76',
    },
    {
      rel: 'apple-touch-icon',
      href: `/favicons/apple-touch-icon-114x114.png`,
      sizes: '114x114',
    },
    {
      rel: 'apple-touch-icon',
      href: `/favicons/apple-touch-icon-120x120.png`,
      sizes: '120x120',
    },
    {
      rel: 'apple-touch-icon',
      href: `/favicons/apple-touch-icon-152x152.png`,
      sizes: '152x152',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicons/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      href: '/favicons/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicons/icon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicons/icon-96x96.png',
      sizes: '96x96',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicons/favicon.ico',
    },
  ],
}
