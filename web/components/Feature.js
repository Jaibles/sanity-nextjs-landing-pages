// Plan.js
import React, {Component} from 'react'
import client from '../client'
import styles from './Feature.module.css'
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

class Feature extends Component {
  constructor () {
    super()
    this.state = {
      features: []
    }
  }
  componentDidMount () {
    const query = '*[_type == "feature"] | order(_createdAt asc)'
    const params = {}
    client.fetch(query, params).then((results) => {
      if (results) {
        this.setState({features: results})
      }
    })
  }
  render () {
    return (
      <>
        {
          this.state.features.map(feature => (
            <div key={feature} className={styles.root}>
              <div className={styles.container}>
                {feature.icon && (
                  <div>
                    <img
                      src={urlFor(feature.icon)
                        .width(50)
                        .url()}
                    />
                  </div>
                )}
                <div><h3>{feature.title}</h3></div>
                <p>{feature.body}</p>
              </div>
            </div>
          ))
        }
      </>
    )
  }
}

export default Feature
