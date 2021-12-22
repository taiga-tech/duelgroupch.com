// next components
import Image from 'next/image'
// mui components
import MuiLink from '@mui/material/Link'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
// local module
import { shimmer, toBase64 } from 'lib/imageBlur'

export const VideoCard = ({ item, loading, error }) => {
  const channelUrl = 'https://www.youtube.com/channel/UCE010VqCfjLp7zckSBbFyfw/'

  return (
    <MuiLink
      href={
        item ? `https://www.youtube.com/watch?v=${item.id.videoId}` : channelUrl
      }
      target="_blank"
      rel="noopener noreferrer"
      sx={{ display: 'block' }}
      underline="none"
    >
      <Card>
        <CardActionArea>
          {loading || error ? (
            <Skeleton
              sx={{ height: { xs: 255, sm: 219, md: 200, lg: 160 } }}
              variant="rectangular"
            />
          ) : (
            <Image
              height={item.snippet.thumbnails.medium.height}
              width={item.snippet.thumbnails.medium.width}
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(
                  item.snippet.thumbnails.medium.width,
                  item.snippet.thumbnails.medium.height
                )
              )}`}
              placeholder="blur"
              layout="responsive"
              loading="lazy"
            />
          )}
          <CardContent>
            {loading || error ? (
              <>
                <Skeleton height={10} style={{ marginBottom: 6 }} />
                <Skeleton height={10} width="80%" />
              </>
            ) : (
              <>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="span"
                  sx={{
                    height: 40,
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {item.snippet.title}
                </Typography>
              </>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </MuiLink>
  )
}
