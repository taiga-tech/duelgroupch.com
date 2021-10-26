// mui components
import Container from '@mui/material/Container'
// local components
import { MainLayout } from 'layouts/main'

const Events = () => {
  const seo = { page: 'events' }

  return (
    <MainLayout seo={seo}>
      <Container>
        <h1>events</h1>
      </Container>
    </MainLayout>
  )
}

export default Events
