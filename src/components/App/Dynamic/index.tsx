// next
import dynamic from 'next/dynamic'
// local components
import ExtLink from 'components/App/Dynamic/ext-link'

const components = {
  // default tags
  ol: 'ol',
  ul: 'ul',
  li: 'li',
  p: 'p',
  blockquote: 'blockquote',
  a: ExtLink,

  Code: dynamic(() => import('components/App/Dynamic/code')),
  Counter: dynamic(() => import('components/App/Dynamic/counter')),
  Equation: dynamic(() => import('components/App/Dynamic/equation')),
  Table: dynamic(() => import('components/App/Dynamic/table')),
}

export default components
