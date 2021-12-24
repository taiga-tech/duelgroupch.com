// use commonjs so it can be required without transpiling
// node
const path = require('path')

const normalizeId = (id) => {
  if (!id) return id
  if (id.length === 36) return id
  if (id.length !== 32) {
    throw new Error(
      `Invalid blog-index-id: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`
    )
  }
  return `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(
    16,
    4
  )}-${id.substr(20)}`
}

const NOTION_TOKEN = process.env.NOTION_TOKEN
const PAGE_INDEX_ID = normalizeId(process.env.PAGE_INDEX_ID)
const API_ENDPOINT = 'https://www.notion.so/api/v3'
const PAGE_INDEX_CACHE = path.resolve('cache/.page_index_data')

module.exports = {
  NOTION_TOKEN,
  PAGE_INDEX_ID,
  API_ENDPOINT,
  PAGE_INDEX_CACHE,
  normalizeId,
}
