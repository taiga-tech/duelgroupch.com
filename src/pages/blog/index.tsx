// next
import Link from 'next/link'
// mui components
import MuiLink from '@mui/material/Link'
import Box from '@mui/material/Box'
// local lib
import {
  getPageLink,
  getDateStr,
  postIsPublished,
} from 'lib/notion/notion-helpers'
import { textBlock } from 'lib/notion/renderers'
import getNotionUsers from 'lib/notion/getNotionUsers'
import getPageIndex from 'lib/notion/getPageIndex'
// local components
import { MainLayout } from 'layouts/main'
import Preview from 'components/notion/preview'

const Index = ({ posts = [], preview }) => {
  const seo = { page: 'Blog' }

  return (
    <MainLayout seo={seo}>
      <Box sx={{ pt: 3, pb: 10 }}>
        {preview && <Preview />}
        <Box sx={{ padding: '0 5%' }}>
          <Box
            component="h1"
            sx={{ textAlign: 'center', marginBottom: '50px' }}
          >
            Notion Page
          </Box>
          {posts.length === 0 && (
            <Box component="p" sx={{ textAlign: 'center' }}>
              There are no posts yet
            </Box>
          )}
          {posts.map((post) => (
            <Box
              key={post.Slug}
              sx={{
                maxWidth: '600px',
                m: '10px auto',
                borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
                ':last-child': {
                  borderBottom: 'none',
                },
              }}
            >
              <Box component="h3" sx={{ mb: 0 }}>
                <Box
                  component="span"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}
                >
                  {post.Published !== 'Yes' && (
                    <Box
                      component="span"
                      sx={{
                        borderRadius: '16px',
                        backgroundColor: 'black',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: '200',
                        p: '2px 7px',
                        mr: '6px',
                      }}
                    >
                      Draft
                    </Box>
                  )}
                  <Link
                    href="/blog/[slug]"
                    as={getPageLink(post.Params, post.Slug)}
                    passHref
                  >
                    <MuiLink>{post.Page}</MuiLink>
                  </Link>
                </Box>
              </Box>
              {post.Authors.length > 0 && (
                <Box>By: {post.Authors.join(' ')}</Box>
              )}
              {post.Date && <Box>Posted: {getDateStr(post.Date)}</Box>}
              <p>
                {(!post.preview || post.preview.length === 0) &&
                  'No preview available'}
                {(post.preview || []).map((block, idx) =>
                  textBlock(block, true, `${post.Slug}${idx}`)
                )}
              </p>
            </Box>
          ))}
        </Box>
      </Box>
    </MainLayout>
  )
}

export const getStaticProps = async ({ preview }) => {
  const postsTable = await getPageIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug]
      if (post.Params !== 'blog') return null

      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map((post) => {
    post.Authors = post.Authors.map((id) => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  }
}

export default Index
