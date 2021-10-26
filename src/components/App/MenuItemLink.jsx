// next components
import Link from 'next/link'
// mui components
import MenuItem from '@mui/material/MenuItem'

export const MenuItemLink = ({ href, ariaLabel, title, children }) => {
  return (
    <Link href={href} passHref>
      <MenuItem aria-label={ariaLabel} title={title}>
        {children}
      </MenuItem>
    </Link>
  )
}
