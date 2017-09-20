import React from 'react';
import PropTypes from 'prop-types';

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      menuList: null,
    };
    this.getMenuList = this.getMenuList.bind(this);
  }
  // 写的有点丑 T T.
  getMenuList(content) {
    // const h2 = content.match(new RegExp('<h2 id="-">([^<]*)</h2>','g')).map(item => getTitleText(item));
    const issues = content;
    const menu = [];
    const patt = /(#+)\s+?(.+)/g;
    let result = null;
    while ((result = patt.exec(issues))) {
      menu.push({ level: result[1].length, title: result[2] });
    }
    const menuObj = [];
    let level2Temp = null;
    let level3Temp = null;
    let level4Temp = null;
    for (let i = 0; i < menu.length; i += 1) {
      if (menu[i].level === 2) {
        level2Temp = {
          id: i,
          level: 2,
          title: menu[i].title,
          children: [],
        };
        menuObj.push(level2Temp);
      } else if (menu[i].level === 3) {
        level3Temp = {
          id: i,
          level: 3,
          title: menu[i].title,
          children: [],
        };
        level2Temp.children.push(level3Temp);
      } else if (menu[i].level === 4) {
        level4Temp = {
          id: i,
          level: 4,
          title: menu[i].title,
        };
        level3Temp.children.push(level4Temp);
      }
    }
    return menuObj.map(level2 => (<li key={level2.id}>{level2.title}
      <ul>
        {level2.children.map(level3 => (<li key={level3.id}>{level3.title}
          <ul>
            {level3.children.map(level4 => (<li key={level4.id}>{level4.title}</li>))}
          </ul>
        </li>))}
      </ul>
    </li>));
  }

  render() {
    const menuList = this.getMenuList(this.props.content);
    return (
      <div className="rightsider">
        <div className="rightsider-card article-navigation">
          <div className="rightsider-card-title">目录</div>
          <div className="article-navigation-content">
            <ul>
              {menuList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Navigation.defaultProps = {
  content: 'content',
};

Navigation.propTypes = {
  content: PropTypes.string,
};
