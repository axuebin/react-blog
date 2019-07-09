import * as React from 'react'
import './index.scss'

const ArticleItem = ({ article, history  }: any) => {
  const { id, title, banner, content, createDate, author, category, tags = [] } = article
  const onClickItem = () => {
    console.log(id)
  }
  return <div className="article-item" onClick={() => {onClickItem()}}>
    <div className="article-item-container">
      <div className="title">{title}</div>
      <div className="info">
        <span className="date">{createDate}</span>
        <span className="author">{author}</span>
        <span className="category">{category}</span>
      </div>
      {
        banner ? <div className="banner">
          <img className="banner-image" src={banner}></img>
        </div> : ''
      }
      <div className="content">
        <p className="content-text">{content}</p>
      </div>
      <div className="bottom">
        <span className="bottom-more">阅读全文</span>
        <div className="bottom-tags">
          {
            tags.map((tag: string, index: number) => (
              <span key={index} className="tag">{tag}</span>
            ))
          }
        </div>
      </div>
    </div>
  </div>
};

export default ArticleItem;