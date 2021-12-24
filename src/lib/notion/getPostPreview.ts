// local libs
import { loadPageChunk } from 'lib/notion/getPageData'
import { values } from 'lib/notion/rpc'

const nonPreviewTypes = new Set(['editor', 'page', 'collection_view'])

export async function getPostPreview(pageId: string) {
  let blocks
  let dividerIndex = 0

  const data: any = await loadPageChunk({ pageId, limit: 10 })
  blocks = values(data.recordMap.block)

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].value.type === 'divider') {
      dividerIndex = i
      break
    }
  }

  blocks = blocks
    .splice(0, dividerIndex)
    .filter(
      ({ value: { type, properties } }: any) =>
        !nonPreviewTypes.has(type) && properties
    )
    .map((block: any) => block.value.properties.title)

  return blocks
}