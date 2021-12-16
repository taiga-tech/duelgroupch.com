// // types
import type { RouteType } from 'types/route'
// mui icons
import HomeIcon from '@mui/icons-material/Home'
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined'
import YouTubeIcon from '@mui/icons-material/YouTube'
import EmailIcon from '@mui/icons-material/Email'
import SettingsIcon from '@mui/icons-material/Settings'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

export const ROUTE: RouteType = {
  home: {
    title: 'Home',
    to: '/',
    icon: <HomeIcon />,
    news: {
      title: 'News',
      to: '/#news',
    },
    video: {
      title: 'Video',
      to: '/#video',
      icon: <YouTubeIcon />,
    },
    social: {
      title: 'Social',
      to: '/#social',
    },
  },
  about: {
    title: 'About',
    to: '/about',
    icon: <AnnouncementOutlinedIcon />,
  },
  contact: {
    title: 'Contact',
    to: '/contact',
    icon: <EmailIcon />,
  },
  settings: {
    title: 'Settings',
    to: '/settings',
    icon: <SettingsIcon />,
  },
  events: {
    title: 'Events',
    to: '/events',
    icon: <CalendarTodayIcon />,
  },
  profile: {
    title: 'Profile',
    to: '/products/profile',
    icon: <FingerprintIcon />,
  },
  legal: {
    terms: {
      title: 'Terms',
      to: '/legal/terms',
      icon: <AssignmentSharpIcon />,
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      to: '/legal/privacy-policy',
      icon: <FingerprintIcon />,
    },
  },
}
