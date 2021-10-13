// mui components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// local components
import { MainLayout } from 'layouts/main'

export const LegalWrapper = ({ seo, children }) => {
  return (
    <MainLayout seo={seo}>
      <Box>
        <Box
          sx={{
            height: '200px',
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h1" sx={{ fontSize: '3.75rem', color: '#fff' }}>
            {seo.page}
          </Typography>
        </Box>
        <Container maxWidth="md">
          <div style={{ marginTop: '95px' }} />
          <Box sx={{ lineHeight: '1.5rem' }}>{children}</Box>
        </Container>
      </Box>
    </MainLayout>
  )
}
