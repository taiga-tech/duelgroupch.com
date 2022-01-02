// types
import { Breakpoint } from '@mui/system'
// mui components
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export const Section = ({
  children,
  maxWidth,
}: {
  children: any
  maxWidth?: false | Breakpoint
}) => {
  return (
    <Box>
      <Container
        sx={{
          minHeight: 500,
          height: {
            xs: 'calc(100vh - (90px + 470px))',
            md: 'calc(100vh - (90px + 362px))',
          }, // footer height: { xs:470, ?:362 }
          maxHeight: { xs: 700, sm: 700, xl: 1000 },
          transition: '0.3s',
        }}
        maxWidth={maxWidth}
      >
        {children}
      </Container>
    </Box>
  )
}
