// mui components
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
// local components
import { Section } from 'components/App/Section'

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
      <Typography variant="h3" component="div">
        ComingSoon...
      </Typography>
    </Box>
  </Section>
)
