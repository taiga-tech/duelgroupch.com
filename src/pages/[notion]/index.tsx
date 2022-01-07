// local lib
import { capitalize, getParam, postIsPublished } from 'lib/notion/notionHelpers'
import getNotionUsers from 'lib/notion/getNotionUsers'
import getPageIndex from 'lib/notion/getPageIndex'
// local components
import IndexWrapper from 'components/notion/indexWrapper'

const NotionIndex = ({ title, posts, preview }) => {
  const seo = { page: capitalize(title) }
  return <IndexWrapper seo={seo} posts={posts} preview={preview} />
}

export const getStaticProps = async ({ params: { notion }, preview }) => {
  const postsTable = await getPageIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug]
      if (post.Params !== notion) return null
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
      title: notion,
    },
    revalidate: 10,
  }
}

export const getStaticPaths = async () => {
  const postsTable = await getPageIndex()
  const paths = Object.keys(postsTable)
    .map((post) => getParam(postsTable[post].Params))
    .filter((x, i, self) => {
      return self.indexOf(x) === i
    })

  return {
    paths: paths,
    fallback: true,
  }
}

export default NotionIndex
