// react modules
import React, { useState, useEffect } from 'react'
// next component
import Script from 'next/script'
// mui components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
// local components
import { NewsItem } from 'components/Home/NewsItem'
// local constants
import { getNews } from 'constants/news'

export const NewsSection = () => {
  const [news, setNews] = useState([])

  const fetchNews = async () => {
    const data = await getNews()
    setNews(data.slice(0, 5))
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const loading = news.length === 0

  return (
    <Container>
      {/*  */}

      <Box sx={{ py: 3 }}>
        {/*  */}
        <Grid
          container
          columnSpacing={2}
          rowSpacing={{ xs: 6, ms: 0 }}
          columns={12}
        >
          <Grid
            item
            xs={12}
            md={7}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                News
              </Typography>

              <Grid container spacing={2}>
                {loading
                  ? Array.from(Array(5)).map((_, i) => (
                      <React.Fragment key={i}>
                        <Grid item xs={3} sm={2}>
                          <Typography variant="body2">
                            <Skeleton animation="wave" />
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                          <Typography variant="body1">
                            <Skeleton animation="wave" />
                          </Typography>
                          <Typography variant="caption">
                            <Skeleton animation="wave" width="70%" />
                          </Typography>
                        </Grid>
                      </React.Fragment>
                    ))
                  : news.map((item, index) => (
                      <NewsItem item={item} key={index} />
                    ))}
              </Grid>
            </Box>
          </Grid>
          {/*  */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
              </Box>
              <Script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
                strategy="lazyOnload"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
