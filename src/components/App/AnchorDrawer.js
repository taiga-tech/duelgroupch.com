// react modules
import { useState } from 'react'
// mui components
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Box from '@mui/material/Box'
// import Divider from '@mui/material/Divider'
//mui icons
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/Inbox'
import MailIcon from '@mui/icons-material/Mail'

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
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
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
