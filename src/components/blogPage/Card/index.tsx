import React, { ReactNode } from 'react'
import styles from './index.module.scss'

interface Props {
  title?: string
  children?: ReactNode
}

function Card({ title, children }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.container}>
        {
          children
        }
      </div>
    </div>
  )
}

export default Card