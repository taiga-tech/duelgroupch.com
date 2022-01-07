// node
import { resolve } from 'path'
// react
import { renderToStaticMarkup } from 'react-dom/server'
// next
import { loadEnvConfig } from '@next/env'
// local lib
import { writeFile } from 'lib/fsHelper'
import { postIsPublished, getPageLink } from 'lib/notion/notionHelpers'
import { pBlock } from 'lib/notion/renderers'
import getPageIndex from 'lib/notion/getPageIndex'
import getNotionUsers from 'lib/notion/getNotionUsers'
import serverConstants from 'constants/notion/server-constants'

// must use weird syntax to bypass auto replacing of NODE_ENV
process.env['NODE' + '_ENV'] = 'production'
process.env.USE_CACHE = 'true'

// constants
const NOW = new Date().toJSON()

const mapToAuthor = (author) => {
  return `<author><name>${author.full_name}</name></author>`
}

const decode = (string) => {
  return string
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

const mapToEntry = (post) => {
  return `
  <entry>
    <id>${post.link}</id>
    <title>${decode(post.title)}</title>
    <link href="${post.link}" />
    <updated>${new Date(post.date).toJSON()}</updated>
    <content type="xhtml">
      <div xmlns="http://www.w3.org/1999/xhtml">
        ${renderToStaticMarkup(
          post.preview
            ? (post.preview || []).map((block, idx) =>
                pBlock(block, false, post.title + idx)
              )
            : post.content
        )}
        <p class="more">
          <a href="${post.link}">Read more</a>
        </p>
      </div>
    </content>
    ${(post.authors || []).map(mapToAuthor).join('\n      ')}
  </entry>`
}

const concat = (total, item) => {
  return total + item
}

const createRSS = (pagePosts = []) => {
  const postsString = pagePosts.map(mapToEntry).reduce(concat, '')

  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>My Notion Page</title>
  <subtitle>Pages</subtitle>
  <link href="/atom" rel="self" type="application/rss+xml" />
  <link href="/" />
  <updated>${NOW}</updated>
  <id>My Notion Page</id>${postsString}
</feed>`
}

const main = async () => {
  await loadEnvConfig(process.cwd())
  serverConstants.NOTION_TOKEN = process.env.NOTION_TOKEN
  serverConstants.PAGE_INDEX_ID = serverConstants.normalizeId(
    process.env.PAGE_INDEX_ID
  )

  const postsTable = await getPageIndex(true)
  const neededAuthors = new Set<string>()

  const pagePosts = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug]
      if (!postIsPublished(post)) return

      post.authors = post.Authors || []

      for (const author of post.authors) {
        neededAuthors.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...neededAuthors])

  pagePosts.forEach((post) => {
    post.authors = post.authors.map((id) => users[id])
    post.link = getPageLink(post.Params, post.Slug)
    post.title = post.Page
    post.date = post.Date
  })

  const outputPath = 'public/atom'
  await writeFile(resolve(outputPath), createRSS(pagePosts))
  console.log(`Atom feed file generated at \`${outputPath}\``)
}

main().catch((error) => console.error(error))
