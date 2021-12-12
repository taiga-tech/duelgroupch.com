import type { SxProps, Theme } from '@mui/material/styles'

export interface SocialObj {
  title: string
  href: string
  icon: any
  sx?: SxProps<Theme> | null
}

export type SocialsType = {
  [key: string]: SocialObj
}
