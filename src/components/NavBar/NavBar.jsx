import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Link to={'/'}>Home</Link>
      <Link to={'/store'}>Store</Link>
    </>
  )
}

export default NavBar