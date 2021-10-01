// next modules
import { NextSeo } from 'next-seo'
// local components
import { Footer } from 'components/App/Footer'
import { Header } from 'components/App/Header'

export const MainLayout = ({ seo, headerPosition, children }) => {
  return (
    <>
      <NextSeo
        title={`DUEL GROUP - ${seo.page}`}
        description={seo.description}
        openGraph={{
          title: '',
          url: `https://www.duelgroupch.com/`,
          images: [{ url: '/images/logo.jpg', alt: 'DUEL GROUP' }],
        }}
      />
      <Header headerPosition={headerPosition} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
