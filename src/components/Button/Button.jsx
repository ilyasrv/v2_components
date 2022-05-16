import React from "react";
import styles from './styles.scss'

export const Button = (props) => {
  return (
    <button
      className={styles.button}
      onClick={() => props.onClick('Ya button')}
      style={props.style || {}}
      disabled={props.disableding || false}
    >
      {props.children || 'Button New'}
    </button>
  )
}
