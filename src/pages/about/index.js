// mui components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
// local layout
import { MainLayout } from 'layouts/main'

export default function About() {
  const seo = { page: 'about', description: '' }

  return (
    <MainLayout seo={seo}>
      <Box>
        <Container>
          <h1>about</h1>
        </Container>
      </Box>
    </MainLayout>
  )
}
