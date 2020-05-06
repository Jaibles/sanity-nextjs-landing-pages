import PropTypes from 'prop-types'
import React, {Component} from 'react'
import client from '../client'
import styles from './Feature.module.css'
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

class Feature extends Component {
  static propTypes = {
    features: PropTypes.any
  }

  render () {
    const {
      features = {
        comingsoon: false
      }
    } = this.props

    function EmailMessage (props) {
      return features && features.comingsoon
        ? 'Yes, yes it does.'
        : 'No. Check back later'
    }

    return (
      <div>
        {features.map(feature =>
          <div key={feature.key} className={styles.feature}>
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
              <p>{feature.body}</p>
              {feature.comingsoon}
              Boolean Value: { feature.comingsoon.toString() }

              Boolean Value: { String(feature.comingsoon) }
              {`Boolean Value: ${feature.comingsoon}`}
              Boolean Value: { JSON.stringify(feature.comingsoon) }

              <p className={`${feature.comingsoon}`}>{feature.body}</p>

            </div>
          </div>
        )
        }
      </div>
    )
  }
}

export default Feature
