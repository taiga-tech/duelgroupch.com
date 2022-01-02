// mui components
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
// local components
import { MainLayout } from 'layouts/main'
import { Section } from 'components/App/Section'

const ArticleSkeleton = () => (
  <MainLayout seo={{ page: 'Loading...' }}>
    <Section maxWidth="md">
      <Box height="100%">
        <Box sx={{ p: 2 }}>
          <Typography component="div" variant="h2">
            <Skeleton variant="text" width="60%" />
          </Typography>
          <Skeleton width="40%" />
          <Skeleton width="40%" />
        </Box>
        <Divider />
        <Box sx={{ height: '100%', p: 2 }}>
          <Skeleton
            variant="rectangular"
            animation={false}
            sx={{
              p: 2,
              height: { xs: 400, sm: 500 },
              transition: '0.3s',
            }}
          />
        </Box>
      </Box>
    </Section>
  </MainLayout>
)

export default ArticleSkeleton
