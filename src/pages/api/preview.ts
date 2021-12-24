// next
import { NextApiRequest, NextApiResponse } from 'next'
// local libs
import getPageIndex from 'lib/notion/getPageIndex'

const header = async (req: NextApiRequest, res: NextApiResponse) => {
  if (typeof req.query.token !== 'string') {
    return res.status(401).json({ message: 'invalid token' })
  }
  if (req.query.token !== process.env.NOTION_TOKEN) {
    return res.status(404).json({ message: 'not authorized' })
  }

  const postsTable = await getPageIndex()

  if (!postsTable) {
    return res.status(401).json({ message: 'Failed to fetch posts' })
  }

  res.setPreviewData({})
  res.writeHead(307, { Location: `/blog` })
  res.end()
}

export default header
