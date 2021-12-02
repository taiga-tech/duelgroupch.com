import { useState, useRef, useEffect } from 'react'
// konva
import { Stage, Layer, Rect, Text } from 'react-konva'
import { UrlImage } from 'components/Canvas/UrlImage'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { downloadURI } from 'lib/downloadURI'
import { Code } from 'components/App/Dynamic/Code'

const config = {
  default: {
    width: 900,
    height: 1200,
    layout: {
      name: {
        x: 0,
        y: 0,
        width: 900,
        height: 100,
        textAlign: 'center',
        textBaseline: 'middle',
        fontStyle: 'bold 64px serif',
        fontColor: '#fff',
      },
    },
  },
  ogp: {
    width: 1200,
    height: 630,
    Layout: {},
  },
}

export const ProfileCanv = ({
  display,
  opt,
}: {
  display: string
  opt: object
}) => {
  const stageRef = useRef(null)
  const [stage, setStage] = useState<any | null>(null)

  useEffect(() => {
    setStage(stageRef.current)
  }, [])

  const handleExport = () => {
    // if (!stage) return false
    const type = 'image/png'
    const fileName = 'download'
    const uri = stage.toDataURL({ mimeType: type, pixelRatio: 2 })
    console.log(stage.toJSON())
    downloadURI({ uri, fileName, type })
  }

  const width = Math.round(
    display === 'ogp' ? config.ogp.width : config.default.width
  )
  const height = Math.round(
    display === 'ogp' ? config.ogp.height : config.default.height
  )

  const parser = () => {
    if (!stage) return false
    return JSON.stringify(JSON.parse(stage.toJSON()), null, '\t')
  }

  return (
    <Box>
      <Button onClick={handleExport}>Save</Button>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Stage ref={stageRef} width={width} height={height}>
            <Layer>
              <Rect fill="#13151e" x={0} y={0} width={width} height={height} />
              <UrlImage
                opt={{
                  url: '/images/logo.png',
                  alt: 'logo',
                  x: width - 70,
                  y: height - 70,
                  w: 50,
                  h: 50,
                }}
              />
            </Layer>

            <Layer>
              <Rect fill="red" x={100} y={100} width={300} height={200} />
              <Text
                text="Name"
                x={100}
                y={100}
                fill="white"
                fontSize={30}
                fontStyle="bold"
              />
            </Layer>
          </Stage>
        </Box>
        <Box>
          <Code>{parser()}</Code>
        </Box>
      </Box>
    </Box>
  )
}
