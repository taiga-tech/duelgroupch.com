// React hooks
import { useState, useEffect } from 'react'
// mui components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
// mui icons
import YouTubeIcon from '@mui/icons-material/YouTube'
// local components
import { VideoCardWrapper } from 'components/Home/VideoCardWrapper'
import { VideoCard } from 'components/Home/VideoCard'
import { ErrorAlert } from 'components/App/ErrorAlert'

export const VideoSection = ({ video }) => {
  const channelUrl = 'https://www.youtube.com/channel/UCE010VqCfjLp7zckSBbFyfw/'
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <Container>
      {video.error && <ErrorAlert error={video.error} />}
      <Box>
        <VideoCardWrapper>
          {loading || video.error
            ? Array.from(Array(16)).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <VideoCard loading={loading} error={video.error} />
                </Grid>
              ))
            : video.items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <VideoCard item={item} loading={!item} />
                </Grid>
              ))}
        </VideoCardWrapper>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 2,
          }}
        >
          {video.items.length >= 16 && (
            <Button
              variant="outlined"
              color="inherit"
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              endIcon={<YouTubeIcon color="error" />}
              sx={{ px: 12 }}
            >
              もっと見る
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  )
}
