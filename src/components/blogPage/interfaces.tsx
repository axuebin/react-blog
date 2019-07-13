export interface ArticleItem {
  _id: string
  title: string
  content?: string
  author: string
  createdDate: string
  category: string
  tags: string[]
  banner?: string
  history?: any
  desc: string
  pv?: number
}

// export interface Tag {
//   id: number
//   name: string
// }

export interface Category {
  category: string
  count: number
}

export interface ArchiveItem {
  _id: string
  title: string
  createdDate: string
}