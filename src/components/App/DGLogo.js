// next components
import Image from 'next/image'

export const DGLogo = ({ width, height }) => {
  const logo = '/images/logo.png'
  return <Image src={logo} width={width} height={height} alt="DUELGROUP" />
}
