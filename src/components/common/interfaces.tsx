export interface MenuItem {
  id: string
  icon?: string
  name: string
  index?: number
  active?: boolean
  setActiveIndex?: Function
  history?: any
}

export interface MenuList {
  menuList: MenuItem[]
}
