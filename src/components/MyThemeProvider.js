// react modules
import { useEffect, useState, createContext } from 'react'
// mui modules
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const ThemeContext = createContext([false, () => {}, () => {}, () => {}])

export const MyThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // const preferredMode = prefersDarkMode ? 'on' : 'off'
  const [darkMode, setDarkMode] = useState(true)

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
  }, [prefersDarkMode])

  const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            // backgroundColor: '#0000',
            color: darkMode ? '#fff' : '#000',
            backgroundImage: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
    palette: { mode: darkMode ? 'dark' : 'light' },
  })

  return (
    <ThemeContext.Provider
      value={[theme, handleLightMode, handleSystemTheme, handleDarkMode]}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
