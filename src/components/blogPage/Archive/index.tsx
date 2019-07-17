import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import styles from './index.module.scss'

function Archive({ history }: RouteComponentProps) {
  const onClick = () => {
    history.push('/archive')
  }
  return (
    <div className={styles.archive} onClick={() => {onClick()}}>
      <span className={styles.title}>归档</span>
    </div>
  )
}

export default withRouter(Archive)