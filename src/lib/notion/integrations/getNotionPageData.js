import { Client } from '@notionhq/client'
import { makeCache } from 'lib/notion/integrations/makeCache'

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY })

export const getNotionApi = async (databaseId = '', queryOptons = {}) => {
  const cacheFile = 'cache/.notion-db-data-cache'

  return await makeCache(cacheFile, { databaseId, queryOptons })
}

export const notionFetch = async (databaseId = '', queryOptons = {}) => {
  const queryResponse = await notion.databases.query({
    database_id: databaseId,
    ...queryOptons,
  })

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(queryResponse)
    }, 1000)
  })
}
