// react modules
import { useEffect, useState, createContext } from 'react'
// mui modules
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
// local modules
import { getDesignTokens } from 'lib/getDesignTokens'

export const ThemeContext = createContext([
  {} as any,
  'system',
  () => {},
  () => {},
  () => {},
])

export const MyThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // const preferredMode = prefersDarkMode ? 'on' : 'off'
  const [darkMode, setDarkMode] = useState(true) // default: dark moide
  const [lsTheme, setLsTheme] = useState('')

  const handleLightMode = () => {
    localStorage.setItem('ThemeMode', 'light')
    setDarkMode(false)
  }
  const handleSystemTheme = () => {
    localStorage.setItem('ThemeMode', 'system')
    setDarkMode(prefersDarkMode)
  }
  const handleDarkMode = () => {
    localStorage.setItem('ThemeMode', 'dark')
    setDarkMode(true)
  }

  useEffect(() => {
    if (localStorage.getItem('ThemeMode') === 'dark') {
      setDarkMode(true)
    } else if (localStorage.getItem('ThemeMode') === 'light') {
      setDarkMode(false)
    } else if (prefersDarkMode) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
    if (localStorage.getItem('ThemeMode')) {
      setLsTheme(localStorage.getItem('ThemeMode'))
    }
  }, [prefersDarkMode, lsTheme])

  const theme = createTheme(getDesignTokens(darkMode))

  return (
    <ThemeContext.Provider
      value={[
        theme,
        lsTheme,
        handleLightMode,
        handleSystemTheme,
        handleDarkMode,
      ]}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
