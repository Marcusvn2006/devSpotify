import React from 'react'
import styles from "./nav.module.css"

import Hp from './hp/hp'
import List from './list/list'
const Nav = () => {
  return (
    <div className={styles.nav}>
    <div className={styles.bar}>  
    <Hp/>
    {/* <div className={styles.bar}>   */}
  
    <List/>
    </div>
    {/* </div> */}
    </div>
  )
}

export default Nav
