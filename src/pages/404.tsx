// next components
import Link from 'next/link'
import { useRouter } from 'next/router'
// mui components
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
// mui icons
import CloudOffTwoToneIcon from '@mui/icons-material/CloudOffTwoTone'
// local components
import { MainLayout } from 'layouts/main'
import { Socials } from 'components/App/Socials'

const Custom404 = () => {
  const pageNotFound = '404 Page Not Found'
  const seo = { page: pageNotFound }
  const router = useRouter()

  return (
    <MainLayout seo={seo}>
      <Container sx={{ height: 'calc(100vh - 90px)' }}>
        <Dialog open fullWidth>
          <Card
            sx={{
              color: 'white',
              backgroundColor: '#13151a',
              backgroundImage: 'none',
            }}
          >
            <CardHeader
              title={
                <Typography
                  variant="h1"
                  sx={{ fontSize: '20px', fontWeight: 'bold' }}
                  component="div"
                >
                  {pageNotFound}
                </Typography>
              }
              avatar={<CloudOffTwoToneIcon color="error" />}
            />
            <CardActions sx={{ justifyContent: 'space-between' }}>
              <span>
                <Button
                  onClick={() => router.back()}
                  sx={{ color: 'white' }}
                  size="large"
                >
                  Back
                </Button>
                <Link href="/" passHref>
                  <Button sx={{ color: 'white' }} size="large">
                    Home
                  </Button>
                </Link>
              </span>
              <Socials />
            </CardActions>
          </Card>
        </Dialog>
      </Container>
    </MainLayout>
  )
}

export default Custom404
