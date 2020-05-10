import React, {Component} from 'react'
import styles from './MapToggle.module.css'

class MapToggle extends Component {
  render () {
    return (
      <>
        <div className={styles.toggleContainer}>
          <div className={styles.onoffswitch}>
            {/* XXX this.props.isToggleOn -> so we can access the parent state 'isToggleOn' */}
            {/* XXX this.props.toggle -> so we can call the parent function */}
            <input
              type='radio'
              name='Default'
              className={styles.onoffswitchCheckbox}
              value='Default'
              onChange={this.props.switchMap}
            />
            <span className={styles.textMono}>
              Default
            </span>
            <input
              type='radio'
              name='Dark'
              className={styles.onoffswitchCheckbox}
              value='Dark'
              onChange={this.props.switchMap}
            />
            <span className={styles.textMono}>
              Dark
            </span>
            <input
              type='radio'
              name='Monochrome'
              className={styles.onoffswitchCheckbox}
              value='Monochrome'
              onChange={this.props.switchMap}
            />
            <span className={styles.textMono}>
              Monochrome
            </span>
          </div>
        </div>
      </>
    )
  }
}

export default MapToggle
