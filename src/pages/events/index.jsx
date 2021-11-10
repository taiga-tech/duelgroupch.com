// mui components
// local components
import { MainLayout } from 'layouts/main'
import { ComingSoon } from 'components/App/ComingSoon'

const Events = () => {
  const seo = { page: 'events' }

  return (
    <MainLayout seo={seo}>
      <ComingSoon />
    </MainLayout>
  )
}

export default Events
