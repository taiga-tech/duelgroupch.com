import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp'
import GitHubIcon from '@mui/icons-material/GitHub'

export const SOCIAL = {
  youtube: {
    title: 'YouTube',
    href: 'https://www.youtube.com/channel/UCE010VqCfjLp7zckSBbFyfw/',
    icon: <YouTubeIcon />,
    sx: {
      color: '#ff0100',
      '&:hover': { backgroundColor: 'rgba(255 , 1, 0, 0.04)' },
    },
  },
  twitter: {
    title: 'Twitter',
    href: 'https://twitter.com/DuelGroup/',
    icon: <TwitterIcon />,
    sx: {
      color: '#1d9bef',
      '&:hover': { backgroundColor: 'rgba(29 , 155, 239, 0.04)' },
    },
  },
  instagram: {
    title: 'Instagram',
    href: 'https://instagram.com/duelgroup/',
    icon: <InstagramIcon />,
    sx: {
      color: '#CF2E92',
      '&:hover': { backgroundColor: 'rgba(207 , 45, 146, 0.04)' },
    },
  },
  tiktok: {
    title: 'Tiktok',
    href: 'https://vt.tiktok.com/ZSJTKdV4D/',
    icon: <MusicNoteSharpIcon />,
    sx: null,
  },
  github: {
    title: 'GitHub',
    href: 'https://github.com/taiga-tech/',
    icon: <GitHubIcon />,
    sx: {
      color: 'purple',
      '&:hover': { backgroundColor: 'rgba(128,0,128,0.04)' },
    },
  },
}

export const SOCIALS = [
  SOCIAL.youtube,
  SOCIAL.twitter,
  SOCIAL.instagram,
  SOCIAL.tiktok,
  SOCIAL.github,
]
