import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './articlelistitem';
import { COLOR_LABEL_CATEGORY } from '../../constants/config';

export default class ArticleList extends React.Component {
  constructor() {
    super();
    this.getCategoryData = this.getCategoryData.bind(this);
  }
  getCategoryData(issues) {
    const len = issues.length;
    let name = '';
    const articles = {};
    for (let i = 0; i < len; i += 1) {
      const labels = issues[i].labels;
      for (let j = 0; j < labels.length; j += 1) {
        if (labels[j].color === COLOR_LABEL_CATEGORY) {
          const category = labels[j].name;
          if (name !== category) {
            if (!articles[category]) {
              articles[category] = [];
            }
            name = category;
          }
          articles[category].push(issues[i]);
        }
      }
    }
    return articles;
  }
  render() {
    if (!this.props.issues) {
      return null;
    }
    const articles = this.getCategoryData(this.props.issues);
    const articleList = [];
    Object.keys(articles).forEach((key) => {
      if (Object.prototype.toString.call(articles[key]) === '[object Array]') {
        articleList.push(<ArticleListItem key={key} category={key} items={articles[key]} />);
      }
    });
    return (
      <div className="archive-list-area">
        <div className="archive-list">
          {articleList}
        </div>
      </div>
    );
  }
}

ArticleList.defaultProps = {
  issues: null,
};

ArticleList.propTypes = {
  issues: PropTypes.array,
};
