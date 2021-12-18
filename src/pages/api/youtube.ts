// types
import { NextApiRequest, NextApiResponse } from 'next'
// local libs
import { fetchVideoInfo } from 'lib/youtube/youtube'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await fetchVideoInfo()
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
