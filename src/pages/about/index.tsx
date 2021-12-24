// mui components
// local components
import { MainLayout } from 'layouts/main'
import { ComingSoon } from 'components/App/ComingSoon'

export default function About() {
  const seo = { page: 'about', description: '' }

  return (
    <MainLayout seo={seo}>
      <ComingSoon />
    </MainLayout>
  )
}
