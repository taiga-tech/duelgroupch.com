// next components
import Link from 'next/link'
import { useRouter } from 'next/router'
// mui modules
import { styled } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'
// mui components
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
// local components
import { ButtonLink } from 'components/App/ButtonLink'
import { DGLogo } from 'components/App/DGLogo'
import { AnchorDrawer } from 'components/App/AnchorDrawer'
import { HashLinkButton } from 'components/App/HashLinkButton'
// local const
import { ROUTE } from 'constants/route'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'block',
  '@media all': {
    minHeight: 90,
    maxHeight: 90,
  },
}))

export const Header = ({ headerPosition }) => {
  const isRoot = useRouter().pathname === '/'
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: headerPosition
          ? trigger
            ? 'rgba(0,0,0,.5)'
            : '#0000'
          : 'rgba(0,0,0,.5)',
        transition: '.5s',
      }}
      position={headerPosition || 'sticky'}
    >
      <Container>
        <StyledToolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            height="100%"
          >
            <Box className="IconWrapper" sx={{ height: '40px', width: '40px' }}>
              <AnchorDrawer position="left" />
              {/* TODO: Left Icon */}
              {/* <IconButton
                sx={{
                  color: 'white',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.04)' },
                  display: { xs: 'none', md: 'inline' },
                  height: '40px',
                  width: '40px',
                }}
              >
                <SearchIcon />
              </IconButton> */}
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              spacing={{ xs: 'none', md: 5 }}
            >
              {/*  */}
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{ display: { xs: 'none', md: 'inline' } }}
              >
                <ButtonLink href={ROUTE.home.to}>{ROUTE.home.title}</ButtonLink>
                <ButtonLink href={ROUTE.about.to}>
                  {ROUTE.about.title}
                </ButtonLink>
                {isRoot ? (
                  <HashLinkButton
                    href={ROUTE.home.news.to.slice(1)}
                    offset="110"
                  >
                    {ROUTE.home.news.title}
                  </HashLinkButton>
                ) : (
                  <ButtonLink href={ROUTE.home.news.to}>
                    {ROUTE.home.news.title}
                  </ButtonLink>
                )}
              </Stack>
              {/*  */}
              <Box sx={{ width: '80px', height: '80px' }}>
                <Link href={ROUTE.home.to} passHref>
                  <a>
                    <DGLogo width="80" height="80" sx={{ pading: '5px' }} />
                  </a>
                </Link>
              </Box>
              {/*  */}
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{ display: { xs: 'none', md: 'inline' } }}
              >
                {isRoot ? (
                  <HashLinkButton
                    href={ROUTE.home.video.to.slice(1)}
                    offset="110"
                  >
                    {ROUTE.home.video.title}
                  </HashLinkButton>
                ) : (
                  <ButtonLink href={ROUTE.home.video.to}>
                    {ROUTE.home.video.title}
                  </ButtonLink>
                )}
                <ButtonLink href={ROUTE.events.to}>
                  {ROUTE.events.title}
                </ButtonLink>
                <ButtonLink href={ROUTE.contact.to}>
                  {ROUTE.contact.title}
                </ButtonLink>
              </Stack>
              {/*  */}
            </Stack>
            <Box className="IconWrapper" sx={{ height: '40px', width: '40px' }}>
              {/* TODO: Right Icon */}
              {/* <ThemeSwich /> */}
            </Box>
          </Stack>
        </StyledToolbar>
      </Container>
    </AppBar>
  )
}
