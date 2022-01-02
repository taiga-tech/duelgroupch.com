// next
import Link from 'next/link'
// mui components
import Box from '@mui/material/Box'

const Preview = ({ post }: { post?: any }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        border: '1px solid #eaeaea',
        width: '400px',
        p: '16px',
        borderRadius: '5px',
      }}
    >
      <b>Note:</b>
      {` `}Viewing in preview mode{' '}
      <Link
        href={
          post ? `/api/clear-preview?slug=${post.Slug}` : '/api/clear-preview'
        }
        passHref
      >
        <Box
          component="button"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            backgroundColor: 'black',
            color: 'white',
            p: '10px',
            height: '24px',
            borderRadius: '5px',
            transition: 'all 0.2s ease 0s',
            ['&:hover']: {
              backgroundColor: 'white',
              color: 'black',
              border: 'none',
              cursor: 'pointer',
            },
          }}
        >
          Exit Preview
        </Box>
      </Link>
    </Box>
  </Box>
)

export default Preview
