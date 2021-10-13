// next components
import Link from 'next/link'
// mui components
import Button from '@mui/material/Button'

const defaultSx = {
  color: 'white',
  fontFamily: 'Unica One, Roboto, Helvetica, Arial, sans-serif',
  fontSize: '18px',
  '&:hover': { backgroundColor: 'rgba(255,255,255,0.04)' },
}

export const ButtonLink = (
  { className, href, hrefAs, sx, children },
  props
) => (
  <Link href={href} as={hrefAs} passHref>
    <Button sx={sx ? sx : defaultSx} className={className} {...props}>
      {children}
    </Button>
  </Link>
)
