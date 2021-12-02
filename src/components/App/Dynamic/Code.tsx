import { ReactNode } from 'react'
import Box from '@mui/material/Box'

export const Code = ({ children }: { children: any }) => {
  return (
    <Box component="pre" sx={{ tabSize: 4 }}>
      <Box
        component="code"
        sx={{
          overflow: 'auto',
          display: 'block',
          padding: '0.8rem',
          lineHeight: 1.5,
          background: '#111b27',
          fontSize: '0.75rem',
          borderRadius: '0.5rem',
          maxHeight: 500,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
