// react modules
import React from 'react'
// next components
import Link from 'next/link'
// mui modules
import { styled } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'
// mui components
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
// mui icons
// import SearchIcon from '@mui/icons-material/Search'
// local components
// import { ThemeSwich } from 'components/App/Header/ThemeSwich'
import { DGLogo } from 'components/App/DGLogo'
// import { AnchorDrawer } from 'components/App/AnchorDrawer'
// local const
import { ROUTES } from 'const/route'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'block',
  '@media all': {
    minHeight: 90,
    maxHeight: 90,
  },
}))

export const Header = ({ headerPosition }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <>
      <AppBar
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
              <Box>
                {/* <AnchorDrawer position="left" /> */}
                {/* <IconButton
                  sx={{
                    color: 'white',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.04)' },
                  }}
                >
                  <SearchIcon />
                </IconButton> */}
              </Box>
              <Box>
                <Link href={ROUTES.home.to} passHref>
                  <a>
                    <DGLogo width="80" height="80" sx={{ pading: '5px' }} />
                  </a>
                </Link>
              </Box>
              <Box>{/* <ThemeSwich /> */}</Box>
            </Stack>
          </StyledToolbar>
        </Container>
      </AppBar>
    </>
  )
}
