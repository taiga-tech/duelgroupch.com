// prism
import Prism from 'lib/prism'
// mui components
import Box from '@mui/material/Box'

const Code = ({ children, language }: { children: any; language: string }) => {
  return (
    <Box component="pre" sx={{ p: 1 }}>
      <Box
        component="code"
        sx={{
          overflow: 'auto',
          display: 'block',
          p: 3,
          lineHeight: 1.5,
          // background: '#111b27',
          background: '#202020',
          fontSize: 14,
          borderRadius: '0.5rem',
          // maxHeight: 500,
          tabSize: 2,
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          // fontFamily: '"Lucida Console", Courier, monospace',
        }}
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            children,
            Prism.languages[language.toLowerCase()] ||
              Prism.languages.javascript
          ),
        }}
      />
    </Box>
  )
}

export default Code
