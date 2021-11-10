import { BgMedia } from 'components/Hero/BgMedia'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Container from '@mui/material/Container'
import Grow from '@mui/material/Grow'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export const HeroSection = () => {
  const video = '/videos/op.mov'
  const poster = '/images/logo.png'

  return (
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
                fontFamily: 'Unica One, Roboto, Helvetica, Arial, sans-serif',
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
  )
}
