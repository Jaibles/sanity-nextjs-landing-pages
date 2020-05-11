import PropTypes from 'prop-types'
import React, {Component} from 'react'
import styles from './Plan.module.css'

class Plan extends Component {
  static propTypes = {
    plans: PropTypes.any
  }
  render () {
    const {
      plans
    } = this.props
    return (
      <div>
        {plans.map(plan =>
          <div key={plan} className={styles.plan}>
            <div className={styles.planName}>{plan.name}</div>
            <div className={this.props.isToggleOn ? styles.none : styles.planPriceAnnually }>{plan.priceAnnually}</div>
            <div className={this.props.isToggleOn ? styles.planPriceMonthly : styles.none}>{plan.priceMonthly}</div>
            {plan.included
              ? plan.included.map(message => {
                return <div className={styles.planIncluded} key={message}>{message}</div>
              })
              : null
            }
            {
              plan.cta
                ? plan.cta.map(message => {
                  return <a className={styles.btn} href={message.url} target='_blank'>
                    {message.message}
                  </a>
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
