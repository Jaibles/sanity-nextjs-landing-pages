// Customer.js
import React, {Component} from 'react'
import client from '../client'
import styles from './Customer.module.css'
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

class Customer extends Component {
  constructor () {
    super()
    this.state = {
      customers: []
    }
  }
  componentDidMount () {
    const query = '*[_type == "customer"] | order(_createdAt asc)'
    const params = {}
    client.fetch(query, params).then((results) => {
      if (results) {
        this.setState({customers: results})
      }
    })
  }
  render () {
    return (
      <>
        {
          this.state.customers.map(customer => (
            <div className={styles.root}>
              <div className={styles.container}>
                {customer.image && (
                  <div className={styles.mapImageContainer}>
                    <img
                      src={urlFor(customer.image)
                        .url()}
                    />
                  </div>
                )}
                <div className={styles.mapDetails}>
                  <h5>{customer.mapTitle}</h5>
                  <p>{customer.customer}</p>
                </div>
              </div>
            </div>
          ))
        }
      </>
    )
  }
}

export default Customer
