// types
import type { LayoutProps } from 'layouts/types'
// next modules
import { useRouter } from 'next/router'
// seo
import { NextSeo } from 'next-seo'
// local components
import { Footer } from 'components/App/Footer'
import { Header } from 'components/App/Header'

export const MainLayout = ({ seo, headerPosition, children }: LayoutProps) => {
  const BaseUrl = process.env.BASE_URL
  const router = useRouter()
  const canonical = BaseUrl + router.asPath

  return (
    <>
      <NextSeo
        title={seo && seo.page}
        description={seo && seo.description}
        canonical={canonical}
        openGraph={{ images: seo && seo.images }}
      />
      <Header headerPosition={headerPosition} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
