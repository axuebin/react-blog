import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { MenuItem as MenuItemInterface } from '../interfaces'
import './index.scss'

const MenuItem = ({ id, name, active, index, setActiveIndex, history }: MenuItemInterface) => {
  const onClickItem = (index: number | undefined) => {
    setActiveIndex && setActiveIndex(index)
    history.push(`/${id}`)
  }
  return <div className={`menu-item ${active ? 'menu-item-active' : ''}`} onClick={() => {onClickItem(index)}}>
    <span className="name">{name}</span>
  </div>
}

interface State {
  activeIndex: number
}
interface Props extends RouteComponentProps {
  menuList: MenuItemInterface[]
}
class Menu extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      activeIndex: 0,
    }
  }
  componentDidMount() {
    const { menuList, location } = this.props
    const route = location.pathname
    if (route) {
      const index = menuList.findIndex(item => item.id === route.replace(/\//g, ''))
      this.setState({
        activeIndex: index,
      })
    }
  }
  render() {
    const { activeIndex } = this.state
    const { menuList, history } = this.props
    const setActiveIndex = (index: number) => {
      this.setState({
        activeIndex: index
      })
    }
    return (
      <div className="menu">
        {
          menuList.map((menu: MenuItemInterface, index) => (
            <MenuItem key={menu.id}
              id={menu.id}
              name={menu.name}
              index={index}
              history={history}
              setActiveIndex={(index: number) => setActiveIndex(index)}
              active={activeIndex === index}></MenuItem>
          ))
        }
      </div>
    )
  }
}
export default withRouter(Menu)
