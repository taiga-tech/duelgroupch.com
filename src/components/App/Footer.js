// mui components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
// mui icons
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp'
import GitHubIcon from '@mui/icons-material/GitHub'
//local components
import { DGLogo } from 'components/App/DGLogo'
// import { LinkList } from 'components/App/Footer/LinkList'

export const Footer = () => {
  return (
    <Container component="footer">
      <Box
        sx={{
          py: 8,
          display: 'grid',
          gridAutoColumns: '1fr',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr',
            md: '1fr 1.75fr',
            lg: '1fr 1fr',
          },
          gridTemplateRows: 'auto',
          '& a:not(.MuiIconButton-root)': {
            mt: 1,
            color: 'text.secondary',
            typography: 'body2',
            '&:hover': {
              color: 'primary.main',
              textDecoration: 'underline',
            },
          },
        }}
      >
        <div>
          <DGLogo width="36" height="36" />
          <Box sx={{ pt: { xs: 2, sm: 2 } }}>
            <Stack spacing={2} direction="row">
              <IconButton
                sx={{
                  color: '#ff0100',
                  '&:hover': { backgroundColor: 'rgba(255 , 1, 0, 0.04)' },
                }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCE010VqCfjLp7zckSBbFyfw/"
                aria-label="youtube"
                title="YouTube"
                size="small"
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: '#1d9bef',
                  '&:hover': { backgroundColor: 'rgba(29 , 155, 239, 0.04)' },
                }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/DuelGroup/"
                aria-label="twitter"
                title="Twitter"
                size="small"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: '#CF2E92',
                  '&:hover': { backgroundColor: 'rgba(207 , 45, 146, 0.04)' },
                }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/duelgroup/"
                aria-label="instagram"
                title="Instagram"
                size="small"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                target="_blank"
                rel="noopener noreferrer"
                href="https://vt.tiktok.com/ZSJTKdV4D/"
                aria-label="tiktok"
                title="TikTok"
                size="small"
              >
                <MusicNoteSharpIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: 'purple',
                  '&:hover': { backgroundColor: 'rgba(128,0,128,0.04)' },
                }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/taiga-tech/"
                aria-label="github"
                title="GitHub"
                size="small"
              >
                <GitHubIcon />
              </IconButton>
            </Stack>
          </Box>
          {/* <Typography variant="body2" fontWeight="bold" sx={{ pt: 2 }}>
            Plese subscribe.
          </Typography> */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Please subscribe, Our channel and socials
          </Typography>
        </div>
        {/* <LinkList /> */}
      </Box>
      <Divider />
      <Box
        sx={{
          py: 4,
          display: { xs: 'block', sm: 'flex' },
          alignItems: { sm: 'center' },
          justifyContent: { sm: 'space-between' },
        }}
      >
        <Typography color="text.secondary" variant="body2">
          Copyright © {new Date().getFullYear()} DUEL GROP. All rights reserved.
          | Designed by{' '}
          <a
            href="https://github.com/taiga-tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            taiga-tech
          </a>
          .
        </Typography>
      </Box>
    </Container>
  )
}
