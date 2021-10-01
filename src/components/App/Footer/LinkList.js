// next components
import Link from 'next/link'
// mui components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// local constants
import { ROUTES } from 'const/route'

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
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography fontWeight="bold" variant="body2">
          Products
        </Typography>
        <Link href={ROUTES.home.to}>Videos</Link>
        <Link href={ROUTES.events.to}>Events</Link>
        {/* <Link href={ROUTES.home.to}>Blog</Link> */}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography fontWeight="bold" variant="body2">
          Explore
        </Typography>
        <Link href={ROUTES.home.to}>News</Link>
        <Link href={ROUTES.home.to}>About</Link>
        <Link href={ROUTES.home.to}>Blog</Link>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography fontWeight="bold" variant="body2">
          Legal
        </Typography>
        <Link href={ROUTES.home.to}>Terms</Link>
        <Link href={ROUTES.home.to}>Privacy Policy</Link>
      </Box>
      {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography fontWeight="bold" variant="body2">
              Resources
            </Typography>
            <Link href={ROUTES.home.to}></Link>
          </Box> */}
      {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography fontWeight="bold" variant="body2">
          Company
        </Typography>
        <Link href={ROUTES.about}>About</Link>
        <Link href={ROUTES.vision}>Vision</Link>
        <Box sx={{ display: 'flex', alignItems: 'end' }}>
          <Link href={ROUTES.careers}>Careers </Link>
        </Box>
        <Link href={ROUTES.support}>Support</Link>
      </Box> */}
    </Box>
  )
}
