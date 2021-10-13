// mui components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grow from '@mui/material/Grow'
import Button from '@mui/material/Button'
// mui icons
import YouTubeIcon from '@mui/icons-material/YouTube'
// local layout
import { MainLayout } from 'layouts/main'
// local components
import { BgMedia } from 'components/Hero/BgMedia'
import { SocialSection } from 'components/Home/Sections/Social'
import { VideoSection } from 'components/Home/Sections/Video'
import { NewsSection } from 'components/Home/Sections/News'

const Home = () => {
  const video = '/videos/op.mov'
  const poster = '/images/logo.png'

  return (
    <MainLayout headerPosition="fixed">
      <Box sx={{ height: '100vh', scroll: 'hidden' }}>
        <BgMedia video={video} poster={poster}>
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Grow
              in={true}
              style={{ transformOrigin: '0 0 0' }}
              {...{ timeout: 2000 }}
            >
              <Button
                variant="text"
                sx={{
                  color: '#ff0100',
                  '&:hover': { backgroundColor: 'rgba(255 , 1, 0, 0.04)' },
                }}
                href="https://www.youtube.com/channel/UCE010VqCfjLp7zckSBbFyfw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon sx={{ fontSize: '50px' }} />
                <Typography
                  variant="h2"
                  style={{
                    fontFamily:
                      'Unica One, Roboto, Helvetica, Arial, sans-serif',
                    // fontSize: '80px',
                    fontWeight: '300',
                    letterSpacing: 'nomal',
                    zIndex: '1',
                    textShadow: `3px 3px #0e0e0e`,
                    color: '#fff',
                  }}
                >
                  DUELGROUP YOUTUBE CHANNEL
                </Typography>
              </Button>
            </Grow>
          </Container>
        </BgMedia>
      </Box>
      <Box id="news">
        <NewsSection />
      </Box>
      <Box id="video">
        <VideoSection />
      </Box>
      <Box id="social">
        <SocialSection />
      </Box>
    </MainLayout>
  )
}

export default Home
