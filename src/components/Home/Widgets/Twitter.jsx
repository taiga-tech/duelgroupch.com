// react
import { useRef, useEffect } from 'react'
// next components
import Script from 'next/script'
// mui components
import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'
import { useTheme } from '@mui/styles'

const TwitterWidgets = () => {
  const theme = useTheme()
  useEffect(() => {
    const twitterSrc = 'https://platform.twitter.com/widgets.js'

    if (window?.twttr?.widgets) {
      window.twttr.widgets.load()
    } else if (!document.querySelector(`script[src="${twitterSrc}"]`)) {
      const script = document.createElement(script)
      script.async = true
      script.src = twitterSrc
      document.querySelector('body').appendChild(script)
    }
  }, [])

  return (
    <Box>
      <MuiLink
        className="twitter-timeline"
        data-width="360"
        data-height="640"
        data-theme={theme.palette.mode}
        href="https://twitter.com/DuelGroup?ref_src=twsrc%5Etfw"
      >
        Tweets by DuelGroup
      </MuiLink>
      <Script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
        strategy="lazyOnload"
      />
    </Box>
  )
}

export default TwitterWidgets
