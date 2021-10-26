const NEWS = [
  {
    id: 1,
    title: 'YouTubeチャンネル開設',
    description: '',
    timestamp: '2021-09-06T12:16:43Z',
  },
  {
    id: 2,
    title: 'HP Publicβ "v0.0.1"リリース',
    description: '開発中の状況はこちら => https://dev.duelgroupch.com/',
    timestamp: '2021-10-01T13:18:26Z',
  },
]

export const getNews = () => {
  const sortedNEWS = NEWS.sort((a, b) => b.id - a.id)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sortedNEWS)
    }, 1000)
  })
}
