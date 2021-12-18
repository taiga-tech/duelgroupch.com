// types
import { NextApiRequest, NextApiResponse } from 'next'
// local libs
import { notionFetch } from 'lib/notion/integrations/getNotionPageData'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID

  try {
    const result = await notionFetch(databaseId, {
      sorts: [{ property: 'TimeStamp', direction: 'descending' }],
      page_size: 5,
    })
    res
      .status(200)
      .json({ status: { code: 200, message: 'success' }, data: result })
  } catch (err) {
    res.status(500).send({
      status: { code: 500, message: 'failed to fetch data' },
      error: err,
    })
  }
}

export default handler
