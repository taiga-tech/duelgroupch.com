import { Image } from 'react-konva'

export const UrlImage = ({ opt }: { opt: any }) => {
  const image = new window.Image()
  image.src = opt.url
  return (
    <Image
      image={image}
      x={opt.x}
      y={opt.y}
      width={opt.w}
      height={opt.h}
      alt={opt.alt}
    />
  )
}
