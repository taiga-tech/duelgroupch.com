// mui modules
import { styled } from '@mui/material/styles'
// mui components
import Box from '@mui/material/Box'

const VideoContainer = styled((props) => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
      height: '100%',
      paddingTop: '56.25%',
      // zIndex: '-1'
    }}
    {...props}
  />
))(({ theme }) => ({}))

const StyledIframe = styled((props) => (
  <Box
    component="iframe"
    sx={{
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%',
      height: '100%',
      // zIndex: '-1',
      maxWidth: 'none',
      // minWidth: '100%',
      minHeight: '100%',
    }}
    data-type="youtube"
    data-video-id="RJE3dfC5FKs"
    frameBorder="0"
    allowFullScreen="1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    title="YouTube video player"
    width="1280"
    height="720"
    tabIndex="-1"
    {...props}
  />
))(({ theme }) => ({}))

export const BgYoutubePlayer = ({ children, src }) => {
  return (
    <VideoContainer className="youtubePlayer">
      <StyledIframe src={src} />
      {children}
    </VideoContainer>
  )
}
