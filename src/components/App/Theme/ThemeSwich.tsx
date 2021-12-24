// react modules
import { useState, useContext } from 'react'
// mui modules
import { styled, alpha } from '@mui/material/styles'
// mui components
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
// mui icons
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
// local components
import { ThemeContext } from 'components/MyThemeProvider'
import { MenuItemLink } from 'components/App/MenuItemLink'
// local const
import { ROUTE } from 'constants/route'

const StyledMenu = styled((props: any) => (
  <Menu
    open={props.open}
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}))

export const ThemeSwich = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [theme, lsTheme, handleLightMode, handleSystemTheme, handleDarkMode] =
    useContext(ThemeContext)

  return (
    <>
      <IconButton
        onClick={handleClick}
        title="Setting"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        aria-label="setting"
        // variant="contained"
      >
        {theme.palette.mode === 'dark' ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeIcon />
        )}
      </IconButton>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleLightMode}>
          <LightModeIcon />
          Light
        </MenuItem>
        <MenuItem onClick={handleSystemTheme}>
          <SettingsBrightnessIcon />
          System
        </MenuItem>
        <MenuItem onClick={handleDarkMode}>
          <DarkModeOutlinedIcon />
          Dark
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItemLink href={ROUTE.settings.to} ariaLabel="more" title="More">
          <MoreHorizIcon />
          More
        </MenuItemLink>
      </StyledMenu>
    </>
  )
}
