// next components
import Link from 'next/link'
// mui components
import ListItem from '@mui/material/ListItem'

export const ListItemLink = ({ href, title, children }) => {
  return (
    <Link href={href} passHref>
      <ListItem aria-label={title} button>
        {children}
      </ListItem>
    </Link>
  )
}
