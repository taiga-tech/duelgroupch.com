import { constructUrl } from 'lib/constructUrl'

interface baseParams {
  part: string
  channelId: string
  maxResults: number
  order: string
  type: string
  key: string | undefined
}

const baseUrl = 'https://youtube.googleapis.com/youtube/v3/search'
const baseParams: baseParams = {
  part: 'snippet',
  channelId: 'UCE010VqCfjLp7zckSBbFyfw',
  maxResults: 16,
  order: 'date',
  type: 'video',
  key: process.env.GOOGLE_API_KEY,
}

export const fetchVideoInfo = async (params?) => {
  const result = await fetch(
    constructUrl(baseUrl, { ...baseParams, ...params }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).catch((err) => {
    throw new Error(err)
  })

  return await result.json()
}
