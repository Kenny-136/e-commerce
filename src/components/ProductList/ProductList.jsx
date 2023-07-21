import React from 'react'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'

const ProductList = ({ data }) => {
  return (
    <section>
      {data.map(item => (
      <Card key={item.id} item={item}/>
      ))}
    </section>
  )
}

export default ProductList