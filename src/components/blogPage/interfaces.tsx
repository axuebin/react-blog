export interface ArticleItem {
  id: number
  title: string
  content: string
  author: string
  createDate: string
  category: string
  tags: string[]
  banner?: string
  history?: any
}

export interface Tag {
  id: number
  name: string
}