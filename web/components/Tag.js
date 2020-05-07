import React, {Component} from 'react'
import styles from './Tag.module.css'

/*
Toggle Switch Component
Note: id is required for ToggleSwitch component to function. Name, currentValue, defaultChecked, Small and onChange're optional.
Usage: <ToggleSwitch id='id' onChange={styles.function (e) { console.log('Checkbox Current State: ' + e.target.checked); }} />
*/

class Tag extends Component {
  render () {
    return (
      <>
        <span className={styles.tag}>
          Coming Soon
        </span>
      </>
    )
  }
}

export default Tag
