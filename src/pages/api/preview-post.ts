// next
import { NextApiRequest, NextApiResponse } from 'next'
// local libs
import getPageData from 'lib/notion/getPageData'
import getPageIndex from 'lib/notion/getPageIndex'
import { getPageLink } from 'lib/notion/notion-helpers'

const header = async (req: NextApiRequest, res: NextApiResponse) => {
  if (typeof req.query.token !== 'string') {
    return res.status(401).json({ message: 'invalid token' })
  }
  if (req.query.token !== process.env.NOTION_TOKEN) {
    return res.status(404).json({ message: 'not authorized' })
  }

  if (typeof req.query.slug !== 'string') {
    return res.status(401).json({ message: 'invalid slug' })
  }
  const postsTable = await getPageIndex()
  const post = postsTable[req.query.slug]

  if (!post) {
    console.log(`Failed to find post for slug: ${req.query.slug}`)
    return res.status(404).json({
      message: `no post found for ${req.query.slug}`,
    })
  }

  const postData = await getPageData(post.id)

  if (!postData) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  res.setPreviewData({})
  res.writeHead(307, { Location: getPageLink(post.Prop, post.Slug) })
  res.end()
}

export default header
