// mui components
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export const Section = ({ children }) => {
  return (
    <Box>
      <Container
        sx={{
          minHeight: 500,
          height: 'calc(100vh - 90px)',
          maxHeight: { xs: 500, sm: 700, xl: 1000 },
          transition: '0.3s',
        }}
      >
        {children}
      </Container>
    </Box>
  )
}
