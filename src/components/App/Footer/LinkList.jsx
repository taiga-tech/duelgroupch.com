// next components
import Link from 'next/link'
// mui components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// local constants
import { ROUTE } from 'constants/route'

export const LinkList = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
        gridAutoColumns: '1fr',
        gap: 2,
      }}
    >
      {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography fontWeight="bold" variant="body2">
          Products
        </Typography>
        <Link href={ROUTE.home.to}>Videos</Link>
        <Link href={ROUTE.events.to}>Events</Link>
        <Link href={ROUTE.home.to}>Blog</Link>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography fontWeight="bold" variant="body2">
          Explore
        </Typography>
        <Link href={ROUTE.home.to}>News</Link>
        <Link href={ROUTE.home.to}>About</Link>
        <Link href={ROUTE.home.to}>Blog</Link>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography fontWeight="bold" variant="body2">
          Resources
        </Typography>
        <Link href={ROUTE.home.to}>home</Link>
      </Box> */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography fontWeight="bold" variant="body2">
          Legal
        </Typography>
        <Link href={ROUTE.legal.terms.to}>{ROUTE.legal.terms.title}</Link>
        <Link href={ROUTE.legal.privacyPolicy.to}>
          {ROUTE.legal.privacyPolicy.title}
        </Link>
      </Box>
    </Box>
  )
}
