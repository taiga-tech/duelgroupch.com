import { fetchVideoInfo } from 'lib/youtube'

const handler = async (req, res) => {
  try {
    const result = await fetchVideoInfo()
    res.status(200).json({ status: 200, data: result })
  } catch (err) {
    res.status(500).send({ status: 500, error: 'failed to fetch data' })
  }
}

export default handler
