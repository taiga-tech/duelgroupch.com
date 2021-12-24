// types
import { SxProps } from '@mui/system'
// next components
import Link from 'next/link'
// mui components
import Button from '@mui/material/Button'

const headerSx = {
  color: 'white',
  fontFamily: 'Unica One, Roboto, Helvetica, Arial, sans-serif',
  fontSize: '18px',
  '&:hover': { backgroundColor: 'rgba(255,255,255,0.04)' },
  width: '80px',
}

export const ButtonLink = (
  {
    className,
    href,
    hrefAs,
    sx,
    children,
  }: {
    className?: string
    href: string
    hrefAs?: string
    sx?: SxProps
    children: any
  },
  props
) => (
  <Link href={href} as={hrefAs} passHref>
    <Button sx={sx ? sx : headerSx} className={className} {...props}>
      {children}
    </Button>
  </Link>
)
