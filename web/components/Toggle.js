import React, {Component} from 'react'
import styles from './Toggle.module.css'

/*
Toggle Switch Component
Note: id is required for ToggleSwitch component to function. Name, currentValue, defaultChecked, Small and onChange're optional.
Usage: <ToggleSwitch id='id' onChange={styles.function (e) { console.log('Checkbox Current State: ' + e.target.checked); }} />
*/

class ToggleSwitch extends Component {
  render () {
    return (
      <>
        <div className={styles.onoffswitch}>
          <input type='checkbox' name='onoffswitch' className={styles.onoffswitchCheckbox} id='myonoffswitch' />
          <label className={styles.onoffswitchLabel} htmlFor='myonoffswitch' />
        </div>
      </>
    )
  }
}

export default ToggleSwitch
