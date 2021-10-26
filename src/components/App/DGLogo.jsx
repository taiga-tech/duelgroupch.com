// next components
import Image from 'next/image'

const defaultSizes = {
  width: 100,
  height: 100,
}

export const DGLogo = ({ width, height }) => {
  const logo = '/images/logo.png'
  return (
    <Image
      src={logo}
      width={width ? width : defaultSizes.width}
      height={height ? height : defaultSizes.height}
      alt="DUELGROUP"
      // layout="responsive"
    />
  )
}
