import * as React from 'react'
import styles from './index.module.scss'

function Tip() {
  return (
    <div className={styles.tip}>
      <div className={styles.container}>
        <div className={styles.title}>
          听...
        </div>
        <div className={styles.content}>
          海哭的声音...
        </div>
      </div>
    </div>
  )
}

export default Tip