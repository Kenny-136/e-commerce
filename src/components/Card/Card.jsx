import React from 'react'
import styles from './Card.module.scss'
import { Link } from 'react-router-dom'
const Card = ({item}) => {
  const {name, desc, img, price, favotie, id} = item
  return (
    <div className={styles.card}>
      <Link to={id}>
        <h2>{name}</h2>
        <img src={img} alt={`a person wearing ${name}`} />
      </Link>
    </div>
  )
}

export default Card