import { constructUrl } from 'lib/constructUrl'

const baseUrl = 'https://youtube.googleapis.com/youtube/v3/search'

const baseParams = {
  part: 'snippet',
  channelId: 'UCE010VqCfjLp7zckSBbFyfw',
  // channelId: 'UCXTpFs_3PqI41qX2d9tL2Rw',
  maxResults: 16,
  order: 'date',
  type: 'video',
  key: process.env.GOOGLE_API_KEY,
}

export const fetchVideoInfo = async (params) => {
  const result = await fetch(
    constructUrl(baseUrl, { ...baseParams, ...params }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  return await result.json()
}
