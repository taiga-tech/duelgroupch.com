// next components
import Image from 'next/image'
import logo from '/public/images/logo.png'

const defaultSizes = {
  width: 100,
  height: 100,
}

export const DGLogo = ({ width, height }) => {
  return (
    <Image
      src={logo}
      width={width ? width : defaultSizes.width}
      height={height ? height : defaultSizes.height}
      alt="DUELGROUP"
      loading="lazy"
    />
  )
}
