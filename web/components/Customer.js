import PropTypes from 'prop-types'
import React, {Component} from 'react'
import client from '../client'
import styles from './Customer.module.css'
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

class Customer extends Component {
  static propTypes = {
    customers: PropTypes.any
  }

  render () {
    const {
      customers = []
    } = this.props
    return (
      <div>
        {customers.map(customer =>
          <div key={customer.key} className={styles.customer}>
            {customer.image && (
              <div className={styles.mapImageContainer}>
                <img
                  src={urlFor(customer.image)
                    .height(154)
                    .width(420)
                    .url()}
                />
              </div>
            )}
            <div className={styles.mapDetails}>
              <h5>{customer.mapTitle}{customer.key}</h5>
              <div className={styles.mapBody}>{customer.customer}</div>
            </div>
          </div>
        )
        }
      </div>
    )
  }
}

export default Customer
