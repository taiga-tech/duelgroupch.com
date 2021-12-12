// types
import type { AppProps } from 'next/app'
// react modules
import { useEffect } from 'react'
// seo
import { DefaultSeo } from 'next-seo'
import { SEO } from 'next-seo.config'
// local components
import { MyThemeProvider } from 'components/MyThemeProvider'
import Gtag from 'components/App/Gtag'
// other modules
import NextNprogress from 'nextjs-progressbar'

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <MyThemeProvider>
      <Gtag />
      <DefaultSeo {...SEO} />
      <NextNprogress color="rgba(255,255,255,0.5)" height={2} />
      <Component {...pageProps} />
    </MyThemeProvider>
  )
}

export default CustomApp
