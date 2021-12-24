// react modules
import { useState, useContext, useEffect } from 'react'
// mui components
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
// local modules
import { ThemeContext } from 'components/MyThemeProvider'

export const ThemeToggle = () => {
  const [theme, lsTheme, handleLightMode, handleSystemTheme, handleDarkMode] =
    useContext(ThemeContext)
  const [alignment, setAlignment] = useState(lsTheme)

  useEffect(() => {
    setAlignment(lsTheme)
  }, [lsTheme])

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
    }
  }

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton
        value="light"
        onClick={handleLightMode}
        aria-label="light aligned"
      >
        <LightModeIcon sx={{ marginRight: '8px' }} fontSize="small" />
        Light
      </ToggleButton>
      <ToggleButton
        value="system"
        onClick={handleSystemTheme}
        aria-label="system"
      >
        <SettingsBrightnessIcon sx={{ marginRight: '8px' }} fontSize="small" />
        System
      </ToggleButton>
      <ToggleButton
        value="dark"
        onClick={handleDarkMode}
        aria-label="dark aligned"
      >
        <DarkModeOutlinedIcon sx={{ marginRight: '8px' }} fontSize="small" />
        Dark
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
