// mui components
// local components
import { MainLayout } from 'layouts/main'
import { ComingSoon } from 'components/App/ComingSoon'

const Contact = () => {
  const seo = { page: 'contact' }

  return (
    <MainLayout seo={seo}>
      <ComingSoon />
    </MainLayout>
  )
}

export default Contact
