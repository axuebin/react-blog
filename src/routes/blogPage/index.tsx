import * as React from 'react'
import ArticleList from '../../components/blogPage/ArticleList'
import Tip from '../../components/blogPage/Tip'
import Archive from '../../components/blogPage/Archive'
import Hot from '../../components/blogPage/Hot'
import Tags from '../../components/blogPage/Tags'
import BackTop from '../../components/common/BackTop'
import styles from './index.module.scss'

function BlogPage() {
  return (
    <div id="blogPage" className={styles.blogPage}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Tip></Tip>
          <ArticleList></ArticleList>
        </div>
        <div className={styles.right}>
          <Archive></Archive>
          <Hot></Hot>
          <Tags></Tags>
        </div>
      </div>
      <BackTop></BackTop>
    </div>
  );
}

export default BlogPage;