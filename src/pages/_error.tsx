// next components
import Link from 'next/link'
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

const Error = ({ statusCode }) => {
  const pageNotFound = `${statusCode} Page Not Found`
  const otherError = statusCode
    ? `An error ${statusCode} occurred on server`
    : 'An error occurred on client'
  const title = statusCode === 404 ? pageNotFound : otherError
  console.log(statusCode)
  const seo = { page: title }

  return (
    <MainLayout seo={seo}>
      <Container sx={{ height: 'calc(100vh - 90px)' }}>
        <Dialog open maxWidth="lg" fullWidth>
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
                  {statusCode === 404 ? pageNotFound : otherError}
                </Typography>
              }
              avatar={<CloudOffTwoToneIcon color="error" />}
            />
            <CardActions sx={{ justifyContent: 'space-between' }}>
              <Link href="/" passHref>
                <Button sx={{ color: 'white' }} size="large">
                  Home
                </Button>
              </Link>
              <Socials />
            </CardActions>
          </Card>
        </Dialog>
      </Container>
    </MainLayout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
