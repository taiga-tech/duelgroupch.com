// mui components
import Container from '@mui/material/Container'
// local components
import { MainLayout } from 'layouts/main'

const Contact = () => {
  const seo = { page: 'contact' }

  return (
    <MainLayout seo={seo}>
      <Container>
        <h1>contact</h1>
      </Container>
    </MainLayout>
  )
}

export default Contact
