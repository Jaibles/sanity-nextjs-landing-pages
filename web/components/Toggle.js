import React, {Component} from 'react'
import styles from './Toggle.module.css'

class Toggle extends Component {
  render () {
    return (
      <>
        <div className={styles.toggleContainer}>
          <span className={styles.textMono}>
            Pay Monthly
          </span>
          <div className={styles.onoffswitch}>
            {/* XXX this.props.isToggleOn -> so we can access the parent state 'isToggleOn' */}
            {/* XXX this.props.toggle -> so we can call the parent function */}
            <input
              checked={this.props.isToggleOn}
              onChange={this.props.toggle}
              type='checkbox'
              name='onoffswitch'
              className={styles.onoffswitchCheckbox}
              id={`react-switch-new`}
            />
            <label
              className={styles.onoffswitchLabel}
              htmlFor={`react-switch-new`}
            />
            <span className={`react-switch-button`} />
          </div>
          <div className={this.props.isToggleOn ? styles.textMono : styles.textMonoBlack}>
            Pay Annually
          </div>
        </div>
      </>
    )
  }
}

export default Toggle
