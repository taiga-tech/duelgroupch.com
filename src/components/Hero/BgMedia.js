// mui components
import Box from '@mui/material/Box'

export const BgMedia = ({ children, video, poster }) => {
  return (
    <Box style={{ height: '100vh' }}>
      <Box
        component="video"
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          minHeight: '100%',
          minWidth: '100%',
          transform: '.3s',
          userSelect: 'none',
          pointerEvents: 'none',
          objectFit: 'cover',
          fontFamily: 'object-fit: cover',
        }}
        // poster={poster}
        autoPlay
        muted
        loop
        playsInline
        webkitPlaysInline
        preload="metadata"
      >
        <source src={video} />
        <source src={poster} />
        <p>動画を再生するには、videoタグをサポートしたブラウザが必要です。</p>
      </Box>
      {children}
    </Box>
  )
}
