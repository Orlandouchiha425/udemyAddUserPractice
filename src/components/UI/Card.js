import React from 'react'
import styles from './Card.module.css'
function Card(props) {
  return (
    <div children className={`${styles.card} ${props.className}`}>{props.children}</div>
  )
}

export default Card