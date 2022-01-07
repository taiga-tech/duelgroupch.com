// react
import React, { CSSProperties, useEffect } from 'react'
// mui components
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
// import Stack from '@mui/material/Stack'
// import Chip from '@mui/material/Chip'
// others
import ReactJSXParser from '@zeit/react-jsx-parser'
// local lib
import { textBlock } from 'lib/notion/renderers'
// import { getDateStr } from 'lib/notion/notionHelpers'
// local components
import { Wrapper } from 'components/Wrapper'
import components from 'components/App/Dynamic'
import notionComponents from 'components/notion'

const listTypes = new Set(['bulleted_list', 'numbered_list'])
const tabeleTypes = new Set(['table', 'table_row'])

const SlugWrapper = ({ seo, post, preview }) => {
  // DEBUG: console.log
  // console.log('post', post)

  // const tags = post.Tags && post.Tags.split(',').map((tag) => tag.trim())
  let listTagName: string | null = null
  let listLastId: string | null = null
  let listMap: {
    [id: string]: {
      key: string
      isNested?: boolean
      nested: string[]
      children: React.ReactFragment
    }
  } = {}
  let tableMap: {
    [id: string]: {
      rows: { [key: string]: string[] }[]
      columnOrder: string[]
      format: object
    }
  } = {}

  // FIXME: change to static tweet embeds App
  useEffect(() => {
    const twitterSrc = 'https://platform.twitter.com/widgets.js'
    // make sure to initialize any new widgets loading on
    // client navigation
    if (post && post.hasTweet) {
      if ((window as any)?.twttr?.widgets) {
        ;(window as any).twttr.widgets.load()
      } else if (!document.querySelector(`script[src="${twitterSrc}"]`)) {
        const script = document.createElement('script')
        script.async = true
        script.src = twitterSrc
        document.querySelector('body').appendChild(script)
      }
    }
  }, [post])

  return (
    <Wrapper seo={seo} maxWidth="md">
      <Box className="post" sx={{ pb: 3 }}>
        {preview && <notionComponents.Preview post={post} />}
        {/* <Box component="h1" sx={{ margin: 0 }}>
            {post.Page || ''}
          </Box>
          {post.Tags && (
            <Stack direction="row" spacing={1}>
              {tags.map((tag, i) => (
                <Chip key={i} label={tag} size="small" />
              ))}
            </Stack>
          )}
          {post.Authors.length > 0 && (
            <Box className="authors">By: {post.Authors.join(' ')}</Box>
          )}
          {post.Date && (
            <Box className="posted">Posted: {getDateStr(post.Date)}</Box>
          )}

          <Divider sx={{ mt: 1, mb: 2 }} /> */}

        {(!post.content || post.content.length === 0) && (
          <p>This post has no content</p>
        )}

        {(post.content || []).map((block, blockIdx) => {
          const { value } = block
          const { type, properties, id, parent_id, format } = value
          const isLast = blockIdx === post.content.length - 1
          const isList = listTypes.has(type)
          const isTable = tabeleTypes.has(type)
          let toRender = []
          let tableId = ''
          if (type === 'table') {
            tableId = id
            tableMap['tableId-' + tableId] = {
              rows: [],
              columnOrder: format.table_block_column_order,
              format: format,
            }
          }

          if (isTable) {
            const { properties = null, parent_id = '' } = value

            if (type === 'table_row') {
              tableMap['tableId-' + parent_id].rows.push(
                properties && properties
              )
            }

            if (type === 'table') {
              toRender.push(
                <components.Table
                  key={id}
                  tableId={'tableId-' + id}
                  tableMap={tableMap}
                />
              )
            }
          }

          if (isList) {
            listTagName = components[type === 'bulleted_list' ? 'ul' : 'ol']
            listLastId = `list${id}`

            listMap[id] = {
              key: id,
              nested: [],
              children: textBlock(properties.title, true, id),
            }

            if (listMap[parent_id]) {
              listMap[id].isNested = true
              listMap[parent_id].nested.push(id)
            }
          }

          if (listTagName && (isLast || !isList)) {
            toRender.push(
              React.createElement(
                listTagName,
                { key: listLastId! },
                Object.keys(listMap).map((itemId) => {
                  if (listMap[itemId].isNested) return null

                  const createEl = (item) =>
                    React.createElement(
                      components.li || 'ul',
                      { key: item.key },
                      item.children,
                      item.nested.length > 0
                        ? React.createElement(
                            components.ul || 'ul',
                            { key: item + 'sub-list' },
                            item.nested.map((nestedId) =>
                              createEl(listMap[nestedId])
                            )
                          )
                        : null
                    )
                  return createEl(listMap[itemId])
                })
              )
            )
            listMap = {}
            listLastId = null
            listTagName = null
          }

          const renderHeading = (Type: string | React.ComponentType) => {
            toRender.push(
              <notionComponents.Heading key={id}>
                <Type key={id}>{textBlock(properties.title, true, id)}</Type>
              </notionComponents.Heading>
            )
          }

          switch (type) {
            case 'page':
              break
            case 'divider':
              toRender.push(<Divider key={id} sx={{ my: 2 }} />)
              break
            case 'text':
              if (properties) {
                toRender.push(textBlock(properties.title, false, id))
              } else toRender.push(<br key={id} />)
              break
            case 'image':
            case 'video':
            case 'embed': {
              const { format = {} } = value
              const {
                block_width,
                block_height,
                display_source,
                block_aspect_ratio,
              } = format
              const baseBlockWidth = 768
              const roundFactor = Math.pow(10, 2)
              // calculate percentages
              const width = block_width
                ? `${
                    Math.round(
                      (block_width / baseBlockWidth) * 100 * roundFactor
                    ) / roundFactor
                  }%`
                : block_height || '100%'

              const isImage = type === 'image'
              const Comp = isImage ? 'img' : 'video'
              const useWrapper = block_aspect_ratio && !block_height
              const childStyle: CSSProperties = useWrapper
                ? {
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    position: 'absolute',
                    top: 0,
                  }
                : {
                    width,
                    border: 'none',
                    height: block_height,
                    display: 'block',
                    maxWidth: '100%',
                    margin: '2rem auto',
                    boxShadow: '0 8px 8px rgba(0, 0, 0, 0.3)',
                  }

              let child = null
              if (!isImage && !value.file_ids) {
                // external resource use iframe
                child = (
                  <Box
                    component="iframe"
                    style={childStyle}
                    src={display_source}
                    key={!useWrapper ? id : undefined}
                    className={!useWrapper ? 'asset-wrapper' : undefined}
                  />
                )
              } else {
                // notion resource
                child = (
                  <Comp
                    className="asset-wrapper"
                    key={!useWrapper ? id : undefined}
                    src={`/api/asset?assetUrl=${encodeURIComponent(
                      display_source as any
                    )}&blockId=${id}`}
                    controls={!isImage}
                    alt={`An ${isImage ? 'image' : 'video'} from Notion`}
                    loop={!isImage}
                    muted={!isImage}
                    autoPlay={!isImage}
                    style={childStyle}
                  />
                )
              }

              toRender.push(
                useWrapper ? (
                  <Box
                    style={{
                      paddingTop: `${Math.round(block_aspect_ratio * 100)}%`,
                      position: 'relative',
                    }}
                    className="asset-wrapper"
                    key={id}
                  >
                    {child}
                  </Box>
                ) : (
                  child
                )
              )
              break
            }
            // TODO: Add heading table of contents { toc: [{ title: string, href: hash, index: num }] }
            case 'header':
              renderHeading('h1')
              break
            case 'sub_header':
              renderHeading('h2')
              break
            case 'sub_sub_header':
              renderHeading('h3')
              break
            case 'bookmark':
              const { link, title, description } = properties
              const { format = {} } = value
              toRender.push(
                <components.Bookmark
                  key={id}
                  link={link}
                  title={title}
                  description={description}
                  format={format}
                />
              )
              break
            case 'code': {
              if (properties.title) {
                const content = properties.title[0][0]
                const language = properties.language[0][0]

                if (language === 'LiveScript') {
                  // this requires the DOM for now
                  toRender.push(
                    <ReactJSXParser
                      key={id}
                      jsx={content}
                      components={components}
                      componentsOnly={false}
                      renderInpost={false}
                      allowUnknownElements={true}
                      blacklistedTags={['script', 'style']}
                    />
                  )
                } else {
                  toRender.push(
                    <components.Code key={id} language={language || ''}>
                      {content}
                    </components.Code>
                  )
                }
              }
              break
            }
            case 'quote': {
              if (properties.title) {
                toRender.push(
                  React.createElement(
                    components.blockquote,
                    { key: id },
                    properties.title
                  )
                )
              }
              break
            }
            case 'callout': {
              toRender.push(
                <notionComponents.Callout
                  key={id}
                  id={id}
                  value={value}
                  properties={properties}
                />
              )
              break
            }
            case 'tweet': {
              if (properties.html) {
                // use static tweet component

                toRender.push(
                  // <div>{properties.source[0][0]}</div>
                  <Box
                    key={id}
                    dangerouslySetInnerHTML={{ __html: properties.html }}
                    sx={{
                      '.twitter-tweet': {
                        margin: '2rem auto',
                        textAlign: 'center',
                      },
                    }}
                  />
                )
              }
              break
            }
            case 'equation': {
              if (properties && properties.title) {
                const content = properties.title[0][0]
                toRender.push(
                  <components.Equation key={id} displayMode={true}>
                    {content}
                  </components.Equation>
                )
              }
              break
            }
            case 'collection_view': {
              console.warn('unknown type', type)
              break
            }
            default:
              if (
                process.env.NODE_ENV !== 'production' &&
                !listTypes.has(type)
              ) {
                console.warn('unknown type', type)
              }
              break
          }
          return toRender
        })}
      </Box>
    </Wrapper>
  )
}

export default SlugWrapper
