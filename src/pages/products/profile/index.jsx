// next
import dynamic from 'next/dynamic'
// mui components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
// local components
import { MainLayout } from 'layouts/main'

const ProfileCanv = dynamic(
  () => import('components/Canvas/index').then((module) => module.ProfileCanv),
  { ssr: false }
)

const Profile = () => {
  const seo = { page: 'profile', description: '' }
  const opt = {}

  return (
    <MainLayout seo={seo}>
      <Container maxWidth="xl">
        <Box>
          <ProfileCanv display="ogp" opt={opt} />
        </Box>
      </Container>
    </MainLayout>
  )
}

export default Profile
