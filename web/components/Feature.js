import PropTypes from 'prop-types'
import React, {Component} from 'react'
import client from '../client'
import styles from './Feature.module.css'
import imageUrlBuilder from '@sanity/image-url'
import Tag from '../components/Tag'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

class Feature extends Component {
  static propTypes = {
    features: PropTypes.any
  }

  render () {
    const {
      features = []
    } = this.props

    return (
      <div>
        {features.map(feature =>
          <div key={feature.key} className={styles.feature}>
            { feature.comingsoon ? <Tag /> : null }
            {feature.icon && (
              <div>
                <img
                  src={urlFor(feature.icon)
                    .width(50)
                    .url()}
                />
              </div>
            )}
            <div className={styles.featureText}>
              <h3>{feature.title}{feature.key}</h3>
              <p className={styles.featureBody}>{feature.body}</p>
            </div>
          </div>
        )
        }
      </div>
    )
  }
}

export default Feature
