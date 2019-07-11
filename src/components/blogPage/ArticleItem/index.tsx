import * as React from 'react'
import { formatDateStamp } from '../../../lib/utils'
import styles from './index.module.scss'

const ArticleItem = ({ article, history  }: any) => {
  const { _id, title, banner, desc, createdDate, author, category, tags = [], pv } = article
  const onClickItem = () => {
    console.log(_id)
  }
  return <div className={styles.articleItem} onClick={() => {onClickItem()}}>
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.info}>
        <span className={styles.date}>{formatDateStamp(createdDate)}</span>
        <span className={styles.author}>{author}</span>
        <span className={styles.category}>{category}</span>
        <span className={styles.pv}>阅读量：{pv}</span>
      </div>
      {
        banner ? <div className={styles.banner}>
          <img className={styles.image} src={banner}></img>
        </div> : ''
      }
      <div className={styles.desc}>
        <p className={styles.text}>{desc}</p>
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