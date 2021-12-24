// mui components
// local components
import { MainLayout } from 'layouts/main'
import { ComingSoon } from 'components/App/ComingSoon'

const ProfileCreate = () => {
  const seo = { page: 'about', description: '' }

  return (
    <MainLayout seo={seo}>
      <ComingSoon />
    </MainLayout>
  )
}

export default ProfileCreate
