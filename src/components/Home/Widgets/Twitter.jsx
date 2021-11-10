// next components
import Script from 'next/script'
// mui components
import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'

const TwitterWidgets = () => (
  <Box>
    <MuiLink
      className="twitter-timeline"
      data-width="360"
      data-height="640"
      data-theme="dark"
      href="https://twitter.com/DuelGroup?ref_src=twsrc%5Etfw"
    >
      Tweets by DuelGroup
    </MuiLink>
    <Script
      // async
      src="https://platform.twitter.com/widgets.js"
      charSet="utf-8"
      strategy="lazyOnload"
    />
  </Box>
)

export default TwitterWidgets
