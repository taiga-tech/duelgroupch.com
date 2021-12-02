import XMLParser from 'xml2js'

const feedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id='
const chennelId = 'UCE010VqCfjLp7zckSBbFyfw'

const fetchYoutubeFeed = async () => {
  try {
    const response = await fetch(feedUrl + chennelId)
    const xml = await response.text()
    return xml
  } catch (err) {
    console.error('YouTubeFeed fetch Error', err)
    return null
  }
}

export const youtubeFeed = async () => {
  const xml = await fetchYoutubeFeed()
  const parsedXml = await XMLParser.parseStringPromise(xml).catch(null)
  const feed = parsedXml.feed.entry.map((item) => {
    return {
      title: item.title.toString(),
      link: item.link[0].$.href.toString(),
      published: item.published.toString(),
    }
  })

  return feed
}
