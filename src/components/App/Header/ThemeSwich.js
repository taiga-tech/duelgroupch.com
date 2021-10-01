// react modules
import { useState, useContext } from 'react'
// next components
import Link from 'next/link'
// mui modules
import { styled, alpha } from '@mui/material/styles'
// mui components
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
// mui icons
import SettingsIcon from '@mui/icons-material/Settings'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
// local components
import { ThemeContext } from 'components/MyThemeProvider'
// local const
import { ROUTES } from 'const/route'

const StyledMenu = styled((props) => (
  <Menu
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

  const [theme, handleLightMode, handleSystemTheme, handleDarkMode] =
    useContext(ThemeContext)

  return (
    <>
      <IconButton
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        aria-label="setting"
        title="Setting"
        onClick={handleClick}
        sx={{
          color: 'white',
          '&:hober': { backgroundColor: 'rgba(255,255,255,.04)' },
        }}
      >
        <SettingsIcon />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
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
        <Link href={ROUTES.settings} passHref>
          <MenuItem aria-label="more" title="More">
            <MoreHorizIcon />
            More
          </MenuItem>
        </Link>
      </StyledMenu>
    </>
  )
}
