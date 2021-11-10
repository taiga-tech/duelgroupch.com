// react modules
import { useEffect } from 'react'
// next components
import Script from 'next/script'
// seo
import { DefaultSeo } from 'next-seo'
import { SEO } from 'next-seo.config'
// next modules
import { useRouter } from 'next/router'
// local components
import { MyThemeProvider } from 'components/MyThemeProvider'
// local modules
import * as gtag from 'lib/gtag'
// other modules
import NextNprogress from 'nextjs-progressbar'

const CustomApp = ({ Component, pageProps }) => {
  const isProd = process.env.NODE_ENV === 'production'
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
      {isProd && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gtag.GA_TRACKING_ID}', {
                          page_path: window.location.pathname,
                        });
                      `,
            }}
          />
        </>
      )}
      <DefaultSeo {...SEO} />
      <NextNprogress color="rgba(255,255,255,0.5)" height={2} />
      <Component {...pageProps} />
    </MyThemeProvider>
  )
}

export default CustomApp
