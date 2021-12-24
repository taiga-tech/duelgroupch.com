// mui components
import Button from '@mui/material/Button'
import { SxProps } from '@mui/system'
import { HashLink } from 'components/App/HashLink'

const headerSx = {
  color: 'white',
  fontFamily: 'Unica One, Roboto, Helvetica, Arial, sans-serif',
  fontSize: '18px',
  '&:hover': { backgroundColor: 'rgba(255,255,255,0.04)' },
  width: '80px',
}

export const HashLinkButton = ({
  href,
  offset,
  sx,
  children,
}: {
  href: string
  offset?: number | string
  sx?: SxProps
  children: any
}) => {
  return (
    <HashLink href={href} offset={offset}>
      <Button
        sx={sx ? sx : headerSx}
        onClick={() => {
          history.replaceState('', '', href)
        }}
      >
        {children}
      </Button>
    </HashLink>
  )
}
