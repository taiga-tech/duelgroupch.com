interface Image {
  url: string
  alt?: string
  type: string
}

export type Seo = {
  page?: string | undefined
  description?: string
  images?: Image[]
}
