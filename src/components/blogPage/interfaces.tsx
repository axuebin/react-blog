export interface ArticleItem {
  _id: string
  title: string
  content?: string
  author: string
  createDate: string
  category: string
  tags: string[]
  banner?: string
  history?: any
  desc: string
}

// export interface Tag {
//   id: number
//   name: string
// }

export interface Category {
  category: string
  count: number
}