// mui components
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
// mui icons
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import MusicNoteSharpIcon from '@mui/icons-material/MusicNote'

export const Socials = () => {
  return (
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
  )
}
