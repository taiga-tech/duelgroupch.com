// next
import dynamic from 'next/dynamic'
// local components
import ExtLink from 'components/App/Dynamic/ext-link'
import { Typography } from '@mui/material'
// import Typography from '@mui/material/Typography'

const components = {
  // default tags
  ol: 'ol',
  ul: 'ul',
  li: 'li',
  p: 'p',
  // p: Typography,
  blockquote: 'blockquote',
  a: ExtLink,
  P: Typography,
  Code: dynamic(() => import('components/App/Dynamic/code')),
  Counter: dynamic(() => import('components/App/Dynamic/counter')),
  Equation: dynamic(() => import('components/App/Dynamic/equation')),
  Table: dynamic(() => import('components/App/Dynamic/table')),
  Bookmark: dynamic(() => import('components/App/Dynamic/bookmark')),
}

export default components
