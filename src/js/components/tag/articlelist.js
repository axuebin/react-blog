import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './articlelistitem';
import { COLOR_BLOG_CATEGORY, COLOR_LABEL_CATEGORY } from '../../constants/config';

export default class ArticleList extends React.Component {
  constructor() {
    super();
    this.getTagData = this.getTagData.bind(this);
  }
  getTagData(issues) {
    const len = issues.length;
    let name = '';
    const articles = {};
    for (let i = 0; i < len; i += 1) {
      const labels = issues[i].labels;
      for (let j = 0; j < labels.length; j += 1) {
        if (labels[j].color !== COLOR_BLOG_CATEGORY && labels[j].color !== COLOR_LABEL_CATEGORY) {
          const tag = labels[j].name;
          if (name !== tag) {
            if (!articles[tag]) {
              articles[tag] = [];
            }
            name = tag;
          }
          articles[tag].push(issues[i]);
        }
      }
    }
    return articles;
  }
  render() {
    if (!this.props.issues) {
      return null;
    }
    const articles = this.getTagData(this.props.issues);
    const articleList = [];
    Object.keys(articles).forEach((key) => {
      if (Object.prototype.toString.call(articles[key]) === '[object Array]') {
        articleList.push(<ArticleListItem key={key} tag={key} items={articles[key]} />);
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
