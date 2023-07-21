import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Carousel from '../Carousel/Carousel'
const Home = ({ data }) => {
  const favourite = data.filter((jean) => jean.favorite === true)

  return (
    <div>
        <NavBar />
        <h1>billie jean</h1>
        <h2>Michael J favourite denims</h2>
        <Carousel data={favourite}/>
    </div>
  )
}

export default Home