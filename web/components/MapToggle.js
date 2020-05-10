import React, {Component} from 'react'
import styles from './MapToggle.module.css'
import otherStyles from '../pages/LandingPage.module.css'

class MapToggle extends Component {
  render () {
    return (
      <>
        <div className={styles.radioContainer}>
          <div className={styles.customRadioc}>
            <div className={styles.customRadio}>
              <input
                type='radio'
                name='Brand'
                className={styles.onoffswitchCheckbox}
                value={otherStyles.Brand}
                onChange={() => this.props.handleOptionChange(otherStyles.Brand)}
                checked={this.props.selectedOption === otherStyles.Brand}
              />
              <div className={styles.radioTile}>
                <div className={`${styles.colorPanelBrand} ${styles.colorPanel}`}>
                  <span className={`${styles.colorDotBrand} ${styles.colorDot}`} />
                </div>
                <label htmlFor='brand' className={styles.textMono}>
                  Your Brand
                </label>
              </div>
            </div>
            <div className={styles.customRadio}>
              <input
                type='radio'
                name='Standard'
                className={styles.onoffswitchCheckbox}
                value={styles.Standard}
                onChange={() => this.props.handleOptionChange(otherStyles.Standard)}
                checked={this.props.selectedOption === otherStyles.Standard}
              />
              <div className={styles.radioTile}>
                <div className={`${styles.colorPanelStandard} ${styles.colorPanel}`}>
                  <span className={`${styles.colorDotStandard} ${styles.colorDot}`} />
                </div>
                <label htmlFor='standard' className={styles.textMono}>
                  Standard
                </label>
              </div>
            </div>
            <div className={styles.customRadio}>
              <input
                type='radio'
                name='Dark'
                className={styles.onoffswitchCheckbox}
                value={styles.Dark}
                onChange={() => this.props.handleOptionChange(otherStyles.Dark)}
                checked={this.props.selectedOption === otherStyles.Dark}
              />
              <div className={styles.radioTile}>
                <div className={`${styles.colorPanelDark} ${styles.colorPanel}`}>
                  <span className={`${styles.colorDotDark} ${styles.colorDot}`} />
                </div>
                <label htmlFor='dark' className={styles.textMono}>
                  Dark
                </label>
              </div>
            </div>
            <div className={styles.customRadio}>
              <input
                type='radio'
                name='Grey'
                className={styles.onoffswitchCheckbox}
                value={styles.DGreyark}
                onChange={() => this.props.handleOptionChange(otherStyles.Grey)}
                checked={this.props.selectedOption === otherStyles.Grey}
              />
              <div className={styles.radioTile}>
                <div className={`${styles.colorPanelGrey} ${styles.colorPanel}`}>
                  <span className={`${styles.colorDotGrey} ${styles.colorDot}`} />
                </div>
                <label htmlFor='grey' className={styles.textMono}>
                  Grey
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MapToggle
