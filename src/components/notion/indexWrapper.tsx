// next
import Link from 'next/link'
// mui components
import MuiLink from '@mui/material/Link'
import Box from '@mui/material/Box'
// local lib
import { capitalize, getPageLink, getDateStr } from 'lib/notion/notionHelpers'
import { textBlock } from 'lib/notion/renderers'
// local components
import { MainLayout } from 'layouts/main'
import Preview from 'components/notion/preview'

const IndexWrapper = ({ seo, posts = [], preview }) => {
  return (
    <MainLayout seo={seo}>
      <Box sx={{ pt: 3, pb: 10 }}>
        {preview && <Preview />}
        <Box sx={{ padding: '0 5%' }}>
          <Box
            component="h1"
            sx={{ textAlign: 'center', marginBottom: '50px' }}
          >
            {capitalize(seo.page)}
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
                    // href={`/${post.Params}/[slug]`}
                    href={getPageLink(post.Params, post.Slug)}
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

export default IndexWrapper
