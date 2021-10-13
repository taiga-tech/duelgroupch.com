// mui components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook'
// mui modules
import { styled } from '@mui/material/styles'
// mui icons
// local components
import { MainLayout } from 'layouts/main'
import { ThemeToggle } from 'components/App/Theme/ThemeToggle'
// other components
import AnchorLink from 'react-anchor-link-smooth-scroll'

const HashLink = styled((props) => <AnchorLink {...props} />)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  textDecoration: 'none',
}))

const SettingWrapper = ({ title, subheader, children }) => {
  return (
    <Card
      sx={{
        my: '10px',
        display: { xs: 'block', sm: 'flex' },
        justifyContent: 'space-between',
      }}
    >
      <CardHeader
        title={title}
        subheader={subheader}
        titleTypographyProps={{ fontSize: '20px' }}
      />
      <CardActions
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </CardActions>
    </Card>
  )
}

const Settings = () => {
  const seo = { page: 'Settings' }

  return (
    <MainLayout seo={seo}>
      <Box>
        <Container sx={{ height: 'calc(100vh - 90px)' }}>
          <h1>Settings</h1>
          <Box sx={{ display: { sm: 'block', md: 'flex' } }}>
            <Box
              sx={{
                minWidth: '340px',
                maxWidth: '100%',
                mb: { xs: '20px', md: '0px' },
                bgcolor: 'background.paper',
              }}
            >
              <Card>
                <List>
                  <HashLink href="#general" offset="100">
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <LaptopChromebookIcon />
                        </ListItemIcon>
                        <ListItemText primary="General" />
                      </ListItemButton>
                    </ListItem>
                  </HashLink>
                  {/* <Divider /> */}
                </List>
              </Card>
            </Box>
            <Box
              sx={{ ml: { xs: '0px', md: '15px' }, width: '100%' }}
              id="general"
            >
              <Typography color="text.secondary" variant="body2">
                General information
              </Typography>
              <SettingWrapper title="Theme Mode">
                <ThemeToggle />
              </SettingWrapper>
            </Box>
          </Box>
        </Container>
      </Box>
    </MainLayout>
  )
}

export default Settings
