// Plan.js
import React from 'react'
import styles from './Plan.module.css'

function Plan ({name}) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.grid}>

          <h4>{name}</h4>
        </div>

      </div>
    </div>
  )
}

export default Plan
