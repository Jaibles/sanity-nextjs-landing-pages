// Feature.js
import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import styles from './Feature.module.css'

const builder = imageUrlBuilder(client)

function Feature ({title, body, icon}) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <figure className={styles.figure}>
            <img
              src={builder
                .image(icon)
                .auto('format')
                .width(200)
                .height(80)
                .url()}
              className={styles.icon}
              alt={icon.alt}
            />
          </figure>
          <h4>{title}</h4>
          {body}
        </div>

      </div>
    </div>
  )
}

export default Feature
