// mui components
import Grid from '@mui/material/Grid'

export const VideoCardWrapper = ({ key, children }) => {
  return (
    <Grid
      container
      rowSpacing={{ xs: 1, sm: 0 }}
      spacing={{ xs: 0, sm: 1 }}
      // columns={{ xs: 12, md: 12, lg: 12, xl: 10 }}
      columns={12}
    >
      {children}
    </Grid>
  )
}
