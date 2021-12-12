// react
import { useEffect } from 'react'
// next
import { useRouter } from 'next/router'
import Script from 'next/script'
// local
import * as gtag from 'lib/gtag'

const Gtag = (): JSX.Element => {
  const isProd: boolean = process.env.NODE_ENV === 'production'
  const GA_TRACKING_ID: string | undefined = gtag.GA_TRACKING_ID
  const router = useRouter()

  useEffect(() => {
    if (!gtag.GA_TRACKING_ID) return

    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {isProd && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}', {
                          page_path: window.location.pathname,
                        });
                      `,
            }}
          />
        </>
      )}
    </>
  )
}

export default Gtag
