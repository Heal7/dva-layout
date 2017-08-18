import React, {Component} from 'react'
import styles from '../routes/IndexPage.css'
import imgSrc from '../../src/assets/logo.png'

const Animate = () => {
  return (
    <div className={styles.ani}>
        <img className={styles.avatar} src={imgSrc} />
        <span className={styles.text}>我的头像</span>
    </div>
  )
}
export default Animate;
