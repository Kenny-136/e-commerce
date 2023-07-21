import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <h1>billie jean</h1>
        <h2>Michael J favourite denims</h2>
        <Link to={'/store'}>Store</Link>
    </div>
  )
}

export default Home