// mui components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
//local components
import { DGLogo } from 'components/App/DGLogo'
import { LinkList } from 'components/App/Footer/LinkList'
import { ThemeSwich } from 'components/App/Theme/ThemeSwich'
import { Socials } from 'components/App/Socials'

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
            <Socials />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Please subscribe, Our channel and socials
          </Typography>
        </div>
        <LinkList />
      </Box>
      <Divider />
      <Box
        sx={{
          py: 4,
          // display: { xs: 'block', sm: 'flex' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: { xs: 'block', sm: 'flex' },
          }}
        >
          <Typography color="text.secondary" variant="body2">
            Copyright © {new Date().getFullYear()} DUEL GROP. All rights
            reserved.
          </Typography>
          <Typography color="text.secondary" variant="body2" component="p">
            <Typography
              component="span"
              sx={{
                padding: '0 10px',
                display: { xs: 'none', sm: 'inline' },
              }}
            >
              |
            </Typography>
            Designed by{' '}
            <Link
              href="https://github.com/taiga-tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              taiga-tech
            </Link>
            .
          </Typography>
        </Box>
        <ThemeSwich />
      </Box>
    </Container>
  )
}
