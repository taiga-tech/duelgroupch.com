// node
import fetch from 'node-fetch'
// react
import React, { useEffect } from 'react'
// next
import { useRouter } from 'next/router'
// mui components
import Container from '@mui/material/Container'
// local lib
import getPageData from 'lib/notion/getPageData'
import getPageIndex from 'lib/notion/getPageIndex'
import getNotionUsers from 'lib/notion/getNotionUsers'
import { getPageLink } from 'lib/notion/notionHelpers'
// local components
import SlugWrapper from 'components/notion/slugWrapper'
import notionComponents from 'components/notion'

const Slug = ({ post, redirect, preview }) => {
  const router = useRouter()
  // console.log('post', post)

  const defaultOgpImage = [
    { url: 'https://www.duelgroupch.com/images/logo.png', type: 'image/png' },
  ]
  const seo = {
    page: post.Page,
    description:
      post.preview || post.preview.length !== 0
        ? (post.preview || []).map((block, idx) => block).join(' ')
        : null,
    images: post.Image
      ? [{ url: post.Image, type: 'image/jpeg' }]
      : defaultOgpImage,
  }

  useEffect(() => {
    if (redirect && !post) {
      router.replace(redirect)
    }
  }, [router, redirect, post])

  if (router.isFallback) {
    return <notionComponents.ArticleSkelton />
  }

  if (!post) {
    return (
      <Container maxWidth="md" sx={{ p: '5%' }}>
        <p>
          {
            "Woops! didn't find that post, redirecting you back to the blog index"
          }
        </p>
      </Container>
    )
  }
  return <SlugWrapper seo={seo} post={post} preview={preview} />
}

export const getStaticProps = async ({ params: { notion, slug }, preview }) => {
  const postsTable = await getPageIndex()
  const post = postsTable[slug]

  if (!post || (post.Published !== 'Yes' && !preview)) {
    console.log(`Failed to find post for slug: ${slug}`)
    return {
      props: {
        redirect: '/blog',
        preview: false,
      },
      unstable_revalidate: 5,
    }
  }
  const postData = await getPageData(post.id)
  post.content = postData.blocks

  for (let i = 0; i < postData.blocks.length; i++) {
    const { value } = postData.blocks[i]
    const { type, properties } = value
    if (type == 'tweet') {
      const src = properties.source[0][0]
      const tweetId = src.split('/')[5].split('?')[0]
      if (!tweetId) continue
      try {
        const res = await fetch(
          `https://api.twitter.com/1/statuses/oembed.json?id=${tweetId}`
        )
        const json = await res.json()
        properties.html = json.html.split('<script')[0]
        post.hasTweet = true
      } catch (_) {
        console.log(`Failed to get tweet embed for ${src}`)
      }
    }
  }

  const { users } = await getNotionUsers(post.Authors || [])
  post.Authors = Object.keys(users).map((id) => users[id].full_name)

  return {
    props: {
      post,
      preview: preview || false,
    },
    revalidate: 10,
  }
}

export const getStaticPaths = async (context) => {
  const postsTable = await getPageIndex()

  return {
    paths: Object.keys(postsTable)
      .filter((post) => postsTable[post].Published === 'Yes')
      .map((slug) => getPageLink(postsTable[slug].Params, slug)),
    fallback: true,
  }
}

export default Slug
