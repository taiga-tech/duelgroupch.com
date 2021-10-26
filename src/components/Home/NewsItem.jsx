// mui components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
// date-fns
import { format /* formatDistanceToNow */ } from 'date-fns'

export const NewsItem = ({ item }) => {
  // const formatTS = 'yyyy-MM-dd hh:mm:ss aaa eeeeee'
  const formatTS = 'yyyy-MM-dd eeeeee'
  return (
    <>
      <Grid item xs={12} sm={3}>
        <Typography variant="body2" color="text.secondary">
          {format(new Date(item.timestamp), formatTS)}
          {/* {' - '}
            {formatDistanceToNow(new Date(item.timestamp), { addSuffix: true })} */}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Typography>{item.title}</Typography>
        <Typography variant="caption" color="text.secondary" component="p">
          {item.description}
        </Typography>
      </Grid>
    </>
  )
}
