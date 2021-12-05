import { readFile, writeFile } from 'lib/fsHelper'
import { fetchVideoInfo } from 'lib/youtube'

export const getVideoPageData = async () => {
  let pageData = null
  const useCache = process.env.USE_CACHE === 'true'
  const cacheFile = 'cache/video-page-data-cache'

  if (useCache) {
    try {
      pageData = JSON.parse(await readFile(cacheFile, 'utf8'))
    } catch (_) {}
  }

  if (!pageData) {
    pageData = await getAllPageData()
    const [error] = pageData
    if (!error) {
      pageData = pageData.filter(({ items }) => items && items.length > 0)
    }
    /**
     * for(const data of pageData) {
     *  for (const item of data.items) {
     *     item.thumbnailUrl = await buildImgixImage(item.snippet.thumbnails.medium.url)
     *   }
     * }
     */
  }

  if (useCache) {
    const [error] = pageData
    if (!error) {
      await writeFile(cacheFile, JSON.stringify(pageData), 'utf8').catch(() => {})
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pageData)
    }, 1000)
  })
}

const getAllPageData = async () => {
  return await getNextPageData([], null)
}

const getNextPageData = async (result = [], nextPageToken) => {
  // await sleep()
  const params = nextPageToken ? { pageToken: nextPageToken } : {}
  const json = await fetchVideoInfo(params)
  result.push(json)
  console.log('getNextPageData', json)

  if (json.nextPageToken) {
    return await getNextPageData(result, json.nextPageToken)
  } else {
    return result
  }
}
