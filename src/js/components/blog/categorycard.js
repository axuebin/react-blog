import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../../css/blog/rightsider.css';

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
        if (label.color === 'd93f0b') {
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
    const categoryLinkList = categoryList.map(item => <Link to={`/blog/${item.url}`}><li key={item.id}>{item.name}<span>{item.sum}</span></li></Link>).reverse();
    this.setState({ categoryLinkList });
  }
  render() {
    return (
      <div className="blog-rightsider-categorycard">
        <div className="blog-rightsider-categorycard-title">分类</div>
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
