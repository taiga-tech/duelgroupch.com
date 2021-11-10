// mui components
import MuiLink from '@mui/material/Link'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
// local constants
// import { SOCIAL } from 'constants/social'

export const SocialSection = () => {
  return (
    <Container>
      <h1>Social</h1>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-around"
        alignItems="center"
      >
        <Box>
          <MuiLink
            className="twitter-timeline"
            data-width="480"
            data-height="750"
            data-theme="dark"
            href="https://twitter.com/DuelGroup?ref_src=twsrc%5Etfw"
          >
            Tweets by DuelGroup
          </MuiLink>
        </Box>
      </Stack>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </Container>
  )
}
