const BaseUrl = process.env.BASE_URL

export const SEO = {
  titleTemplate: '%s - DUEL GROUP',
  defaultTitle: 'DUEL GROUP official',
  // outputs: Next SEO
  description: 'Official Site of our YouTube channel',
  canonical: BaseUrl,
  additionalMetaTags: [
    {
      property: 'dc:creator',
      content: 'DUEL GROUP official',
    },
    {
      name: 'application-name',
      content: 'DUEL GROUP official',
    },
    { name: 'theme-color', content: '#13151e' },
  ],
  openGraph: {
    title: 'DUEL GROUP official',
    site_name: 'DUEL GROUP official',
    type: 'website',
    url: BaseUrl,
    images: [
      {
        url: `${BaseUrl}/images/logo.png`,
        alt: 'DUEL GROUP official',
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
