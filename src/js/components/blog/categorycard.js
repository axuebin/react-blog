import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { COLOR_LABEL_CATEGORY } from '../../constants/config';

export default class CategoryCard extends React.Component {
  render() {
    const categoryList = [];
    const categoryHash = {};
    const issues = this.props.issues;
    // 类别去重计数（待优化）
    for (let i = 0; i < issues.length; i += 1) {
      for (let j = 0; j < issues[i].labels.length; j += 1) {
        const label = issues[i].labels[j];
        if (label.color === COLOR_LABEL_CATEGORY) {
          const id = label.id;
          const name = label.name;
          if (categoryHash[name] === undefined) {
            categoryHash[name] = true;
            const categoryTemp = { id, name, url: encodeURI(name), sum: 1 };
            categoryList.push(categoryTemp);
          } else {
            for (let k = 0; k < categoryList.length; k += 1) {
              if (categoryList[k].name === name) {
                categoryList[k].sum += 1;
              }
            }
          }
        }
      }
    }

    const categoryLinkList = categoryList.sort((a, b) => b.sum - a.sum).map(
      item => <Link key={item.id} to={`/blog/category/${item.url}`}><li key={item.id}>{item.name}<span>{item.sum}</span></li></Link>);

    return (
      <div className="rightsider-card">
        <div className="rightsider-card-title"><Icon type="bars" /> 分类</div>
        <div className="rightsider-card-content">
          <ul>
            {categoryLinkList}
          </ul>
        </div>
      </div>
    );
  }
}

CategoryCard.defaultProps = {
  issues: [],
};

CategoryCard.propTypes = {
  issues: PropTypes.array,
};
