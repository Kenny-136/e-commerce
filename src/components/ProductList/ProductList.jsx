import React from 'react'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
const CardList = ({ data }) => {
  return (
    <section>
      <Link to={'/'}>Home</Link>
      {data.map(item => (
      <Card key={item.id} item={item}/>
      ))}
    </section>
  )
}

export default CardList