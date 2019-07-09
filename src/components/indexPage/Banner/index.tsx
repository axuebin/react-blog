import * as React from 'react'
import styles from './index.module.scss'
import banner from '../../../static/image/index-banner.png'

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.photos}>
        <div className={styles.list}>
          <div className={styles.item}>
            <img src={banner} className={styles.image}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner