import PropTypes from 'prop-types'
import React, {Component} from 'react'
import styles from './Plan.module.css'

class Plan extends Component {
  static propTypes = {
    plans: PropTypes.any
  }
  render () {
    const {
      plans = []
    } = this.props
    return (
      <div>
        {plans.map(plan =>
          <div key={plan} className={styles.plan}>
            <div className={styles.planName}>{plan.name}</div>
            <div className={styles.planPriceAnnually}>{plan.priceAnnually}</div>
            <div id='example' className={styles.planPriceMonthly}>{plan.priceMonthly}</div>
            {plan.included
              ? plan.included.map(message => {
                return <p className={styles.planIncluded} key={message}>{message}</p>
              })
              : null
            }
          </div>
        )
        }
      </div>
    )
  }
}

export default Plan
