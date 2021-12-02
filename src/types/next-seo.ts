interface Image {
  url: string
  alt?: string
  type: string
}

export type Seo = {
  title?: string | undefined
  description?: string
  images?: Image[]
}
