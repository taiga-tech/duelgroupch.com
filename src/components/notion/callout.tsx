// type
// import { notionPalette } from 'lib/types/notionPalette'
// mui components
import Box from '@mui/material/Box'
// notion components
import { textBlock } from 'lib/notion/renderers'

const Callout = ({ id, value, properties }) => {
  return (
    <Box
      sx={{
        ml: 1,
        py: 2,
        pr: 2,
        pl: '12px',
        display: 'flex',
        width: '100%',
        borderRadius: '3px',
        background: 'rgba(60, 65, 68, 0.6)',
      }}
      key={id}
    >
      {value.format?.page_icon && <Box>{value.format?.page_icon}</Box>}
      <Box sx={{ ml: 1 }}>{textBlock(properties.title, true, id)}</Box>
    </Box>
  )
}

export default Callout
