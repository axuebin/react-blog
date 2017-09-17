import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './articlelist';
import ArticlePaging from './articlepaging';
import '../../../css/blog/articlearea.css';

const ArticleBanner = () => (
  <div className="blog-article-banner">
    <h2>欢迎来到我的博客，请指教 ~</h2>
    <p>找工作呀找工作呀 ~</p>
  </div>
);

export default class ArticleArea extends React.Component {
  render() {
    return (
      <div className="archive-list-area">
        <ArticleBanner />
        <ArticleList issues={this.props.issues} />
        <ArticlePaging />
      </div>
    );
  }
}

ArticleArea.defaultProps = {
  issues: null,
};

ArticleArea.propTypes = {
  issues: PropTypes.array,
};
