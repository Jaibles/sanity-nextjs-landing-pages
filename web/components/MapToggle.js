import React, {Component} from 'react'
import styles from './MapToggle.module.css'

class MapToggle extends Component {
  render () {
    return (
      <>
        <div className={styles.radioContainer}>
          <div className={styles.customRadioc}>
            <div className={styles.customRadio}>
              <input
                type='radio'
                name='Standard'
                className={styles.onoffswitchCheckbox}
                value={styles.Brand}
                onChange={this.props.handleOptionChange}
                checked={this.props.selectedOption === styles.Brand}
              />
              <span className={styles.textMono}>
                Brand
              </span>
            </div>
            <div className={styles.customRadio}>
              <input
                type='radio'
                name='Standard'
                className={styles.onoffswitchCheckbox}
                value={styles.Standard}
                onChange={this.props.handleOptionChange}
                checked={this.props.selectedOption === styles.Standard}
              />
              <span className={styles.textMono}>
                Standard
              </span>
            </div>
            <div className={styles.customRadio}>
              <input
                type='radio'
                name='Dark'
                className={styles.onoffswitchCheckbox}
                value={styles.Dark}
                onChange={this.props.handleOptionChange}
                checked={this.props.selectedOption === styles.Dark}
              />
              <span className={styles.textMono}>
                Dark
              </span>
            </div>
            <div className={styles.customRadio}>
              <input
                type='radio'
                name='Grey'
                className={styles.onoffswitchCheckbox}
                value={styles.Grey}
                onChange={this.props.handleOptionChange}
                checked={this.props.selectedOption === styles.Grey}
              />
              <span className={styles.textMono}>
                Grey
              </span>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MapToggle
