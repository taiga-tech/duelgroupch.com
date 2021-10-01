// react modules
import { useEffect } from 'react'
// next components
// next modules
import { useRouter } from 'next/router'
// local components
import { MyThemeProvider } from 'components/MyThemeProvider'
import * as gtag from 'lib/gtag'

const CustomApp = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    if (!gtag.GA_TRACKING_ID) return

    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <MyThemeProvider>
      <Component {...pageProps} />
    </MyThemeProvider>
  )
}

export default CustomApp
