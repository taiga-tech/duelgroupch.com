// mui components
// local components
import { MainLayout } from 'layouts/main'
import { ComingSoon } from 'components/App/ComingSoon'
import { useRouter } from 'next/router'

const Blog = () => {
  const router = useRouter()
  const { slug } = router.query
  const seo = { page: slug, description: '' }

  return (
    <MainLayout seo={seo} headerPosition={'sticky'}>
      <ComingSoon />
    </MainLayout>
  )
}

export default Blog
