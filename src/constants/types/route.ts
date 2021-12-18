export interface RouteObj {
  title?: string
  to?: string
  icon?: any
  [key: string]: any
}

export type RouteType = {
  [key: string]: RouteObj
}
