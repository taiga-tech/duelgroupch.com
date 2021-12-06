// mui components
// local components
import { MainLayout } from 'layouts/main'
import { ComingSoon } from 'components/App/ComingSoon'

const Blogs = () => {
  const seo = { page: 'Blogs', description: '' }

  return (
    <MainLayout seo={seo} headerPosition={'sticky'}>
      <ComingSoon />
    </MainLayout>
  )
}

export default Blogs
