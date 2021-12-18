import type { Seo } from 'layouts/types/next-seo'

export type LayoutProps = {
  seo?: Seo
  headerPosition?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
  children: any
}
