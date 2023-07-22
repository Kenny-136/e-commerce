import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link to={'/'}>Home</Link>
      <Link to={'/store'}>Store</Link>
    </nav>
  )
}

export default NavBar