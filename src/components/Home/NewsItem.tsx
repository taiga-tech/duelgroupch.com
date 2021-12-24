// mui components
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
// date-fns
import { format /* formatDistanceToNow */ } from 'date-fns'

export const NewsItem = ({ item }) => {
  if (!item) return false
  // const formatTS = 'yyyy-MM-dd hh:mm:ss aaa eeeeee'
  const formatTS = 'yyyy-MM-dd eeeeee'
  const { Title, TimeStamp, Description } = item.properties

  const title = Title.title[0].text.content
  const description = Description.rich_text.map((i) => i.text.content)
  const timestamp = new Date(TimeStamp.date.start)

  return (
    <>
      <Grid item xs={12} sm={3}>
        <Typography variant="body2" color="text.secondary">
          {format(timestamp, formatTS)}
          {/* {' - '}
            {formatDistanceToNow(timestamp, { addSuffix: true })} */}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Typography>{title}</Typography>
        <Typography variant="caption" color="text.secondary" component="p">
          {description}
        </Typography>
      </Grid>
    </>
  )
}
