import * as React from 'react'
import styles from './index.module.scss'

const ArticleItem = ({ article, history  }: any) => {
  const { id, title, banner, content, createDate, author, category, tags = [] } = article
  const onClickItem = () => {
    console.log(id)
  }
  return <div className={styles.articleItem} onClick={() => {onClickItem()}}>
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.info}>
        <span className={styles.date}>{createDate}</span>
        <span className={styles.author}>{author}</span>
        <span className={styles.category}>{category}</span>
      </div>
      {
        banner ? <div className={styles.banner}>
          <img className={styles.image} src={banner}></img>
        </div> : ''
      }
      <div className={styles.content}>
        <p className={styles.text}>{content}</p>
      </div>
      <div className={styles.bottom}>
        <span className={styles.more}>阅读全文</span>
        <div className={styles.tags}>
          {
            tags.map((tag: string, index: number) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))
          }
        </div>
      </div>
    </div>
  </div>
};

export default ArticleItem;