// next components
import Image from 'next/image'
// mui components
import MuiLink from '@mui/material/Link'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'

export const VideoCardV2 = ({ item }) => {
  return (
    <ImageListItem component="div" sx={{ display: 'block' }}>
      <MuiLink
        href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={item.snippet.thumbnails.medium.url}
          width={item.snippet.thumbnails.medium.width}
          height={item.snippet.thumbnails.medium.height}
          alt={item.snippet.title}
          layout="responsive"
        />
      </MuiLink>
      <ImageListItemBar
        title={item.snippet.title}
        subtitle={item.snippet.description}
        // actionIcon={
        //   <IconButton
        //     sx={{ color: 'white' }}
        //     aria-label={`star ${item.title}`}
        //   >
        //     <YouTubeIcon />
        //   </IconButton>
        // }
        actionPosition="left"
      />
    </ImageListItem>
  )
}
