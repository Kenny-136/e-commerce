import React from 'react'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import styles from './ProductList.module.scss'

const ProductList = ({ data }) => {
  return (
    <section className={styles.product__grid}>
      {data.map(item => (
      <Card key={item.id} item={item}/>
      ))}
    </section>
  )
}

export default ProductList