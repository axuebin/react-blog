import * as React from 'react'
import Banner from '../../components/indexPage/Banner'
import styles from './index.module.scss'

function IndexPage() {
  return (
    <div className={styles.indexPage}>
      <Banner></Banner>
    </div>
  )
}

export default IndexPage