import { readFile, writeFile } from 'lib/fsHelper'
import { notionFetch } from 'lib/getNotionApi'
// import { notionParse } from 'lib/notionParse'

export const makeCache = async (filePath = '', fetchConfig) => {
  const useCache = process.env.USE_CACHE === 'true'
  let pageData = null

  if (useCache) {
    try {
      pageData = JSON.parse(await readFile(filePath, 'utf8'))
    } catch (_) {}
  }

  if (!pageData) {
    pageData = await notionFetch(
      fetchConfig.databaseId,
      fetchConfig.queryOptons
    )
  }

  if (useCache) {
    await writeFile(filePath, JSON.stringify(pageData), 'utf8').catch(() => {})
  }

  // await notionParse(pageData)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pageData)
    }, 1000)
  })
}
