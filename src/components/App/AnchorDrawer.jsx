// react modules
import { useState } from 'react'
// mui components
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Box from '@mui/material/Box'
// mui icons
import MenuIcon from '@mui/icons-material/Menu'
// local components
import { ListItemLink } from 'components/App/ListItemLink'
// local constants
import { ROUTE } from 'constants/route'
import { ignoreASideLink } from 'lib/ignoreASideLink'

export const AnchorDrawer = ({ position }) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => {
    return (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {ignoreASideLink(ROUTE, 'settings').map((Link, index) => (
            <ListItemLink href={Link.to} title={Link.title} key={Link.title}>
              <ListItemIcon>{Link.icon}</ListItemIcon>
              <ListItemText primary={Link.title} />
            </ListItemLink>
          ))}
        </List>
      </Box>
    )
  }

  return (
    <>
      <IconButton
        onClick={toggleDrawer(position, true)}
        aria-label="menu"
        title="Menu"
        sx={{
          color: '#fff',
          '&:hover': { backgroundColor: 'rgba(255,255,255,.04)' },
          display: { md: 'none' },
          height: '40px',
          width: '40px',
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={position}
        open={state[position]}
        onClose={toggleDrawer(position, false)}
      >
        {list(position)}
      </Drawer>
    </>
  )
}
