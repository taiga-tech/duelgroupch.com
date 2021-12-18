// react modules
import React, { useState, useEffect } from 'react'
// mui components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
// other modules
import loadable from '@loadable/component'
// local components
import { NewsItem } from 'components/Home/NewsItem'
// import { ErrorAlert } from 'components/App/ErrorAlert'
const TwitterWidgets = loadable(() => import('components/Home/Widgets/Twitter'))

export const NewsSection = ({ news }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <Container>
      <Box sx={{ py: 3 }}>
        <Grid
          container
          columnSpacing={2}
          rowSpacing={{ xs: 6, ms: 0 }}
          columns={12}
          sx={{ minHeight: '640px' }}
        >
          <Grid
            item
            xs={12}
            md={7}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                News
              </Typography>

              {/* {news.status.code === 500 && (
                <ErrorAlert error={news.status.error} />
              )} */}

              <Grid container spacing={2} sx={{ pl: 2 }}>
                {loading // || news.status.code === 500
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
                  : news.results.map((item, index) => (
                      <NewsItem
                        item={item.properties.Published.checkbox && item}
                        key={index}
                      />
                    ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <TwitterWidgets />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
