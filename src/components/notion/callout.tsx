// type
// import { notionPalette } from 'lib/types/notionPalette'
// mui components
import Box from '@mui/material/Box'
// notion components
import { textBlock } from 'lib/notion/renderers'

const Callout = ({ id, value, properties }) => {
  const isLink = /^(https?|ftp)(:\/\/[\w\/:%#\$&\?\(\)~\.=\+\-]+)/
  let linkIcon: string
  let planeIcon: string
  if (value.format?.page_icon.match(isLink)) {
    linkIcon = value.format?.page_icon
  } else {
    planeIcon = value.format?.page_icon
  }

  return (
    <Box sx={{ my: 1 }}>
      <Box
        key={id}
        sx={{
          py: 2,
          pr: 2,
          pl: '12px',
          width: '100%',
          display: 'flex',
          borderRadius: '3px',
          background: '#202020',
        }}
      >
        {planeIcon && <Box>{planeIcon}</Box>}
        {linkIcon && (
          /* eslint @next/next/no-img-element: off */
          <img
            src={`/api/asset?assetUrl=${encodeURIComponent(
              linkIcon as any
            )}&blockId=${id}`}
            alt="callout-icon"
            style={{
              width: 21.312,
              height: 21.312,
              borderRadius: 3,
              display: 'block',
              objectFit: 'cover',
              transition: 'opacity 100ms ease-out 0s',
            }}
          />
        )}
        <Box sx={{ ml: 1 }}>{textBlock(properties.title, true, id)}</Box>
      </Box>
    </Box>
  )
}

export default Callout
