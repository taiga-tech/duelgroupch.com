// React hooks
import { useState, useEffect } from 'react'
// mui components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
// local components
import { VideoCardWrapper } from 'components/Home/VideoCardWrapper'
import { VideoCard } from 'components/Home/VideoCard'

export const VideoSection = ({ id, data, totalPages }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <Container>
      <Box>
        <VideoCardWrapper>
          {loading
            ? Array.from(Array(16)).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <VideoCard loading={loading} />
                </Grid>
              ))
            : data.items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <VideoCard item={item} loading={!item} />
                </Grid>
              ))}
        </VideoCardWrapper>
      </Box>
    </Container>
  )
}
