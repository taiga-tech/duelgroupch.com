import { notionFetch } from 'lib/notion/integrations/getNotionPageData'

/**
 * notionとfeedを合体
 */

export const parsedNotionNews = async () => {
  const data = await notionFetch()
  const parsedData = []
  data.map((item) => {
    parsedData.push(item)

    console.log(item)
  })
  return parsedData
}

export const newsData = () => {}
