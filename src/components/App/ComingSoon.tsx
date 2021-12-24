// mui components
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
// local components
import { Section } from 'components/App/Section'
import { Socials } from 'components/App/Socials'

export const ComingSoon = () => (
  <Section>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Box>
        <Typography variant="h3" component="div">
          ComingSoon...
        </Typography>
        <Socials />
      </Box>
    </Box>
  </Section>
)
