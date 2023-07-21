import React from 'react'
import styles from './Card.module.scss'
import { Link } from 'react-router-dom'
const Card = ({item}) => {
  const {name, desc, img, price, favotie, id} = item
  return (
    <div>
      <h2>{name}</h2>
      <p>{desc}</p>
      <img src={img} alt={`a person wearing ${name}`} />
      <Link to={id}>See More</Link>
    </div>
  )
}

export default Card