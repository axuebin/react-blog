import * as React from 'react'
import ArticleList from '../../components/blogPage/ArticleList'
import Tip from '../../components/blogPage/Tip'
import styles from './index.module.scss'

function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Tip></Tip>
          <ArticleList></ArticleList>
        </div>
        <div className={styles.right}>
        1
        </div>
      </div>
    </div>
  );
}

export default BlogPage;