// mui components
import Box from '@mui/material/Box'
// local layout
import { MainLayout } from 'layouts/main'
// local components
import { HeroSection } from 'components/Home/Sections/Hero'
import { NewsSection } from 'components/Home/Sections/News'
import { VideoSection } from 'components/Home/Sections/Video'
// local modules
import { getVideoPageData } from 'lib/getVideoPageData'
import { getNotionApi } from 'lib/getNotionApi'

const Home = ({ id, video, totalPages, news, newsLength }) => (
  <MainLayout headerPosition="fixed">
    <Box
      component="section"
      id="hero"
      sx={{ height: '100vh', scroll: 'hidden' }}
    >
      <HeroSection />
    </Box>
    <Box component="section" id="news" sx={{ mt: 12, mb: 18 }}>
      <NewsSection news={news} newsLength={newsLength} />
    </Box>
    <Box component="section" id="video" sx={{ mt: 12, mb: 18 }}>
      <VideoSection id={id} data={video} totalPages={totalPages} />
    </Box>
    {/* <Box component="section"  id="social" sx={{ mt: 12, mb: 18 }}>
      <SocialSection />
    </Box> */}
  </MainLayout>
)

export const getStaticProps = async () => {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID
  const video = await getVideoPageData()
  const news = await getNotionApi(databaseId, {
    sorts: [{ property: 'TimeStamp', direction: 'descending' }],
    page_size: 5,
  })

  return {
    props: {
      id: 1,
      video: video[0],
      totalPages: video.length,
      news: news.results,
      newsLength: news.results.length,
      fallback: true,
    },
  }
}

export default Home
