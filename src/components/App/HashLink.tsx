import { styled } from '@mui/material/styles'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const HashLink = styled(
  (props: { href: string; offset?: number | string }) => (
    <AnchorLink {...props} />
  )
)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  textDecoration: 'none',
}))
