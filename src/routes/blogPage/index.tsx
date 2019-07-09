import * as React from 'react'
import ArticleList from '../../components/blogPage/ArticleList'
import './index.scss'

function BlogPage() {
  return (
    <div className="blog-page">
      <div className="container">
        <div className="left">
          <ArticleList></ArticleList>
        </div>
        <div className="right">
        1
        </div>
      </div>
    </div>
  );
}

export default BlogPage;