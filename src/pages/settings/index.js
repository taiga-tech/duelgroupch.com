// mui components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
// local components
import { MainLayout } from 'layouts/main'

const Settings = () => {
  const seo = { page: 'settings', description: '' }
  return (
    <MainLayout seo={seo}>
      <Box>
        <Container sx={{ minHeight: '100vh' }}>
          <h1>Settings</h1>
        </Container>
      </Box>
    </MainLayout>
  )
}

export default Settings
