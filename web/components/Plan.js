// Plan.js
import React, {Component} from 'react'
import client from '../client'
import styles from './Plan.module.css'

class Plan extends Component {
  constructor () {
    super()
    this.state = {
      plans: []
    }
  }
  componentDidMount () {
    const query = '*[_type == "plan"]'
    const params = {}
    client.fetch(query, params).then((results) => {
      if (results) {
        this.setState({plans: results})
      }
    })
  }
  render () {
    return (
      <>
        {
          this.state.plans.map(plan => (
            <div key={plan} className={styles.container}>
              <div className={styles.plan}>
                <div><h5>{plan.name}</h5></div>
                <div><h2>{plan.priceAnnually}</h2></div>
              </div>
            </div>
          ))
        }
      </>
    )
  }
}

export default Plan
