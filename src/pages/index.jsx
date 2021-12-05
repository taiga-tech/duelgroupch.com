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

const Home = ({ video, news }) => (
  <MainLayout headerPosition="fixed">
    <Box
      component="section"
      id="hero"
      sx={{ height: '100vh', scroll: 'hidden' }}
    >
      <HeroSection />
    </Box>
    <Box
      component="section"
      id="news"
      sx={{ pt: 12, pb: 18, bgcolor: 'background.secondary' }}
    >
      <NewsSection news={news} />
    </Box>
    <Box component="section" id="video" sx={{ pt: 12, pb: 18 }}>
      <VideoSection video={video} />
    </Box>
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
      video: video[0],
      news: news,
    },
    revalidate: 10,
  }
}

export default Home
