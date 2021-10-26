// next components
import Image from 'next/image'
// mui components
import MuiLink from '@mui/material/Link'
import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
// import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
// import IconButton from '@mui/material/IconButton'
// import MoreVertIcon from '@mui/icons-material/MoreVert'
import Skeleton from '@mui/material/Skeleton'

export const VideoCard = ({ item, loading }) => {
  // const { loading = false } = loading

  return (
    <MuiLink
      href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ display: 'block' }}
      underline="none"
    >
      <Card>
        <CardActionArea>
          {/* <CardHeader
              avatar={
                loading ? (
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Avatar alt={item.snippet.channelTitle} src="/images/D-v2.png" />
                )
              }
              // action={
              //   loading ? null : (
              //     <IconButton aria-label="settings">
              //       <MoreVertIcon />
              //     </IconButton>
              //   )
              // }
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  item.snippet.channelTitle
                )
              }
              subheader={
                loading ? (
                  <Skeleton animation="wave" height={10} width="40%" />
                ) : (
                  item.snippet.publishTime
                )
              }
            /> */}
          {loading ? (
            <Skeleton
              sx={{ height: 180 }}
              animation="wave"
              variant="rectangular"
            />
          ) : (
            <Image
              height={item.snippet.thumbnails.medium.height}
              width={item.snippet.thumbnails.medium.width}
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
              layout="responsive"
              // loading="lazy"
            />
          )}
          <CardContent>
            {loading ? (
              <>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </>
            ) : (
              <>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="p"
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
