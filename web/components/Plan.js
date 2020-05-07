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
            <div className={this.props.isToggletrue ? null : styles.planPriceAnnually }>{plan.priceAnnually}</div>
            <div className={this.props.isToggletrue ? styles.planPriceMonthly : null}>{plan.priceMonthly}</div>
            {plan.included
              ? plan.included.map(message => {
                return <div className={styles.planIncluded} key={message}>{message}</div>
              })
              : null
            }
            <a className={styles.btn} href={plan.ctaLink} target='_blank'>{plan.ctaButton}</a>
          </div>
        )
        }
      </div>
    )
  }
}

export default Plan
