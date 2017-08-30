import React from 'react';
import ArticleBanner from './articlebanner';
import ArticleList from './articlelist';
import '../../../css/blog/articlearea.css';

export default class ArticleArea extends React.Component {
  render() {
    return (
      <div className="blog-article-area">
        <ArticleBanner />
        <ArticleList />
      </div>
    );
  }
}
