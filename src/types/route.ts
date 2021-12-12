import type { OverridableComponent } from '@mui/types'
import type { SvgIconTypeMap } from '@mui/material'

export interface RouteObj {
  title: string
  to: string
  icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string
  }
  [key: string]: any
}

export type RouteType = {
  [key: string]: RouteObj
}
