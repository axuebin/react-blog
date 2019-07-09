import React from 'react';
import Menu from '../Menu';
import { MenuItem as MenuItemInterface } from '../interfaces';
import './index.scss';

interface IState {
  menuList: MenuItemInterface[]
}
interface IProps {}
class Header extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      menuList: [{
        id: '', name: '首页'
      }, {
        id: 'blog', name: '文章'
      }, {
        id: 'photography', name: '照片'
      }, {
        id: 'about', name: '关于我'
      }],
    }
  }
  render() {
    const menuList = this.state.menuList
    return (
      <div className="header">
        <div className="logo">
          <span className="title">axuebin</span>
        </div>
        <div className="menu">
          <Menu menuList={menuList}></Menu>
        </div>
        <div className="github">
          <span className="name">Github</span>
        </div>
      </div>
    );
  }
}

export default Header;
