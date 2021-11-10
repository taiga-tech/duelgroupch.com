import { notionFetch } from 'lib/getNotionApi'

const handler = async (req, res) => {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID

  try {
    const result = await notionFetch(databaseId, {
      sorts: [{ property: 'TimeStamp', direction: 'descending' }],
      page_size: 5,
    })
    res.status(200).json({ status: 200, data: result })
  } catch (err) {
    res.status(500).send({ status: 500, error: 'failed to fetch data' })
  }
}

export default handler
