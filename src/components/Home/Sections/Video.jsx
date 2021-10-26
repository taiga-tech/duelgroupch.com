// mui components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
// local components
import { VideoCardWrapper } from 'components/Home/VideoCardWrapper'
import { VideoCard } from 'components/Home/VideoCard'

export const VideoSection = ({ id, data, totalPages }) => (
  <Container>
    {/* <Typography variant="h4" gutterBottom>Video</Typography> */}
    <Box>
      <VideoCardWrapper>
        {data.items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <VideoCard item={item} loading={!item} />
          </Grid>
        ))}
      </VideoCardWrapper>

      {/* <Masonry
          columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          sx={{ heigt: 'auto' }}
        >
          {data.items.map((item, index) => (
            <MasonryItem key={index}>
              <VideoCard item={item} loading={!item} />
            </MasonryItem>
          ))}
        </Masonry> */}
    </Box>
  </Container>
)
