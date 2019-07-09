import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { MenuItem as MenuListInterface } from '../interfaces';
import './index.scss';

const MenuItem = ({ id, name, active, index, setActiveIndex, history }: MenuListInterface) => {
  const onClickItem = (index: number | undefined) => {
    setActiveIndex && setActiveIndex(index);
    history.push(`/${id}`);
  }
  return <div className={`menu-item ${active ? 'menu-item-active' : ''}`} onClick={() => {onClickItem(index)}}>
    <span className="name">{name}</span>
  </div>
};

interface IState {
  activeIndex: number
}
interface IProps extends RouteComponentProps {
  menuList: MenuListInterface[]
}
class Menu extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      activeIndex: 0,
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
          menuList.map((menu: MenuListInterface, index) => (
            <MenuItem key={menu.id}
              id={menu.id}
              name={menu.name}
              index={index}
              history={history}
              setActiveIndex={(index: number) => setActiveIndex(index)}
              active={activeIndex === index}></MenuItem>
            )
          )
        }
      </div>
    )
  }
}
export default withRouter(Menu);
