import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import '../../../css/blog/rightsider.css';

const COLOR_LABEL_CATEGORY = 'd93f0b';

export default class CategoryCard extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryLinkList: null,
    };
  }
  componentWillMount() {
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

    const categoryLinkList = categoryList.sort((a, b) => b.sum - a.sum).map(item => <Link key={item.id} to={`/blog/type/${item.url}`}><li key={item.id}>{item.name}<span>{item.sum}</span></li></Link>);
    this.setState({ categoryLinkList });
  }
  render() {
    return (
      <div className="blog-rightsider-categorycard">
        <div className="blog-rightsider-categorycard-title"><Icon type="bars" /> 分类</div>
        <div className="blog-rightsider-categorycard-content">
          <ul>
            {this.state.categoryLinkList}
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
